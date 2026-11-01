// Global next/image loader.
// Unsplash runs its own image CDN (imgix), so we ask it directly for the exact
// width the browser needs, in WebP/AVIF. This skips the Next.js optimizer for
// those photos — faster in dev and no cold-start resizing on Netlify.
// Everything else (local files, airline logos) is served as-is: a custom loader turns off
// Next's /_next/image endpoint, so local images must already be sized (see /public/images/reels/*.webp).

type LoaderArgs = { src: string; width: number; quality?: number };

export default function imageLoader({ src, width, quality }: LoaderArgs): string {
  if (src.startsWith("https://images.unsplash.com/") || src.startsWith("https://plus.unsplash.com/")) {
    const url = new URL(src);
    const params = url.searchParams;

    // Keep fixed-ratio crops (w + h + fit=crop) at the same aspect ratio
    const origW = Number(params.get("w"));
    const origH = Number(params.get("h"));
    if (origW && origH) params.set("h", String(Math.round((origH * width) / origW)));

    params.set("w", String(width));
    params.set("q", String(quality ?? 75));
    params.set("auto", "format");
    if (!params.has("fit")) params.set("fit", "max");
    return url.toString();
  }

  // Reel covers come in two pre-made sizes: <id>-sm.webp (360px) for small slots, <id>.webp (540px)
  const reel = src.match(/^\/images\/reels\/([^/?]+)\.webp$/);
  if (reel && width <= 384) return `/images/reels/${reel[1]}-sm.webp`;

  // The w hint is ignored by static hosting; it only tells Next the loader is width-aware
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}

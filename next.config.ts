import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash photos are resized by Unsplash's CDN (AVIF/WebP); local images are pre-sized and served as-is.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "www.gstatic.com" },
    ],
  },
  // Turbopack (dev) doesn't apply images.loaderFile on the server in 15.3 — alias it the way webpack does
  turbopack: {
    resolveAlias: {
      "next/dist/shared/lib/image-loader": "./src/lib/image-loader.ts",
      "next/dist/esm/shared/lib/image-loader": "./src/lib/image-loader.ts",
    },
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog"],
  },
};

export default nextConfig;

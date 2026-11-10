import type { Metadata } from "next";
import { SITE_URL, company } from "@/data/site";

/**
 * Link previews (WhatsApp, Facebook, X) want a 1200×630 image. Unsplash photos are
 * cropped to that size by their CDN; other images are used as they are.
 */
export function ogImageUrl(src: string): string {
  if (!src.startsWith("https://images.unsplash.com/") && !src.startsWith("https://plus.unsplash.com/")) return src;
  const url = new URL(src);
  url.searchParams.set("w", "1200");
  url.searchParams.set("h", "630");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("q", "80");
  return url.toString();
}

/**
 * Page metadata with canonical path, Open Graph and Twitter fields filled consistently.
 * Every page should use this so no page ships without a preview image or canonical link.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  keywords?: string[];
}): Metadata {
  const ogImage = { url: ogImageUrl(image), width: 1200, height: 630, alt: title };
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      type: "website",
      locale: "en_PK",
      siteName: company.name,
      url: `${SITE_URL}${path}`,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/** TravelAgency entity shared by all pages. Never includes ratings unless they are verified. */
export function travelAgencySchema() {
  return {
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    url: SITE_URL,
    telephone: `+${company.whatsappNumber}`,
    foundingDate: String(company.foundingYear),
    areaServed: { "@type": "Country", name: "Pakistan" },
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
      // Street address omitted until the real one is confirmed
      ...(company.address.isPlaceholder ? {} : { streetAddress: company.address.street }),
    },
    geo: { "@type": "GeoCoordinates", latitude: company.geo.lat, longitude: company.geo.lng },
    hasMap: company.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "17:00" },
    ],
  };
}

/** Breadcrumb trail for Google results ("Home › Umrah Packages › Umrah 7 Days"). */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return { __html: JSON.stringify({ "@context": "https://schema.org", ...data }) };
}

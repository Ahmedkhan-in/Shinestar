import type { Metadata } from "next";
import { SITE_URL, company } from "@/data/site";

/** Page metadata with canonical path and Open Graph fields filled consistently. */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      type: "website",
      locale: "en_PK",
      siteName: company.name,
      url: `${SITE_URL}${path}`,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630 }],
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

export function jsonLdScript(data: Record<string, unknown>) {
  return { __html: JSON.stringify({ "@context": "https://schema.org", ...data }) };
}

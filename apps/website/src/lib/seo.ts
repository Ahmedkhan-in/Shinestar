import type { Metadata } from "next";
import type { TravelPackage } from "@/types";
import { SITE_URL, company } from "@/data/site";
import { CATEGORY_PAGES, packageHref } from "@/lib/package-links";

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
    logo: `${SITE_URL}/icon.svg`,
    telephone: `+${company.whatsappNumber}`,
    // Real profiles only: they tell search engines these accounts are the same business
    sameAs: [company.social.instagram],
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

/** Site-wide entities for the home page: the website itself and the agency behind it. */
export function homeSchema() {
  return {
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        inLanguage: "en-PK",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      travelAgencySchema(),
    ],
  };
}

/**
 * Everything search and answer engines can read from a package page: the trip and its
 * day-by-day plan, its FAQs, and the breadcrumb trail. A price is only included once it's
 * real — sample prices would be quoted back to travellers as fact.
 */
export function packagePageSchema(pkg: TravelPackage) {
  const path = packageHref(pkg);
  const category = CATEGORY_PAGES[pkg.category];
  const trip = {
    "@type": "TouristTrip",
    "@id": `${SITE_URL}${path}#trip`,
    name: pkg.title,
    description: pkg.shortDescription,
    url: `${SITE_URL}${path}`,
    image: ogImageUrl(pkg.heroImage),
    touristType: pkg.category === "umrah" ? "Pilgrims" : pkg.category === "honeymoon" ? "Couples" : "Families and groups",
    provider: { "@id": `${SITE_URL}/#organization` },
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((d) => ({
        "@type": "ListItem",
        position: d.day,
        name: `Day ${d.day}: ${d.title}`,
        description: d.description,
      })),
    },
    ...(pkg.startingPrice && !pkg.isSamplePricing
      ? {
          offers: {
            "@type": "Offer",
            price: pkg.startingPrice,
            priceCurrency: pkg.currency,
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}${path}`,
          },
        }
      : {}),
  };

  return {
    "@graph": [
      trip,
      ...(pkg.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: pkg.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: category.label, path: category.path },
        { name: pkg.title, path },
      ]),
    ],
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return { __html: JSON.stringify({ "@context": "https://schema.org", ...data }) };
}

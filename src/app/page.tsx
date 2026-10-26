import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HeroSearch, type SearchCatalogItem } from "@/components/home/HeroSearch";
import { AirlineMarquee } from "@/components/home/AirlineMarquee";
import { FounderSection } from "@/components/home/FounderSection";
import { FeaturedPackagesSection } from "@/components/home/FeaturedPackages";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { MapSection } from "@/components/home/MapSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { internationalPackages } from "@/data/packages";
import { umrahPackages } from "@/data/umrahPackages";
import { honeymoonPackages } from "@/data/honeymoonPackages";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Shine Star Travel & Tours — Premium Travel from Karachi",
  description:
    "Pakistan's trusted travel agency for Umrah, international tours, and honeymoon packages. Transparent pricing, WhatsApp support, experienced team since 2018.",
};

// Small index for the search bar — keeps full package data out of the client bundle
const searchCatalog: SearchCatalogItem[] = [
  ...umrahPackages.map((p) => ({ ...pick(p), href: `/umrah/${p.slug}` })),
  ...internationalPackages.map((p) => ({ ...pick(p), href: `/packages/${p.slug}` })),
  ...honeymoonPackages.map((p) => ({ ...pick(p), href: `/honeymoon/${p.slug}` })),
];

function pick(p: (typeof internationalPackages)[number]) {
  return {
    slug: p.slug,
    title: p.title,
    category: p.category,
    country: p.country,
    startingPrice: p.startingPrice,
    currency: p.currency,
    image: p.heroImage,
  };
}

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen Orbit Hero */}
      <Hero />

      {/* 2. Search bar */}
      <HeroSearch catalog={searchCatalog} />

      {/* 3. Airline marquee */}
      <AirlineMarquee />

      {/* 4. Founder + social rail */}
      <FounderSection />

      {/* 5a. Umrah packages — large editorial left card */}
      <FeaturedPackagesSection
        id="packages"
        eyebrow="Sacred Journeys"
        title="Umrah & Hajj packages"
        subtitle="Planned with care for every step of your spiritual journey — from visa to the sacred return."
        packages={umrahPackages}
        viewAllHref="/umrah"
        viewAllLabel="See all Umrah packages"
        bgClass="bg-white"
        layout="editorial-left"
      />

      {/* 5b. International packages — horizontal rail for discovery feel */}
      <FeaturedPackagesSection
        eyebrow="International Escapes"
        title="International tours"
        subtitle="Thailand, Malaysia, Dubai, Singapore, Sri Lanka — curated for Pakistani families and couples."
        packages={internationalPackages}
        viewAllHref="/packages"
        viewAllLabel="See all international tours"
        bgClass="bg-surface-warm"
        layout="horizontal-rail"
      />

      {/* 5c. Honeymoon packages — editorial right (mirrors Umrah for visual rhythm) */}
      <FeaturedPackagesSection
        eyebrow="For Two"
        title="Honeymoon packages"
        subtitle="Begin your life together in a place worth remembering. Maldives, Bali, Turkey, and more."
        packages={honeymoonPackages}
        viewAllHref="/honeymoon"
        viewAllLabel="See all honeymoon packages"
        bgClass="bg-surface-grey"
        layout="editorial-right"
      />

      {/* 6. How it works */}
      <HowItWorks />

      {/* 7. About */}
      <AboutSection />

      {/* 8. Testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* 9. Map & office */}
      <MapSection />

      {/* 10. Final CTA */}
      <FinalCTA />
    </>
  );
}

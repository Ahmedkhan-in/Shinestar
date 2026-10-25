import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
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

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen Orbit Hero */}
      <Hero />

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Airline marquee */}
      <AirlineMarquee />

      {/* 4. Founder + social rail */}
      <FounderSection />

      {/* 5a. Umrah packages */}
      <FeaturedPackagesSection
        id="packages"
        title="Umrah & Hajj packages"
        subtitle="Planned with care for every step of your spiritual journey — from visa to the sacred return."
        packages={umrahPackages}
        viewAllHref="/umrah"
        viewAllLabel="See all Umrah packages"
        bgClass="bg-white"
      />

      {/* 5b. International packages — different bg for rhythm */}
      <FeaturedPackagesSection
        title="International tours"
        subtitle="Thailand, Malaysia, Dubai, Singapore, Sri Lanka — curated for Pakistani families and couples."
        packages={internationalPackages}
        viewAllHref="/packages"
        viewAllLabel="See all international tours"
        bgClass="bg-surface-warm"
      />

      {/* 5c. Honeymoon packages */}
      <FeaturedPackagesSection
        title="Honeymoon packages"
        subtitle="Begin your life together in a place worth remembering. Maldives, Bali, Turkey, and more."
        packages={honeymoonPackages}
        viewAllHref="/honeymoon"
        viewAllLabel="See all honeymoon packages"
        bgClass="bg-surface-grey"
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

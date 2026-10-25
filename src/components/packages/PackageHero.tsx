"use client";

import Image from "next/image";
import { useState } from "react";
import { Clock, MapPin, ChevronDown } from "lucide-react";
import { TripPlanner } from "@/components/planner/TripPlanner";
import type { TravelPackage } from "@/types";

interface PackageHeroProps {
  pkg: TravelPackage;
}

export function PackageHero({ pkg }: PackageHeroProps) {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-end">
      {/* Hero image */}
      <Image
        src={pkg.heroImage}
        alt={`${pkg.destination} — ${pkg.title}`}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-content mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <div className="max-w-2xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-body-sm mb-4">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              {pkg.destination}
            </span>
            <span className="w-px h-4 bg-white/30" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {pkg.duration}
            </span>
            {pkg.startingPrice && (
              <>
                <span className="w-px h-4 bg-white/30" />
                <span className="font-semibold text-brand-champagne">
                  From PKR {pkg.startingPrice.toLocaleString("en-PK")}
                  {pkg.isSamplePricing && <span className="text-white/50 font-normal"> (sample)</span>}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif text-display-md md:text-display-lg text-white leading-tight">
            {pkg.title}
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-body-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
            {pkg.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setPlannerOpen(true)}
              className="bg-brand-blue text-white text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[48px]"
            >
              Check availability for my dates
            </button>
            <a
              href="#itinerary"
              className="border border-white/60 text-white text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-white/10 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] flex items-center justify-center"
            >
              View itinerary
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#social-proof"
        className="absolute bottom-6 right-8 text-white/50 hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>

      {plannerOpen && (
        <TripPlanner
          config={pkg.plannerConfig}
          category={pkg.category}
          onClose={() => setPlannerOpen(false)}
        />
      )}
    </section>
  );
}

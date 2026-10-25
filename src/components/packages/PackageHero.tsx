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
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end overflow-hidden">
      {/* Hero image — cinematic zoom */}
      <Image
        src={pkg.heroImage}
        alt={`${pkg.destination} — ${pkg.title}`}
        fill
        priority
        className="object-cover object-center animate-hero-zoom"
        sizes="100vw"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/92 via-brand-ink/45 to-transparent" />

      {/* Content — staggered reveal on page load */}
      <div className="relative z-10 w-full max-w-content mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-3xl">

          {/* Meta */}
          <div
            className="flex flex-wrap items-center gap-4 text-white/60 text-body-sm mb-5 opacity-0"
            style={{ animation: "fadeUpReveal 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              {pkg.destination}
            </span>
            <span className="w-px h-4 bg-white/25" />
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {pkg.duration}
            </span>
            {pkg.startingPrice && (
              <>
                <span className="w-px h-4 bg-white/25" />
                <span className="font-semibold text-brand-champagne">
                  From PKR {pkg.startingPrice.toLocaleString("en-PK")}
                  {pkg.isSamplePricing && <span className="text-white/40 font-normal"> (sample)</span>}
                </span>
              </>
            )}
          </div>

          {/* Gold eyebrow */}
          {pkg.badge && (
            <p
              className="text-eyebrow uppercase tracking-widest text-brand-gold mb-4 opacity-0"
              style={{ animation: "fadeUpReveal 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
            >
              {pkg.badge}
            </p>
          )}

          {/* Title */}
          <h1
            className="font-serif text-display-lg md:text-display-xl text-white opacity-0"
            style={{ animation: "fadeUpReveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both" }}
          >
            {pkg.title}
          </h1>

          {/* Tagline */}
          <p
            className="mt-5 text-body-lg md:text-xl text-white/70 max-w-xl leading-relaxed opacity-0"
            style={{ animation: "fadeUpReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
          >
            {pkg.tagline}
          </p>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-col sm:flex-row gap-3 opacity-0"
            style={{ animation: "fadeUpReveal 0.7s cubic-bezier(0.16,1,0.3,1) 0.85s both" }}
          >
            <button
              onClick={() => setPlannerOpen(true)}
              className="bg-brand-blue text-white text-label font-semibold px-7 py-4 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[52px]"
            >
              Check availability for my dates
            </button>
            <a
              href="#itinerary"
              className="border border-white/50 text-white text-label font-semibold px-7 py-4 rounded-btn hover:bg-white/10 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[52px] flex items-center justify-center"
            >
              View itinerary
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#social-proof"
        className="absolute bottom-6 right-8 text-white/40 hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="animate-bounce" />
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

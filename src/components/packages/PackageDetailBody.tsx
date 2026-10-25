"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X, Star, ChevronDown } from "lucide-react";
import type { TravelPackage } from "@/types";

// ─── Social Proof ─────────────────────────────────────────────────────────────
export function SocialProof({ pkg }: { pkg: TravelPackage }) {
  if (pkg.reviews.length === 0) return null;
  const avgRating =
    pkg.reviews.reduce((s, r) => s + r.rating, 0) / pkg.reviews.length;

  return (
    <section id="social-proof" className="bg-surface-grey py-10">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  className={i <= Math.round(avgRating) ? "fill-brand-gold text-brand-gold" : "text-brand-muted/30"}
                />
              ))}
            </div>
            <span className="font-semibold text-brand-ink">{avgRating.toFixed(1)}</span>
            <span className="text-brand-muted text-body-sm">
              ({pkg.reviews.length} {pkg.reviews.length === 1 ? "review" : "reviews"})
            </span>
            {pkg.reviews[0]?.isSampleData && (
              <span className="text-body-sm text-brand-muted/50 italic ml-1">sample</span>
            )}
          </div>
          <span className="text-body-sm text-brand-muted">·</span>
          <span className="text-body-sm text-brand-muted">{pkg.duration}</span>
          <span className="text-body-sm text-brand-muted">·</span>
          <span className="text-body-sm text-brand-muted">{pkg.destination}</span>
        </div>
      </div>
    </section>
  );
}

// ─── Problem → Solution ───────────────────────────────────────────────────────
export function ProblemSolution({ pkg }: { pkg: TravelPackage }) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-prose mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="font-sans font-semibold text-body-lg text-brand-muted mb-4">
              The frustration most travelers face
            </h2>
            <ul className="space-y-3">
              {[
                "Vague package prices with hidden extras",
                "No clear itinerary until after payment",
                "Difficult visa and documentation process",
                "Generic group tours with no personal attention",
                "Poor communication once you land",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-body-md text-brand-muted">
                  <X size={16} className="mt-0.5 shrink-0 text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-sans font-semibold text-body-lg text-brand-ink mb-4">
              What Shine Star delivers for {pkg.title}
            </h2>
            <ul className="space-y-3">
              {[
                "Transparent, itemised pricing upfront",
                "Clear day-by-day itinerary before you decide",
                "Full visa documentation support",
                "Small groups or private arrangement",
                "WhatsApp support throughout your trip",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-body-md text-brand-ink">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Inclusions & Exclusions ──────────────────────────────────────────────────
export function InclusionsExclusions({ pkg }: { pkg: TravelPackage }) {
  return (
    <section className="bg-surface-grey py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-serif text-display-sm text-brand-ink mb-8">
          What is and is not included
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Included */}
          <div className="bg-white rounded-card p-6">
            <h3 className="font-sans font-semibold text-brand-blue mb-4">Included</h3>
            <ul className="space-y-3">
              {pkg.inclusions.map((item) => (
                <li key={item} className="flex gap-3 text-body-md text-brand-ink">
                  <Check size={15} className="mt-0.5 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Not included */}
          <div className="bg-white rounded-card p-6">
            <h3 className="font-sans font-semibold text-brand-muted mb-4">Not included</h3>
            <ul className="space-y-3">
              {pkg.exclusions.map((item) => (
                <li key={item} className="flex gap-3 text-body-md text-brand-muted">
                  <X size={15} className="mt-0.5 shrink-0 text-brand-muted/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Itinerary ────────────────────────────────────────────────────────────────
export function Itinerary({ pkg }: { pkg: TravelPackage }) {
  return (
    <section id="itinerary" className="bg-white py-12 md:py-16">
      <div className="max-w-prose mx-auto px-4 md:px-8">
        <h2 className="font-serif text-display-md text-brand-ink mb-8">Day-by-day itinerary</h2>
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-surface-grey"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {pkg.itinerary.map((day) => (
              <div key={day.day} className="relative pl-12">
                {/* Day dot */}
                <div className="absolute left-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white text-body-sm font-semibold shadow-sm">
                  {day.day}
                </div>

                <h3 className="font-sans font-semibold text-body-lg text-brand-ink mb-1">
                  {day.title}
                </h3>
                <p className="text-body-md text-brand-muted leading-relaxed">{day.description}</p>

                {day.meals && day.meals.length > 0 && (
                  <p className="mt-2 text-body-sm text-brand-muted">
                    Meals: {day.meals.join(" · ")}
                  </p>
                )}

                {day.image && (
                  <div className="mt-4 relative aspect-[16/9] rounded-card overflow-hidden">
                    <Image
                      src={day.image}
                      alt={`Day ${day.day}: ${day.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Accommodations ───────────────────────────────────────────────────────────
export function Accommodations({ pkg }: { pkg: TravelPackage }) {
  if (pkg.accommodations.length === 0) return null;
  return (
    <section className="bg-surface-warm py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-serif text-display-md text-brand-ink mb-8">Where you will stay</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pkg.accommodations.map((acc) => (
            <div key={acc.name} className="bg-white rounded-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={acc.image}
                  alt={acc.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                {acc.stars && (
                  <div className="flex mb-1">
                    {Array.from({ length: acc.stars }).map((_, i) => (
                      <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                )}
                <h3 className="font-sans font-semibold text-brand-ink text-body-md mb-1">
                  {acc.name}
                </h3>
                <p className="text-body-sm text-brand-muted">{acc.type}</p>
                <p className="text-body-sm text-brand-muted mt-2 leading-relaxed">
                  {acc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
export function Reviews({ pkg }: { pkg: TravelPackage }) {
  if (pkg.reviews.length === 0) return null;
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-serif text-display-md text-brand-ink mb-8">Traveler reviews</h2>
        {pkg.reviews[0]?.isSampleData && (
          <p className="text-body-sm text-brand-muted/50 italic mb-6">
            Sample reviews — to be replaced with verified reviews before launch.
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-5">
          {pkg.reviews.map((review) => (
            <div key={review.id} className="bg-surface-grey rounded-card p-6">
              <div className="flex mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-body-lg text-brand-ink leading-relaxed mb-4">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {review.photo ? (
                  <Image
                    src={review.photo}
                    alt={review.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-semibold text-label">
                    {review.name[0]}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-brand-ink text-body-md">{review.name}</p>
                  <p className="text-body-sm text-brand-muted">
                    {review.trip} · {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export function FAQSection({ pkg }: { pkg: TravelPackage }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-surface-grey py-12 md:py-16">
      <div className="max-w-prose mx-auto px-4 md:px-8">
        <h2 className="font-serif text-display-md text-brand-ink mb-8">Common questions</h2>
        <div className="space-y-2">
          {pkg.faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset"
                aria-expanded={open === i}
              >
                <span className="font-sans font-semibold text-body-md text-brand-ink pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-brand-muted transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-body-md text-brand-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Package Conversion Section ───────────────────────────────────────────────
export function PackageConversion({ pkg }: { pkg: TravelPackage }) {
  const [plannerOpen, setPlannerOpen] = useState(false);
  // Lazy import to avoid circular deps
  const [TripPlannerComponent, setTripPlannerComponent] =
    useState<React.ComponentType<{
      config: TravelPackage["plannerConfig"];
      category: TravelPackage["category"];
      onClose: () => void;
    }> | null>(null);

  const openPlanner = async () => {
    if (!TripPlannerComponent) {
      const { TripPlanner } = await import("@/components/planner/TripPlanner");
      setTripPlannerComponent(() => TripPlanner);
    }
    setPlannerOpen(true);
  };

  return (
    <section className="bg-brand-footer py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-display-md text-white">
          Ready to plan your {pkg.title}?
        </h2>
        <p className="mt-3 text-body-lg text-white/70 max-w-md mx-auto">
          {pkg.duration} · {pkg.destination}
          {pkg.startingPrice && (
            <>
              {" "}· From PKR {pkg.startingPrice.toLocaleString("en-PK")}
              {pkg.isSamplePricing && (
                <span className="text-white/40 text-body-sm"> (sample)</span>
              )}
            </>
          )}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={openPlanner}
            className="bg-brand-gold text-brand-ink text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-brand-champagne transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-footer min-h-[48px]"
          >
            Check availability for my dates
          </button>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-white/10 transition-colors w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] flex items-center justify-center"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>

      {plannerOpen && TripPlannerComponent && (
        <TripPlannerComponent
          config={pkg.plannerConfig}
          category={pkg.category}
          onClose={() => setPlannerOpen(false)}
        />
      )}
    </section>
  );
}

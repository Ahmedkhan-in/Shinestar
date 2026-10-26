"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X, Star, Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
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
              <span className="text-body-sm text-brand-muted/40 italic ml-1">sample</span>
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
          <Reveal direction="right">
            <h2 className="font-sans font-semibold text-body-lg text-brand-muted mb-5">
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
          </Reveal>
          <Reveal direction="left" delay={100}>
            <h2 className="font-sans font-semibold text-body-lg text-brand-ink mb-5">
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
                  <Check size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
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
        <Reveal>
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
            Package details
          </p>
          <h2 className="font-serif text-display-sm text-brand-ink mb-8">
            What is and is not included
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <Reveal delay={100}>
            <div className="bg-white rounded-card p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                <h3 className="font-sans font-semibold text-brand-ink">Included</h3>
              </div>
              <ul className="space-y-3">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-body-md text-brand-ink">
                    <Check size={15} className="mt-0.5 shrink-0 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-white rounded-card p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-brand-muted/30" />
                <h3 className="font-sans font-semibold text-brand-muted">Not included</h3>
              </div>
              <ul className="space-y-3">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-body-md text-brand-muted">
                    <X size={15} className="mt-0.5 shrink-0 text-brand-muted/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
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
        <Reveal>
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
            Day by day
          </p>
          <h2 className="font-serif text-display-md text-brand-ink mb-10">Your itinerary</h2>
        </Reveal>
        <div className="relative">
          {/* Vertical gold-tinted line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-brand-gold/20"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {pkg.itinerary.map((day, i) => (
              <Reveal key={day.day} delay={i * 80} className="relative pl-12">
                {/* Day dot — gold ring */}
                <div className="absolute left-0 w-8 h-8 bg-white border-2 border-brand-gold rounded-full flex items-center justify-center text-brand-gold text-body-sm font-semibold shadow-sm">
                  {day.day}
                </div>

                <h3 className="font-sans font-semibold text-body-lg text-brand-ink mb-1.5">
                  {day.title}
                </h3>
                <p className="text-body-md text-brand-muted leading-relaxed">{day.description}</p>

                {day.meals && day.meals.length > 0 && (
                  <p className="mt-2 text-body-sm text-brand-muted">
                    Meals: {day.meals.join(" · ")}
                  </p>
                )}

                {day.image && (
                  <div className="mt-5 relative aspect-[16/9] rounded-card overflow-hidden">
                    <Image
                      src={day.image}
                      alt={`Day ${day.day}: ${day.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                  </div>
                )}
              </Reveal>
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
        <Reveal>
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
            Where you stay
          </p>
          <h2 className="font-serif text-display-md text-brand-ink mb-10">Accommodation</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pkg.accommodations.map((acc, i) => (
            <Reveal key={acc.name} delay={i * 100}>
              <div className="group bg-white rounded-card overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={acc.image}
                    alt={acc.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  {acc.stars && (
                    <div className="flex mb-1.5">
                      {Array.from({ length: acc.stars }).map((_, j) => (
                        <Star key={j} size={12} className="fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                  )}
                  <h3 className="font-sans font-semibold text-brand-ink text-body-md mb-0.5">
                    {acc.name}
                  </h3>
                  <p className="text-body-sm text-brand-muted">{acc.type}</p>
                  <p className="text-body-sm text-brand-muted mt-2 leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              </div>
            </Reveal>
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
        <Reveal>
          <h2 className="font-serif text-display-md text-brand-ink mb-8">Traveler reviews</h2>
        </Reveal>
        {pkg.reviews[0]?.isSampleData && (
          <p className="text-body-sm text-brand-muted/40 italic mb-6">
            Sample reviews — to be replaced with verified reviews before launch.
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-5">
          {pkg.reviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 80}>
              <div className="bg-surface-grey rounded-card p-6">
                <div className="flex mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-body-lg text-brand-ink leading-relaxed mb-5">
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
                    <div className="w-9 h-9 bg-brand-gold/15 rounded-full flex items-center justify-center text-brand-gold font-semibold text-label">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQs — smooth grid accordion ────────────────────────────────────────────
export function FAQSection({ pkg }: { pkg: TravelPackage }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-surface-grey py-12 md:py-16">
      <div className="max-w-prose mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="font-serif text-display-md text-brand-ink mb-8">Common questions</h2>
        </Reveal>
        <div className="space-y-2">
          {pkg.faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="bg-white rounded-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset group"
                  aria-expanded={open === i}
                >
                  <span className="font-sans font-semibold text-body-md text-brand-ink pr-4 group-hover:text-brand-blue transition-colors">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    open === i ? "border-brand-gold bg-brand-gold/10 text-brand-gold rotate-0" : "border-surface-grey text-brand-muted"
                  }`}>
                    {open === i ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>
                {/* Smooth grid-template-rows accordion */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: open === i ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-body-md text-brand-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Package Conversion Section ───────────────────────────────────────────────
export function PackageConversion({ pkg }: { pkg: TravelPackage }) {
  const [plannerOpen, setPlannerOpen] = useState(false);
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
        <Reveal>
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
            Ready to go?
          </p>
          <h2 className="font-serif text-display-md text-white mb-2">
            Plan your {pkg.title}
          </h2>
          <p className="text-body-lg text-white/65 max-w-md mx-auto">
            {pkg.duration} · {pkg.destination}
            {pkg.startingPrice && (
              <>
                {" "}· From PKR {pkg.startingPrice.toLocaleString("en-PK")}
                {pkg.isSamplePricing && (
                  <span className="text-white/35 text-body-sm"> (sample)</span>
                )}
              </>
            )}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={openPlanner}
              className="bg-brand-gold text-brand-ink text-label font-semibold px-7 py-4 rounded-btn hover:bg-brand-champagne transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-footer min-h-[52px]"
            >
              Check availability for my dates
            </button>
            <a
              href="https://wa.me/923462646201"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/35 text-white text-label font-semibold px-7 py-4 rounded-btn hover:bg-white/10 transition-colors w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[52px] flex items-center justify-center"
            >
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>
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

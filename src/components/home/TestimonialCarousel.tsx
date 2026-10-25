"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(next, 5500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, active]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="bg-surface-grey py-16 md:py-24 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8">

        <div className="text-center mb-12">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
            Traveler stories
          </p>
          <h2 className="font-serif text-display-md text-brand-ink">
            What our travelers say
          </h2>
        </div>
        {/* NOTE: All testimonials are sample data until replaced with real reviews */}

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Cards */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Prev card */}
            {testimonials.length > 1 && (
              <div
                className="hidden md:block w-72 shrink-0 opacity-35 scale-[0.88] transition-all duration-500 ease-premium pointer-events-none"
                aria-hidden="true"
              >
                <TestimonialCard
                  testimonial={testimonials[(active - 1 + testimonials.length) % testimonials.length]}
                />
              </div>
            )}

            {/* Active card — cross-fade key forces remount on change */}
            <div className="w-full max-w-lg shrink-0">
              <TestimonialCard key={active} testimonial={testimonials[active]} featured />
            </div>

            {/* Next card */}
            {testimonials.length > 1 && (
              <div
                className="hidden md:block w-72 shrink-0 opacity-35 scale-[0.88] transition-all duration-500 ease-premium pointer-events-none"
                aria-hidden="true"
              >
                <TestimonialCard
                  testimonial={testimonials[(active + 1) % testimonials.length]}
                />
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-surface-grey bg-white flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                    i === active ? "bg-brand-gold w-6" : "bg-brand-muted/30 w-1.5"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-surface-grey bg-white flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-card p-6 md:p-8 transition-all duration-500",
        featured ? "shadow-card-hover opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      style={featured ? { animation: "fadeUpReveal 0.45s cubic-bezier(0.16,1,0.3,1) both" } : undefined}
    >
      {/* Gold quote mark */}
      <p className="font-serif text-5xl text-brand-gold/30 leading-none mb-1 select-none">&ldquo;</p>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-body-lg text-brand-ink leading-relaxed mb-6">
        {testimonial.quote}
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-11 h-11 bg-brand-gold/15 rounded-full flex items-center justify-center text-brand-gold font-semibold text-label shrink-0">
            {testimonial.name[0]}
          </div>
        )}
        <div>
          <p className="text-body-md font-semibold text-brand-ink">{testimonial.name}</p>
          <p className="text-body-sm text-brand-muted">{testimonial.trip}</p>
        </div>
      </div>

      {testimonial.isSampleData && (
        <p className="mt-4 text-body-sm text-brand-muted/40 italic">
          Sample testimonial — to be replaced with verified review
        </p>
      )}
    </div>
  );
}

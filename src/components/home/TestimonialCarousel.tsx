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
      intervalRef.current = setInterval(next, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, active]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="bg-surface-grey py-16 md:py-24 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="font-serif text-display-md text-brand-ink text-center mb-12">
          What our travelers say
        </h2>
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
            {/* Prev card (partially visible) */}
            {testimonials.length > 1 && (
              <div
                className="hidden md:block w-64 shrink-0 opacity-40 scale-90 transition-all duration-300"
                aria-hidden="true"
              >
                <TestimonialCard
                  testimonial={testimonials[(active - 1 + testimonials.length) % testimonials.length]}
                />
              </div>
            )}

            {/* Active card */}
            <div className="w-full max-w-lg shrink-0 transition-all duration-300">
              <TestimonialCard testimonial={testimonials[active]} featured />
            </div>

            {/* Next card (partially visible) */}
            {testimonials.length > 1 && (
              <div
                className="hidden md:block w-64 shrink-0 opacity-40 scale-90 transition-all duration-300"
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
              className="w-10 h-10 rounded-full border border-surface-grey bg-white flex items-center justify-center text-brand-muted hover:text-brand-blue hover:border-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                    i === active ? "bg-brand-blue w-5" : "bg-brand-muted/40"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-surface-grey bg-white flex items-center justify-center text-brand-muted hover:text-brand-blue hover:border-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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
        "bg-white rounded-card p-6 md:p-8",
        featured && "shadow-card"
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-body-lg text-brand-ink leading-relaxed mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-semibold text-label">
            {testimonial.name[0]}
          </div>
        )}
        <div>
          <p className="text-body-md font-semibold text-brand-ink">{testimonial.name}</p>
          <p className="text-body-sm text-brand-muted">{testimonial.trip}</p>
        </div>
      </div>

      {testimonial.isSampleData && (
        <p className="mt-3 text-body-sm text-brand-muted/50 italic">
          Sample testimonial — to be replaced with verified review
        </p>
      )}
    </div>
  );
}

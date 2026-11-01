"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  eyebrow?: string;
  title?: string;
  bgClass?: string;
  id?: string;
}

// How many cards peek out behind the active one
const STACK_DEPTH = 2;
const SWIPE_THRESHOLD = 50;

export function TestimonialCarousel({
  testimonials,
  eyebrow = "Traveler stories",
  title = "What our travelers say",
  bgClass = "bg-surface-grey",
  id,
}: TestimonialCarouselProps) {
  const count = testimonials.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Endless loop in both directions
  const prev = () => setActive((a) => (a - 1 + count) % count);
  const next = () => setActive((a) => (a + 1) % count);

  useEffect(() => {
    if (!paused && count > 1) {
      intervalRef.current = setInterval(next, 5500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, active, count]); // eslint-disable-line react-hooks/exhaustive-deps

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (dx <= -SWIPE_THRESHOLD) next();
      else if (dx >= SWIPE_THRESHOLD) prev();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section id={id} className={cn(bgClass, "py-16 md:py-24 overflow-hidden")}>
      <div className="max-w-content mx-auto px-4 md:px-8">

        <div className="text-center mb-12">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">
            {eyebrow}
          </p>
          <h2 className="font-serif text-display-md text-brand-ink">
            {title}
          </h2>
        </div>
        {/* NOTE: All testimonials are sample data until replaced with real reviews */}

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
        >
          {/* Deck — every card shares one grid cell, so the height stays fixed at the tallest review */}
          <div
            className="mx-auto max-w-xl [--peek:14px] md:[--peek:36px]"
            style={{ paddingRight: `calc(var(--peek) * ${STACK_DEPTH})` }}
          >
            <div
              className="grid touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {testimonials.map((t, i) => {
                // Position relative to the active card, wrapping around the loop
                const rel = (i - active + count) % count;
                const isLeaving = rel === count - 1 && count > STACK_DEPTH + 1;
                const inStack = rel <= STACK_DEPTH;

                let transform: string;
                let opacity: number;
                if (inStack) {
                  transform = `translateX(calc(var(--peek) * ${rel})) scale(${1 - rel * 0.06})`;
                  opacity = rel === 0 ? 1 : 1 - rel * 0.25;
                } else if (isLeaving) {
                  transform = "translateX(-110%) rotate(-4deg)";
                  opacity = 0;
                } else {
                  transform = `translateX(calc(var(--peek) * ${STACK_DEPTH})) scale(${1 - STACK_DEPTH * 0.06})`;
                  opacity = 0;
                }

                return (
                  <div
                    key={i}
                    className="[grid-area:1/1] origin-right transition-[transform,opacity] duration-700 ease-premium motion-reduce:transition-none"
                    style={{ transform, opacity, zIndex: count - rel }}
                    aria-hidden={rel !== 0}
                  >
                    <TestimonialCard testimonial={t} front={rel === 0} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls — sit below a fixed-height deck, so they never shift */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-brand-muted/20 bg-white flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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
              className="w-11 h-11 rounded-full border border-brand-muted/20 bg-white flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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
  front,
}: {
  testimonial: Testimonial;
  front: boolean;
}) {
  return (
    <div
      className={cn(
        "relative h-full bg-white rounded-card p-6 md:p-8 transition-shadow duration-700",
        front ? "shadow-card-hover" : "shadow-card"
      )}
    >
      {/* Shade on cards waiting in the stack */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-card bg-brand-ink/5 transition-opacity duration-700",
          front ? "opacity-0" : "opacity-100"
        )}
      />

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

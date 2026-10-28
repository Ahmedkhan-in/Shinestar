"use client";

import { useId, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewCard, Stars } from "./ReviewCard";
import { tripTypeLabels } from "@/data/reviews";
import type { TravelerReview, TripType } from "@/types";

type Filter = "all" | TripType;
type Sort = "recent" | "rating" | "type";

const SORTS: { value: Sort; label: string }[] = [
  { value: "recent", label: "Most recent" },
  { value: "rating", label: "Highest rated" },
  { value: "type", label: "Trip type" },
];

export function ReviewsBrowser({ reviews }: { reviews: TravelerReview[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("recent");
  const sortId = useId();

  // Summary counts verified reviews only; until there are any, it describes the sample set and says so.
  const verified = reviews.filter((r) => r.verified && !r.isSampleData);
  const basis = verified.length > 0 ? verified : reviews;
  const isSampleBasis = verified.length === 0;
  const average = basis.reduce((s, r) => s + r.rating, 0) / (basis.length || 1);
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: basis.filter((r) => r.rating === star).length,
  }));

  const types = (Object.keys(tripTypeLabels) as TripType[]).filter((t) => reviews.some((r) => r.tripType === t));

  const shown = useMemo(() => {
    const list = filter === "all" ? reviews : reviews.filter((r) => r.tripType === filter);
    return [...list].sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating || b.travelMonth.localeCompare(a.travelMonth);
      if (sort === "type") return a.tripType.localeCompare(b.tripType) || b.travelMonth.localeCompare(a.travelMonth);
      return b.travelMonth.localeCompare(a.travelMonth);
    });
  }, [reviews, filter, sort]);

  return (
    <section id="reviews" className="bg-surface-grey py-20 md:py-28 prose-anchor">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Summary */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-end">
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Rating summary</p>
            <h2 className="font-serif text-display-md text-brand-ink">What travelers rate us</h2>
            <div className="mt-6 flex items-end gap-5">
              <p className="font-serif text-[clamp(64px,8vw,104px)] leading-[0.9] font-light text-brand-ink tracking-tight">
                {average.toFixed(1)}
              </p>
              <div className="pb-2">
                <Stars rating={Math.round(average)} size={18} />
                <p className="mt-1.5 text-body-md text-brand-ink/80">
                  from {basis.length} {isSampleBasis ? "sample" : "verified"} reviews
                </p>
              </div>
            </div>
            {isSampleBasis && (
              <p className="mt-4 text-body-sm text-brand-ink/70 max-w-md">
                These figures are calculated from the sample reviews below. Once verified reviews are added, this
                summary counts only those.
              </p>
            )}
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-3" aria-label="Rating distribution">
              {distribution.map(({ star, count }) => (
                <li key={star} className="grid grid-cols-[3.5rem_1fr_2rem] items-center gap-4 text-body-md text-brand-ink">
                  <span>{star} star</span>
                  <span className="h-2.5 rounded-full bg-white overflow-hidden" aria-hidden="true">
                    <span
                      className="block h-full rounded-full bg-brand-gold origin-left transition-transform duration-1000 ease-premium"
                      style={{ transform: `scaleX(${basis.length ? count / basis.length : 0})` }}
                    />
                  </span>
                  <span className="text-right tabular-nums">{count}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Controls */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div
            role="group"
            aria-label="Filter by trip type"
            className="flex flex-wrap gap-2"
          >
            {(["all", ...types] as Filter[]).map((f) => {
              const count = f === "all" ? reviews.length : reviews.filter((r) => r.tripType === f).length;
              const selected = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "shrink-0 min-h-[44px] px-4 rounded-full text-label border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                    selected
                      ? "bg-brand-gold/15 border-brand-gold text-brand-ink"
                      : "bg-white border-transparent text-brand-ink hover:border-brand-gold/60"
                  )}
                >
                  {f === "all" ? "All trips" : tripTypeLabels[f]}
                  <span className="ml-1.5 text-brand-ink/60 tabular-nums">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <label htmlFor={sortId} className="text-body-sm font-semibold text-brand-ink">
              Sort by
            </label>
            <select
              id={sortId}
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="min-h-[44px] rounded-btn bg-white px-3 pr-8 text-body-md text-brand-ink border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {shown.length === 1 ? "review" : "reviews"}
        </p>

        {/* Masonry — CSS columns give varied heights without a rigid grid */}
        <div key={`${filter}-${sort}`} className="mt-8 columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {shown.map((r, i) => (
            <div
              key={r.id}
              className="mb-4 break-inside-avoid"
              style={{ animation: `fadeUpReveal 0.6s cubic-bezier(0.16,1,0.3,1) ${Math.min(i, 8) * 0.06}s both` }}
            >
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

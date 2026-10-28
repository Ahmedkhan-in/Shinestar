import Link from "next/link";
import { Star, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TravelerReview } from "@/types";
import { tripTypeLabels } from "@/data/reviews";

export function formatMonth(iso: string) {
  const [y, m] = iso.split("-").map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          aria-hidden="true"
          className={i < rating ? "fill-brand-gold text-brand-gold" : "fill-brand-muted/15 text-brand-muted/25"}
        />
      ))}
    </span>
  );
}

export function ReviewCard({ review, className }: { review: TravelerReview; className?: string }) {
  return (
    <article
      className={cn(
        "group rounded-card bg-white p-6 md:p-7 transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Stars rating={review.rating} />
        <span className="text-body-sm text-brand-ink/70">{tripTypeLabels[review.tripType]}</span>
      </div>

      <blockquote className="mt-4">
        <p className="text-body-lg text-brand-ink leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
      </blockquote>

      <footer className="mt-6 flex items-center gap-3">
        <span
          className="w-11 h-11 shrink-0 rounded-full bg-brand-gold/15 text-brand-gold-deep font-semibold text-label flex items-center justify-center"
          aria-hidden="true"
        >
          {review.name[0]}
        </span>
        <div className="min-w-0">
          <p className="text-body-md font-semibold text-brand-ink">
            {review.name}
            <span className="font-normal text-brand-ink/70"> · {review.city}</span>
          </p>
          <p className="text-body-sm text-brand-ink/75">
            {review.relatedHref ? (
              <Link
                href={review.relatedHref}
                className="underline-offset-2 hover:underline hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
              >
                {review.trip}
              </Link>
            ) : (
              review.trip
            )}
            {" · "}
            <time dateTime={review.travelMonth}>{formatMonth(review.travelMonth)}</time>
          </p>
        </div>
      </footer>

      {review.verified && !review.isSampleData ? (
        <p className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-semibold text-brand-blue">
          <BadgeCheck size={15} aria-hidden="true" />
          Trip verified
        </p>
      ) : review.isSampleData ? (
        <p className="mt-4 text-body-sm italic text-brand-ink/60">Sample review, to be replaced with a verified one</p>
      ) : null}
    </article>
  );
}

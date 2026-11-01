import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/reviews/ReviewCard";
import type { TravelerReview } from "@/types";

export function ReviewHighlight({ review }: { review: TravelerReview }) {
  return (
    <section className="bg-surface-grey py-20 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-20 items-end">
        <Reveal>
          <h2 className="sr-only">What travelers say</h2>
          <Stars rating={review.rating} size={18} />
          <blockquote className="mt-6">
            <p className="font-serif font-light text-[clamp(20px,1.9vw,26px)] leading-[1.45] text-brand-ink">
              &ldquo;{review.quote}&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 text-body-md text-brand-ink">
            <span className="font-semibold">{review.name}</span>
            <span className="text-brand-ink/75">, {review.city} · {review.trip}</span>
          </p>
          {review.isSampleData && (
            <p className="mt-2 text-body-sm italic text-brand-ink/60">Sample review, to be replaced with a verified one</p>
          )}
        </Reveal>
        <Reveal delay={120}>
          <p className="text-body-lg text-brand-ink/80 leading-relaxed">
            More stories from Umrah groups, honeymoon couples, families and visa applicants, every one matched to a
            booking before we publish it.
          </p>
          <Link
            href="/reviews"
            className="group mt-6 inline-flex items-center gap-2 min-h-[48px] px-6 rounded-btn bg-white text-brand-blue text-label font-semibold hover:bg-brand-blue hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            Read traveler reviews
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

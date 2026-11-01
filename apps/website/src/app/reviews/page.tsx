import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsBrowser } from "@/components/reviews/ReviewsBrowser";
import { TravelerGallery } from "@/components/reviews/TravelerGallery";
import { SocialRail } from "@/components/reviews/SocialRail";
import { ReviewSubmission } from "@/components/reviews/ReviewSubmission";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { FinalCTA } from "@/components/home/FinalCTA";
import { reviews, verifiedReviews } from "@/data/reviews";
import { gallery, galleryCategoryLabels } from "@/data/gallery";
import { reels } from "@/data/reels";
import { formatMonth } from "@/components/reviews/ReviewCard";
import { pageMetadata, travelAgencySchema, jsonLdScript } from "@/lib/seo";
import type { Testimonial } from "@/types";

export const metadata = pageMetadata({
  title: "Traveler Reviews & Gallery | Shine Star Tours and Travel, Karachi",
  description:
    "Read how families from Karachi, Lahore, Islamabad and across Pakistan describe their Umrah, honeymoon, international and visa experiences with Shine Star. Every review is matched to a booking.",
  path: "/reviews",
  image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&h=630&q=80&fit=crop",
});

// AggregateRating and Review schema are emitted ONLY for verified, non-sample reviews.
const agency = travelAgencySchema();
const schema =
  verifiedReviews.length > 0
    ? {
        ...agency,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: (verifiedReviews.reduce((s, r) => s + r.rating, 0) / verifiedReviews.length).toFixed(1),
          reviewCount: verifiedReviews.length,
          bestRating: 5,
          worstRating: 1,
        },
        review: verifiedReviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.quote,
        })),
      }
    : agency;

// Featured stories reuse the home page's stacked carousel
const featured: Testimonial[] = reviews
  .filter((r) => r.featured)
  .map((r) => ({
    id: r.id,
    name: `${r.name}, ${r.city}`,
    trip: `${r.trip} · ${formatMonth(r.travelMonth)}`,
    rating: r.rating,
    quote: r.quote,
    date: r.travelMonth,
    isSampleData: r.isSampleData,
  }));

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />

      <ReviewsHero />
      <ReviewsBrowser reviews={reviews} />
      <TestimonialCarousel
        testimonials={featured}
        eyebrow="Featured stories"
        title="The details people remember"
        bgClass="bg-white"
      />
      <TravelerGallery items={gallery} labels={galleryCategoryLabels} />
      <SocialRail posts={reels} />
      <ReviewSubmission />
      <FinalCTA
        eyebrow="Your turn"
        title="Plan yours with their trust behind you"
        body="Tell us the trip, the dates and who's coming. We'll come back with a clear, itemised price on WhatsApp."
        image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80&fit=crop"
        imageAlt="Overwater villas on a turquoise lagoon in the Maldives"
      />
    </>
  );
}

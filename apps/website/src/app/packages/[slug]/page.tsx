import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { internationalPackages } from "@/data/packages";
import { PackageHero } from "@/components/packages/PackageHero";
import { DesktopBookingCard } from "@/components/packages/StickyBookingBar";
import { StickyBookingBar } from "@/components/packages/StickyBookingBar";
import {
  SocialProof,
  ProblemSolution,
  InclusionsExclusions,
  Itinerary,
  Accommodations,
  Reviews,
  FAQSection,
  PackageConversion,
} from "@/components/packages/PackageDetailBody";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return internationalPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = internationalPackages.find((p) => p.slug === slug);
  if (!pkg) return {};
  return {
    title: pkg.seo.title,
    description: pkg.seo.description,
    keywords: pkg.seo.keywords,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = internationalPackages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <>
      <PackageHero pkg={pkg} />
      <SocialProof pkg={pkg} />

      {/* Two-column layout: main content + sticky sidebar */}
      <div className="max-w-content mx-auto px-0 md:px-8">
        <div className="flex gap-8 lg:gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <ProblemSolution pkg={pkg} />
            <InclusionsExclusions pkg={pkg} />
            <Itinerary pkg={pkg} />
            <Accommodations pkg={pkg} />
            <Reviews pkg={pkg} />
            <FAQSection pkg={pkg} />
          </div>

          {/* Desktop sticky booking card */}
          <aside className="hidden lg:block w-80 shrink-0 py-12">
            <DesktopBookingCard pkg={pkg} />
          </aside>
        </div>
      </div>

      <PackageConversion pkg={pkg} />

      {/* Mobile sticky bottom bar */}
      <StickyBookingBar pkg={pkg} />
    </>
  );
}

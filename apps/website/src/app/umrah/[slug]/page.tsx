import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RelatedPackages } from "@/components/packages/RelatedPackages";
import { packageHref } from "@/lib/packages";
import { jsonLdScript, packagePageSchema, pageMetadata } from "@/lib/seo";
import { umrahPackages } from "@/data/umrahPackages";
import { PackageHero } from "@/components/packages/PackageHero";
import { DesktopBookingCard, StickyBookingBar } from "@/components/packages/StickyBookingBar";
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
  return umrahPackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = umrahPackages.find((p) => p.slug === slug);
  if (!pkg) return {};
  return pageMetadata({
    title: pkg.seo.title,
    description: pkg.seo.description,
    keywords: pkg.seo.keywords,
    path: packageHref(pkg),
    image: pkg.heroImage,
  });
}

export default async function UmrahDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = umrahPackages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <>
      <PackageHero pkg={pkg} />
      <SocialProof pkg={pkg} />
      <div className="max-w-content mx-auto px-0 md:px-8">
        <div className="flex gap-8 lg:gap-12">
          <div className="flex-1 min-w-0">
            <ProblemSolution pkg={pkg} />
            <InclusionsExclusions pkg={pkg} />
            <Itinerary pkg={pkg} />
            <Accommodations pkg={pkg} />
            <Reviews pkg={pkg} />
            <FAQSection pkg={pkg} />
          </div>
          <aside className="hidden lg:block w-80 shrink-0 py-12">
            <DesktopBookingCard pkg={pkg} />
          </aside>
        </div>
      </div>
      <PackageConversion pkg={pkg} />
      <RelatedPackages pkg={pkg} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(packagePageSchema(pkg))}
      />
      <StickyBookingBar pkg={pkg} />
    </>
  );
}

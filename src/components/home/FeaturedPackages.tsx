import Link from "next/link";
import { PackageCard } from "@/components/packages/PackageCard";
import type { TravelPackage } from "@/types";

interface FeaturedPackagesSectionProps {
  title: string;
  subtitle: string;
  packages: TravelPackage[];
  viewAllHref: string;
  viewAllLabel: string;
  id?: string;
  bgClass?: string;
}

export function FeaturedPackagesSection({
  title,
  subtitle,
  packages,
  viewAllHref,
  viewAllLabel,
  id,
  bgClass = "bg-white",
}: FeaturedPackagesSectionProps) {
  const featured = packages.filter((p) => p.featured).slice(0, 4);

  return (
    <section id={id} className={`${bgClass} py-16 md:py-24`}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="font-serif text-display-md text-brand-ink">{title}</h2>
            <p className="mt-2 text-body-lg text-brand-muted max-w-lg">{subtitle}</p>
          </div>
          <Link
            href={viewAllHref}
            className="text-label font-semibold text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded shrink-0"
          >
            {viewAllLabel} →
          </Link>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {featured.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

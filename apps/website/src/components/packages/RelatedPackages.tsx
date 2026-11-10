import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PackageCard } from "./PackageCard";
import { CATEGORY_PAGES, packagesByCategory } from "@/lib/packages";
import type { PackageCategory, TravelPackage } from "@/types";

const MORE_HEADING: Record<PackageCategory, string> = {
  umrah: "Other Umrah packages",
  international: "More international tours",
  honeymoon: "More honeymoon escapes",
};

// Links each package page to its siblings, its category page and the other categories,
// so visitors (and search engines) can always move on from a package page.
export function RelatedPackages({ pkg }: { pkg: TravelPackage }) {
  const siblings = packagesByCategory[pkg.category].filter((p) => p.slug !== pkg.slug).slice(0, 3);
  const category = CATEGORY_PAGES[pkg.category];
  const otherCategories = (Object.keys(CATEGORY_PAGES) as PackageCategory[]).filter((c) => c !== pkg.category);

  return (
    <section aria-labelledby="related-heading" className="bg-surface-warm py-16 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 id="related-heading" className="font-serif text-display-md text-brand-ink">
            {MORE_HEADING[pkg.category]}
          </h2>
          <Link
            href={category.path}
            className="inline-flex items-center gap-1 text-label font-semibold text-brand-blue hover:text-brand-sky transition-colors"
          >
            All {category.label.toLowerCase()}
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        {siblings.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siblings.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        )}

        <nav aria-label="Other package types" className="mt-10 flex flex-wrap items-center gap-3 text-body-sm text-brand-ink/70">
          <span>Also explore:</span>
          {otherCategories.map((c) => (
            <Link
              key={c}
              href={CATEGORY_PAGES[c].path}
              className="rounded-full border border-brand-blue/25 px-4 py-2 font-semibold text-brand-blue hover:bg-brand-blue/5 transition-colors"
            >
              {CATEGORY_PAGES[c].label}
            </Link>
          ))}
          <Link
            href="/visa"
            className="rounded-full border border-brand-blue/25 px-4 py-2 font-semibold text-brand-blue hover:bg-brand-blue/5 transition-colors"
          >
            Visa assistance
          </Link>
        </nav>
      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { PackageCard } from "@/components/packages/PackageCard";
import { Reveal } from "@/components/ui/Reveal";
import type { TravelPackage } from "@/types";

type LayoutVariant = "grid" | "editorial-left" | "editorial-right" | "horizontal-rail";

interface FeaturedPackagesSectionProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  packages: TravelPackage[];
  viewAllHref: string;
  viewAllLabel: string;
  id?: string;
  bgClass?: string;
  layout?: LayoutVariant;
}

export function FeaturedPackagesSection({
  title,
  subtitle,
  eyebrow,
  packages,
  viewAllHref,
  viewAllLabel,
  id,
  bgClass = "bg-white",
  layout = "grid",
}: FeaturedPackagesSectionProps) {
  const featured = packages.filter((p) => p.featured).slice(0, 4);

  return (
    <section id={id} className={`${bgClass} py-16 md:py-24`}>
      <div className="max-w-content mx-auto px-4 md:px-8">

        {/* Section header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            {eyebrow && (
              <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
                {eyebrow}
              </p>
            )}
            <h2 className="font-serif text-display-md text-brand-ink">{title}</h2>
            <p className="mt-3 text-body-lg text-brand-muted max-w-lg leading-relaxed">{subtitle}</p>
          </div>
          <Link
            href={viewAllHref}
            className="text-label font-semibold text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded shrink-0 group flex items-center gap-1"
          >
            {viewAllLabel}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        {/* Layout variants */}
        {layout === "editorial-left" && (
          <EditorialLayout packages={featured} mirror={false} />
        )}
        {layout === "editorial-right" && (
          <EditorialLayout packages={featured} mirror={true} />
        )}
        {layout === "horizontal-rail" && (
          <HorizontalRail packages={featured} />
        )}
        {layout === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {featured.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 100}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Editorial Layout (large hero card + stacked small cards) ─────────────────

function EditorialLayout({
  packages,
  mirror,
}: {
  packages: TravelPackage[];
  mirror: boolean;
}) {
  const [hero, ...rest] = packages;
  if (!hero) return null;

  const largeCard = (
    <Reveal className="h-full min-h-[400px] md:min-h-[500px]">
      <LargeEditorialCard pkg={hero} />
    </Reveal>
  );

  const smallCards = (
    <div className="flex flex-col gap-4">
      {rest.slice(0, 2).map((pkg, i) => (
        <Reveal key={pkg.slug} delay={i * 120 + 100}>
          <PackageCard pkg={pkg} />
        </Reveal>
      ))}
    </div>
  );

  return (
    <div className={`grid gap-4 md:gap-5 ${mirror ? "md:grid-cols-[1fr_1.15fr]" : "md:grid-cols-[1.15fr_1fr]"}`}>
      {mirror ? (
        <>
          {smallCards}
          {largeCard}
        </>
      ) : (
        <>
          {largeCard}
          {smallCards}
        </>
      )}
    </div>
  );
}

// ─── Large editorial card (portrait/hero style) ───────────────────────────────

function LargeEditorialCard({ pkg }: { pkg: TravelPackage }) {
  const href =
    pkg.category === "umrah"
      ? `/umrah/${pkg.slug}`
      : pkg.category === "honeymoon"
      ? `/honeymoon/${pkg.slug}`
      : `/packages/${pkg.slug}`;

  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[400px] rounded-card overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
    >
      <div className="absolute inset-0">
        <Image
          src={pkg.heroImage}
          alt={`${pkg.destination} — ${pkg.title}`}
          fill
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/25 to-transparent" />
      </div>

      <div className="relative w-full flex flex-col justify-end p-6 md:p-8">
        {pkg.badge && (
          <span className="inline-block text-brand-gold text-eyebrow uppercase tracking-widest mb-3">
            {pkg.badge}
          </span>
        )}
        <h3 className="font-serif text-display-sm text-white leading-tight group-hover:text-brand-champagne transition-colors duration-300">
          {pkg.title}
        </h3>
        <div className="flex items-center gap-3 mt-2 text-white/65 text-body-sm">
          <span>{pkg.duration}</span>
          {pkg.startingPrice && (
            <>
              <span className="w-px h-3 bg-white/30" />
              <span>From PKR {pkg.startingPrice.toLocaleString("en-PK")}</span>
            </>
          )}
        </div>
        <span className="inline-flex items-center gap-2 mt-5 text-white/90 text-label font-semibold group-hover:text-brand-champagne group-hover:gap-3 transition-all duration-300">
          View package <span>→</span>
        </span>
      </div>
    </Link>
  );
}

// ─── Horizontal Rail ──────────────────────────────────────────────────────────

function HorizontalRail({ packages }: { packages: TravelPackage[] }) {
  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div className="md:hidden -mx-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 px-4">
          {packages.map((pkg) => (
            <div key={pkg.slug} className="shrink-0 w-[300px] snap-start">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
        {packages.map((pkg, i) => (
          <Reveal key={pkg.slug} delay={i * 90}>
            <PackageCard pkg={pkg} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

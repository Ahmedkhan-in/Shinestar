import Image from "next/image";
import Link from "next/link";
import { Star, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TravelPackage } from "@/types";

interface PackageCardProps {
  pkg: TravelPackage;
  className?: string;
}

export function PackageCard({ pkg, className }: PackageCardProps) {
  const href =
    pkg.category === "umrah"
      ? `/umrah/${pkg.slug}`
      : pkg.category === "honeymoon"
      ? `/honeymoon/${pkg.slug}`
      : `/packages/${pkg.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "group block bg-white rounded-card overflow-hidden transition-all duration-300",
        "hover:shadow-card-hover hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={`${pkg.destination} — ${pkg.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge */}
        {pkg.badge && (
          <span className="absolute top-3 left-3 bg-white/95 text-brand-ink text-body-sm font-semibold px-2.5 py-1 rounded-full">
            {pkg.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Destination */}
        <div className="flex items-start gap-1 text-brand-muted text-body-sm mb-1">
          <MapPin size={12} className="mt-0.5 shrink-0" />
          <span>{pkg.destination}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-display-sm text-brand-ink line-clamp-2 mb-1">
          {pkg.title}
        </h3>

        {/* Duration + Price row */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-brand-muted text-body-sm">
            <Clock size={12} />
            <span>{pkg.duration}</span>
          </div>
          {pkg.startingPrice && (
            <div className="text-right">
              {pkg.isSamplePricing && (
                <span className="block text-body-sm text-brand-muted">From</span>
              )}
              <span className="font-sans text-price text-brand-blue">
                PKR {pkg.startingPrice.toLocaleString("en-PK")}
              </span>
            </div>
          )}
        </div>

        {/* CTA strip */}
        <div className="mt-3 pt-3 border-t border-surface-grey flex items-center justify-between">
          <span className="text-brand-muted text-body-sm">
            {pkg.reviews.length > 0 && (
              <span className="flex items-center gap-1">
                <Star size={12} className="fill-brand-gold text-brand-gold" />
                <span className="text-brand-ink font-medium">
                  {(pkg.reviews.reduce((sum, r) => sum + r.rating, 0) / pkg.reviews.length).toFixed(1)}
                </span>
                <span className="text-brand-muted">
                  ({pkg.reviews.length} {pkg.reviews.length === 1 ? "review" : "reviews"})
                </span>
              </span>
            )}
          </span>
          <span className="text-brand-blue text-label font-semibold group-hover:underline">
            View package →
          </span>
        </div>
      </div>
    </Link>
  );
}

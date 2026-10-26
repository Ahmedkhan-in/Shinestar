import type { Metadata } from "next";
import { PackageCard } from "@/components/packages/PackageCard";
import { internationalPackages } from "@/data/packages";

export const metadata: Metadata = {
  title: "International Tour Packages from Karachi | Shine Star Travel",
  description:
    "Thailand, Malaysia, Singapore, Dubai, Sri Lanka — curated international tour packages from Karachi. Transparent pricing, halal-friendly, WhatsApp support.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-footer pt-32 pb-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <h1 className="font-serif text-display-lg text-white">
            International tour packages
          </h1>
          <p className="mt-3 text-body-lg text-white/70 max-w-xl">
            Carefully planned tours from Karachi to Asia's best destinations. Clear pricing, halal options, and support on WhatsApp.
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="bg-surface-grey py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {internationalPackages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-white rounded-card p-8 text-center">
            <h2 className="font-serif text-display-sm text-brand-ink mb-2">
              Don&apos;t see the destination you want?
            </h2>
            <p className="text-body-lg text-brand-muted mb-5">
              We arrange custom tours. Tell us where you want to go and we will plan it.
            </p>
            <a
              href="https://wa.me/923462646201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-blue text-white text-label font-semibold px-6 py-3 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[44px]"
            >
              Request a custom tour on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

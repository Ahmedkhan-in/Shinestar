import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Heart } from "lucide-react";
import { honeymoonPackages } from "@/data/honeymoonPackages";

export const metadata: Metadata = {
  title: "Honeymoon Packages from Karachi | Maldives, Bali, Turkey | Shine Star Travel",
  description:
    "Romantic honeymoon packages from Karachi — Maldives overwater villas, Bali jungle retreats, Turkey's Cappadocia. Transparent pricing, personalised arrangements.",
};

export default function HoneymoonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=85&fit=crop"
          alt="Maldives overwater villa at sunset — honeymoon packages by Shine Star"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/40 to-brand-ink/20" />
        <div className="relative z-10 max-w-content mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-brand-champagne mb-3">
            <Heart size={16} className="fill-brand-champagne" />
            <span className="text-label">Honeymoon packages</span>
          </div>
          <h1 className="font-serif text-display-lg text-white max-w-2xl">
            Begin your life together somewhere extraordinary
          </h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-xl leading-relaxed">
            Maldives overwater villas, Bali jungle retreats, Turkey&apos;s Cappadocia — planned with the care your first trip as a couple deserves.
          </p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-brand-gold text-brand-ink text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-brand-champagne transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink min-h-[48px]"
          >
            Plan our honeymoon on WhatsApp
          </a>
        </div>
      </section>

      {/* Why honeymoon with us */}
      <section className="bg-surface-warm py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <h2 className="font-serif text-display-md text-brand-ink mb-3">
            Your honeymoon, planned with intention
          </h2>
          <p className="text-body-lg text-brand-muted max-w-2xl leading-relaxed">
            We understand that your honeymoon is not just another trip — it is the first journey of your life together. We arrange the details that make it feel special: the room setup, the private dinner, the surprise upgrades where possible, and the peace of mind that comes from knowing everything is organised before you arrive.
          </p>
        </div>
      </section>

      {/* Package listing */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <h2 className="font-serif text-display-md text-brand-ink mb-8">Honeymoon destinations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {honeymoonPackages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/honeymoon/${pkg.slug}`}
                className="group bg-white rounded-card overflow-hidden border border-surface-grey hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 block"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={pkg.heroImage}
                    alt={`${pkg.title} — ${pkg.destination}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {pkg.badge && (
                    <span className="absolute top-3 left-3 bg-brand-champagne text-brand-ink text-body-sm font-semibold px-2.5 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="absolute top-3 right-3">
                    <Heart size={18} className="text-white/70 group-hover:fill-brand-champagne group-hover:text-brand-champagne transition-colors" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-display-sm text-brand-ink">{pkg.title}</h3>
                  <p className="flex items-center gap-1.5 text-brand-muted text-body-sm mt-1 mb-3">
                    <Clock size={12} />
                    {pkg.duration} · {pkg.destination}
                  </p>
                  <p className="text-body-md text-brand-muted leading-relaxed line-clamp-2">
                    {pkg.shortDescription}
                  </p>
                  {pkg.startingPrice && (
                    <div className="mt-4 pt-4 border-t border-surface-grey flex items-center justify-between">
                      <div>
                        <p className="text-body-sm text-brand-muted">From per couple</p>
                        <p className="text-price text-brand-blue font-semibold">
                          PKR {pkg.startingPrice.toLocaleString("en-PK")}
                        </p>
                        {pkg.isSamplePricing && (
                          <p className="text-body-sm text-brand-muted/50 italic">sample</p>
                        )}
                      </div>
                      <span className="text-brand-blue text-label font-semibold group-hover:underline">
                        View →
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Custom honeymoon CTA */}
          <div className="mt-10 bg-surface-warm rounded-card p-8 text-center">
            <h2 className="font-serif text-display-sm text-brand-ink mb-2">
              Have a destination in mind?
            </h2>
            <p className="text-body-lg text-brand-muted mb-5">
              We plan custom honeymoons beyond our listed destinations. Tell us your dream trip.
            </p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-blue text-white text-label font-semibold px-6 py-3 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[44px]"
            >
              Plan a custom honeymoon
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Check } from "lucide-react";
import { umrahPackages } from "@/data/umrahPackages";

export const metadata: Metadata = {
  title: "Umrah Packages from Karachi 2025 | 7, 10 & 14 Days | Shine Star Travel",
  description:
    "Umrah packages from Karachi — 7, 10, and 14-day options. Hotels near Masjid al-Haram and Masjid Nabawi. Full ziyarat, visa assistance, dedicated guide.",
};

const whyChooseUs = [
  "Hotels within walking distance of both Masajid",
  "Full Makkah and Madinah ziyarat included",
  "Umrah visa processed by our team",
  "Dedicated group guide for Umrah rites",
  "Halal meals throughout",
  "WhatsApp support in Saudi Arabia",
];

export default function UmrahPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=85&fit=crop"
          alt="Masjid al-Haram, Makkah — Umrah packages by Shine Star"
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-footer/80" />
        <div className="relative z-10 max-w-content mx-auto px-4 md:px-8">
          <h1 className="font-serif text-display-lg text-white max-w-2xl">
            Umrah & Hajj packages from Karachi
          </h1>
          <p className="mt-4 text-body-lg text-white/70 max-w-xl leading-relaxed">
            Planned around your spiritual journey — hotels near both Masajid, full ziyarat, visa support, and a guide who has made this journey many times before.
          </p>
          <a
            href="https://wa.me/923462646201"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-brand-gold text-brand-ink text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-brand-champagne transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-footer min-h-[48px]"
          >
            Ask about Umrah availability
          </a>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-surface-warm py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-serif text-display-md text-brand-ink mb-5">
                What every Umrah package includes
              </h2>
              <ul className="space-y-3">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-3 text-body-md text-brand-ink">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=900&q=80&fit=crop"
                alt="The Kaaba and Masjid al-Haram, Makkah"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package listing */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4 md:px-8">
          <h2 className="font-serif text-display-md text-brand-ink mb-8">Choose your package</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {umrahPackages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/umrah/${pkg.slug}`}
                className="group bg-white rounded-card border border-surface-grey overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 block"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {pkg.badge && (
                    <span className="absolute top-3 left-3 bg-brand-gold text-brand-ink text-body-sm font-semibold px-2.5 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-display-sm text-brand-ink">{pkg.title}</h3>
                  <p className="flex items-center gap-1.5 text-brand-muted text-body-sm mt-1 mb-3">
                    <Clock size={12} />
                    {pkg.duration}
                  </p>
                  <p className="text-body-md text-brand-muted leading-relaxed">{pkg.shortDescription}</p>
                  {pkg.startingPrice && (
                    <div className="mt-4 pt-4 border-t border-surface-grey flex items-center justify-between">
                      <div>
                        <p className="text-body-sm text-brand-muted">Starting from</p>
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
        </div>
      </section>
    </>
  );
}

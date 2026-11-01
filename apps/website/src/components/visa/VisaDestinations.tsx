"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { VisaEnquiryButton } from "./VisaEnquiryButton";
import type { VisaDestination } from "@/types";

// Maps destination to the enquiry sheet's country chip
const enquiryCountry = (d: VisaDestination) =>
  d.slug === "schengen" ? "Schengen / Europe" : d.country;

export function VisaDestinations({ destinations }: { destinations: VisaDestination[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const d = destinations[active];

  const focusTab = (i: number) => {
    const next = (i + destinations.length) % destinations.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); focusTab(active + 1); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); focusTab(active - 1); }
    if (e.key === "Home")       { e.preventDefault(); focusTab(0); }
    if (e.key === "End")        { e.preventDefault(); focusTab(destinations.length - 1); }
  };

  return (
    <section id="destinations" className="bg-white py-20 md:py-28 prose-anchor">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Country guides</p>
          <h2 className="font-serif text-display-md text-brand-ink">Where Pakistanis travel most</h2>
          <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed">
            What a green passport typically needs for each country. Rules change, so treat this as a starting
            point. We confirm the current requirement before you pay any fee.
          </p>
        </Reveal>

        {/* Country tabs — scroll horizontally on phones */}
        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Choose a country"
            onKeyDown={onKeyDown}
            className="flex flex-wrap gap-2"
          >
            {destinations.map((dest, i) => {
              const selected = i === active;
              return (
                <button
                  key={dest.slug}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  role="tab"
                  id={`visa-tab-${dest.slug}`}
                  aria-selected={selected}
                  aria-controls={`visa-panel-${dest.slug}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    "min-h-[44px] px-4 sm:px-5 rounded-full text-label border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                    selected
                      ? "bg-brand-ink text-white border-brand-ink"
                      : "bg-white text-brand-ink border-brand-muted/25 hover:border-brand-gold"
                  )}
                >
                  {dest.country}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel */}
        <div
          key={d.slug}
          role="tabpanel"
          id={`visa-panel-${d.slug}`}
          aria-labelledby={`visa-tab-${d.slug}`}
          tabIndex={0}
          className="mt-8 grid lg:grid-cols-[0.9fr_1.4fr] gap-8 lg:gap-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-card"
          style={{ animation: "fadeUpReveal 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {/* Picture / name block */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] rounded-card overflow-hidden bg-brand-footer">
            {d.image ? (
              <>
                <Image
                  src={d.image}
                  alt={d.imageAlt ?? d.country}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* taste-skill-ignore: neutral scrim under text on a photo */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
              </>
            ) : null}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="font-serif text-display-md text-white">{d.country}</h3>
              <p className="mt-1 text-body-md text-white/85">{d.summary}</p>
            </div>
          </div>

          {/* Facts */}
          <div>
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              <Fact label="Entry type">{d.entryType}</Fact>
              <Fact label="Typical validity">{d.validity}</Fact>
              <Fact label="Biometrics & appointments">{d.biometrics}</Fact>
              <Fact label="Processing estimate">{d.processingEstimate}</Fact>
              <Fact label="Bank statements & sponsors" wide>{d.financialNotes}</Fact>
            </dl>

            <div className="mt-8 rounded-card bg-surface-warm p-6">
              <h4 className="text-body-md font-semibold text-brand-ink mb-4">Core documents</h4>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {d.documents.map((doc) => (
                  <li key={doc} className="flex gap-2.5 text-body-md text-brand-ink">
                    <Check size={16} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {d.watchOut && (
              <p className="mt-6 pl-4 border-l-2 border-brand-gold text-body-md text-brand-ink leading-relaxed">
                <span className="font-semibold">Worth knowing: </span>
                {d.watchOut}
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <VisaEnquiryButton
                label={`Check my ${d.country} documents`}
                initialDestination={enquiryCountry(d)}
                className="w-full sm:w-auto"
              />
              {d.relatedHref && (
                <Link
                  href={d.relatedHref}
                  className="group inline-flex items-center gap-1.5 min-h-[44px] text-label font-semibold text-brand-blue hover:text-brand-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                >
                  {d.relatedLabel}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, children, wide }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <dt className="text-body-sm font-semibold text-brand-gold-deep">{label}</dt>
      <dd className="mt-1.5 text-body-md text-brand-ink leading-relaxed">{children}</dd>
    </div>
  );
}

import Image from "next/image";
import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { reels } from "@/data/reels";
import { company } from "@/data/site";

// NOTE: Metrics below are sample data — replace with real figures before launch
const metrics = [
  { value: "5,000+", label: "Travelers served", isSample: true },
  { value: "7+",     label: "Years in market",  isSample: true },
  { value: "25+",    label: "Destinations",     isSample: false },
];

// Real reels from Instagram — each card opens its own reel
// Duplicated once for a seamless infinite scroll
const doubled = [...reels, ...reels];

export function FounderSection() {
  return (
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">

        {/* Top — video frame + copy */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Video frame */}
          <Reveal direction="right">
            <div className="relative aspect-video bg-brand-footer rounded-card overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80&fit=crop"
                alt="Founder introduction — Shine Star Tours and Travel"
                fill
                className="object-cover opacity-55"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://wa.me/923462646201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-modal hover:scale-110 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  aria-label="Contact us on WhatsApp"
                >
                  <span
                    className="ml-1 border-transparent border-l-brand-blue"
                    style={{ borderWidth: "0 0 8px 14px", borderStyle: "solid", borderColor: "transparent transparent transparent #0756A4" }}
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-body-sm text-white/60">
                  {/* TODO: Replace with real founder video */}
                  Founder message — coming soon
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-4">
                Our story
              </p>
              <h2 className="font-serif text-display-md text-brand-ink leading-tight">
                Why families trust us with their most important trip
              </h2>
              <div className="mt-4 h-px w-10 bg-brand-gold animate-line-expand" />
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 text-body-lg text-brand-muted leading-relaxed">
                Shine Star was built around one belief: that a travel agency should be more like a knowledgeable friend than a booking counter. Every package we design, we have researched ourselves — the hotels, the transfers, the halal options, the visa requirements.
              </p>
              <p className="mt-4 text-body-lg text-brand-muted leading-relaxed">
                When you message us on WhatsApp, you reach a person, not a bot. When something changes — a flight, a room, a schedule — we are already working on it before you need to ask.
              </p>
            </Reveal>

            {/* Metrics */}
            {/* NOTE: All metrics are sample data */}
            <Reveal delay={200}>
              <div className="mt-9 grid grid-cols-3 gap-6">
                {metrics.map(({ value, label, isSample }) => (
                  <div key={label}>
                    <p className="font-serif text-display-md text-brand-gold">{value}</p>
                    <p className="text-body-sm text-brand-muted mt-1">{label}</p>
                    {isSample && (
                      <p className="text-body-sm text-brand-muted/35 italic text-[11px]">sample</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Social media rail — infinite marquee */}
        <Reveal delay={200} className="mt-14 md:mt-20">
          <p className="text-eyebrow uppercase tracking-widest text-brand-muted text-center mb-5">
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              Follow us on Instagram
            </a>
          </p>
          <div className="marquee-wrapper relative overflow-hidden -mx-4 md:mx-0">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-surface-warm to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-surface-warm to-transparent z-10 pointer-events-none" aria-hidden="true" />

            <div className="flex w-max gap-4 animate-marquee" style={{ animationDuration: "60s" }}>
              {doubled.map((reel, i) => {
                const isCopy = i >= reels.length;
                return (
                  <a
                    key={`${reel.id}-${i}`}
                    href={reel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden={isCopy || undefined}
                    tabIndex={isCopy ? -1 : undefined}
                    aria-label={isCopy ? undefined : `Watch on Instagram: ${reel.title} (opens in a new tab)`}
                    className="relative w-40 md:w-44 aspect-[9/16] shrink-0 rounded-card overflow-hidden bg-brand-footer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    <Image
                      src={reel.poster}
                      alt={reel.posterAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="176px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" aria-hidden="true" />
                    <span
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 text-brand-ink flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      <Play size={13} className="ml-0.5 fill-brand-ink" />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-8">
                      <p className="text-white text-body-sm font-medium leading-snug">{reel.title}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

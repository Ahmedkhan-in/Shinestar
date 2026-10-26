import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

// NOTE: Metrics below are sample data — replace with real figures before launch
const metrics = [
  { value: "5,000+", label: "Travelers served", isSample: true },
  { value: "7+",     label: "Years in market",  isSample: true },
  { value: "25+",    label: "Destinations",     isSample: false },
];

const socialPosts = [
  {
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80&fit=crop",
    alt: "Umrah group at Masjid al-Haram",
    caption: "Umrah 2024 — alhamdulillah",
  },
  {
    src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80&fit=crop",
    alt: "Maldives honeymoon couple",
    caption: "Maldives honeymoon",
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80&fit=crop",
    alt: "Thailand tour group at temple",
    caption: "Thailand — Bangkok crew",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80&fit=crop",
    alt: "Dubai family at Burj Khalifa",
    caption: "Dubai family trip",
  },
  {
    src: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&q=80&fit=crop",
    alt: "Turkey honeymoon balloon",
    caption: "Cappadocia sunrise",
  },
];

// Duplicate for seamless infinite scroll
const doubled = [...socialPosts, ...socialPosts];

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
                alt="Founder introduction — Shine Star Travel"
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
          <p className="text-eyebrow uppercase tracking-widest text-brand-muted/60 text-center mb-5">
            Follow us on Instagram
          </p>
          <div className="marquee-wrapper relative overflow-hidden -mx-4 md:mx-0">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-surface-warm to-transparent z-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-surface-warm to-transparent z-10 pointer-events-none" aria-hidden="true" />

            <div className="flex gap-4 animate-marquee" style={{ animationDuration: "22s" }}>
              {doubled.map((post, i) => (
                <a
                  key={`${post.caption}-${i}`}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-48 h-48 shrink-0 rounded-card overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  aria-hidden={i >= socialPosts.length}
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="192px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <p className="text-white text-body-sm font-medium">{post.caption}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

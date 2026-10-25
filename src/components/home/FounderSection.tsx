import Image from "next/image";

// NOTE: Metrics below are sample data — replace with real figures before launch
const metrics = [
  { value: "5,000+", label: "Travelers served", isSample: true },
  { value: "7+", label: "Years in market", isSample: true },
  { value: "25+", label: "Destinations covered", isSample: false },
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

export function FounderSection() {
  return (
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Top — video + copy */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Video frame — placeholder until real video is available */}
          <div className="relative aspect-video bg-brand-footer rounded-card overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80&fit=crop"
              alt="Founder introduction — Shine Star Travel"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-modal hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label="Contact us on WhatsApp"
              >
                <span className="ml-1 border-8 border-transparent border-l-brand-blue" style={{ borderLeftWidth: 16 }} aria-hidden="true" />
              </a>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-body-sm text-white/70">
                {/* TODO: Replace with real founder video */}
                Founder message — coming soon
              </p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-serif text-display-md text-brand-ink">
              Why families trust us with their most important trip
            </h2>
            <p className="mt-5 text-body-lg text-brand-muted leading-relaxed">
              Shine Star was built around one belief: that a travel agency should be more like a knowledgeable friend than a booking counter. Every package we design, we have researched ourselves — the hotels, the transfers, the halal options, the visa requirements.
            </p>
            <p className="mt-4 text-body-lg text-brand-muted leading-relaxed">
              When you message us on WhatsApp, you reach a person, not a bot. When something changes — a flight, a room, a schedule — we are already working on it before you need to ask.
            </p>

            {/* Metrics */}
            {/* NOTE: All metrics are sample data */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {metrics.map(({ value, label, isSample }) => (
                <div key={label}>
                  <p className="font-serif text-display-md text-brand-blue">{value}</p>
                  <p className="text-body-sm text-brand-muted mt-1">{label}</p>
                  {isSample && (
                    <p className="text-body-sm text-brand-muted/50 italic">sample</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social media rail */}
        <div className="mt-12 overflow-x-auto scrollbar-none">
          <div className="flex gap-4 pb-2" style={{ width: "max-content" }}>
            {socialPosts.map((post) => (
              <a
                key={post.caption}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-48 h-48 shrink-0 rounded-card overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="192px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-body-sm font-medium">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-3 text-body-sm text-brand-muted text-center">
            Follow us on Instagram for travel inspiration
          </p>
        </div>
      </div>
    </section>
  );
}

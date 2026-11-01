import Image from "next/image";
import { company } from "@/data/site";

const reveal = (delay: number) => ({
  animation: `fadeUpReveal 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s both`,
});

const facts = [
  { value: String(company.foundingYear), label: "Planning trips from Karachi since" },
  { value: "Six", label: "Kinds of trip reviewed here, from Umrah to visas" },
  { value: "Matched", label: "Every review is checked against a booking before we publish it" },
];

export function ReviewsHero() {
  return (
    <section className="bg-surface-warm pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-5" style={reveal(0)}>
            Reviews & traveler stories
          </p>
          <h1 className="font-serif text-display-lg md:text-display-xl text-brand-ink" style={reveal(0.1)}>
            Their trip, in their words
          </h1>
          <p className="mt-6 text-body-lg md:text-xl text-brand-ink/80 leading-relaxed max-w-xl" style={reveal(0.22)}>
            Umrah with elderly parents, a first trip abroad with three children, a Schengen visa after a
            refusal. Read how families from across Pakistan describe the way we handled the details.
          </p>

          <dl className="mt-10 grid sm:grid-cols-3 gap-6 sm:gap-8" style={reveal(0.34)}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block font-serif text-display-sm text-brand-ink">{f.value}</span>
                  <span className="mt-1 block text-body-sm text-brand-ink/75 leading-snug">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Picture pair — Madinah and the Maldives, the two ends of what families book */}
        <div className="relative grid grid-cols-[1.25fr_1fr] gap-3 md:gap-4" style={reveal(0.2)}>
          <div className="relative aspect-[3/4] rounded-card overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=900&h=1200&q=80&fit=crop"
              alt="Masjid an-Nabawi in Madinah"
              fill
              priority
              className="object-cover animate-hero-zoom"
              sizes="(max-width: 1024px) 55vw, 30vw"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-4 pt-10 md:pt-16">
            <div className="relative aspect-[4/5] rounded-card overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&h=875&q=80&fit=crop"
                alt="Overwater villas in the Maldives"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 24vw"
              />
            </div>
            <div className="relative aspect-square rounded-card overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&h=700&q=80&fit=crop"
                alt="Downtown Dubai at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 24vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

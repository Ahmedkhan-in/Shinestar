import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

interface Benefit {
  title: string;
  detail: string;
}

export function VisaWhyUs({ benefits }: { benefits: Benefit[] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-20 items-center">
        <Reveal direction="right" className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-card overflow-hidden order-last lg:order-first">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&fit=crop"
            alt="A map, notebook and travel guide laid out for trip planning"
            fill
            className="object-cover transition-transform duration-[1.6s] ease-premium hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Why Shine Star</p>
            <h2 className="font-serif text-display-md text-brand-ink">A second pair of careful eyes</h2>
            <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed max-w-xl">
              You know your own life. We know what a visa officer looks for. Put the two together and your
              application tells your story clearly.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-9">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <span className="block h-0.5 w-8 bg-brand-gold mb-4" aria-hidden="true" />
                <h3 className="text-body-lg font-semibold text-brand-ink">{b.title}</h3>
                <p className="mt-2 text-body-md text-brand-ink/80 leading-relaxed">{b.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

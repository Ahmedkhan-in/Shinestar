import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function OurStory({ paragraphs }: { paragraphs: string[] }) {
  const [first, ...rest] = paragraphs;
  return (
    <section id="story" className="bg-white py-20 md:py-32 prose-anchor">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[0.9fr_1.3fr] gap-10 lg:gap-20">
        <Reveal className="lg:sticky lg:top-24 self-start">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Our story</p>
          <h2 className="font-serif text-display-md text-brand-ink">Why we started</h2>
          <span className="mt-6 block h-0.5 w-12 bg-brand-gold animate-line-expand" aria-hidden="true" />
          <div className="relative mt-10 aspect-[4/3] rounded-card overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900&h=675&q=80&fit=crop"
              alt="A Quran with a gold-embossed cover resting on a prayer mat"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[clamp(19px,1.6vw,22px)] leading-[1.6] text-brand-ink">{first}</p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-10">
            {rest.map((p, i) => (
              <Reveal key={i} delay={100 + i * 90}>
                <p className="text-body-lg text-brand-ink leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

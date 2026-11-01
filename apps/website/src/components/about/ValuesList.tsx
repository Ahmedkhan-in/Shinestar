import { Reveal } from "@/components/ui/Reveal";
import type { CompanyValue } from "@/types";

export function ValuesList({ values }: { values: CompanyValue[] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">What we stand for</p>
          <h2 className="font-serif text-display-md text-brand-ink">Six promises we can keep</h2>
        </Reveal>

        <dl className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90}>
              <span className="block h-0.5 w-8 bg-brand-gold mb-5" aria-hidden="true" />
              <dt className="font-serif text-display-sm text-brand-ink">{v.title}</dt>
              <dd className="mt-3 text-body-lg text-brand-ink/80 leading-relaxed">{v.detail}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

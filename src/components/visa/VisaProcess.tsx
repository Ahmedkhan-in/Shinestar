import { Reveal } from "@/components/ui/Reveal";
import type { ProcessStep } from "@/types";

export function VisaProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="bg-brand-footer text-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-20">
          <Reveal className="lg:sticky lg:top-24 self-start">
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">How it works</p>
            <h2 className="font-serif text-display-md text-white">Your part, and ours</h2>
            <p className="mt-4 text-body-lg text-white/80 leading-relaxed">
              A visa file goes through four stages. At each one, this is exactly what we ask of you, and what we
              take care of.
            </p>
          </Reveal>

          <ol className="relative">
            {/* Timeline spine */}
            <span className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-white/15" aria-hidden="true" />
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="relative pl-12 pb-12 last:pb-0">
                <span
                  className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand-gold ring-4 ring-brand-footer"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-display-sm text-white">{step.title}</h3>
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-card bg-white/[0.06] p-5">
                    <p className="text-body-sm font-semibold text-brand-champagne">You</p>
                    <p className="mt-2 text-body-md text-white/90 leading-relaxed">{step.youDo}</p>
                  </div>
                  <div className="rounded-card bg-white/[0.12] p-5">
                    <p className="text-body-sm font-semibold text-brand-champagne">Shine Star</p>
                    <p className="mt-2 text-body-md text-white leading-relaxed">{step.weDo}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

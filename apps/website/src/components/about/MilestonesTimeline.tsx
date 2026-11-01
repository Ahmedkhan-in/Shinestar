import { Reveal } from "@/components/ui/Reveal";
import type { Milestone } from "@/types";

export function MilestonesTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="bg-brand-footer text-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">Milestones</p>
          <h2 className="font-serif text-display-md text-white">How we got here</h2>
        </Reveal>

        <ol className="relative mt-12 md:mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* Spine: vertical on phones, horizontal on desktop */}
          <span className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/15 lg:left-0 lg:right-0 lg:top-[7px] lg:bottom-auto lg:w-auto lg:h-0.5" aria-hidden="true" />
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.year} delay={i * 100} className="relative pl-10 lg:pl-0 lg:pt-12">
              <span className="absolute left-0 top-1 lg:top-0 w-4 h-4 rounded-full bg-brand-gold ring-4 ring-brand-footer" aria-hidden="true" />
              <p className="font-serif text-display-md text-brand-gold leading-none">{m.year}</p>
              <h3 className="mt-3 text-body-lg font-semibold text-white">{m.title}</h3>
              <p className="mt-2 text-body-md text-white/80 leading-relaxed">{m.detail}</p>
              {m.isSampleData && <p className="mt-2 text-body-sm italic text-white/60">Sample milestone</p>}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

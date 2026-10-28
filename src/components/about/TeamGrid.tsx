import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import type { TeamMember } from "@/types";

export function TeamGrid({ team }: { team: TeamMember[] }) {
  const hasSample = team.some((m) => m.isSampleData);
  return (
    <section className="bg-surface-warm py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-16 items-end">
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">The team</p>
            <h2 className="font-serif text-display-md text-brand-ink">Who you&rsquo;ll speak to</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body-lg text-brand-ink/80 leading-relaxed">
              A small team, each with their own desk. When you message us, the person who knows your kind of trip
              picks it up, in Urdu or English, and stays with it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {team.map((m, i) => (
            <Reveal
              as="li"
              key={m.id}
              delay={(i % 3) * 90}
              // First row: two wide cards; second row: three
              className={i === 0 ? "sm:col-span-2 lg:col-span-3" : i < 2 ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"}
            >
              <article className="h-full rounded-card bg-white p-6 md:p-7 flex gap-5 transition-transform duration-500 ease-premium hover:-translate-y-1">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name ?? m.role}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <span
                    className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-brand-gold/15 text-brand-gold-deep font-serif text-display-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {(m.name ?? m.role)[0]}
                  </span>
                )}
                <div className="min-w-0">
                  {m.name && <p className="text-body-lg font-semibold text-brand-ink">{m.name}</p>}
                  <h3 className={m.name ? "text-body-md text-brand-ink/80" : "text-body-lg font-semibold text-brand-ink"}>
                    {m.role}
                  </h3>
                  <p className="mt-3 text-body-md text-brand-ink leading-relaxed">{m.specialization}</p>
                  <p className="mt-2 text-body-md text-brand-ink/80 leading-relaxed">{m.experience}</p>
                  <p className="mt-4 flex flex-wrap gap-1.5">
                    <span className="sr-only">Languages: </span>
                    {m.languages.map((l) => (
                      <span key={l} className="rounded-full bg-surface-warm px-3 py-1 text-body-sm text-brand-ink">
                        {l}
                      </span>
                    ))}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
        {hasSample && (
          <p className="mt-6 text-body-sm italic text-brand-ink/60">
            Sample team profiles. Names and photos will be added once each team member has agreed.
          </p>
        )}
      </div>
    </section>
  );
}

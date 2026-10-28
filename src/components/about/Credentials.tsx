import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/data/site";
import type { Credential } from "@/types";

export function Credentials({ credentials, tips }: { credentials: Credential[]; tips: string[] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">Credentials</p>
            <h2 className="font-serif text-display-md text-brand-ink">Check us before you trust us</h2>
            <p className="mt-4 text-body-lg text-brand-ink/80 leading-relaxed">
              Every year, families in Pakistan lose Umrah savings to agencies that disappear. Whoever you book
              with, these four checks take ten minutes.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {tips.map((t, i) => (
              <Reveal as="li" key={t} delay={i * 70} className="flex gap-3 text-body-lg text-brand-ink leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                {t}
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {credentials.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <article className="rounded-card bg-surface-warm p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck size={22} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-display-sm text-brand-ink">{c.name}</h3>
                    <p className="mt-1 text-body-md font-semibold text-brand-ink/80">{c.issuer}</p>
                    <p className="mt-4 text-body-md text-brand-ink leading-relaxed">{c.meaning}</p>
                    <p className="mt-4 text-body-md text-brand-ink">
                      <span className="font-semibold">Reference: </span>
                      {c.reference ?? (
                        <a
                          href={whatsappLink(`Assalamu Alaikum, could you share your ${c.name.toLowerCase()} details?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-blue underline underline-offset-2 hover:text-brand-sky focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                        >
                          ask us for a copy on WhatsApp
                        </a>
                      )}
                    </p>
                    <p className="mt-2 text-body-sm text-brand-ink/75">{c.verifyHint}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

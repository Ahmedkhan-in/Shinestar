import { Check, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { VisaEnquiryButton } from "./VisaEnquiryButton";
import type { VisaService, VisaTypeId } from "@/types";

// Matches the chip labels in the enquiry sheet so the sheet opens pre-selected
const enquiryType: Record<VisaTypeId, string> = {
  umrah: "Umrah",
  tourist: "Tourist / visit",
  "family-visit": "Family visit",
  business: "Business",
  transit: "Transit",
};

export function VisaServices({ services }: { services: VisaService[] }) {
  return (
    <section id="services" className="bg-surface-warm py-20 md:py-28 prose-anchor">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16 items-end mb-12 md:mb-16">
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-3">What we handle</p>
            <h2 className="font-serif text-display-md text-brand-ink">Visa services we offer</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-body-lg text-brand-ink/80 leading-relaxed max-w-2xl">
              Five kinds of application, each with a different set of papers. Find yours, see what we take off
              your hands, and ask us to confirm the details for your passport.
            </p>
          </Reveal>
        </div>

        <ul className="space-y-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 70}>
              <div className="group grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)_minmax(0,0.8fr)] gap-6 lg:gap-10 rounded-card bg-white p-6 md:p-8 transition-colors duration-300 hover:bg-white/70">
                <div>
                  <h3 className="font-serif text-display-sm text-brand-ink">{s.name}</h3>
                  <p className="mt-3 text-body-md text-brand-ink/80 leading-relaxed">{s.forWho}</p>
                </div>

                <div>
                  <p className="text-body-sm font-semibold text-brand-ink mb-3">What&rsquo;s included</p>
                  <ul className="space-y-2">
                    {s.included.map((item) => (
                      <li key={item} className="flex gap-2.5 text-body-md text-brand-ink">
                        <Check size={16} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4 lg:justify-between rounded-card bg-surface-warm/70 p-5">
                  <div>
                    <p className="flex items-center gap-2 text-body-sm font-semibold text-brand-ink">
                      <Clock size={14} className="text-brand-gold-deep" aria-hidden="true" />
                      Typical processing
                    </p>
                    <p className="mt-2 text-body-md text-brand-ink/80 leading-relaxed">{s.processingGuide}</p>
                  </div>
                  <VisaEnquiryButton
                    variant="outline"
                    label={s.ctaLabel}
                    initialType={enquiryType[s.id]}
                    className="self-start bg-white"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

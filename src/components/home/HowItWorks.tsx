import { MessageCircle, FileCheck, Plane } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Share your travel plan",
    description:
      "Message us on WhatsApp with where you want to go, when, and how many travelers. No form to fill, no account to create.",
    num: "01",
  },
  {
    icon: FileCheck,
    title: "Get a tailored package",
    description:
      "We share a clear, itemised package built for your dates and budget — hotels, transfers, activities, and a transparent price breakdown.",
    num: "02",
  },
  {
    icon: Plane,
    title: "Travel with complete support",
    description:
      "From visa guidance to airport pickup, we are reachable on WhatsApp throughout your trip. You focus on the experience.",
    num: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <Reveal className="max-w-xl mb-14 md:mb-20">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
            How it works
          </p>
          <h2 className="font-serif text-display-md text-brand-ink">
            Travel without the complexity
          </h2>
          <p className="mt-4 text-body-lg text-brand-muted leading-relaxed">
            International travel and Umrah planning can feel overwhelming. We make it simple.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {steps.map(({ icon: Icon, title, description, num }, i) => (
            <Reveal key={num} delay={i * 150} direction="up">
              <div className="relative">
                  {/* Gold step number */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-gold/30 bg-brand-gold/8 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-brand-gold" />
                  </div>
                  <span className="font-serif text-display-sm text-brand-gold/50 font-light select-none">
                    {num}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-body-lg text-brand-ink mb-2">
                  {title}
                </h3>
                <p className="text-body-md text-brand-muted leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Gold accent line + CTA */}
        <Reveal delay={450} className="mt-14">
          <div className="h-px w-16 bg-brand-gold mb-8 animate-line-expand" />
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[48px]"
          >
            <MessageCircle size={16} />
            Talk to a travel consultant on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

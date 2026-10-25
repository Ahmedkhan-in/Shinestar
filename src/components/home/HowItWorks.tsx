import { MessageCircle, FileCheck, Plane } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Share your travel plan",
    description:
      "Message us on WhatsApp with where you want to go, when, and how many travelers. No form to fill, no account to create.",
    step: "One",
  },
  {
    icon: FileCheck,
    title: "Get a tailored package",
    description:
      "We share a clear, itemised package built for your dates and budget — hotels, transfers, activities, and a transparent price breakdown.",
    step: "Two",
  },
  {
    icon: Plane,
    title: "Travel with complete support",
    description:
      "From visa guidance to airport pickup, we are reachable on WhatsApp throughout your trip. You focus on the experience.",
    step: "Three",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="font-serif text-display-md text-brand-ink">
            Travel without the complexity
          </h2>
          <p className="mt-3 text-body-lg text-brand-muted">
            International travel and Umrah planning can feel overwhelming. We make it simple.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map(({ icon: Icon, title, description, step }, i) => (
            <div key={step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-5 left-[calc(100%+1.5rem)] w-[calc(100%-3rem)] h-px bg-surface-grey"
                  aria-hidden="true"
                />
              )}

              <div className="w-10 h-10 bg-brand-blue/8 rounded-full flex items-center justify-center mb-5">
                <Icon size={18} className="text-brand-blue" />
              </div>
              <h3 className="font-sans font-semibold text-body-lg text-brand-ink mb-2">
                {title}
              </h3>
              <p className="text-body-md text-brand-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white text-label font-semibold px-6 py-3 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[48px]"
          >
            <MessageCircle size={16} />
            Talk to a travel consultant on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

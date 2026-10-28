import Image from "next/image";
import { MessageCircle, Info } from "lucide-react";
import { VisaEnquiryButton } from "./VisaEnquiryButton";
import { whatsappLink } from "@/data/site";

const trust = [
  "Licensed travel agency in Karachi since 2018",
  "Every document reviewed before submission",
  "Updates and questions on WhatsApp",
  "Service fee quoted in writing, up front",
];

const reveal = (delay: number) => ({
  animation: `fadeUpReveal 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s both`,
});

export function VisaHero() {
  return (
    <section className="relative overflow-hidden bg-brand-footer pt-32 pb-12 md:pt-40 md:pb-16">
      <Image
        src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=1920&q=80&fit=crop"
        alt="A traveller reading the departures board in an airport terminal"
        fill
        priority
        className="object-cover object-center opacity-45 animate-hero-zoom"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand-footer/70" aria-hidden="true" />

      <div className="relative z-10 max-w-content mx-auto px-4 md:px-8">
        <div className="max-w-5xl">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-5" style={reveal(0)}>
            Visa assistance for Pakistani passport holders
          </p>
          <h1 className="font-serif text-display-lg md:text-display-xl text-white" style={reveal(0.1)}>
            Visas, without the guesswork
          </h1>
          <p className="mt-6 text-body-lg md:text-xl text-white/85 max-w-2xl leading-relaxed" style={reveal(0.22)}>
            From Umrah to Schengen, we tell you exactly which documents your profile needs, help you get the
            appointment, and check every page before it reaches the embassy.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3" style={reveal(0.32)}>
            <VisaEnquiryButton className="w-full sm:w-auto" />
            <a
              href={whatsappLink("Assalamu Alaikum, I'd like to speak to a visa consultant.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/40 text-white text-label font-semibold px-7 min-h-[52px] rounded-btn hover:bg-white/10 active:scale-[0.98] transition-[background-color,transform] w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Talk to a visa consultant on WhatsApp
            </a>
          </div>
        </div>

        {/* Trust row + disclaimer */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-end" style={reveal(0.45)}>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {trust.map((t) => (
              <li key={t} className="flex items-start gap-3 text-body-md text-white/90">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 rounded-card bg-white/10 p-5 text-body-sm text-white/90 leading-relaxed">
            <Info size={18} className="shrink-0 mt-0.5 text-brand-gold" aria-hidden="true" />
            <p>
              <strong className="font-semibold text-white">Please note:</strong> Shine Star helps you prepare and
              submit your application. Visas are issued only by embassies and immigration authorities, and no
              agency can guarantee approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

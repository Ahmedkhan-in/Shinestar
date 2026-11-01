import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

const reveal = (delay: number) => ({
  animation: `fadeUpReveal 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s both`,
});

const trust = ["Since 2018", "Licensed travel agency, Karachi", "WhatsApp support throughout your trip"];

export function AboutHero() {
  return (
    <section className="bg-surface-warm pt-28 md:pt-36 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-end">
        <div className="pb-0 lg:pb-24">
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold-deep mb-5" style={reveal(0)}>
            About Shine Star
          </p>
          <h1 className="font-serif text-display-lg md:text-display-xl text-brand-ink" style={reveal(0.1)}>
            Your trip, handled like family
          </h1>
          <p className="mt-6 text-body-lg md:text-xl text-brand-ink/80 leading-relaxed max-w-xl" style={reveal(0.22)}>
            A Karachi travel agency for Pakistani families. Honest planning, prices written out in full, and a
            real person on WhatsApp from your first question until you&rsquo;re home.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2" style={reveal(0.32)}>
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-body-md text-brand-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col sm:flex-row gap-3" style={reveal(0.4)}>
            <a
              href={whatsappLink("Assalamu Alaikum, I'd like to speak to someone at Shine Star.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-blue text-white text-label font-semibold px-7 min-h-[52px] rounded-btn hover:bg-brand-sky active:scale-[0.98] transition-[background-color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Talk to our team
            </a>
            <a
              href="#story"
              className="flex items-center justify-center border border-brand-blue/40 text-brand-blue text-label font-semibold px-7 min-h-[52px] rounded-btn hover:bg-brand-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              Read our story
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] lg:aspect-[4/5] -mx-4 md:mx-0 md:rounded-t-card overflow-hidden" style={reveal(0.15)}>
          <Image
            src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1200&h=1500&q=80&fit=crop"
            alt="A traveller with a suitcase silhouetted against an airport window, a plane taking off outside"
            fill
            priority
            className="object-cover animate-hero-zoom"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}

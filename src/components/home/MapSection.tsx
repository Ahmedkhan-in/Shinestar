import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// TODO: Replace with real Google Maps URL and embed for the actual office location
const MAPS_URL = "https://maps.google.com/?q=Shahrah+e+Faisal+Karachi+Pakistan";

export function MapSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Contact info */}
          <Reveal>
            <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-3">
              Visit us
            </p>
            <h2 className="font-serif text-display-md text-brand-ink mb-8">
              Find us in Karachi
            </h2>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 shrink-0 w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-body-md font-semibold text-brand-ink">Office Address</p>
                  {/* TODO: Replace with real office address */}
                  <p className="text-body-md text-brand-muted mt-1">
                    Shop 12, Travel Plaza, Shahrah-e-Faisal<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 shrink-0 w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-body-md font-semibold text-brand-ink">WhatsApp & Phone</p>
                  {/* TODO: Replace with real number */}
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded mt-1 inline-block"
                  >
                    +92 300 123 4567
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 shrink-0 w-9 h-9 bg-brand-gold/10 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-body-md font-semibold text-brand-ink">Office Hours</p>
                  <p className="text-body-md text-brand-muted mt-1">
                    Monday–Saturday: 9am – 8pm<br />
                    Sunday: 11am – 5pm
                  </p>
                </div>
              </li>
            </ul>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 border border-brand-blue/30 text-brand-blue text-label font-semibold px-5 py-3 rounded-btn hover:bg-brand-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[44px]"
            >
              <Navigation size={14} />
              Get directions
            </a>
          </Reveal>

          {/* Map — gold pin pulse placeholder */}
          <Reveal delay={150} direction="left">
            <div className="rounded-card overflow-hidden border border-surface-grey" style={{ aspectRatio: "4/3" }}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full h-full min-h-[300px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label="Open office location in Google Maps"
              >
                {/* Warm grey map placeholder */}
                <div className="absolute inset-0 bg-surface-grey flex flex-col items-center justify-center gap-4">
                  {/* Pulsing gold pin */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 animate-pin-pulse absolute" />
                    <div className="relative w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center shadow-md z-10">
                      <MapPin size={11} className="text-white fill-white" />
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-body-md font-semibold text-brand-ink">Shine Star Travel & Tours</p>
                    <p className="text-body-sm text-brand-muted mt-1">Karachi, Pakistan</p>
                  </div>

                  <span className="text-body-sm text-brand-blue font-semibold group-hover:underline transition-colors">
                    Open in Google Maps →
                  </span>
                </div>
                {/* TODO: Uncomment real Google Maps embed once iframe permission confirmed
                <iframe
                  src={MAPS_EMBED_SRC}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shine Star Travel office location"
                />
                */}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

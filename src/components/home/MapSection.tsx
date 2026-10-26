import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const MAPS_URL = "https://maps.app.goo.gl/URjwPcr9nAv2NsMu8";
// Pin coordinates from the Shine Star Travel & Tours Google Maps listing
const MAPS_EMBED_SRC = "https://maps.google.com/maps?q=24.9026756,67.1144421&z=17&output=embed";

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
                  <a
                    href="https://wa.me/923462646201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded mt-1 inline-block"
                  >
                    +92 346 2646201
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

          {/* Map — live Google Maps embed */}
          <Reveal delay={150} direction="left">
            <div
              className="relative rounded-card overflow-hidden border border-surface-grey bg-surface-grey min-h-[300px]"
              style={{ aspectRatio: "4/3" }}
            >
              <iframe
                src={MAPS_EMBED_SRC}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shine Star Travel & Tours office location"
                allowFullScreen
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white text-brand-ink text-body-sm font-semibold px-4 py-2.5 rounded-full shadow-modal hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <MapPin size={14} className="text-brand-gold" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

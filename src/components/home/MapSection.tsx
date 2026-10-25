import { MapPin, Phone, Clock, Navigation } from "lucide-react";

// TODO: Replace with real Google Maps embed URL for the actual office location
const MAPS_URL = "https://maps.google.com/?q=Shahrah+e+Faisal+Karachi+Pakistan";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7!2d67.0!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzAwLjAiTiA2N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890";

export function MapSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact info */}
          <div>
            <h2 className="font-serif text-display-md text-brand-ink mb-6">
              Find us in Karachi
            </h2>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="mt-1 shrink-0 w-9 h-9 bg-brand-blue/8 rounded-full flex items-center justify-center">
                  <MapPin size={16} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-body-md font-semibold text-brand-ink">Office Address</p>
                  {/* TODO: Replace with real office address */}
                  <p className="text-body-md text-brand-muted mt-0.5">
                    Shop 12, Travel Plaza, Shahrah-e-Faisal<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 shrink-0 w-9 h-9 bg-brand-blue/8 rounded-full flex items-center justify-center">
                  <Phone size={16} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-body-md font-semibold text-brand-ink">WhatsApp & Phone</p>
                  {/* TODO: Replace with real number */}
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
                  >
                    +92 300 123 4567
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 shrink-0 w-9 h-9 bg-brand-blue/8 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-body-md font-semibold text-brand-ink">Office Hours</p>
                  <p className="text-body-md text-brand-muted mt-0.5">
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
              className="inline-flex items-center gap-2 mt-6 border border-brand-blue text-brand-blue text-label font-semibold px-5 py-2.5 rounded-btn hover:bg-brand-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[44px]"
            >
              <Navigation size={14} />
              Get directions
            </a>
          </div>

          {/* Map */}
          <div className="rounded-card overflow-hidden border border-surface-grey" style={{ aspectRatio: "4/3" }}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full min-h-[280px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label="Open office location in Google Maps"
            >
              {/* Static map placeholder — replace with real embed or next/image static map */}
              <div className="absolute inset-0 bg-surface-grey flex flex-col items-center justify-center gap-3 text-brand-muted">
                <MapPin size={32} className="text-brand-blue" />
                <p className="text-body-md font-semibold text-brand-ink">Shine Star Travel & Tours</p>
                <p className="text-body-sm text-brand-muted">Karachi, Pakistan</p>
                <p className="text-body-sm text-brand-blue font-semibold mt-2">Click to open in Google Maps →</p>
              </div>
              {/* TODO: Uncomment and use real Google Maps embed once iframe permission confirmed */}
              {/*
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
        </div>
      </div>
    </section>
  );
}

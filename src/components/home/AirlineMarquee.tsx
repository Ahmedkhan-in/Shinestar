// Airline credibility strip — logo marquee with hover pause
import Image from "next/image";

const airlines = [
  { code: "PK", name: "PIA" },
  { code: "EK", name: "Emirates" },
  { code: "QR", name: "Qatar Airways" },
  { code: "TK", name: "Turkish Airlines" },
  { code: "EY", name: "Etihad Airways" },
  { code: "SV", name: "Saudia" },
  { code: "G9", name: "Air Arabia" },
  { code: "FZ", name: "flydubai" },
  { code: "KU", name: "Kuwait Airways" },
  { code: "WY", name: "Oman Air" },
  { code: "TG", name: "Thai Airways" },
  { code: "MH", name: "Malaysia Airlines" },
];

const doubled = [...airlines, ...airlines];

export function AirlineMarquee() {
  return (
    <section className="bg-white py-12 md:py-16 border-y border-surface-grey overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8 mb-8">
        <p className="text-eyebrow uppercase tracking-widest text-brand-muted/50 text-center">
          Travelling with trusted airlines
        </p>
      </div>

      {/* marquee-wrapper class triggers CSS pause on hover */}
      <div className="marquee-wrapper relative" aria-label="Airlines we work with">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex items-center gap-5 md:gap-7 animate-marquee">
          {doubled.map(({ code, name }, i) => (
            <div
              key={`${code}-${i}`}
              className="flex flex-col items-center justify-center shrink-0 bg-white rounded-xl border border-surface-grey hover:border-brand-gold/50 hover:shadow-card transition-all duration-300 px-7 py-5 min-w-[148px] group"
              aria-hidden={i >= airlines.length}
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src={`https://www.gstatic.com/flights/airline_logos/70px/${code}.png`}
                  alt={name}
                  width={70}
                  height={70}
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="mt-3 text-[11px] font-semibold tracking-wide text-brand-muted/60 text-center group-hover:text-brand-gold transition-colors duration-300">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

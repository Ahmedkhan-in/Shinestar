// Airline credibility strip — continuous marquee with hover pause

const airlines = [
  "PIA", "Emirates", "Qatar Airways", "Turkish Airlines",
  "Etihad Airways", "Saudia", "Air Arabia", "FlyDubai",
  "Kuwait Airways", "Oman Air", "Thai Airways", "Malaysia Airlines",
];

export function AirlineMarquee() {
  const doubled = [...airlines, ...airlines];

  return (
    <section className="bg-surface-grey py-10 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8 mb-5">
        <p className="text-eyebrow uppercase tracking-widest text-brand-muted/60 text-center">
          Travelling with trusted airlines
        </p>
      </div>

      {/* marquee-wrapper class triggers CSS pause on hover */}
      <div className="marquee-wrapper relative" aria-label="Airlines we work with">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-surface-grey to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-surface-grey to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex gap-6 md:gap-10 animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center shrink-0 px-5 py-2.5 bg-white rounded-btn border border-surface-grey hover:border-brand-gold/40 hover:text-brand-gold transition-colors duration-200"
              aria-hidden={i >= airlines.length}
            >
              <span className="font-sans text-body-sm font-semibold text-brand-muted/60 tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

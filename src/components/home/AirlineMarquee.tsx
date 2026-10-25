// Airline credibility strip — continuous marquee
// No partnership implied; logos shown as "airlines we work with"

const airlines = [
  "PIA", "Emirates", "Qatar Airways", "Turkish Airlines",
  "Etihad Airways", "Saudia", "Air Arabia", "FlyDubai",
  "Kuwait Airways", "Oman Air", "Thai Airways", "Malaysia Airlines",
];

export function AirlineMarquee() {
  // Duplicate for seamless loop
  const doubled = [...airlines, ...airlines];

  return (
    <section className="bg-surface-grey py-10 overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-8 mb-5">
        <p className="text-body-sm text-brand-muted text-center">
          Travelling with trusted airlines
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-surface-grey to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-surface-grey to-transparent z-10 pointer-events-none" aria-hidden="true" />

        <div
          className="flex gap-8 md:gap-12 animate-marquee whitespace-nowrap"
          aria-label="Airlines"
        >
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center shrink-0 px-6 py-2 bg-white rounded border border-surface-grey"
              aria-hidden={i >= airlines.length}
            >
              <span className="font-sans text-body-sm font-semibold text-brand-muted/70 tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

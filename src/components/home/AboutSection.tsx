import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image — left on desktop */}
          <div className="relative aspect-[4/3] rounded-card overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80&fit=crop"
              alt="Traveler standing at a beautiful destination arranged by Shine Star"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text — right */}
          <div>
            <h2 className="font-serif text-display-md text-brand-ink">
              Trusted with the trips that matter most
            </h2>
            <p className="mt-5 text-body-lg text-brand-muted leading-relaxed">
              Whether it is Umrah — the journey of a lifetime for most Pakistani families — or a honeymoon that marks the beginning of something new, Shine Star handles the details so the experience is what remains.
            </p>
            <p className="mt-4 text-body-lg text-brand-muted leading-relaxed">
              We work with a small number of packages, planned with care: transparent pricing with no hidden costs, hotels we have researched ourselves, and WhatsApp support from our team throughout your trip.
            </p>
            <p className="mt-4 text-body-lg text-brand-muted leading-relaxed">
              We do not compete on being the cheapest. We compete on being the most reliable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue text-white text-label font-semibold px-5 py-3 rounded-btn hover:bg-brand-sky transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[48px] flex items-center justify-center"
              >
                Talk to a travel consultant
              </a>
              <a
                href="/packages"
                className="border border-brand-blue text-brand-blue text-label font-semibold px-5 py-3 rounded-btn hover:bg-brand-blue/5 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[48px] flex items-center justify-center"
              >
                See all packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

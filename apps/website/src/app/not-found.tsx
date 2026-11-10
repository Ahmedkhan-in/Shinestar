import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";
import { CATEGORY_PAGES } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Page not found | Shine Star Tours and Travel",
  description: "This page doesn't exist or has moved. Browse Umrah, international and honeymoon packages, or message us on WhatsApp.",
  robots: { index: false },
};

const destinations = [
  ...Object.values(CATEGORY_PAGES),
  { path: "/visa", label: "Visa Assistance" },
  { path: "/reviews", label: "Reviews & Gallery" },
];

// Shown for any URL that doesn't exist, so a broken or old link still leads somewhere useful
export default function NotFound() {
  return (
    <section className="bg-brand-footer min-h-[80vh] flex items-center pt-32 pb-20">
      <div className="max-w-content mx-auto px-4 md:px-8 w-full">
        <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-4">Error 404</p>
        <h1 className="font-serif text-display-lg text-white max-w-2xl">This page took a different flight</h1>
        <p className="mt-4 text-body-lg text-white/70 max-w-xl">
          The link may be old or mistyped. Pick up your trip from one of these, or ask us directly.
        </p>

        <nav aria-label="Main sections" className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl">
          {destinations.map((d) => (
            <Link
              key={d.path}
              href={d.path}
              className="group flex items-center justify-between rounded-card border border-white/15 px-5 py-4 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span className="font-semibold">{d.label}</span>
              <ChevronRight size={18} className="text-brand-gold transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand-gold text-brand-ink text-label font-semibold px-7 min-h-[52px] rounded-btn hover:bg-brand-champagne transition-colors"
          >
            Back to home
          </Link>
          <a
            href={whatsappLink("Assalamu Alaikum, I couldn't find a page on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/35 text-white text-label font-semibold px-7 min-h-[52px] rounded-btn hover:bg-white/10 transition-colors"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

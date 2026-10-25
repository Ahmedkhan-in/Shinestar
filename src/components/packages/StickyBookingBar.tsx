"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { TripPlanner } from "@/components/planner/TripPlanner";
import type { TravelPackage } from "@/types";

interface StickyBookingBarProps {
  pkg: TravelPackage;
}

export function StickyBookingBar({ pkg }: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", handler, { passive: true });
    handler(); // check immediately
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Mobile sticky bottom bar — slides up from below */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-surface-grey px-4 py-3 flex items-center gap-3 shadow-modal transition-transform duration-300 ease-premium ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!visible}
      >
        <div className="flex-1 min-w-0">
          {pkg.startingPrice && (
            <p className="text-body-sm text-brand-muted truncate">
              From{" "}
              <span className="font-semibold text-brand-blue text-price">
                PKR {pkg.startingPrice.toLocaleString("en-PK")}
              </span>
              {pkg.isSamplePricing && (
                <span className="text-brand-muted/40 text-body-sm"> (sample)</span>
              )}
            </p>
          )}
          <p className="text-body-sm text-brand-muted truncate">{pkg.duration}</p>
        </div>
        <button
          onClick={() => setPlannerOpen(true)}
          className="shrink-0 bg-brand-blue text-white text-label font-semibold px-4 py-2.5 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[44px]"
          tabIndex={visible ? 0 : -1}
        >
          Check dates
        </button>
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-10 h-10 flex items-center justify-center bg-surface-grey rounded-btn text-brand-muted hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          aria-label="WhatsApp"
          tabIndex={visible ? 0 : -1}
        >
          <MessageCircle size={18} />
        </a>
      </div>

      {plannerOpen && (
        <TripPlanner
          config={pkg.plannerConfig}
          category={pkg.category}
          onClose={() => setPlannerOpen(false)}
        />
      )}
    </>
  );
}

// Desktop sticky booking card — placed beside content in the layout
export function DesktopBookingCard({ pkg }: StickyBookingBarProps) {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <>
      <div className="sticky top-24 bg-white rounded-card border border-surface-grey shadow-card p-6 transition-shadow duration-300 hover:shadow-card-hover">
        {pkg.startingPrice && (
          <div className="mb-5">
            <p className="text-body-sm text-brand-muted">Starting from</p>
            <p className="font-serif text-display-sm text-brand-blue mt-0.5">
              PKR {pkg.startingPrice.toLocaleString("en-PK")}
            </p>
            {pkg.isSamplePricing && (
              <p className="text-body-sm text-brand-muted/40 italic mt-0.5">Sample pricing</p>
            )}
          </div>
        )}

        <div className="space-y-2 mb-5 text-body-sm">
          <div className="flex justify-between">
            <span className="text-brand-muted">Duration</span>
            <span className="font-medium text-brand-ink">{pkg.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-brand-muted">Destination</span>
            <span className="font-medium text-brand-ink">{pkg.country}</span>
          </div>
        </div>

        {/* Gold accent line */}
        <div className="h-px bg-brand-gold/25 mb-5" />

        <button
          onClick={() => setPlannerOpen(true)}
          className="w-full bg-brand-blue text-white text-label font-semibold py-3.5 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[48px] mb-3"
        >
          Check availability for my dates
        </button>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 border border-brand-blue/30 text-brand-blue text-label font-semibold py-2.5 rounded-btn hover:bg-brand-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[44px]"
        >
          <MessageCircle size={15} />
          Message on WhatsApp
        </a>

        <p className="mt-3 text-body-sm text-brand-muted text-center">
          Response within a few hours
        </p>
      </div>

      {plannerOpen && (
        <TripPlanner
          config={pkg.plannerConfig}
          category={pkg.category}
          onClose={() => setPlannerOpen(false)}
        />
      )}
    </>
  );
}

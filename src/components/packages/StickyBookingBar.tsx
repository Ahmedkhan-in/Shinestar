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
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-surface-grey px-4 py-3 flex items-center gap-3 shadow-modal">
        <div className="flex-1 min-w-0">
          {pkg.startingPrice && (
            <p className="text-body-sm text-brand-muted truncate">
              From{" "}
              <span className="font-semibold text-brand-blue text-price">
                PKR {pkg.startingPrice.toLocaleString("en-PK")}
              </span>
              {pkg.isSamplePricing && (
                <span className="text-brand-muted/50 text-body-sm"> (sample)</span>
              )}
            </p>
          )}
          <p className="text-body-sm text-brand-muted truncate">{pkg.duration}</p>
        </div>
        <button
          onClick={() => setPlannerOpen(true)}
          className="shrink-0 bg-brand-blue text-white text-label font-semibold px-4 py-2.5 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[44px]"
        >
          Check dates
        </button>
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 w-10 h-10 flex items-center justify-center bg-surface-grey rounded-btn text-brand-muted hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      {/* Desktop sticky side card — rendered inline in the page layout */}
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
      <div className="sticky top-24 bg-white rounded-card border border-surface-grey shadow-card p-6">
        {pkg.startingPrice && (
          <div className="mb-4">
            <p className="text-body-sm text-brand-muted">Starting from</p>
            <p className="font-sans text-price text-brand-blue mt-0.5">
              PKR {pkg.startingPrice.toLocaleString("en-PK")}
            </p>
            {pkg.isSamplePricing && (
              <p className="text-body-sm text-brand-muted/50 italic mt-0.5">Sample pricing</p>
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

        <button
          onClick={() => setPlannerOpen(true)}
          className="w-full bg-brand-blue text-white text-label font-semibold py-3 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[44px] mb-3"
        >
          Check availability for my dates
        </button>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 border border-brand-blue text-brand-blue text-label font-semibold py-2.5 rounded-btn hover:bg-brand-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue min-h-[44px]"
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

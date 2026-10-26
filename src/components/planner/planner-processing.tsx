"use client";

import { useEffect } from "react";

interface PlannerProcessingProps {
  onComplete: () => void;
  /** Duration in ms — default 1800 */
  duration?: number;
}

export function PlannerProcessing({
  onComplete,
  duration = 1800,
}: PlannerProcessingProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      {/* Pulsing dots */}
      <div
        className="flex items-center gap-2 mb-8"
        role="status"
        aria-label="Preparing your estimate"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-brand-gold planner-dot-1" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-gold planner-dot-2" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-gold planner-dot-3" />
      </div>

      <h2 className="font-serif text-display-sm text-brand-ink leading-tight mb-3">
        Preparing your tailored
        <br />
        package estimate&hellip;
      </h2>

      <p className="text-body-md text-brand-muted max-w-xs leading-relaxed">
        Checking travel preferences, stay standard, and available options.
      </p>
    </div>
  );
}

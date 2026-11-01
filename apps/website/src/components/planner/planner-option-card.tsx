"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Simple chip / card (destination, passengers, duration, departure) ─────────

interface PlannerOptionCardProps {
  value: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export function PlannerOptionCard({
  label,
  selected,
  onClick,
  className,
}: PlannerOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-full text-left px-4 py-3.5 rounded-btn border text-body-md font-medium transition-all duration-200 min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
        selected
          ? "border-brand-gold bg-brand-gold/8 text-brand-ink shadow-sm scale-[1.02]"
          : "border-surface-grey text-brand-ink hover:border-brand-blue/40 hover:bg-surface-grey/50",
        className
      )}
      aria-pressed={selected}
    >
      {selected && (
        <Check
          size={12}
          className="inline-block mr-2 text-brand-gold shrink-0"
          aria-hidden="true"
        />
      )}
      {label}
    </button>
  );
}

// ─── Detailed tier card (Economy / Standard / Premium) ────────────────────────

interface StandardTierCardProps {
  value: string;
  label: string;
  description: string;
  inclusions: string[];
  selected: boolean;
  isGold?: boolean;
  onClick: () => void;
}

export function StandardTierCard({
  label,
  description,
  inclusions,
  selected,
  isGold = false,
  onClick,
}: StandardTierCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-full text-left rounded-card border transition-all duration-200 p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
        selected
          ? "border-brand-gold bg-brand-gold/8 shadow-sm"
          : isGold
          ? "border-brand-gold/30 bg-white hover:border-brand-gold/60"
          : "border-surface-grey bg-white hover:border-brand-blue/30"
      )}
      aria-pressed={selected}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={cn(
                "font-semibold text-body-md",
                isGold && !selected ? "text-brand-gold" : "text-brand-ink"
              )}
            >
              {label}
            </span>
            {isGold && (
              <span className="text-[10px] font-semibold uppercase tracking-wide text-brand-gold border border-brand-gold/40 px-1.5 py-0.5 rounded-full">
                Popular
              </span>
            )}
          </div>
          <p className="text-body-sm text-brand-muted">{description}</p>

          <ul className="mt-3 space-y-1.5">
            {inclusions.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-body-sm text-brand-ink"
              >
                <span
                  className={cn(
                    "w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0",
                    selected
                      ? "bg-brand-gold"
                      : isGold
                      ? "bg-brand-gold/30"
                      : "bg-surface-grey"
                  )}
                  aria-hidden="true"
                >
                  <Check size={8} className={selected || isGold ? "text-white" : "text-brand-muted"} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {selected && (
          <div className="shrink-0 w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center mt-0.5">
            <Check size={11} className="text-white" aria-hidden="true" />
          </div>
        )}
      </div>
    </button>
  );
}

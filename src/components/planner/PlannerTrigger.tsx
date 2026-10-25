"use client";

import { useState } from "react";
import { TripPlanner } from "./TripPlanner";
import type { PlannerConfig } from "@/types";
import { cn } from "@/lib/utils";

interface PlannerTriggerProps {
  config: PlannerConfig;
  category: "international" | "umrah" | "honeymoon";
  label?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function PlannerTrigger({
  config,
  category,
  label = "Check availability for my dates",
  variant = "primary",
  className,
}: PlannerTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "text-label font-semibold rounded-btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 px-5 py-3 min-h-[44px]",
          variant === "primary" &&
            "bg-brand-blue text-white hover:bg-brand-sky",
          variant === "secondary" &&
            "border border-brand-blue text-brand-blue hover:bg-brand-blue/5",
          variant === "ghost" && "text-brand-blue hover:underline",
          className
        )}
      >
        {label}
      </button>

      {open && (
        <TripPlanner
          config={config}
          category={category}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

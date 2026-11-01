"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Modals load on demand — their code isn't downloaded until opened
const VisaEnquirySheet = dynamic(() => import("./VisaEnquirySheet").then((m) => m.VisaEnquirySheet), { ssr: false });

interface VisaEnquiryButtonProps {
  label?: string;
  variant?: "primary" | "gold" | "outline" | "link";
  initialType?: string;
  initialDestination?: string;
  className?: string;
}

export function VisaEnquiryButton({
  label = "Check my visa requirements",
  variant = "primary",
  initialType,
  initialDestination,
  className,
}: VisaEnquiryButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "text-label font-semibold rounded-btn transition-[background-color,color,transform] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          variant === "primary" &&
            "bg-brand-blue text-white hover:bg-brand-sky px-7 min-h-[52px] focus-visible:ring-brand-blue",
          variant === "gold" &&
            "bg-brand-gold text-brand-ink hover:bg-brand-champagne px-7 min-h-[52px] focus-visible:ring-brand-gold",
          variant === "outline" &&
            "border border-brand-blue/40 text-brand-blue hover:bg-brand-blue/5 px-5 min-h-[44px] focus-visible:ring-brand-blue",
          variant === "link" &&
            "text-brand-blue hover:text-brand-sky underline-offset-4 hover:underline min-h-[44px] focus-visible:ring-brand-blue",
          className
        )}
      >
        {label}
      </button>
      {open && (
        <VisaEnquirySheet
          onClose={() => setOpen(false)}
          initialType={initialType}
          initialDestination={initialDestination}
        />
      )}
    </>
  );
}

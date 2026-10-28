"use client";

import { useState, useId } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { COUNTRY_CODES } from "./types";

// ─── Gentle phone validation ──────────────────────────────────────────────────

function isValidPhone(value: string): boolean {
  const cleaned = value.replace(/[\s\-().]/g, "");
  return /^[0-9]{9,12}$/.test(cleaned);
}

// ─── Component ────────────────────────────────────────────────────────────────

interface PlannerWhatsappStepProps {
  /** "home" = WhatsApp asked last; "landing" = WhatsApp asked first */
  mode: "home" | "landing";
  initialNumber?: string;
  initialCountryCode?: string;
  onSubmit: (number: string, countryCode: string) => void;
  /** Package / trip name shown on landing pages */
  packageName?: string;
  animationClass?: string;
  /** Copy overrides for flows other than the price planner (e.g. visa enquiry) */
  heading?: string;
  hint?: string;
  submitLabel?: string;
}

export function PlannerWhatsappStep({
  mode,
  initialNumber = "",
  initialCountryCode = "+92",
  onSubmit,
  packageName,
  animationClass,
  heading,
  hint,
  submitLabel,
}: PlannerWhatsappStepProps) {
  const [number, setNumber] = useState(initialNumber);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [touched, setTouched] = useState(false);
  const inputId = useId();
  const selectId = useId();

  const invalid = touched && number.length > 0 && !isValidPhone(number);
  const canSubmit = number.trim().length > 0 && isValidPhone(number);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (canSubmit) onSubmit(number.trim(), countryCode);
  }

  const isLanding = mode === "landing";

  return (
    <div className={animationClass}>
      {/* Heading */}
      <h2 className="font-serif text-display-sm text-brand-ink leading-tight mb-2">
        {heading ??
          (isLanding
            ? "Get your tailored package estimate"
            : "Last step — where should we send your estimate?")}
      </h2>

      {isLanding && (
        <p className="text-body-md text-brand-muted mb-6 leading-relaxed">
          Share your WhatsApp number
          {packageName ? ` for ${packageName}` : ""} and we&rsquo;ll prepare a
          package price based on your travel preferences.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Label */}
        <label
          htmlFor={inputId}
          className="block text-body-sm font-semibold text-brand-ink mb-2"
        >
          WhatsApp number
        </label>

        {/* Country code + number */}
        <div className="flex gap-2 mb-1.5">
          <label htmlFor={selectId} className="sr-only">
            Country code
          </label>
          <select
            id={selectId}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="shrink-0 border border-surface-grey rounded-btn px-3 py-3.5 text-body-md text-brand-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-shadow"
            aria-label="Country code"
          >
            {COUNTRY_CODES.map((cc) => (
              <option key={cc.code} value={cc.code}>
                {cc.flag} {cc.code}
              </option>
            ))}
          </select>

          <input
            id={inputId}
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="300 1234567"
            autoFocus
            autoComplete="tel"
            inputMode="tel"
            className={cn(
              "flex-1 border rounded-btn px-4 py-3.5 text-body-lg text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-blue transition-shadow",
              invalid
                ? "border-red-400 focus:ring-red-400"
                : "border-surface-grey"
            )}
            aria-describedby={`${inputId}-hint`}
            aria-invalid={invalid}
          />
        </div>

        {/* Helper / error */}
        <p
          id={`${inputId}-hint`}
          className={cn(
            "text-body-sm mb-6",
            invalid ? "text-red-500" : "text-brand-muted/70"
          )}
        >
          {invalid
            ? "Please enter a valid mobile number"
            : hint ?? "We'll send your estimated package details on WhatsApp. No spam."}
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={!canSubmit}
          className={cn(
            "w-full flex items-center justify-center gap-2 text-label font-semibold py-4 rounded-btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[52px]",
            canSubmit
              ? "bg-brand-blue text-white hover:bg-brand-sky"
              : "bg-surface-grey text-brand-muted cursor-not-allowed"
          )}
        >
          {submitLabel ?? (isLanding ? "Continue" : "Get my custom package price")}
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

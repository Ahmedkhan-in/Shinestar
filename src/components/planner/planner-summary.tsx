"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import type { CustomPlannerAnswers, LandingContext } from "./types";
import { STANDARD_TIERS } from "./types";
import {
  buildHomeMessage,
  buildLandingMessage,
  buildWhatsAppURL,
} from "./whatsapp-message";
import { trackPlannerEvent } from "./use-trip-planner";

interface PlannerSummaryProps {
  answers: CustomPlannerAnswers;
  context?: LandingContext;
  mode: "home" | "landing";
}

export function PlannerSummary({
  answers,
  context,
  mode,
}: PlannerSummaryProps) {
  const [sent, setSent] = useState(false);

  const selectedTier = STANDARD_TIERS.find((t) => t.value === answers.standard);
  const summaryRows = buildSummaryRows(answers, context, mode);

  function handleWhatsApp() {
    const message =
      mode === "landing" && context
        ? buildLandingMessage(answers, context)
        : buildHomeMessage(answers);

    const url = buildWhatsAppURL(message);
    window.open(url, "_blank", "noopener,noreferrer");
    trackPlannerEvent("whatsapp_click", { mode });
    setSent(true);
  }

  return (
    <div>
      {/* Confirmed answers */}
      <ul className="space-y-3.5 mb-7">
        {summaryRows.map((row, i) => (
          <li
            key={row.label}
            className="flex items-start gap-3 opacity-0"
            style={{
              animation: `fadeUpReveal 0.45s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms both`,
            }}
          >
            <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0">
              <Check
                size={10}
                className="text-brand-gold"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-body-sm text-brand-muted">{row.label}</p>
              <p className="text-body-md text-brand-ink font-medium leading-snug mt-0.5">
                {row.value}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* What's typically included */}
      {selectedTier && (
        <div
          className="bg-surface-grey rounded-card p-4 mb-6 opacity-0"
          style={{
            animation: `fadeUpReveal 0.45s cubic-bezier(0.16,1,0.3,1) ${
              summaryRows.length * 70 + 40
            }ms both`,
          }}
        >
          <p className="text-body-sm font-semibold text-brand-ink mb-2">
            Typically included at {selectedTier.label}:
          </p>
          <ul className="space-y-1.5">
            {selectedTier.inclusions.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-body-sm text-brand-muted"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Honest consultant message */}
      <p
        className="text-body-sm text-brand-muted leading-relaxed mb-6 opacity-0"
        style={{
          animation: `fadeUpReveal 0.45s cubic-bezier(0.16,1,0.3,1) ${
            summaryRows.length * 70 + 120
          }ms both`,
        }}
      >
        {sent
          ? "Almost done — press Send in WhatsApp to receive your tailored package price."
          : "Your tailored estimate is being prepared. A Shine Star travel consultant will confirm the final package price and availability on WhatsApp."}
      </p>

      {/* WhatsApp CTA */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white text-label font-semibold py-4 rounded-btn hover:bg-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 min-h-[52px]"
      >
        Receive my package price on WhatsApp
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}

// ─── Human-readable summary rows ─────────────────────────────────────────────

function buildSummaryRows(
  answers: CustomPlannerAnswers,
  context: LandingContext | undefined,
  mode: string
): Array<{ label: string; value: string }> {
  const rows: Array<{ label: string; value: string }> = [];

  if (mode === "landing" && context) {
    rows.push({ label: "Package", value: context.packageName });
  } else if (answers.destination) {
    rows.push({ label: "Destination / Trip type", value: answers.destination });
  }

  if (answers.passengers) {
    rows.push({ label: "Passengers", value: answers.passengers });
  }

  const duration = context?.fixedDuration ?? answers.duration;
  if (duration) {
    rows.push({ label: "Duration", value: duration });
  }

  if (answers.departure) {
    rows.push({ label: "Tentative departure", value: answers.departure });
  }

  if (answers.standard) {
    const tier = STANDARD_TIERS.find((t) => t.value === answers.standard);
    rows.push({
      label: "Travel standard",
      value: tier
        ? `${tier.label} — ${tier.description}`
        : answers.standard,
    });
  }

  if (answers.whatsapp) {
    rows.push({
      label: "Your WhatsApp",
      value: `${answers.countryCode ?? "+92"} ${answers.whatsapp}`,
    });
  }

  return rows;
}

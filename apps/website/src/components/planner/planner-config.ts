import type { StepId, PlannerMode, LandingContext } from "./types";

// ─── Step flow logic ──────────────────────────────────────────────────────────

/**
 * Returns the ordered list of question steps for a given planner mode.
 *
 * Home:    destination → passengers → duration → departure → standard → whatsapp
 * Landing: whatsapp → passengers → (duration if flexible) → departure → standard
 */
export function getStepFlow(
  mode: PlannerMode,
  context?: LandingContext
): StepId[] {
  if (mode === "home") {
    return [
      "destination",
      "passengers",
      "duration",
      "departure",
      "standard",
      "whatsapp",
    ];
  }

  // Landing page: WhatsApp first, skip duration for fixed-duration packages
  const steps: StepId[] = ["whatsapp", "passengers"];
  if (!context?.fixedDuration) steps.push("duration");
  steps.push("departure", "standard");
  return steps;
}

// ─── Question labels ──────────────────────────────────────────────────────────

export const STEP_QUESTIONS: Record<StepId, string> = {
  destination: "Where would you like to travel?",
  passengers: "How many passengers are travelling?",
  duration: "How many days would you like to travel?",
  departure: "When are you planning to travel?",
  standard: "What travel standard do you prefer?",
  whatsapp: "Where should we send your estimate?",
};

// ─── Option lists ─────────────────────────────────────────────────────────────

export const DESTINATION_OPTIONS = [
  { value: "Umrah", label: "Umrah" },
  { value: "Dubai", label: "Dubai" },
  { value: "Thailand", label: "Thailand" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Singapore", label: "Singapore" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Honeymoon destination", label: "Honeymoon" },
  { value: "Family holiday", label: "Family holiday" },
  { value: "Not sure yet", label: "Not sure yet" },
];

export const PASSENGERS_OPTIONS = [
  { value: "1 person", label: "Just me" },
  { value: "2 people", label: "2 people" },
  { value: "3–4 people", label: "3–4 people" },
  { value: "5–7 people", label: "5–7 people" },
  { value: "8+ people", label: "8+ / group" },
];

export const DURATION_OPTIONS = [
  { value: "3–5 days", label: "3–5 days" },
  { value: "6–7 days", label: "6–7 days" },
  { value: "8–10 days", label: "8–10 days" },
  { value: "11–14 days", label: "11–14 days" },
  { value: "15+ days", label: "15+ days" },
  { value: "Not sure yet", label: "Not sure yet" },
];

export const DEPARTURE_OPTIONS = [
  { value: "Within 30 days", label: "Next 30 days" },
  { value: "Next 2–3 months", label: "2–3 months" },
  { value: "Next 4–6 months", label: "4–6 months" },
  { value: "Flexible / not decided", label: "I'm flexible" },
];

export type OptionItem = { value: string; label: string };

export const STEP_OPTIONS: Partial<Record<StepId, OptionItem[]>> = {
  destination: DESTINATION_OPTIONS,
  passengers: PASSENGERS_OPTIONS,
  duration: DURATION_OPTIONS,
  departure: DEPARTURE_OPTIONS,
  // "standard" and "whatsapp" are handled by dedicated sub-components
};

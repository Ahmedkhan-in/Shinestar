import type { PackageCategory } from "@/types";

// ─── Core answer shape ────────────────────────────────────────────────────────

export type TravelStandard = "economy" | "standard" | "premium";
export type PlannerMode = "home" | "landing";
export type StepId =
  | "destination"
  | "passengers"
  | "duration"
  | "departure"
  | "standard"
  | "whatsapp";

/**
 * Answer keys intentionally match StepId values so that
 * `setAnswer(stepId, value)` maps directly to `answers[stepId]`.
 * "standard" is typed as string (not TravelStandard) to keep setAnswer generic.
 */
export interface CustomPlannerAnswers {
  destination?: string;
  passengers?: string;
  duration?: string;
  departure?: string;
  standard?: string; // one of TravelStandard values at runtime
  whatsapp?: string;
  countryCode?: string;
}

// ─── Landing page context (package / umrah / honeymoon detail) ────────────────

/** Provided on detail pages so the planner knows which package is being viewed. */
export interface LandingContext {
  packageName: string;
  destination: string;
  category: PackageCategory;
  /**
   * If set the planner skips the duration question and confirms the fixed
   * duration instead (e.g. Umrah 7/10/14-day packages).
   */
  fixedDuration?: string;
}

// ─── Travel standard tiers ────────────────────────────────────────────────────

export interface StandardTier {
  value: TravelStandard;
  label: string;
  description: string;
  inclusions: string[];
}

export const STANDARD_TIERS: StandardTier[] = [
  {
    value: "economy",
    label: "Economy",
    description: "Comfortable stays and essential inclusions",
    inclusions: ["3-star hotels", "Group transfers", "Basic meals included"],
  },
  {
    value: "standard",
    label: "Standard",
    description: "Better hotels, more included experiences",
    inclusions: [
      "4-star hotels",
      "Private transfers",
      "Daily breakfast & dinner",
    ],
  },
  {
    value: "premium",
    label: "Premium",
    description: "Premium hotels, private transfers, upgraded experiences",
    inclusions: [
      "5-star hotels",
      "Private transfers & guides",
      "All meals + exclusive experiences",
    ],
  },
];

// ─── Country codes ────────────────────────────────────────────────────────────

export interface CountryCodeOption {
  code: string;
  country: string;
  flag: string;
}

export const COUNTRY_CODES: CountryCodeOption[] = [
  { code: "+92", country: "PK", flag: "🇵🇰" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+44", country: "GB", flag: "🇬🇧" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
];

// ─── Planner phase ────────────────────────────────────────────────────────────

export type PlannerPhase = "questions" | "processing" | "summary";

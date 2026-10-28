import type { CustomPlannerAnswers, TravelStandard } from "./types";
import type { LandingContext } from "./types";

export const WHATSAPP_NUMBER = "923462646201";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function standardLabel(s?: string): string {
  if (s === "economy") return "Economy";
  if (s === "standard") return "Standard";
  if (s === "premium") return "Premium";
  return s ?? "";
}

function formatWA(countryCode?: string, number?: string): string | undefined {
  if (!number) return undefined;
  const code = countryCode ?? "+92";
  return `${code} ${number}`;
}

export function buildWhatsAppURL(
  message: string,
  number = WHATSAPP_NUMBER
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// ─── Home page message ────────────────────────────────────────────────────────

/**
 * Builds the WhatsApp message for the home-page planner flow.
 * Destination is selected by the user; no package is pre-known.
 */
export function buildHomeMessage(answers: CustomPlannerAnswers): string {
  const wa = formatWA(answers.countryCode, answers.whatsapp);

  const details = [
    answers.destination && `Destination / Trip type: ${answers.destination}`,
    answers.passengers && `Passengers: ${answers.passengers}`,
    answers.duration && `Duration: ${answers.duration}`,
    answers.departure && `Tentative departure: ${answers.departure}`,
    answers.standard && `Preferred standard: ${standardLabel(answers.standard)}`,
    wa && `My WhatsApp: ${wa}`,
  ]
    .filter(Boolean)
    .join("\n");

  return [
    "Assalam o Alaikum Shine Star Tours and Travel,",
    "",
    "I would like a custom package price.",
    "",
    details,
    "",
    "Please share the tailored package price, availability, itinerary and payment details.",
  ].join("\n");
}

// ─── Landing page message ─────────────────────────────────────────────────────

/**
 * Builds the WhatsApp message for package / umrah / honeymoon detail page flows.
 * The package name and destination are known from the page context.
 */
export function buildLandingMessage(
  answers: CustomPlannerAnswers,
  context: LandingContext
): string {
  const wa = formatWA(answers.countryCode, answers.whatsapp);
  const duration = context.fixedDuration ?? answers.duration;

  const details = [
    wa && `My WhatsApp: ${wa}`,
    answers.passengers && `Passengers: ${answers.passengers}`,
    duration && `Duration: ${duration}`,
    answers.departure && `Tentative departure: ${answers.departure}`,
    answers.standard && `Preferred standard: ${standardLabel(answers.standard)}`,
  ]
    .filter(Boolean)
    .join("\n");

  return [
    "Assalam o Alaikum Shine Star Tours and Travel,",
    "",
    `I'm interested in: ${context.packageName}`,
    "",
    details,
    "",
    "Please share the tailored package price, availability and booking details.",
  ].join("\n");
}

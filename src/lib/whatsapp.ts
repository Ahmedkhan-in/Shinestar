// WhatsApp deep-link generator — deterministic, no AI/backend required
// All message templates are defined here, separate from UI components.

export const WHATSAPP_NUMBER = "923462646201";

export interface PlannerAnswers {
  packageName?: string;
  destination?: string;
  travelDates?: string;
  travelers?: string;
  travelerType?: string;
  budget?: string;
  hotelPreference?: string;
  departureCity?: string;
  whatsappNumber?: string;
  experience?: string;
  [key: string]: string | undefined;
}

function line(label: string, value?: string): string {
  if (!value || value.trim() === "") return "";
  return `• ${label}: ${value}`;
}

export function buildInternationalMessage(answers: PlannerAnswers): string {
  const lines = [
    `Hi Shine Star Travel! I'd like to inquire about a package.`,
    ``,
    `*Package Interest:* ${answers.packageName ?? answers.destination ?? "International Tour"}`,
    ``,
    line("Travel Dates", answers.travelDates),
    line("Number of Travelers", answers.travelers),
    line("Traveler Type", answers.travelerType),
    line("Budget per Person", answers.budget),
    line("My WhatsApp", answers.whatsappNumber),
    ``,
    `Please share availability and pricing. Thank you.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return lines;
}

export function buildUmrahMessage(answers: PlannerAnswers): string {
  const lines = [
    `Assalamu Alaikum! I'd like to inquire about an Umrah package.`,
    ``,
    `*Package:* ${answers.packageName ?? "Umrah Package"}`,
    ``,
    line("Departure City", answers.departureCity),
    line("Number of Pilgrims", answers.travelers),
    line("Hotel Preference", answers.hotelPreference),
    line("Preferred Month", answers.travelDates),
    line("Budget Range", answers.budget),
    line("My WhatsApp", answers.whatsappNumber),
    ``,
    `Jazakallah Khair. Please share details and availability.`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return lines;
}

export function buildHoneymoonMessage(answers: PlannerAnswers): string {
  const lines = [
    `Hi Shine Star Travel! We're planning our honeymoon and would love your help.`,
    ``,
    `*Destination Interest:* ${answers.destination ?? answers.packageName ?? "Honeymoon Package"}`,
    ``,
    line("Travel Dates", answers.travelDates),
    line("Preferred Experience", answers.experience),
    line("Budget Range", answers.budget),
    line("My WhatsApp", answers.whatsappNumber),
    ``,
    `Please share your best honeymoon packages. Thank you!`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return lines;
}

export function buildWhatsAppURL(message: string, number = WHATSAPP_NUMBER): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export type MessageBuilder = (answers: PlannerAnswers) => string;

export const messageBuilders: Record<string, MessageBuilder> = {
  international: buildInternationalMessage,
  umrah: buildUmrahMessage,
  honeymoon: buildHoneymoonMessage,
};

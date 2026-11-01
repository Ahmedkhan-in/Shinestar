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
    `Hi Shine Star Tours and Travel! I'd like to inquire about a package.`,
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
    `Hi Shine Star Tours and Travel! We're planning our honeymoon and would love your help.`,
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

export interface VisaEnquiryAnswers {
  visaType?: string;
  destination?: string;
  applicants?: string;
  travelHistory?: string;
  travelMonth?: string;
  city?: string;
  whatsapp?: string;
}

export function buildVisaMessage(a: VisaEnquiryAnswers): string {
  return [
    `Assalamu Alaikum, Shine Star. I'd like to check my visa requirements.`,
    ``,
    line("Visa type", a.visaType),
    line("Country", a.destination),
    line("Applicants", a.applicants),
    line("Previous travel", a.travelHistory),
    line("Planned travel month", a.travelMonth),
    line("I live in", a.city),
    line("My WhatsApp", a.whatsapp),
    ``,
    `I hold a Pakistani passport. Please tell me which documents I need and your service fee.`,
  ]
    .filter((l, i, arr) => l !== "" || (arr[i - 1] ?? "") !== "")
    .join("\n");
}

export interface ReviewSubmission {
  name: string;
  city?: string;
  trip: string;
  travelMonth?: string;
  rating: number;
  review: string;
}

export function buildReviewMessage(r: ReviewSubmission): string {
  return [
    `Assalamu Alaikum, Shine Star. I'd like to share a review of my trip.`,
    ``,
    line("Name", r.name),
    line("City", r.city),
    line("Trip", r.trip),
    line("Travelled in", r.travelMonth),
    line("Rating", `${r.rating} out of 5`),
    ``,
    `*My review:*`,
    r.review.trim(),
    ``,
    `You may publish this on your website after checking my booking.`,
  ]
    .filter((l, i, arr) => l !== "" || (arr[i - 1] ?? "") !== "")
    .join("\n");
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

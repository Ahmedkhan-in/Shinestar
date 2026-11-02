// WhatsApp deep-link generator — deterministic, no AI/backend required
// All message templates are defined here, separate from UI components.
// The number itself lives only in data/site.ts (company.whatsappNumber).

import { whatsappLink } from "@/data/site";

function line(label: string, value?: string): string {
  if (!value || value.trim() === "") return "";
  return `• ${label}: ${value}`;
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

export function buildWhatsAppURL(message: string): string {
  return whatsappLink(message);
}

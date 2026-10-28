import type { ChecklistItem, ProcessStep, VisaTypeId } from "@/types";

export const visaTypeLabels: Record<VisaTypeId, string> = {
  umrah: "Umrah",
  tourist: "Tourist",
  "family-visit": "Family visit",
  business: "Business",
  transit: "Transit",
};

const ALL: VisaTypeId[] = ["umrah", "tourist", "family-visit", "business", "transit"];

// Pakistani documents named the way NADRA, FBR and banks issue them.
export const visaChecklist: ChecklistItem[] = [
  {
    id: "passport",
    title: "Passport with 6+ months' validity",
    detail:
      "Count six months from your return date, not your departure. Keep at least two blank pages, and bring old passports, as embassies like to see travel history.",
    appliesTo: ALL,
  },
  {
    id: "cnic",
    title: "CNIC, or B-form for children",
    detail:
      "Names and dates must match the passport letter for letter. If they don't, update NADRA records before you apply.",
    appliesTo: ["umrah", "tourist", "family-visit", "business"],
  },
  {
    id: "photos",
    title: "Photographs to the right size",
    detail:
      "Usually a white background, no glasses, ears visible, taken in the last six months. Schengen wants 35 × 45 mm; online visas want a digital file. We tell you which.",
    appliesTo: ALL,
  },
  {
    id: "frc",
    title: "Family Registration Certificate (FRC)",
    detail:
      "The NADRA FRC proves relationships when parents, children or spouses travel together. Couples should also carry the nikahnama or NADRA marriage certificate (MRC).",
    appliesTo: ["umrah", "tourist", "family-visit"],
  },
  {
    id: "vaccines",
    title: "Polio and meningitis certificates",
    detail:
      "Saudi Arabia requires a polio vaccination certificate for travellers from Pakistan and a meningitis (ACYW) certificate for Umrah. Get them from an authorised vaccination centre and keep the printout.",
    appliesTo: ["umrah"],
  },
  {
    id: "bank",
    title: "Bank statement and maintenance certificate",
    detail:
      "Normally the last 3–6 months, stamped by the bank, with a maintenance letter. A steady balance reads better than a large deposit made last week.",
    appliesTo: ["tourist", "family-visit", "business"],
  },
  {
    id: "tax",
    title: "FBR tax returns and NTN",
    detail:
      "Being on the Active Taxpayers List and attaching your last two income tax returns strengthens Schengen, Turkey and most business applications.",
    appliesTo: ["tourist", "business"],
  },
  {
    id: "employment",
    title: "Employment or business proof",
    detail:
      "Salaried: employment letter on letterhead with salary, joining date and approved leave, plus recent salary slips. Business: NTN certificate, chamber of commerce membership, and company bank statement.",
    appliesTo: ["tourist", "family-visit", "business"],
  },
  {
    id: "itinerary",
    title: "Day-by-day itinerary",
    detail:
      "A simple plan of where you will be each night. It must match the hotel bookings and the flights exactly.",
    appliesTo: ["tourist", "business", "family-visit"],
  },
  {
    id: "bookings",
    title: "Flight and hotel reservations",
    detail:
      "Genuine, verifiable reservations. Embassies do check, and we never use fake or cancelled bookings.",
    appliesTo: ["umrah", "tourist", "business", "transit"],
  },
  {
    id: "insurance",
    title: "Travel insurance",
    detail:
      "Mandatory for Schengen (minimum €30,000 medical cover) and Turkey, and strongly advised everywhere else. It must cover every day of the trip.",
    appliesTo: ["tourist", "family-visit", "business"],
  },
  {
    id: "invitation",
    title: "Invitation or sponsor letter",
    detail:
      "For family visits: the host's letter, their passport and residence permit, and proof of relationship. For business: the inviting company's letter on letterhead with dates and purpose.",
    appliesTo: ["family-visit", "business"],
  },
  {
    id: "onward",
    title: "Onward ticket and destination visa",
    detail:
      "For a transit, the onward boarding pass or e-ticket and the visa for your final destination must be in hand before you leave Pakistan.",
    appliesTo: ["transit"],
  },
];

export const visaProcess: ProcessStep[] = [
  {
    title: "Consultation and eligibility review",
    youDo: "Message us your destination, travel month, and a photo of your passport bio page.",
    weDo: "Tell you honestly whether your profile fits, which visa to apply for, and our fee, before you pay anything.",
  },
  {
    title: "Document preparation",
    youDo: "Collect the documents on your checklist and send clear scans on WhatsApp.",
    weDo: "Check every page for gaps and mismatches, draft the cover letter and itinerary, and book genuine reservations.",
  },
  {
    title: "Submission and appointment",
    youDo: "Attend your biometrics appointment if the country requires one.",
    weDo: "File the online form or prepare the visa-centre file, book the appointment slot, and brief you on what to carry.",
  },
  {
    title: "Decision and travel preparation",
    youDo: "Share the outcome with us as soon as you receive it.",
    weDo: "If approved, finalise flights, hotels and transfers. If refused, read the refusal reasons with you and advise whether and when to reapply.",
  },
];

export const visaBenefits = [
  {
    title: "Every page checked before it is submitted",
    detail:
      "Most refusals we see come from small mismatches: a different spelling, a missing stamp, a booking that does not match the itinerary. We check for them line by line.",
  },
  {
    title: "Help getting an appointment",
    detail:
      "VFS, BLS and visa-centre slots in Islamabad, Lahore and Karachi fill quickly. We watch for openings and book the slot with you.",
  },
  {
    title: "Updates on WhatsApp",
    detail:
      "You know when your file was submitted, when the passport is ready, and what happens next, without having to call and ask.",
  },
  {
    title: "Patient help for first-time applicants",
    detail:
      "If this is your first passport stamp, or you are applying for elderly parents, we explain every document in plain Urdu or English.",
  },
];

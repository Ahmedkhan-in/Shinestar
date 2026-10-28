import type { VisaService } from "@/types";

// Written for Pakistani passport holders applying from Pakistan.
// Processing guidance is an estimate only — embassies and visa centres set their own timelines.
export const visaServices: VisaService[] = [
  {
    id: "umrah",
    name: "Umrah & Hajj visa support",
    forWho:
      "Families, first-time pilgrims and elderly parents travelling for Umrah. For Hajj, we guide you through the Ministry of Religious Affairs scheme or an approved private Hajj organiser.",
    included: [
      "Umrah visa filed through an authorised Saudi Umrah partner",
      "Passport, CNIC and photo checked before filing",
      "Polio and meningitis (ACYW) certificate guidance",
      "Mahram and family-group paperwork for women and children",
      "Hotel and transport bookings matched to the visa dates",
    ],
    processingGuide: "Usually a few working days once documents and the package are confirmed.",
    ctaLabel: "Ask about an Umrah visa",
  },
  {
    id: "tourist",
    name: "Tourist / visit visas",
    forWho:
      "Couples, families and friends heading to Dubai, Thailand, Malaysia, Singapore, Sri Lanka, Turkey, Azerbaijan or Europe on holiday.",
    included: [
      "Country-specific document list for your profile",
      "Cover letter and day-by-day itinerary drafted with you",
      "Genuine hotel and flight reservations that match your itinerary",
      "Bank statement and tax return review before you submit",
      "Online form filling or visa-centre file preparation",
    ],
    processingGuide: "Ranges from 2–3 working days (e-visas) to several weeks (Schengen).",
    ctaLabel: "Check tourist visa documents",
  },
  {
    id: "family-visit",
    name: "Family visit visas",
    forWho:
      "Parents and relatives visiting family settled in the UAE, Saudi Arabia, the UK or Europe on an invitation or sponsor's documents.",
    included: [
      "Invitation and sponsor-letter wording reviewed",
      "Proof of relationship: FRC, B-form, nikahnama or MRC",
      "Sponsor's residence, salary and tenancy documents checklist",
      "Guidance for elderly parents travelling alone",
    ],
    processingGuide: "Depends on the host country and the sponsor's paperwork. We give you an estimate after reviewing it.",
    ctaLabel: "Plan a family visit",
  },
  {
    id: "business",
    name: "Business visas",
    forWho:
      "Traders, exporters and salaried professionals attending meetings, trade fairs and exhibitions abroad.",
    included: [
      "Invitation letter and event registration checked",
      "Company NTN, chamber membership and letterhead documents",
      "Employer NOC or partnership deed guidance",
      "Multiple-entry eligibility discussed where available",
    ],
    processingGuide: "Typically similar to the tourist visa for the same country, sometimes faster with a strong invitation.",
    ctaLabel: "Discuss a business trip",
  },
  {
    id: "transit",
    name: "Transit & layover guidance",
    forWho:
      "Anyone connecting through Dubai, Doha, Istanbul, Jeddah or a European airport and unsure whether a transit visa is needed.",
    included: [
      "Check of your route and layover length against current rules",
      "Advice on staying airside versus leaving the airport",
      "Transit or short-stay visa filing where it is required",
    ],
    processingGuide: "Usually answered the same day on WhatsApp; visa filing, where needed, follows the destination's timeline.",
    ctaLabel: "Check my layover",
  },
];

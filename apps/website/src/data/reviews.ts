import type { TravelerReview, TripType } from "@/types";

export const tripTypeLabels: Record<TripType, string> = {
  umrah: "Umrah",
  international: "International",
  honeymoon: "Honeymoon",
  family: "Family",
  group: "Group",
  visa: "Visa",
};

// ─────────────────────────────────────────────────────────────────────────────
// SAMPLE DATA — every review below is written for layout and tone only.
// Replace with real traveler reviews (with their permission) before launch.
// Set `verified: true` ONLY after matching the review to a booking record.
// The page shows a rating summary and AggregateRating schema only for
// verified, non-sample reviews.
// ─────────────────────────────────────────────────────────────────────────────
export const reviews: TravelerReview[] = [
  {
    id: "rv-01",
    name: "Bilal Ahmed",
    city: "Karachi",
    tripType: "umrah",
    trip: "Umrah 10 Days",
    destination: "Makkah & Madinah",
    travelMonth: "2025-03",
    rating: 5,
    quote:
      "My mother uses a wheelchair and I was worried about the walk to the Haram. They booked a hotel on the Ibrahim Khalil side and arranged a wheelchair pusher for tawaf. The Madinah hotel was a few minutes from Bab us Salam. Ammi still talks about it.",
    verified: false,
    featured: true,
    relatedHref: "/umrah/umrah-10-days",
    isSampleData: true,
  },
  {
    id: "rv-02",
    name: "Sana & Umar Khan",
    city: "Lahore",
    tripType: "honeymoon",
    trip: "Maldives Honeymoon",
    destination: "Maldives",
    travelMonth: "2025-01",
    rating: 5,
    quote:
      "We flew from Lahore via Dubai and the seaplane timing worked perfectly with our connection. The water villa was exactly the category we paid for. We checked. A small cake on the first night that we didn't ask for. Very sweet.",
    verified: false,
    featured: true,
    relatedHref: "/honeymoon/maldives-7-days",
    isSampleData: true,
  },
  {
    id: "rv-03",
    name: "Tariq Mehmood",
    city: "Karachi",
    tripType: "family",
    trip: "Dubai Family Package",
    destination: "Dubai",
    travelMonth: "2024-12",
    rating: 5,
    quote:
      "Six of us including my parents. Our flight landed late and the driver was still waiting at DXB with a sign. At 2am my son had a fever, and the team found us a pharmacy open near the hotel within ten minutes on WhatsApp.",
    verified: false,
    featured: true,
    relatedHref: "/packages/dubai-5-days",
    isSampleData: true,
  },
  {
    id: "rv-04",
    name: "Hina Siddiqui",
    city: "Islamabad",
    tripType: "international",
    trip: "Malaysia & Singapore",
    destination: "Kuala Lumpur · Singapore",
    travelMonth: "2025-02",
    rating: 4,
    quote:
      "Itinerary was well paced for the kids and every hotel was near a halal food street. One transfer in Singapore was 30 minutes late. They apologised and refunded that leg without me asking. Honest people.",
    verified: false,
    relatedHref: "/packages/malaysia-8-days",
    isSampleData: true,
  },
  {
    id: "rv-05",
    name: "Ahsan Raza",
    city: "Multan",
    tripType: "visa",
    trip: "Schengen visit visa",
    destination: "Italy",
    travelMonth: "2025-05",
    rating: 5,
    quote:
      "I had been refused once before applying myself. They went through the refusal letter, pointed out that my bank statement didn't match my salary slips, and helped me reapply properly. The second application went through.",
    verified: false,
    featured: true,
    isSampleData: true,
  },
  {
    id: "rv-06",
    name: "Ayesha Raza",
    city: "Karachi",
    tripType: "international",
    trip: "Thailand Discovery",
    destination: "Bangkok · Phuket",
    travelMonth: "2024-11",
    rating: 5,
    quote:
      "The Thai e-visa came through in about two weeks. They had sent us a list of halal restaurants near each hotel, which made it so much easier with my in-laws. Phi Phi boat day was the highlight.",
    verified: false,
    relatedHref: "/packages/thailand-7-days",
    isSampleData: true,
  },
  {
    id: "rv-07",
    name: "Muhammad Usman",
    city: "Faisalabad",
    tripType: "group",
    trip: "Umrah group, 22 pilgrims",
    destination: "Makkah & Madinah",
    travelMonth: "2025-01",
    rating: 5,
    quote:
      "I organised Umrah for our mohalla committee: 22 people, some first-time flyers. Each person got a printed card with the hotel name in Arabic and the guide's number. Nobody got lost, which with our uncles is a miracle.",
    verified: false,
    featured: true,
    relatedHref: "/umrah",
    isSampleData: true,
  },
  {
    id: "rv-08",
    name: "Fatima & Zaid",
    city: "Karachi",
    tripType: "honeymoon",
    trip: "Bali Honeymoon",
    destination: "Ubud · Seminyak",
    travelMonth: "2024-10",
    rating: 4,
    quote:
      "The Ubud villa was beautiful and very private. Seminyak hotel was fine but noisier than we expected near the beach clubs. They offered to move us, we stayed. Clear about what the package did and didn't include.",
    verified: false,
    relatedHref: "/honeymoon/bali-honeymoon-6-days",
    isSampleData: true,
  },
  {
    id: "rv-09",
    name: "Rukhsana Bibi",
    city: "Peshawar",
    tripType: "umrah",
    trip: "Umrah 14 Days",
    destination: "Makkah, Madinah & Taif",
    travelMonth: "2024-09",
    rating: 5,
    quote:
      "Travelled with my daughter and her husband. The polio and meningitis certificates were confusing for us. They explained where to get them and checked the printouts before we flew. The Taif day was a lovely surprise.",
    verified: false,
    relatedHref: "/umrah/umrah-14-days",
    isSampleData: true,
  },
  {
    id: "rv-10",
    name: "Kamran Javed",
    city: "Sialkot",
    tripType: "visa",
    trip: "UAE business visa",
    destination: "Dubai",
    travelMonth: "2025-04",
    rating: 4,
    quote:
      "Needed a visa for a trade show at short notice. They told me straight away which documents from my company would be needed and that timing was tight. It arrived two days before my flight — close, but they kept me updated daily.",
    verified: false,
    isSampleData: true,
  },
  {
    id: "rv-11",
    name: "Nadia & family",
    city: "Hyderabad",
    tripType: "family",
    trip: "Sri Lanka 6 Days",
    destination: "Kandy · Ella",
    travelMonth: "2025-06",
    rating: 5,
    quote:
      "First trip abroad with three children. The ETA took one evening. Driver in Sri Lanka spoke a little Urdu from working in the Gulf, the kids loved him. The train to Ella is worth every minute.",
    verified: false,
    relatedHref: "/packages/sri-lanka-6-days",
    isSampleData: true,
  },
  {
    id: "rv-12",
    name: "Sara & Ahmed",
    city: "Rawalpindi",
    tripType: "honeymoon",
    trip: "Turkey Honeymoon",
    destination: "Istanbul · Cappadocia",
    travelMonth: "2025-04",
    rating: 5,
    quote:
      "The Turkey visa needed more paperwork than we expected: tax returns, nikahnama, insurance. They made a checklist for us and booked our appointment in Islamabad. Balloon morning in Cappadocia, no words.",
    verified: false,
    relatedHref: "/honeymoon/turkey-honeymoon-8-days",
    isSampleData: true,
  },
];

/** Reviews that may be counted toward public ratings and schema. */
export const verifiedReviews = reviews.filter((r) => r.verified && !r.isSampleData);

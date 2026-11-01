import type { CompanyValue, Credential, Milestone, TeamMember } from "@/types";

// ─────────────────────────────────────────────────────────────────────────────
// About page content. Anything flagged isSampleData, or marked TODO, must be
// confirmed or replaced by the business before launch.
// ─────────────────────────────────────────────────────────────────────────────

export const story = [
  "For most Pakistani families, Umrah is saved for over years. A honeymoon is planned around two families' calendars. A first trip abroad with the children means a visa file, a currency nobody has handled before, and a lot of quiet worry. These are not ordinary purchases, and they should not be handled like one.",
  "Shine Star started in Karachi in 2018 with that in mind. Too many people we knew had been sold a package that looked cheaper on paper, then paid for it at the airport, at a hotel far from the Haram, or on a phone line that stopped answering once the money was transferred.",
  "So we built the agency we would want for our own parents: prices written out line by line, hotels we have researched ourselves, and a real person on WhatsApp from the first question until you land back home. We have grown from Umrah into international tours, honeymoons and visa assistance, but the way we work has not changed.",
];

// TODO: replace with the founder's own words, name and photo. Shown with a "draft" label until then.
export const founderNote = {
  name: undefined as string | undefined,
  role: "Founder, Shine Star Tours and Travel",
  photo: undefined as string | undefined,
  paragraphs: [
    "I started Shine Star because I kept hearing the same story from relatives: the package that changed after payment, the hotel that was 'walking distance' by taxi, the agent who stopped picking up in Makkah.",
    "I still look at every Umrah group's hotels and flights myself before we confirm them, and I read the WhatsApp threads when something goes wrong on a trip. If you have booked with us, my number is the same one on this website.",
  ],
  isDraft: true,
};

export const values: CompanyValue[] = [
  {
    title: "Prices you can read line by line",
    detail: "Flights, hotels, visa, transfers and our service fee, each shown separately. You can see exactly what you are paying for.",
  },
  {
    title: "No surprises at the airport",
    detail: "If something is not included, such as a city tax, a baggage fee or an expected tip, we tell you before you pay, not after you land.",
  },
  {
    title: "One person who owns your booking",
    detail: "You are not passed between departments. The consultant who quotes your trip is the one who answers when your flight is delayed.",
  },
  {
    title: "Honest advice, even if it costs us",
    detail: "If a 7-day Umrah suits your parents better than 14, or a visa is unlikely on your current documents, we say so plainly.",
  },
  {
    title: "Respect for every traveller",
    detail: "Elders who need a slower pace, women travelling in groups, first-time flyers who have never seen an airport: planned for, not tolerated.",
  },
  {
    title: "Awake while you're away",
    detail: "Our team answers on WhatsApp throughout your trip, including the late-night arrivals and early-morning check-outs.",
  },
];

/** The WhatsApp thread every client receives — an example of how a trip is communicated. */
export const howWeWork = [
  { from: "client", time: "Day 1", text: "Assalamu Alaikum, we're 4 people for Umrah in March. Parents are 68 and 72." },
  { from: "us", time: "Day 1", text: "Wa Alaikum Assalam. For your parents we'd suggest a hotel on the Ibrahim Khalil side, fewer steps to the Haram. Itemised quote below." },
  { from: "us", time: "Day 3", text: "Visa files submitted. Polio and meningitis certificates checked, all fine." },
  { from: "us", time: "Week 4", text: "Tickets, hotel vouchers and your guide's number attached. Printed cards with the hotel name in Arabic are ready for collection." },
  { from: "client", time: "In Makkah", text: "Abbu is tired, can we get a wheelchair for tawaf tomorrow?" },
  { from: "us", time: "In Makkah", text: "Arranged for 9am at the hotel lobby. The pusher's number is in this chat." },
] as const;

export const principles = [
  "Every quote is itemised and in writing before you pay.",
  "All updates come to one WhatsApp thread you can scroll back through.",
  "You get your guide's or driver's number before you fly.",
  "We confirm the day after you land, and the day after you return.",
];

// Only the founding year is confirmed. Other entries are sample milestones to edit or remove.
export const milestones: Milestone[] = [
  { year: "2018", title: "Shine Star opens in Karachi", detail: "Starting with Umrah packages for families and friends in the city.", isSampleData: false },
  { year: "2019", title: "First full Umrah group", detail: "A group journey with a dedicated guide from departure to return.", isSampleData: true },
  { year: "2022", title: "International tours", detail: "Dubai, Thailand and Malaysia packages planned for Pakistani families.", isSampleData: true },
  { year: "2023", title: "Visa assistance desk", detail: "A dedicated desk for document checks and appointment booking.", isSampleData: true },
  { year: "2024", title: "Honeymoon collection", detail: "Maldives, Bali and Turkey itineraries designed for couples.", isSampleData: true },
];

// Names are left out until each person agrees to be listed publicly.
export const team: TeamMember[] = [
  {
    id: "founder",
    role: "Founder",
    specialization: "Oversees pricing, hotel selection and every Umrah group",
    languages: ["Urdu", "English"],
    experience: "Has run Shine Star since it opened in 2018.",
    isSampleData: true,
  },
  {
    id: "umrah-desk",
    role: "Umrah & Hajj desk",
    specialization: "Umrah visas, Makkah and Madinah hotels, ziyarat and group guides",
    languages: ["Urdu", "English", "Arabic (basic)"],
    experience: "Handles families travelling with elderly parents and first-time pilgrims.",
    isSampleData: true,
  },
  {
    id: "visa-desk",
    role: "Visa consultant",
    specialization: "Document review, VFS and BLS appointments, refusal reapplications",
    languages: ["Urdu", "English", "Sindhi"],
    experience: "Reviews every file line by line before it is submitted.",
    isSampleData: true,
  },
  {
    id: "tours-desk",
    role: "International tours planner",
    specialization: "Dubai, Thailand, Malaysia, Singapore, Sri Lanka and honeymoon itineraries",
    languages: ["Urdu", "English", "Punjabi"],
    experience: "Builds itineraries around halal food, prayer times and children's pace.",
    isSampleData: true,
  },
  {
    id: "support",
    role: "On-trip support",
    specialization: "WhatsApp support during travel, transfers and last-minute changes",
    languages: ["Urdu", "English", "Pashto"],
    experience: "The person who answers when a flight is delayed or a room isn't right.",
    isSampleData: true,
  },
];

// TODO: add the real registration numbers. Remove any entry that does not apply.
export const credentials: Credential[] = [
  {
    id: "dts",
    name: "Travel agency licence",
    issuer: "Department of Tourist Services (DTS)",
    meaning: "Travel agencies in Pakistan must be licensed under the Travel Agencies Act. A licence means the agency is registered and accountable.",
    reference: undefined,
    verifyHint: "Ask any agency for its DTS licence number and check it with the department.",
  },
  {
    id: "umrah",
    name: "Umrah visa partner",
    issuer: "Saudi-authorised Umrah company",
    meaning: "Umrah visas can only be issued through companies authorised by the Saudi Ministry of Hajj and Umrah. We file through one of them.",
    reference: undefined,
    verifyHint: "Your Umrah visa printout names the Saudi company it was issued through.",
  },
];

export const verifyTips = [
  "Ask for the agency's licence number before you pay, and check it.",
  "Private Hajj can only be booked through a Hajj Group Organiser enrolled with the Ministry of Religious Affairs.",
  "Pay into a company bank account, not a personal one, and keep the written receipt.",
  "Get the full itinerary, hotel names and what is excluded in writing.",
];

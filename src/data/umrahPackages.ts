import type { TravelPackage } from "@/types";

// NOTE: All prices are sample data (isSamplePricing: true) — confirm real figures before launch.
export const umrahPackages: TravelPackage[] = [
  {
    slug: "umrah-7-days",
    category: "umrah",
    title: "Umrah 7 Days",
    destination: "Makkah · Madinah",
    country: "Saudi Arabia",
    heroImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1200&q=80&fit=crop",
    ],
    duration: "7 Days / 6 Nights",
    startingPrice: 185000,
    currency: "PKR",
    tagline: "A focused Umrah in the Two Holy Cities — planned for peace, not rush.",
    shortDescription:
      "Seven focused days in Makkah and Madinah. 3 nights near Masjid al-Haram, 3 nights near Masjid al-Nabawi, ziyarat included, full guidance throughout.",
    description:
      "The 7-day Umrah package is designed for those who want a meaningful, unhurried spiritual journey without being away from home or work for extended periods. Every detail — visa, accommodation near the Haram, ziyarat, transport — is arranged so that you can focus entirely on ibadah.",
    highlights: [
      "Hotel within walking distance of Masjid al-Haram, Makkah",
      "Hotel within 500m of Masjid al-Nabawi, Madinah",
      "Full Umrah guidance: ihram, tawaf, sa'i",
      "Makkah ziyarat (Jabal al-Noor, Jabal Thawr, Arafat, Mina)",
      "Madinah ziyarat (Masjid Quba, Masjid al-Qiblatayn, Uhud)",
      "Group Fajr to Masjid al-Nabawi",
    ],
    inclusions: [
      "Return airfare from Karachi (PIA / Saudia / Fly Nas)",
      "3 nights hotel Makkah (near Haram)",
      "3 nights hotel Madinah (near Masjid Nabawi)",
      "Daily breakfast and dinner",
      "Makkah Madinah transport (AC coach)",
      "Umrah visa processing",
      "Makkah full ziyarat",
      "Madinah full ziyarat",
      "Ihram belt and basic umrah kit",
      "Dedicated group guide throughout",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Personal expenses",
      "Additional meals",
      "Optional activities",
      "Travel insurance",
      "Qurbani (for those intending)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Karachi — Arrival in Madinah",
        description:
          "Depart Karachi. Arrive in Madinah. Transfer to hotel near Masjid al-Nabawi. Freshen up. First salah at Masjid al-Nabawi. Evening at your own pace near the Prophet's Mosque.",
        meals: ["Dinner"],
      },
      {
        day: 2,
        title: "Madinah — Ziyarat and Ibadah",
        description:
          "After Fajr: Riyad ul-Jannah if possible. Morning: Madinah ziyarat — Masjid Quba (oldest mosque in Islam), Masjid al-Qiblatayn, the date farms of Madinah, Uhud Martyrs' graves. Afternoon: Return to Masjid Nabawi for Asr and Maghrib. Evening: free for personal worship and dua.",
        meals: ["Breakfast", "Dinner"],
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80&fit=crop",
      },
      {
        day: 3,
        title: "Madinah — Ibadah Day",
        description:
          "Full day for personal ibadah. All five prayers at Masjid al-Nabawi. Free time for tawaf al-wada (farewell tawaf for Madinah), shopping at the market near the Mosque.",
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 4,
        title: "Travel to Makkah — Performing Umrah",
        description:
          "Put on ihram at the hotel before departure. Travel to Makkah via Miqat. Arrive at Masjid al-Haram. Perform Umrah: Tawaf al-Qudum, Sa'i between Safa and Marwah, halq/taqseer. First sight of the Kaaba — a moment that stays with you.",
        meals: ["Breakfast", "Dinner"],
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80&fit=crop",
      },
      {
        day: 5,
        title: "Makkah — Ibadah and Ziyarat",
        description:
          "Morning: Makkah ziyarat — Jabal al-Noor (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, Arafat. Afternoon: Back at Masjid al-Haram for salah. Evening: More tawaf at your own pace.",
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 6,
        title: "Makkah — Final Day of Ibadah",
        description:
          "Full day at Masjid al-Haram. Morning: Voluntary tawaf after Fajr. Afternoon: rest. Evening: final tawaf al-wada (farewell tawaf). Shopping near Grand Mosque for gifts.",
        meals: ["Breakfast", "Dinner"],
      },
      {
        day: 7,
        title: "Departure to Karachi",
        description:
          "Early morning transfer to Jeddah or Makkah airport. Fly back to Karachi carrying your completed Umrah.",
        meals: ["Breakfast"],
      },
    ],
    accommodations: [
      {
        name: "Makkah Hotel — Near Haram (4-star)",
        type: "City Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop",
        description:
          "Within 500m of Masjid al-Haram. Clean, air-conditioned rooms. Halal restaurant. Prayer direction marked in all rooms.",
        stars: 4,
      },
      {
        name: "Madinah Hotel — Near Nabawi (4-star)",
        type: "City Hotel",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop",
        description: "Walking distance from Masjid al-Nabawi. Zamzam water available. Breakfast and dinner buffet.",
        stars: 4,
      },
    ],
    reviews: [
      {
        id: "r-umr7-1",
        name: "Bilal Ahmed",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
        trip: "Umrah 7 Days",
        rating: 5,
        quote:
          "The hotel was a three-minute walk from the Haram. Being able to pray every salah at the Kaaba was a blessing we didn't take for granted. Shine Star's arrangement was immaculate.",
        date: "Ramadan 2024",
        isSampleData: true,
      },
    ],
    faqs: [
      {
        question: "What documents are needed for Umrah?",
        answer:
          "Valid Pakistani CNIC, Passport (minimum 6 months validity), Meningitis vaccination certificate, and 4 recent passport photographs. We provide a full checklist.",
      },
      {
        question: "Is mahram mandatory for women?",
        answer:
          "Saudi Arabia lifted the mahram requirement for women under 45 traveling with a licensed group. Women traveling alone or without mahram join our verified group Umrah with female group leader. Please confirm your situation when contacting us.",
      },
      {
        question: "When is the best time for Umrah?",
        answer:
          "Anytime outside the Hajj season (Dhul Hijja 8–13) is valid for Umrah. Ramadan Umrah carries exceptional reward but is the most crowded. January–February and October–November offer a balance of spirituality and comfort.",
      },
      {
        question: "Are hotel upgrades available?",
        answer: "Yes — 5-star hotels directly facing the Haram in Makkah and Nabawi in Madinah are available. Inquire on WhatsApp for premium options.",
      },
      {
        question: "What is included in the ziyarat?",
        answer:
          "Makkah ziyarat includes: Jabal al-Noor (Hira Cave), Jabal Thawr, Mina, Muzdalifah, and Arafat. Madinah ziyarat includes: Masjid Quba, Masjid Qiblatayn, Uhud Mountain, Baqi Cemetery, and Madinah date farms.",
      },
    ],
    plannerConfig: {
      packageName: "Umrah 7 Days",
      questions: [
        {
          id: "departureCity",
          question: "Where will you be departing from?",
          type: "chips",
          options: [
            { value: "Karachi", label: "Karachi" },
            { value: "Lahore", label: "Lahore" },
            { value: "Islamabad", label: "Islamabad" },
            { value: "Other city", label: "Other city" },
          ],
        },
        {
          id: "travelers",
          question: "How many pilgrims?",
          type: "chips",
          options: [
            { value: "1 person", label: "Just me" },
            { value: "2 people", label: "2 people (couple)" },
            { value: "3–5 people", label: "3–5 people (family)" },
            { value: "6+ people", label: "6+ people (group)" },
          ],
        },
        {
          id: "hotelPreference",
          question: "Hotel preference in Makkah?",
          type: "cards",
          options: [
            { value: "Standard (within 1km of Haram)", label: "Standard" },
            { value: "Premium (within 500m of Haram)", label: "Premium" },
            { value: "Luxury (Haram-facing 5-star)", label: "Luxury" },
          ],
        },
        {
          id: "travelDates",
          question: "Preferred travel month?",
          type: "chips",
          options: [
            { value: "Ramadan", label: "Ramadan" },
            { value: "Muharram", label: "Muharram" },
            { value: "Rabi al-Awwal", label: "Rabi al-Awwal" },
            { value: "Flexible", label: "Any month — flexible" },
          ],
        },
        {
          id: "budget",
          question: "Budget per person?",
          type: "chips",
          options: [
            { value: "PKR 160,000–200,000", label: "PKR 160k–200k" },
            { value: "PKR 200,000–260,000", label: "PKR 200k–260k" },
            { value: "PKR 260,000+", label: "PKR 260k+ (premium)" },
          ],
        },
        {
          id: "whatsappNumber",
          question: "Your WhatsApp number?",
          type: "input",
          placeholder: "e.g. 0300 1234567",
        },
      ],
    },
    seo: {
      title: "Umrah 7 Days Package from Karachi | Near Haram | Shine Star Travel",
      description:
        "7-day Umrah package from Karachi. Hotels near Masjid al-Haram and Masjid Nabawi. Full ziyarat, visa processing, dedicated guide. Plan on WhatsApp.",
      keywords: ["Umrah package Karachi", "7 days Umrah", "Umrah near Haram hotel"],
    },
    featured: true,
    badge: "Most Chosen",
    isSamplePricing: true,
  },

  // ─── Umrah 10 Days ───────────────────────────────────────────────────────────
  {
    slug: "umrah-10-days",
    category: "umrah",
    title: "Umrah 10 Days",
    destination: "Makkah · Madinah · Jeddah",
    country: "Saudi Arabia",
    heroImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1200&q=80&fit=crop",
    ],
    duration: "10 Days / 9 Nights",
    startingPrice: 235000,
    currency: "PKR",
    tagline: "Ten days — enough time to be fully present in both Holy Cities.",
    shortDescription:
      "Ten days for those who want depth, not hurry. Five nights in Makkah, four in Madinah, with full ziyarat and optional Jeddah day.",
    description:
      "The 10-day Umrah gives you time to pray all five prayers at both the Haram and Masjid al-Nabawi without the pressure of a packed schedule. Morning ziyarat, afternoons of ibadah, evenings at your own pace. This is the package most families and couples choose when Umrah is a once-in-several-years journey.",
    highlights: [
      "5 nights near Masjid al-Haram, Makkah",
      "4 nights near Masjid al-Nabawi, Madinah",
      "Multiple tawaf and sa'i with full guidance",
      "Complete Makkah and Madinah ziyarat",
      "Optional Jeddah day (Corniche, Al-Balad UNESCO site)",
      "Private group transport throughout",
    ],
    inclusions: [
      "Return airfare from Karachi",
      "5 nights hotel Makkah (near Haram)",
      "4 nights hotel Madinah (near Masjid Nabawi)",
      "Full board (breakfast and dinner daily)",
      "Makkah–Madinah coach transport",
      "Umrah visa",
      "Full ziyarat (Makkah and Madinah)",
      "Umrah guidance and group leader",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Personal expenses",
      "Optional Jeddah day tour",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Madinah", description: "Arrive in Madinah. Hotel check-in. First salah at Masjid al-Nabawi.", meals: ["Dinner"] },
      { day: 2, title: "Madinah — Ibadah and Ziyarat Part 1", description: "Morning ziyarat: Masjid Quba, Qiblatayn. Afternoon at Nabawi. Evening: Riyad ul-Jannah.", meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Madinah — Ziyarat Part 2", description: "Uhud, Baqi cemetery, Madinah date farms. All prayers at Masjid Nabawi.", meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Madinah — Full Day Ibadah", description: "Free day for personal worship at Masjid al-Nabawi.", meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Travel to Makkah — Umrah", description: "Put on ihram. Travel to Makkah. Perform Umrah: tawaf, sa'i, halq/taqseer. First sight of the Kaaba.", meals: ["Breakfast", "Dinner"], image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80&fit=crop" },
      { day: 6, title: "Makkah — Ziyarat", description: "Jabal Noor (Hira Cave), Jabal Thawr, Arafat, Mina, Muzdalifah. Return for Asr.", meals: ["Breakfast", "Dinner"] },
      { day: 7, title: "Makkah — Voluntary Tawaf", description: "Multiple voluntary tawaf throughout the day. Personal ibadah time.", meals: ["Breakfast", "Dinner"] },
      { day: 8, title: "Makkah — Ibadah Day", description: "Full day at Masjid al-Haram. Tahajjud, Fajr, all salah at the Kaaba. Dua at Multazam.", meals: ["Breakfast", "Dinner"] },
      { day: 9, title: "Makkah — Optional Jeddah", description: "Morning: shopping near Haram. Optional afternoon in Jeddah: Al-Balad historic district, Corniche. Farewell tawaf.", meals: ["Breakfast", "Dinner"] },
      { day: 10, title: "Departure", description: "Transfer to airport. Depart for Karachi.", meals: ["Breakfast"] },
    ],
    accommodations: [
      { name: "Makkah — Premium Near-Haram Hotel (4-star)", type: "City Hotel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop", description: "Within 300m of Masjid al-Haram. Haramain tower view available.", stars: 4 },
      { name: "Madinah — Near-Nabawi Hotel (4-star)", type: "City Hotel", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop", description: "5-minute walk from Masjid al-Nabawi. Zamzam water dispensers on each floor.", stars: 4 },
    ],
    reviews: [
      { id: "r-umr10-1", name: "Bilal Ahmed", trip: "Umrah 10 Days", rating: 5, quote: "Ten days felt exactly right. No rush. We prayed every salah at both mosques. Shine Star took care of everything — we just focused on worship.", date: "Ramadan 2024", isSampleData: true },
    ],
    faqs: [
      { question: "Is 10 days better than 7 days?", answer: "For most families and those doing Umrah for the first time, 10 days provides the ideal balance — enough time to complete all ziyarat, pray extensively at both Masajid, and have personal ibadah time without fatigue." },
      { question: "Can we extend to 14 days?", answer: "Yes. Our Umrah 14-day package is available for those seeking the most complete experience. Ask on WhatsApp." },
      { question: "What is included in the Umrah kit?", answer: "Men receive an ihram set (two white sheets) and a belt. Women receive prayer-appropriate garments if required. A complete duaa booklet with transliteration." },
    ],
    plannerConfig: {
      packageName: "Umrah 10 Days",
      questions: [
        { id: "departureCity", question: "Departure city?", type: "chips", options: [{ value: "Karachi", label: "Karachi" }, { value: "Lahore", label: "Lahore" }, { value: "Islamabad", label: "Islamabad" }, { value: "Other", label: "Other" }] },
        { id: "travelers", question: "Number of pilgrims?", type: "chips", options: [{ value: "1 person", label: "Just me" }, { value: "2 people", label: "Couple" }, { value: "3–5 people", label: "Family" }, { value: "6+ people", label: "Group" }] },
        { id: "hotelPreference", question: "Hotel preference?", type: "cards", options: [{ value: "Standard (4-star)", label: "Standard 4-star" }, { value: "Premium (5-star near Haram)", label: "Premium 5-star" }] },
        { id: "travelDates", question: "Preferred month?", type: "chips", options: [{ value: "Ramadan", label: "Ramadan" }, { value: "Muharram", label: "Muharram" }, { value: "Any month", label: "Any month" }] },
        { id: "budget", question: "Budget per person?", type: "chips", options: [{ value: "PKR 200,000–250,000", label: "PKR 200k–250k" }, { value: "PKR 250,000–320,000", label: "PKR 250k–320k" }, { value: "PKR 320,000+", label: "PKR 320k+" }] },
        { id: "whatsappNumber", question: "Your WhatsApp number?", type: "input", placeholder: "e.g. 0300 1234567" },
      ],
    },
    seo: {
      title: "Umrah 10 Days Package from Karachi | Shine Star Travel",
      description: "10-day Umrah from Karachi. 5 nights Makkah near Haram, 4 nights Madinah near Nabawi. Full ziyarat, visa, dedicated guide.",
    },
    featured: true,
    isSamplePricing: true,
  },

  // ─── Umrah 14 Days ───────────────────────────────────────────────────────────
  {
    slug: "umrah-14-days",
    category: "umrah",
    title: "Umrah 14 Days",
    destination: "Makkah · Madinah · Taif · Jeddah",
    country: "Saudi Arabia",
    heroImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80&fit=crop",
    ],
    duration: "14 Days / 13 Nights",
    startingPrice: 295000,
    currency: "PKR",
    tagline: "The complete Saudi journey — Makkah, Madinah, Taif, and Jeddah.",
    shortDescription:
      "Fourteen days for the complete experience: depth of worship, full ziyarat, Taif roses, and historic Jeddah.",
    description:
      "The 14-day Umrah is our most complete Saudi Arabia experience. Seven nights in Makkah allow multiple complete Umrah, extensive tawaf, and full presence at the Kaaba. Six nights in Madinah bring you into the rhythms of the Prophet's city. A Taif day and Jeddah day complete the journey beyond worship.",
    highlights: [
      "7 nights near Masjid al-Haram — perform multiple Umrah",
      "6 nights near Masjid al-Nabawi",
      "Taif — the city of roses and honey",
      "Jeddah historic Al-Balad UNESCO district",
      "Multiple guided ziyarat sessions",
      "Small group format for personal attention",
    ],
    inclusions: [
      "Return airfare from Karachi",
      "7 nights hotel Makkah (near Haram, premium option)",
      "6 nights hotel Madinah (near Nabawi)",
      "Full board throughout",
      "All local transport (AC coach)",
      "Umrah visa",
      "Complete Makkah and Madinah ziyarat",
      "Taif day excursion",
      "Jeddah Al-Balad heritage visit",
      "Small-group Umrah guide",
      "24/7 WhatsApp support",
    ],
    exclusions: ["Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Madinah", description: "Arrive, settle in. First salah at Masjid al-Nabawi.", meals: ["Dinner"] },
      { day: 2, title: "Madinah Ziyarat", description: "Full ziyarat: Quba, Qiblatayn, Uhud, Baqi, date farms.", meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Madinah Ibadah", description: "All prayers at Nabawi. Riyad ul-Jannah. Personal time.", meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Madinah — Deeper Ziyarat", description: "Less-visited sites: Masjid al-Fath, Masjid al-Ghamamah, Masjid Bilal.", meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Madinah — Rest and Ibadah", description: "Free day. Focus on tahajjud and personal dua.", meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Madinah — Final Day", description: "Morning at Nabawi. Afternoon: market shopping. Evening: farewell du'a at the Prophet's Mosque.", meals: ["Breakfast", "Dinner"] },
      { day: 7, title: "Travel to Makkah — Umrah", description: "Ihram at Miqat. Arrive Makkah. First Umrah: tawaf al-qudum, sa'i, halq.", meals: ["Breakfast", "Dinner"], image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80&fit=crop" },
      { day: 8, title: "Makkah — Ziyarat", description: "Jabal Noor, Thawr, Arafat, Mina, Muzdalifah.", meals: ["Breakfast", "Dinner"] },
      { day: 9, title: "Makkah — Second Umrah (optional)", description: "For those wishing a second Umrah, travel to Tan'im Miqat. Perform second Umrah.", meals: ["Breakfast", "Dinner"] },
      { day: 10, title: "Taif Excursion", description: "Drive to Taif — city of roses, honey, and cool mountain air. Rose farm and honey market visit. Return to Makkah.", meals: ["Breakfast", "Dinner"] },
      { day: 11, title: "Makkah — Full Ibadah Day", description: "All prayers at Masjid al-Haram. Extended personal ibadah.", meals: ["Breakfast", "Dinner"] },
      { day: 12, title: "Makkah — Night Prayers", description: "Tahajjud at the Haram. Fajr at the Kaaba. Full day of voluntary tawaf.", meals: ["Breakfast", "Dinner"] },
      { day: 13, title: "Jeddah — Al-Balad Heritage Day", description: "Morning: farewell tawaf. Afternoon in Jeddah: Al-Balad UNESCO old city, Corniche, shopping at Balad market.", meals: ["Breakfast", "Dinner"] },
      { day: 14, title: "Departure", description: "Transfer to Jeddah or Makkah airport. Fly to Karachi.", meals: ["Breakfast"] },
    ],
    accommodations: [
      { name: "Makkah — Premium Near-Haram Hotel (4–5 star)", type: "City Hotel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop", description: "Within 200m of Masjid al-Haram. Haramain view available. Premium breakfast and dinner buffet.", stars: 5 },
      { name: "Madinah — Near-Nabawi Hotel (4–5 star)", type: "City Hotel", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop", description: "5-minute walk from the Prophet's Mosque. Rooftop view. Zamzam water on all floors.", stars: 5 },
    ],
    reviews: [
      { id: "r-umr14-1", name: "Bilal Ahmed", trip: "Umrah 14 Days", rating: 5, quote: "Fourteen days gave us the time to truly be present. The Taif excursion was an unexpected highlight — roses and mountains and clean air.", date: "January 2025", isSampleData: true },
    ],
    faqs: [
      { question: "Is 14 days necessary?", answer: "Not necessary, but deeply rewarding. It is the choice of those who want extended time in both cities, multiple Umrah, and no sense of rush." },
      { question: "What is included in the Taif excursion?", answer: "A full-day road trip to Taif: rose water farm, honey market, the mountain greenery of Sa'ada, and the Taif cable car (seasonal)." },
    ],
    plannerConfig: {
      packageName: "Umrah 14 Days",
      questions: [
        { id: "departureCity", question: "Departure city?", type: "chips", options: [{ value: "Karachi", label: "Karachi" }, { value: "Lahore", label: "Lahore" }, { value: "Islamabad", label: "Islamabad" }, { value: "Other", label: "Other" }] },
        { id: "travelers", question: "Number of pilgrims?", type: "chips", options: [{ value: "1 person", label: "Just me" }, { value: "2 people", label: "Couple" }, { value: "3–5 people", label: "Family" }, { value: "6+ people", label: "Group" }] },
        { id: "hotelPreference", question: "Hotel preference?", type: "cards", options: [{ value: "Premium 4-star", label: "Premium 4-star" }, { value: "Luxury 5-star near Haram", label: "Luxury 5-star" }] },
        { id: "travelDates", question: "Preferred travel month?", type: "chips", options: [{ value: "Ramadan", label: "Ramadan" }, { value: "Muharram", label: "Muharram" }, { value: "Any month", label: "Any month" }] },
        { id: "budget", question: "Budget per person?", type: "chips", options: [{ value: "PKR 260,000–320,000", label: "PKR 260k–320k" }, { value: "PKR 320,000–400,000", label: "PKR 320k–400k" }, { value: "PKR 400,000+", label: "PKR 400k+" }] },
        { id: "whatsappNumber", question: "Your WhatsApp number?", type: "input", placeholder: "e.g. 0300 1234567" },
      ],
    },
    seo: {
      title: "Umrah 14 Days Package from Karachi | Complete Saudi Journey | Shine Star",
      description: "14-day Umrah from Karachi. Makkah, Madinah, Taif, Jeddah. Premium near-Haram hotels, full ziyarat, small group.",
    },
    featured: false,
    isSamplePricing: true,
  },
];

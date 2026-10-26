import type { TravelPackage } from "@/types";

// NOTE: All prices marked isSamplePricing: true — confirm real figures before launch.
export const internationalPackages: TravelPackage[] = [
  {
    slug: "thailand-7-days",
    category: "international",
    title: "Thailand Discovery",
    destination: "Bangkok · Pattaya · Phuket",
    country: "Thailand",
    heroImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop",
    ],
    duration: "7 Days / 6 Nights",
    startingPrice: 135000,
    currency: "PKR",
    tagline: "Bangkok, Pattaya & Island Escapes — Thailand in one complete journey.",
    shortDescription:
      "Seven days covering Bangkok's temples and skyline, Pattaya's coastal energy, and Phuket's islands. Structured but unhurried.",
    description:
      "From Bangkok's grand palaces and street-food lanes to the emerald bays of Phuket, this seven-day itinerary is built for first-time and returning Thailand visitors who want the full story — without the exhaustion of rushed transfers. Each city gets proper time; each evening is yours.",
    highlights: [
      "Grand Palace and Wat Pho, Bangkok",
      "Pattaya coastal day with coral island",
      "Phi Phi Island boat tour, Phuket",
      "Chatuchak Weekend Market",
      "James Bond Island excursion option",
      "Dedicated Urdu/English-speaking guide",
    ],
    inclusions: [
      "Return airfare from Karachi (PIA / Emirates / Thai Airways)",
      "6 nights 4-star hotel accommodation",
      "Daily breakfast",
      "Airport–hotel transfers throughout",
      "Bangkok city tour with guide",
      "Pattaya coral island excursion",
      "Phuket Phi Phi Islands boat tour",
      "Domestic flight Bangkok–Phuket",
      "Halal-friendly restaurant guidance",
      "Visa assistance and documentation support",
      "24/7 WhatsApp support during travel",
    ],
    exclusions: [
      "International return airfare (unless package states included)",
      "Personal expenses and shopping",
      "Optional activities not listed",
      "Travel insurance (strongly recommended)",
      "Meals not mentioned",
      "Tipping for guides and drivers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        description:
          "Arrive at Suvarnabhumi Airport. Transfer to your hotel in the heart of Bangkok. Check in, freshen up, and take your first walk through the illuminated streets of Sukhumvit or Silom at night.",
        meals: ["Welcome dinner — halal restaurant"],
      },
      {
        day: 2,
        title: "Bangkok — Temples and the Old City",
        description:
          "Morning visit to Wat Pho and the Grand Palace. Afternoon boat ride on the Chao Phraya River to Wat Arun. Evening: free time for Khao San Road or Asiatique night market.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80&fit=crop",
      },
      {
        day: 3,
        title: "Bangkok — Modern City and Chatuchak",
        description:
          "Morning at Chatuchak Weekend Market (Saturdays/Sundays) or MBK Center. Afternoon: Erawan Shrine and Lumpini Park. Transfer to your overnight hotel near the Pattaya road.",
        meals: ["Breakfast"],
      },
      {
        day: 4,
        title: "Pattaya — Coastal Day",
        description:
          "Drive to Pattaya (approx. 2 hours). Check in. Afternoon: Coral Island speedboat excursion with snorkelling. Evening: Walking Street or a quiet beachfront dinner.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80&fit=crop",
      },
      {
        day: 5,
        title: "Fly to Phuket",
        description:
          "Morning: Sanctuary of Truth visit. Transfer to Don Mueang Airport. Domestic flight to Phuket. Arrive, check in to beachside hotel. Evening: Patong Beach sunset walk.",
        meals: ["Breakfast"],
      },
      {
        day: 6,
        title: "Phuket — Phi Phi Islands",
        description:
          "Full-day Phi Phi Islands and Maya Bay boat tour. Snorkelling, island hopping, clear turquoise waters. Return in the late afternoon. Final evening dinner overlooking Phang Nga Bay.",
        meals: ["Breakfast", "Packed lunch on boat"],
        image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80&fit=crop",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Morning at leisure. Final breakfast. Transfer to Phuket International Airport. Depart for Karachi with your seven days of Thailand memories.",
        meals: ["Breakfast"],
      },
    ],
    accommodations: [
      {
        name: "Bangkok City Hotel (4-star)",
        type: "City Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop",
        description: "Central Bangkok location, minutes from BTS Skytrain. Clean, spacious rooms, pool, halal breakfast available.",
        stars: 4,
      },
      {
        name: "Pattaya Beachfront Hotel (4-star)",
        type: "Beachfront Hotel",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop",
        description: "Steps from Pattaya Beach. Sea-view rooms available on request. Pool and restaurant on site.",
        stars: 4,
      },
      {
        name: "Phuket Beach Resort (4-star)",
        type: "Beach Resort",
        image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80&fit=crop",
        description: "Set between the hills and the Andaman Sea. Infinity pool, tropical garden, and direct beach access.",
        stars: 4,
      },
    ],
    reviews: [
      {
        id: "r-th-1",
        name: "Ayesha Raza",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=faces",
        trip: "Thailand 7 Days",
        rating: 5,
        quote: "Every transfer was on time, every hotel was exactly as described. Shine Star made Thailand feel effortless.",
        date: "November 2024",
        isSampleData: true,
      },
      {
        id: "r-th-2",
        name: "Waqar Ali",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
        trip: "Thailand 7 Days with Family",
        rating: 5,
        quote: "Took my wife and two kids. The halal dining guidance was a huge relief. Phi Phi Islands were breathtaking.",
        date: "October 2024",
        isSampleData: true,
      },
    ],
    faqs: [
      {
        question: "Is this package suitable for families with children?",
        answer:
          "Yes. The itinerary includes family-friendly activities and pacing. We can adjust transfer timings and activity intensity on request.",
      },
      {
        question: "Is airfare included?",
        answer:
          "Airfare can be included or excluded depending on your preference. Please confirm when inquiring. The domestic Bangkok–Phuket flight is included.",
      },
      {
        question: "Do you assist with the Thailand visa?",
        answer:
          "Yes. We provide full visa documentation guidance and can assist with the online visa application. Pakistan passport holders currently enjoy visa-on-arrival or e-visa for Thailand.",
      },
      {
        question: "Are halal food options available throughout the trip?",
        answer:
          "Bangkok and Phuket have excellent halal restaurant options. We provide a curated list of verified halal dining venues for each city.",
      },
      {
        question: "Can the itinerary be customised?",
        answer:
          "Yes. We can adjust the number of days, add optional activities, upgrade accommodation, or create a private tour. Message us on WhatsApp to discuss.",
      },
      {
        question: "What documents are required?",
        answer:
          "Valid Pakistani passport (minimum 6 months validity), passport-size photographs, travel insurance, and bank statement. We'll send a full checklist after booking.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Cancellation terms vary by airline and hotel confirmation. We will share the full policy with your booking confirmation. We recommend travel insurance for flexibility.",
      },
    ],
    plannerConfig: {
      packageName: "Thailand 7 Days",
      questions: [
        {
          id: "destination",
          question: "Which destinations interest you most?",
          type: "chips",
          options: [
            { value: "Bangkok + Pattaya + Phuket", label: "Full Thailand (7 days)" },
            { value: "Bangkok + Phuket", label: "Bangkok & Phuket (5 days)" },
            { value: "Bangkok only", label: "Bangkok only" },
            { value: "Not sure yet", label: "Help me decide" },
          ],
        },
        {
          id: "travelDates",
          question: "When are you planning to travel?",
          type: "chips",
          options: [
            { value: "Within 1 month", label: "Within 1 month" },
            { value: "1–3 months", label: "1–3 months" },
            { value: "3–6 months", label: "3–6 months" },
            { value: "Flexible", label: "I'm flexible" },
          ],
        },
        {
          id: "travelers",
          question: "How many travelers are coming?",
          type: "chips",
          options: [
            { value: "1 person", label: "Just me" },
            { value: "2 people", label: "2 people (couple)" },
            { value: "3–5 people", label: "3–5 people" },
            { value: "6+ people", label: "6+ (family/group)" },
          ],
        },
        {
          id: "travelerType",
          question: "What best describes your group?",
          type: "cards",
          options: [
            { value: "Family with children", label: "Family with children" },
            { value: "Couple", label: "Couple" },
            { value: "Friends group", label: "Friends group" },
            { value: "Solo traveler", label: "Solo traveler" },
          ],
        },
        {
          id: "budget",
          question: "What is your approximate budget per person?",
          type: "chips",
          options: [
            { value: "PKR 100,000–140,000", label: "PKR 100k–140k" },
            { value: "PKR 140,000–200,000", label: "PKR 140k–200k" },
            { value: "PKR 200,000+", label: "PKR 200k+" },
            { value: "Not sure", label: "Not sure yet" },
          ],
        },
        {
          id: "whatsappNumber",
          question: "What is your WhatsApp number?",
          type: "input",
          placeholder: "e.g. 0300 1234567",
          optional: false,
        },
      ],
    },
    seo: {
      title: "Thailand 7 Days Package from Karachi | Bangkok Pattaya Phuket | Shine Star Travel",
      description:
        "7-day Thailand tour package from Karachi covering Bangkok, Pattaya, and Phuket. Includes halal dining guidance, airport transfers, and 4-star hotels. Plan yours on WhatsApp.",
      keywords: ["Thailand tour package Karachi", "Bangkok Pattaya Phuket tour", "halal Thailand trip"],
    },
    featured: true,
    badge: "Most Popular",
    isSamplePricing: true,
  },

  // ─── Malaysia ───────────────────────────────────────────────────────────────
  {
    slug: "malaysia-8-days",
    category: "international",
    title: "Malaysia Immersion",
    destination: "Kuala Lumpur · Langkawi · Cameron Highlands",
    country: "Malaysia",
    heroImage: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=80&fit=crop",
    ],
    duration: "8 Days / 7 Nights",
    startingPrice: 145000,
    currency: "PKR",
    tagline: "Muslim-friendly, halal-first — Malaysia the right way.",
    shortDescription:
      "Kuala Lumpur's modern skyline, the mist of Cameron Highlands, and Langkawi's beaches. Eight days across Malaysia's three personalities.",
    description:
      "Malaysia is one of the most Muslim-friendly destinations in the world — halal food everywhere, prayer facilities at every mall, and a culture that feels familiar and exotic at once. This eight-day tour covers the urban grandeur of KL, the cool highland escape of Cameron, and the island beaches of Langkawi.",
    highlights: [
      "Petronas Twin Towers KL Sky Bridge",
      "Batu Caves sunrise visit",
      "Cameron Highlands tea plantation tour",
      "Langkawi island and cable car",
      "Fully halal-certified hotel selections",
      "Bukit Bintang food and shopping district",
    ],
    inclusions: [
      "Return airfare from Karachi (Air Arabia / Malaysia Airlines)",
      "7 nights halal-certified hotel accommodation",
      "Daily breakfast",
      "KL–Cameron–Langkawi internal transfers",
      "Petronas Towers ticket (Skybridge)",
      "Batu Caves guided visit",
      "Cameron Highlands tea estate tour",
      "Langkawi cable car and island ferry",
      "Visa assistance and documentation",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
      "Lunch and dinner (Malaysia has abundant halal options at all budgets)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kuala Lumpur",
        description:
          "Land at KLIA. Transfer to hotel in Bukit Bintang area. Evening stroll through Jalan Alor food street — Malaysia's most famous halal street food lane.",
        meals: ["Welcome dinner guidance"],
      },
      {
        day: 2,
        title: "KL City — Twin Towers and Batu Caves",
        description:
          "Morning visit to Batu Caves (arrive before crowds). Afternoon: KLCC and Petronas Twin Towers Skybridge. Evening: Bukit Bintang shopping district.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=800&q=80&fit=crop",
      },
      {
        day: 3,
        title: "KL — Merdeka Square and Cultural Quarter",
        description:
          "Morning: Merdeka Square, Sultan Abdul Samad Building, National Mosque. Afternoon: Central Market and Chinatown for crafts and textiles. Optional: KL Tower sunset view.",
        meals: ["Breakfast"],
      },
      {
        day: 4,
        title: "Cameron Highlands",
        description:
          "Three-hour drive through stunning mountain roads. Arrive Cameron Highlands. Afternoon: BOH Tea Plantation tour. Evening: Cool highland air, strawberry farms.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=80&fit=crop",
      },
      {
        day: 5,
        title: "Cameron to Langkawi (via ferry)",
        description:
          "Morning at leisure in Cameron. Drive to Penang. Ferry to Langkawi. Check in to island resort. Sunset from the beach.",
        meals: ["Breakfast"],
      },
      {
        day: 6,
        title: "Langkawi — Cable Car and Island Tour",
        description:
          "Morning: Langkawi Cable Car to the summit of Machinchang Mountain. Afternoon: Island-hopping boat tour to Pulau Dayang Bunting and eagle feeding at Kilim Karst Geoforest.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80&fit=crop",
      },
      {
        day: 7,
        title: "Langkawi — Beach Day",
        description:
          "Full day at leisure at Cenang or Tengah Beach. Optional: Quad biking, mangrove tour, or duty-free shopping at Kuah town. Final dinner at a beachside halal restaurant.",
        meals: ["Breakfast"],
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Morning at leisure. Transfer to Langkawi International Airport. Fly home carrying eight days of halal travel.",
        meals: ["Breakfast"],
      },
    ],
    accommodations: [
      {
        name: "Kuala Lumpur City Hotel (4-star halal)",
        type: "City Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop",
        description: "Bukit Bintang location. All restaurants halal-certified. Prayer mats and Quran provided.",
        stars: 4,
      },
      {
        name: "Cameron Highlands Hill Resort (3-star)",
        type: "Hill Resort",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop",
        description: "Cosy highland property surrounded by tea gardens. Fireplace lounge, panoramic mist views.",
        stars: 3,
      },
      {
        name: "Langkawi Beach Resort (4-star)",
        type: "Beach Resort",
        image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80&fit=crop",
        description: "Set directly on Cenang Beach. Pool villa upgrade available. Halal restaurant on-site.",
        stars: 4,
      },
    ],
    reviews: [
      {
        id: "r-my-1",
        name: "Hina Siddiqui",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces",
        trip: "Malaysia & Singapore — 9 Days",
        rating: 5,
        quote: "The halal food was everywhere and excellent. Cameron Highlands was the highlight — the air, the tea, the views.",
        date: "February 2025",
        isSampleData: true,
      },
    ],
    faqs: [
      {
        question: "Is Malaysia suitable for families with elderly travelers?",
        answer: "Yes. Malaysia is very accessible. We select hotels with elevators and accessible prayer facilities.",
      },
      {
        question: "Is a visa required for Pakistani passport holders?",
        answer: "Pakistani citizens currently enjoy visa-free entry to Malaysia for up to 30 days. We confirm current requirements at booking.",
      },
      {
        question: "Is halal food available everywhere?",
        answer: "Malaysia is predominantly Muslim and halal food is available at virtually every restaurant. It is one of the most halal-friendly destinations in the world.",
      },
      {
        question: "Can I extend to Singapore?",
        answer: "Yes. We offer a Malaysia + Singapore combo (10 days) — ask for it on WhatsApp.",
      },
    ],
    plannerConfig: {
      packageName: "Malaysia 8 Days",
      questions: [
        {
          id: "destination",
          question: "Which part of Malaysia interests you most?",
          type: "chips",
          options: [
            { value: "KL + Cameron + Langkawi", label: "Full tour (8 days)" },
            { value: "KL only", label: "Kuala Lumpur only" },
            { value: "KL + Langkawi", label: "KL & Langkawi" },
            { value: "Malaysia + Singapore", label: "Add Singapore" },
          ],
        },
        {
          id: "travelDates",
          question: "When are you planning to travel?",
          type: "chips",
          options: [
            { value: "Within 1 month", label: "Within 1 month" },
            { value: "1–3 months", label: "1–3 months" },
            { value: "3–6 months", label: "3–6 months" },
            { value: "Flexible", label: "I'm flexible" },
          ],
        },
        {
          id: "travelers",
          question: "How many travelers?",
          type: "chips",
          options: [
            { value: "2 people", label: "2 people" },
            { value: "3–5 people", label: "3–5 people" },
            { value: "6+ people", label: "6+ people" },
          ],
        },
        {
          id: "budget",
          question: "Budget per person?",
          type: "chips",
          options: [
            { value: "PKR 120,000–160,000", label: "PKR 120k–160k" },
            { value: "PKR 160,000–220,000", label: "PKR 160k–220k" },
            { value: "PKR 220,000+", label: "PKR 220k+" },
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
      title: "Malaysia 8 Days Tour from Karachi | Halal-Friendly | Shine Star Travel",
      description:
        "8-day Malaysia tour covering Kuala Lumpur, Cameron Highlands, and Langkawi. Halal-certified hotels, family-friendly, transparent pricing. Plan on WhatsApp.",
    },
    featured: true,
    badge: "Halal-First",
    isSamplePricing: true,
  },

  // ─── Singapore ──────────────────────────────────────────────────────────────
  {
    slug: "singapore-5-days",
    category: "international",
    title: "Singapore City Experience",
    destination: "Singapore",
    country: "Singapore",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80&fit=crop",
    ],
    duration: "5 Days / 4 Nights",
    startingPrice: 120000,
    currency: "PKR",
    tagline: "Asia's most efficient city — seen properly, not rushed.",
    shortDescription:
      "Gardens by the Bay, Marina Bay Sands, Sentosa, and the city's neighbourhoods — five days that cover the iconic and the unexpected.",
    description:
      "Singapore rewards those who slow down enough to notice its layers — the colonial architecture of Raffles Place beside glass skyscrapers, the hawker centres beside Michelin-starred restaurants, the jungle in the middle of the city. This five-day experience covers the iconic landmarks without becoming a checklist.",
    highlights: [
      "Gardens by the Bay night show",
      "Marina Bay Sands observation deck",
      "Sentosa island and Universal Studios (optional)",
      "Chinatown, Arab Street, and Little India walks",
      "Singapore Zoo morning tour",
      "Clarke Quay riverside dinner",
    ],
    inclusions: [
      "Return airfare from Karachi",
      "4 nights 4-star hotel in central Singapore",
      "Daily breakfast",
      "Changi Airport–hotel transfers",
      "Gardens by the Bay entry (Flower Dome + Cloud Forest)",
      "Marina Bay Sands observation deck",
      "Singapore Zoo morning tour",
      "Sentosa cable car",
      "City orientation tour",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Universal Studios Singapore (optional add-on)",
      "Personal expenses",
      "Lunch and dinner (Singapore has world-class halal hawker centres)",
      "Travel insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore",
        description:
          "Land at Changi Airport (consistently voted world's best). Transfer to city hotel. Evening walk along Marina Bay.",
        meals: ["Dinner guidance at halal hawker centre"],
      },
      {
        day: 2,
        title: "Marina Bay and Gardens by the Bay",
        description:
          "Morning: Marina Bay Sands observation deck, Helix Bridge, ArtScience Museum exterior. Afternoon: Gardens by the Bay (Flower Dome and Cloud Forest). Evening: the spectacular free Garden Rhapsody light show.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80&fit=crop",
      },
      {
        day: 3,
        title: "Zoo and Cultural Quarters",
        description:
          "Morning: Singapore Zoo (among Asia's finest). Afternoon: Chinatown, Arab Street (Masjid Sultan), Little India. Evening: Clarke Quay riverside.",
        meals: ["Breakfast"],
      },
      {
        day: 4,
        title: "Sentosa Island",
        description:
          "Full day on Sentosa. Cable car crossing, S.E.A. Aquarium, Palawan Beach. Optional: Universal Studios Singapore (additional cost). Evening back in the city.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80&fit=crop",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Morning shopping at Orchard Road or Mustafa Centre (best for last-minute halal goods and spices). Transfer to Changi Airport. Depart.",
        meals: ["Breakfast"],
      },
    ],
    accommodations: [
      {
        name: "Singapore City Hotel (4-star)",
        type: "City Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop",
        description: "Central location near Marina Bay. Modern rooms, excellent transport links. Halal breakfast available.",
        stars: 4,
      },
    ],
    reviews: [
      {
        id: "r-sg-1",
        name: "Hina Siddiqui",
        trip: "Malaysia & Singapore",
        rating: 5,
        quote: "Singapore was stunning. Gardens by the Bay at night is unlike anything I've seen. Shine Star made the transition from Malaysia seamless.",
        date: "February 2025",
        isSampleData: true,
      },
    ],
    faqs: [
      {
        question: "Do I need a visa for Singapore?",
        answer: "Pakistani passport holders require a visa for Singapore. We handle the full visa application process.",
      },
      {
        question: "Is Singapore safe for solo travelers?",
        answer: "Singapore is consistently ranked among the safest cities in the world, for all travelers including solo women.",
      },
      {
        question: "Can I combine this with Malaysia?",
        answer: "Yes. Our Malaysia + Singapore (10 days) combo is one of our most popular itineraries.",
      },
    ],
    plannerConfig: {
      packageName: "Singapore 5 Days",
      questions: [
        {
          id: "travelDates",
          question: "When do you plan to travel?",
          type: "chips",
          options: [
            { value: "Within 1 month", label: "Within 1 month" },
            { value: "1–3 months", label: "1–3 months" },
            { value: "3–6 months", label: "3–6 months" },
            { value: "Flexible", label: "I'm flexible" },
          ],
        },
        {
          id: "travelers",
          question: "Number of travelers?",
          type: "chips",
          options: [
            { value: "1 person", label: "Just me" },
            { value: "2 people", label: "2 people" },
            { value: "3–5 people", label: "3–5 people" },
            { value: "6+ people", label: "6+ people" },
          ],
        },
        {
          id: "budget",
          question: "Budget per person?",
          type: "chips",
          options: [
            { value: "PKR 100,000–130,000", label: "PKR 100k–130k" },
            { value: "PKR 130,000–180,000", label: "PKR 130k–180k" },
            { value: "PKR 180,000+", label: "PKR 180k+" },
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
      title: "Singapore 5 Days Tour Package from Karachi | Shine Star Travel",
      description: "5-day Singapore package from Karachi. Gardens by the Bay, Marina Bay Sands, Sentosa. Visa assistance included.",
    },
    featured: false,
    isSamplePricing: true,
  },

  // ─── Sri Lanka ───────────────────────────────────────────────────────────────
  {
    slug: "sri-lanka-6-days",
    category: "international",
    title: "Sri Lanka Discovery",
    destination: "Colombo · Kandy · Sigiriya · Galle",
    country: "Sri Lanka",
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1200&q=80&fit=crop",
    ],
    duration: "6 Days / 5 Nights",
    startingPrice: 105000,
    currency: "PKR",
    tagline: "The Pearl of the Indian Ocean — ancient, wild, and unhurried.",
    shortDescription:
      "Six days from the colonial streets of Galle to Sigiriya's rock fortress and Kandy's sacred temple. Sri Lanka at its most essential.",
    description:
      "Sri Lanka packs extraordinary variety into a small island: ancient ruins, jungle wildlife, tea country, colonial harbour towns, and warm Indian Ocean beaches. This six-day tour is designed to cover the essential triangle without exhausting you with three-hour drives every day.",
    highlights: [
      "Sigiriya Rock Fortress — UNESCO World Heritage Site",
      "Dambulla Cave Temple",
      "Kandy Temple of the Tooth Relic",
      "Ella scenic train journey",
      "Galle Dutch Fort coastal walk",
      "Whale watching at Mirissa (seasonal)",
    ],
    inclusions: [
      "Return airfare from Karachi",
      "5 nights hotel accommodation",
      "Daily breakfast",
      "Private air-conditioned vehicle with driver-guide throughout",
      "Sigiriya entrance fees",
      "Dambulla Cave Temple entry",
      "Kandy Temple of the Tooth entry",
      "Galle Fort guided walk",
      "Scenic Ella train ticket",
      "Visa assistance",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Whale watching tour (seasonal, optional)",
      "Personal expenses",
      "Travel insurance",
      "Meals not mentioned",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo",
        description: "Arrive at Bandaranaike International Airport. Transfer to Colombo city hotel. Evening at Galle Face Green.",
        meals: ["Dinner guidance"],
      },
      {
        day: 2,
        title: "Colombo to Dambulla and Sigiriya",
        description: "Drive north. Visit Dambulla Cave Temple. Continue to Sigiriya — climb the legendary Rock Fortress. Overnight near Sigiriya.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&fit=crop",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        description: "Morning: Minneriya or Kaudulla National Park jeep safari (optional). Drive to Kandy. Evening: Temple of the Tooth Relic puja ceremony.",
        meals: ["Breakfast"],
      },
      {
        day: 4,
        title: "Kandy to Ella — Scenic Train",
        description: "Board the famous Kandy–Ella train through emerald tea country. Nine Arches Bridge walk in Ella. Afternoon at leisure.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=800&q=80&fit=crop",
      },
      {
        day: 5,
        title: "Galle and Southern Coast",
        description: "Drive to the south coast. Guided walk through Galle Dutch Fort. Afternoon at Unawatuna or Mirissa Beach.",
        meals: ["Breakfast"],
      },
      {
        day: 6,
        title: "Departure",
        description: "Drive to Colombo. Optional: brief Colombo city tour. Transfer to airport. Depart.",
        meals: ["Breakfast"],
      },
    ],
    accommodations: [
      {
        name: "Colombo City Hotel (3-star)",
        type: "City Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop",
        description: "Centrally located near Colombo's main attractions.",
        stars: 3,
      },
      {
        name: "Sigiriya Jungle Lodge (3-star)",
        type: "Jungle Lodge",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop",
        description: "Set in tropical gardens near the rock fortress. Pool and open-air restaurant.",
        stars: 3,
      },
    ],
    reviews: [
      {
        id: "r-sl-1",
        name: "Zainab Khan",
        trip: "Sri Lanka 6 Days",
        rating: 5,
        quote: "Sigiriya is absolutely magnificent. The private vehicle throughout made everything so convenient. Shine Star's arrangement was flawless.",
        date: "March 2025",
        isSampleData: true,
      },
    ],
    faqs: [
      {
        question: "Is Sri Lanka safe for Pakistani tourists?",
        answer: "Sri Lanka is a safe and welcoming destination. The tourist infrastructure is well-developed and Pakistani travellers are warmly received.",
      },
      {
        question: "Do I need a visa?",
        answer: "Pakistani passport holders require an Electronic Travel Authorization (ETA) for Sri Lanka. We manage this as part of the package.",
      },
    ],
    plannerConfig: {
      packageName: "Sri Lanka 6 Days",
      questions: [
        {
          id: "travelDates",
          question: "When do you plan to travel?",
          type: "chips",
          options: [
            { value: "Within 1 month", label: "Within 1 month" },
            { value: "1–3 months", label: "1–3 months" },
            { value: "Flexible", label: "I'm flexible" },
          ],
        },
        {
          id: "travelers",
          question: "Number of travelers?",
          type: "chips",
          options: [
            { value: "2 people", label: "2 people" },
            { value: "3–5 people", label: "Family (3–5)" },
            { value: "6+ people", label: "Group (6+)" },
          ],
        },
        {
          id: "budget",
          question: "Budget per person?",
          type: "chips",
          options: [
            { value: "PKR 90,000–120,000", label: "PKR 90k–120k" },
            { value: "PKR 120,000–160,000", label: "PKR 120k–160k" },
            { value: "PKR 160,000+", label: "PKR 160k+" },
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
      title: "Sri Lanka 6 Days Tour from Karachi | Sigiriya Kandy Galle | Shine Star Travel",
      description: "6-day Sri Lanka tour package from Karachi. Sigiriya, Kandy, Galle, scenic Ella train. Private vehicle throughout.",
    },
    featured: false,
    isSamplePricing: true,
  },

  // ─── Dubai ───────────────────────────────────────────────────────────────────
  {
    slug: "dubai-5-days",
    category: "international",
    title: "Dubai Family & Couples Package",
    destination: "Dubai",
    country: "UAE",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80&fit=crop",
    ],
    duration: "5 Days / 4 Nights",
    startingPrice: 95000,
    currency: "PKR",
    tagline: "Dubai properly — from the desert to the 124th floor.",
    shortDescription:
      "Burj Khalifa, desert safari, Dubai Frame, Dubai Mall, and the Creek. Five days covering Dubai's range without the rushed-tourist feeling.",
    description:
      "Dubai is more than skyscrapers and malls — it is a city where old pearl-diving creeks sit beside the tallest building on earth. This five-day package is built for Pakistani families and couples who want to see the full range: the heritage of Al Fahidi, the spectacle of Downtown, the calm of the desert, and the energy of the city's food scene.",
    highlights: [
      "Burj Khalifa At the Top (Level 124)",
      "Dubai Frame — old city meets new",
      "Desert safari with dune bashing and dinner",
      "Dubai Creek dhow dinner cruise",
      "Dubai Mall and Dubai Fountain show",
      "Al Fahidi Historical Neighbourhood walk",
    ],
    inclusions: [
      "Return airfare from Karachi (Emirates / PIA / Fly Dubai)",
      "4 nights 4-star hotel in Downtown or DIFC area",
      "Daily breakfast",
      "Airport transfers",
      "Burj Khalifa At the Top ticket (Level 124)",
      "Desert safari with dinner (evening)",
      "Dubai Creek dhow dinner cruise",
      "Dubai Frame entry",
      "City tour",
      "Visa assistance",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Personal shopping",
      "Dubai Parks and Resorts (optional add-on)",
      "Travel insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        description: "Land at DXB or DWC. Hotel check-in. Evening at Dubai Mall and Dubai Fountain water show.",
        meals: ["Dinner guidance"],
      },
      {
        day: 2,
        title: "Downtown Dubai and Burj Khalifa",
        description: "Morning: Al Fahidi Historical Neighbourhood, Gold Souk, Spice Souk. Afternoon: Burj Khalifa At the Top. Evening: Dubai Fountain show.",
        meals: ["Breakfast"],
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&fit=crop",
      },
      {
        day: 3,
        title: "Desert Safari",
        description: "Morning at leisure. Afternoon: depart for the desert. Dune bashing, camel ride, henna, and a Bedouin-style camp dinner under the stars.",
        meals: ["Breakfast", "Desert camp dinner"],
        image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80&fit=crop",
      },
      {
        day: 4,
        title: "Dubai Frame and Dhow Cruise",
        description: "Morning: Dubai Frame. Afternoon: Beach time at JBR or Kite Beach. Evening: Dubai Creek dhow dinner cruise.",
        meals: ["Breakfast", "Dhow dinner"],
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning: Global Village (seasonal) or Ibn Battuta Mall. Transfer to airport. Depart.",
        meals: ["Breakfast"],
      },
    ],
    accommodations: [
      {
        name: "Downtown Dubai Hotel (4-star)",
        type: "City Hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop",
        description: "Walking distance to Dubai Mall and Burj Khalifa. Rooftop pool, halal dining.",
        stars: 4,
      },
    ],
    reviews: [
      {
        id: "r-dxb-1",
        name: "Tariq Mehmood",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces",
        trip: "Dubai Family 5 Days",
        rating: 5,
        quote: "Took my family of six. Elderly parents loved it — accessible and comfortable. The desert safari was the highlight for the kids.",
        date: "December 2024",
        isSampleData: true,
      },
    ],
    faqs: [
      {
        question: "Do I need a visa for Dubai?",
        answer: "Pakistan passport holders require a UAE visa. We assist with the full visa application process including document preparation.",
      },
      {
        question: "Is Dubai family-friendly?",
        answer: "Absolutely. Dubai is one of the safest and most family-friendly destinations in the world, with world-class facilities for all ages.",
      },
    ],
    plannerConfig: {
      packageName: "Dubai 5 Days",
      questions: [
        {
          id: "travelDates",
          question: "When do you plan to visit Dubai?",
          type: "chips",
          options: [
            { value: "Within 1 month", label: "Within 1 month" },
            { value: "1–3 months", label: "1–3 months" },
            { value: "3–6 months", label: "3–6 months" },
            { value: "Flexible", label: "I'm flexible" },
          ],
        },
        {
          id: "travelers",
          question: "Number of travelers?",
          type: "chips",
          options: [
            { value: "2 people", label: "2 people" },
            { value: "3–5 people", label: "Family (3–5)" },
            { value: "6+ people", label: "Group (6+)" },
          ],
        },
        {
          id: "travelerType",
          question: "What type of trip?",
          type: "cards",
          options: [
            { value: "Family holiday", label: "Family holiday" },
            { value: "Couple / honeymoon", label: "Couple / honeymoon" },
            { value: "Friends trip", label: "Friends trip" },
            { value: "Business + leisure", label: "Business + leisure" },
          ],
        },
        {
          id: "budget",
          question: "Budget per person?",
          type: "chips",
          options: [
            { value: "PKR 80,000–110,000", label: "PKR 80k–110k" },
            { value: "PKR 110,000–160,000", label: "PKR 110k–160k" },
            { value: "PKR 160,000+", label: "PKR 160k+" },
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
      title: "Dubai 5 Days Package from Karachi | Family & Couples | Shine Star Travel",
      description: "5-day Dubai tour from Karachi. Burj Khalifa, desert safari, dhow cruise. Visa assistance included. Halal-friendly.",
    },
    featured: true,
    isSamplePricing: true,
  },
];

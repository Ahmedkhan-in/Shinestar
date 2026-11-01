import type { TravelPackage } from "@/types";

// NOTE: All prices are sample data (isSamplePricing: true) — confirm before launch.
export const honeymoonPackages: TravelPackage[] = [
  {
    slug: "maldives-7-days",
    category: "honeymoon",
    title: "Maldives Island Escape",
    destination: "North Malé Atoll · South Ari Atoll",
    country: "Maldives",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=1200&q=80&fit=crop",
    ],
    duration: "7 Days / 6 Nights",
    startingPrice: 320000,
    currency: "PKR",
    tagline: "Overwater villas, coral reefs, and nothing to do but be together.",
    shortDescription:
      "Six nights across two Maldivian atolls. A water villa, private snorkelling, sunset dolphin cruise, and a candlelit beach dinner arranged for you.",
    description:
      "The Maldives needs no introduction — it is the honeymoon that couples dream of. What Shine Star adds is the knowledge of which island suits your budget, which transfer is worth the cost, and how to have the experience without paying for things that won't add to it. This seven-day escape is curated for Pakistani couples: halal food available, prayer facilities on island, and the privacy you came for.",
    highlights: [
      "Overwater villa or water bungalow with direct lagoon access",
      "Private snorkelling on house reef",
      "Sunset dolphin watching cruise",
      "Couple's candlelit beach dinner (arranged)",
      "Speedboat or seaplane transfer",
      "Underwater glass-floor dining experience",
    ],
    inclusions: [
      "Return airfare Karachi–Malé",
      "Malé to island speedboat or domestic flight transfer",
      "6 nights overwater or beach villa",
      "Daily breakfast and dinner (half board)",
      "Dolphin cruise (sunset)",
      "Snorkelling equipment and guided reef tour",
      "Couple's beach dinner (one evening)",
      "Airport transfers in Malé",
      "Honeymooner room décor and flower arrangement",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Personal spa treatments",
      "Diving courses (optional add-on)",
      "Seaplane upgrade (quoted on request)",
      "Travel insurance",
      "Additional excursions",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Malé — Transfer to Island", description: "Fly to Velana International Airport, Malé. Meet your Shine Star representative. Speedboat or seaplane transfer to your resort island. Check in. First sunset from the villa deck.", meals: ["Dinner"] },
      { day: 2, title: "Your Island — Reef Snorkelling", description: "Breakfast on the water villa deck. Morning guided snorkelling on the house reef — turtles, rays, and reef sharks are common. Afternoon: float, read, simply be. Sunset: couple's beach walk.", meals: ["Breakfast", "Dinner"], image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80&fit=crop" },
      { day: 3, title: "Dolphin Cruise and Sandbank", description: "Morning at leisure. Afternoon: sunset dolphin watching cruise on a traditional dhoni. Optional stop at a sandbank. Return under stars.", meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Couple's Beach Dinner", description: "Lazy morning at the pool or villa. Afternoon: spa (optional, own cost). Evening: private candlelit beach dinner on the shore — arranged by Shine Star.", meals: ["Breakfast", "Arranged dinner"] },
      { day: 5, title: "Island Hopping or Diving", description: "Optional full-day island hopping or a discover scuba diving session. If you prefer, spend the entire day on the water villa deck with room service.", meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Final Day on the Island", description: "Last morning. Soak every detail in. Final swim. Pack. Late afternoon speedboat to Malé. Hotel in Malé or overnight flight.", meals: ["Breakfast"] },
      { day: 7, title: "Depart Malé for Karachi", description: "Transfer to Velana Airport. Fly home carrying six days of the Indian Ocean.", meals: ["Breakfast"] },
    ],
    accommodations: [
      { name: "Maldives Resort — Overwater Villa", type: "Overwater Villa", image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80&fit=crop", description: "Glass-floor overwater villa with private sun deck, direct lagoon access, and outdoor rainfall shower. Halal dining available.", stars: 4 },
    ],
    reviews: [
      { id: "r-mv-1", name: "Sana & Umar Khan", photo: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=80&h=80&fit=crop&crop=faces", trip: "Maldives Honeymoon", rating: 5, quote: "The overwater villa was beyond our dreams. Shine Star arranged the private beach dinner as a surprise — we'll never forget it.", date: "January 2025", isSampleData: true },
    ],
    faqs: [
      { question: "Is the Maldives halal-friendly?", answer: "The Maldives is a Muslim nation. Halal food is widely available. Many resorts provide halal-certified dining. Prayer facilities are available." },
      { question: "Which is better — speedboat or seaplane transfer?", answer: "Speedboats serve islands within 30–45 minutes and are included in most packages. Seaplanes reach remote outer atolls and are a spectacular experience in themselves. We advise on which suits your chosen island." },
      { question: "Do I need a visa?", answer: "Pakistani passport holders receive visa-on-arrival in the Maldives, valid 30 days. No pre-application required." },
      { question: "Can we upgrade to a 5-star resort?", answer: "Yes. Multiple 5-star and luxury overwater options are available. Inquire on WhatsApp with your budget for a tailored quote." },
    ],
    plannerConfig: {
      packageName: "Maldives Honeymoon",
      questions: [
        { id: "travelDates", question: "When are you planning your honeymoon?", type: "chips", options: [{ value: "Within 1 month", label: "Within 1 month" }, { value: "1–3 months", label: "1–3 months" }, { value: "3–6 months", label: "3–6 months" }, { value: "After Nikah (flexible)", label: "After Nikah (flexible)" }] },
        { id: "experience", question: "What experience matters most?", type: "cards", options: [{ value: "Privacy and seclusion", label: "Privacy & seclusion" }, { value: "Water activities and adventure", label: "Water adventures" }, { value: "Luxury and comfort", label: "Pure luxury" }, { value: "Romantic gestures arranged", label: "Romantic moments" }] },
        { id: "budget", question: "Budget for the honeymoon?", type: "chips", options: [{ value: "PKR 280,000–350,000 per couple", label: "PKR 280k–350k" }, { value: "PKR 350,000–500,000 per couple", label: "PKR 350k–500k" }, { value: "PKR 500,000+ per couple", label: "PKR 500k+" }] },
        { id: "whatsappNumber", question: "Your WhatsApp number?", type: "input", placeholder: "e.g. 0300 1234567" },
      ],
    },
    seo: {
      title: "Maldives Honeymoon Package from Karachi | Overwater Villa | Shine Star Tours and Travel",
      description: "7-day Maldives honeymoon from Karachi. Overwater villa, private beach dinner, dolphin cruise. Halal-friendly. Plan your honeymoon on WhatsApp.",
    },
    featured: true,
    badge: "Most Romantic",
    isSamplePricing: true,
  },

  // ─── Bali Honeymoon ─────────────────────────────────────────────────────────
  {
    slug: "bali-honeymoon-6-days",
    category: "honeymoon",
    title: "Bali Couples Retreat",
    destination: "Ubud · Seminyak · Nusa Dua",
    country: "Indonesia",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=1200&q=80&fit=crop",
    ],
    duration: "6 Days / 5 Nights",
    startingPrice: 195000,
    currency: "PKR",
    tagline: "Jungle temples, infinity pools, and rice terraces — Bali for two.",
    shortDescription:
      "Six days moving from Ubud's jungle and temples to Seminyak's sunset beaches. Bali's variety, without the tourist rush.",
    description:
      "Bali offers a rare combination for honeymooners: spiritual depth, natural beauty, world-class spa culture, and incredible food — all at a price that doesn't make you start married life under financial stress. This six-day itinerary covers Ubud's rice terraces and temples, Seminyak's beach clubs, and Nusa Dua's calm lagoon.",
    highlights: [
      "Tegallalang Rice Terraces sunrise",
      "Uluwatu Temple clifftop sunset",
      "Tirta Empul sacred spring temple",
      "Seminyak beachfront dinner",
      "Jungle spa treatment for two",
      "Kelingking Beach viewpoint, Nusa Penida (optional)",
    ],
    inclusions: [
      "Return airfare Karachi to Bali (via KL or Singapore)",
      "2 nights boutique villa Ubud",
      "3 nights beach resort Seminyak or Nusa Dua",
      "Daily breakfast",
      "Private car and driver throughout",
      "Ubud temple and rice terrace tour",
      "Uluwatu sunset tour with Kecak fire dance",
      "Couple's spa session",
      "Airport transfers",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Personal shopping",
      "Nusa Penida day trip (optional add-on)",
      "Travel insurance",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bali — Ubud", description: "Land at Ngurah Rai Airport. Drive to Ubud (1.5 hours). Check in to jungle villa. Evening: Ubud night market.", meals: ["Dinner guidance"] },
      { day: 2, title: "Ubud — Temples and Rice Terraces", description: "Sunrise at Tegallalang Rice Terraces. Tirta Empul sacred spring. Ubud Palace and Monkey Forest. Afternoon: free, or couple's spa session.", meals: ["Breakfast"], image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&fit=crop" },
      { day: 3, title: "Ubud to Seminyak", description: "Morning: optional morning yoga or market. Drive to Seminyak. Beach club check-in. Sunset at Seminyak Beach.", meals: ["Breakfast"] },
      { day: 4, title: "Uluwatu and Kecak Fire Dance", description: "Morning at leisure on Seminyak beach. Late afternoon: drive to Uluwatu Temple for the cliffside sunset. Kecak fire dance performance. Dinner at Jimbaran Bay seafood by the water.", meals: ["Breakfast", "Dinner"], image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80&fit=crop" },
      { day: 5, title: "Nusa Dua — Lagoon Beach Day", description: "Drive to Nusa Dua. Calm, clear beach. Optional water sports. Couple's dinner at resort.", meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Departure", description: "Morning at leisure. Airport transfer. Fly home.", meals: ["Breakfast"] },
    ],
    accommodations: [
      { name: "Ubud Jungle Villa (boutique)", type: "Boutique Villa", image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800&q=80&fit=crop", description: "Private pool villa set in jungle greenery. Open-air bathroom, rice paddy views, and personalised service.", stars: 4 },
      { name: "Seminyak Beach Resort", type: "Beach Resort", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop", description: "Beachfront resort on Seminyak's most beautiful stretch. Infinity pool, halal dining options.", stars: 4 },
    ],
    reviews: [
      { id: "r-bali-1", name: "Fatima & Zaid", trip: "Bali Honeymoon", rating: 5, quote: "The jungle villa in Ubud was magical. Waking up to rice terraces through the window — nothing prepares you for it.", date: "March 2025", isSampleData: true },
    ],
    faqs: [
      { question: "Is Bali halal-friendly for Pakistani travelers?", answer: "Bali has a growing halal food scene, especially in Seminyak and Nusa Dua. We provide a curated halal restaurant list. Some resorts offer halal-certified kitchens." },
      { question: "Do I need a visa for Indonesia?", answer: "Pakistani passport holders receive a visa-on-arrival for Indonesia (USD 35 per person, payable at the airport). We confirm current requirements at booking." },
    ],
    plannerConfig: {
      packageName: "Bali Honeymoon",
      questions: [
        { id: "travelDates", question: "When are you planning your honeymoon?", type: "chips", options: [{ value: "Within 1 month", label: "Within 1 month" }, { value: "1–3 months", label: "1–3 months" }, { value: "3–6 months", label: "3–6 months" }, { value: "Flexible", label: "Flexible" }] },
        { id: "experience", question: "What kind of Bali do you want?", type: "cards", options: [{ value: "Culture and temples", label: "Culture & temples" }, { value: "Beach and relaxation", label: "Beach & relaxation" }, { value: "Jungle and adventure", label: "Jungle & adventure" }, { value: "All of the above", label: "All of the above" }] },
        { id: "budget", question: "Budget per couple?", type: "chips", options: [{ value: "PKR 160,000–220,000", label: "PKR 160k–220k" }, { value: "PKR 220,000–300,000", label: "PKR 220k–300k" }, { value: "PKR 300,000+", label: "PKR 300k+" }] },
        { id: "whatsappNumber", question: "Your WhatsApp number?", type: "input", placeholder: "e.g. 0300 1234567" },
      ],
    },
    seo: {
      title: "Bali Honeymoon Package from Karachi | Ubud & Seminyak | Shine Star Tours and Travel",
      description: "6-day Bali honeymoon from Karachi. Ubud jungle villa, Seminyak beach, Uluwatu sunset. Private car throughout. Halal-friendly options.",
    },
    featured: true,
    isSamplePricing: true,
  },

  // ─── Turkey Honeymoon ────────────────────────────────────────────────────────
  {
    slug: "turkey-honeymoon-8-days",
    category: "honeymoon",
    title: "Turkey Romantic Discovery",
    destination: "Istanbul · Cappadocia · Pamukkale",
    country: "Turkey",
    heroImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1600&q=85&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=80&fit=crop",
      "https://images.unsplash.com/photo-1624948465027-6f9b51067557?w=1200&q=80&fit=crop",
    ],
    duration: "8 Days / 7 Nights",
    startingPrice: 225000,
    currency: "PKR",
    tagline: "Balloon rides over fairy chimneys — Turkey for honeymooners who want wonder.",
    shortDescription:
      "Istanbul's mosques and bazaars, Cappadocia's hot-air balloons at sunrise, and Pamukkale's cotton-white travertines. Eight days across Turkey's most romantic destinations.",
    description:
      "Turkey is uniquely positioned as a honeymoon destination for Pakistani couples: Muslim-majority and deeply welcoming, halal food everywhere, stunning variety within one country, and direct flights from Karachi. This eight-day itinerary pairs Istanbul's grandeur with Cappadocia's surreal landscape and Pamukkale's natural pools.",
    highlights: [
      "Hot-air balloon over Cappadocia at sunrise",
      "Hagia Sophia and Blue Mosque, Istanbul",
      "Grand Bazaar and Bosphorus sunset cruise",
      "Underground cave hotel in Göreme",
      "Pamukkale thermal travertine pools",
      "Turkish bath (hamam) experience for two",
    ],
    inclusions: [
      "Return airfare Karachi–Istanbul (Turkish Airlines)",
      "3 nights boutique hotel Istanbul",
      "2 nights cave hotel Cappadocia (Göreme)",
      "2 nights Pamukkale hotel",
      "Daily breakfast",
      "Istanbul Bosphorus cruise",
      "Cappadocia hot-air balloon (subject to weather)",
      "Cappadocia guided valley tour",
      "Pamukkale thermal pools entry",
      "Hierapolis ancient ruins",
      "Internal flights Istanbul–Cappadocia, Pamukkale–Istanbul",
      "Hamam experience",
      "24/7 WhatsApp support",
    ],
    exclusions: [
      "Personal shopping (Grand Bazaar is unmissable)",
      "Travel insurance",
      "Optional cable car rides",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Istanbul", description: "Land at Istanbul Airport. Transfer to Old City hotel. Evening walk along the Bosphorus waterfront.", meals: ["Dinner"] },
      { day: 2, title: "Istanbul — Old City", description: "Hagia Sophia. Blue Mosque. Topkapi Palace gardens. Grand Bazaar. Sunset Turkish tea on the terrace.", meals: ["Breakfast"], image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80&fit=crop" },
      { day: 3, title: "Istanbul — Bosphorus and Hamam", description: "Morning: Spice Bazaar and Galata Bridge. Afternoon: Bosphorus boat cruise, two continents in one day. Evening: Traditional hamam for two.", meals: ["Breakfast"] },
      { day: 4, title: "Fly to Cappadocia", description: "Morning flight to Nevşehir. Transfer to cave hotel in Göreme. Afternoon: Göreme Open Air Museum (carved rock churches). Sunset at Love Valley viewpoint.", meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Cappadocia — Balloon at Dawn", description: "Wake at 4:30am. Hot-air balloon flight over the fairy chimneys and valleys at sunrise — the defining Cappadocia experience. Champagne breakfast after landing. Afternoon: Devrent Valley, Uçhisar Castle, underground city.", meals: ["Balloon breakfast", "Dinner"], image: "https://images.unsplash.com/photo-1624948465027-6f9b51067557?w=800&q=80&fit=crop" },
      { day: 6, title: "Cappadocia to Pamukkale", description: "Drive or bus to Pamukkale (4–5 hours through Anatolia's heartland). Check in. Evening walk on the white travertine terraces.", meals: ["Breakfast"] },
      { day: 7, title: "Pamukkale — Cotton Castle", description: "Morning: walk the thermal travertine pools — otherworldly white calcium pools with warm spring water. Hierapolis ancient Roman city and necropolis. Afternoon: free swim in the antique pool.", meals: ["Breakfast"] },
      { day: 8, title: "Departure", description: "Fly from Pamukkale (Denizli) back to Istanbul. Connect to Karachi. Arrive home.", meals: ["Breakfast"] },
    ],
    accommodations: [
      { name: "Istanbul Boutique Hotel — Old City", type: "Boutique Hotel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop", description: "Historic district, walking distance from Hagia Sophia. Rooftop terrace with Bosphorus view.", stars: 4 },
      { name: "Cappadocia Cave Hotel — Göreme", type: "Cave Hotel", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop", description: "Hand-carved cave rooms with arched ceilings, private terrace, and valley views. Halal breakfast served.", stars: 4 },
    ],
    reviews: [
      { id: "r-tr-1", name: "Sara & Ahmed", trip: "Turkey Honeymoon", rating: 5, quote: "The balloon at sunrise was the most beautiful thing either of us had ever seen. Turkey is perfect for a Pakistani honeymoon — everything is halal, everyone is welcoming.", date: "April 2025", isSampleData: true },
    ],
    faqs: [
      { question: "Is Turkey visa-free for Pakistani travelers?", answer: "Pakistani passport holders currently require a Turkey e-visa. We handle the full e-visa application as part of the package." },
      { question: "Is the hot-air balloon guaranteed?", answer: "Balloon flights are weather-dependent and may be cancelled for safety. In that case, a refund or alternative activity is arranged. We book a reputable licensed operator." },
      { question: "Is Turkey halal-friendly?", answer: "Turkey is a Muslim-majority country. Halal food is the norm everywhere. Mosques are in every neighbourhood. It is one of the most comfortable destinations for Pakistani honeymooners." },
    ],
    plannerConfig: {
      packageName: "Turkey Honeymoon",
      questions: [
        { id: "travelDates", question: "When are you planning your honeymoon?", type: "chips", options: [{ value: "Within 1 month", label: "Within 1 month" }, { value: "1–3 months", label: "1–3 months" }, { value: "3–6 months", label: "3–6 months" }, { value: "Flexible", label: "Flexible" }] },
        { id: "experience", question: "What experience is most important to you?", type: "cards", options: [{ value: "History and culture", label: "History & culture" }, { value: "Nature and landscapes", label: "Nature & landscapes" }, { value: "Romance and luxury", label: "Romance & luxury" }, { value: "All of the above", label: "All of the above" }] },
        { id: "budget", question: "Budget per couple?", type: "chips", options: [{ value: "PKR 200,000–280,000", label: "PKR 200k–280k" }, { value: "PKR 280,000–380,000", label: "PKR 280k–380k" }, { value: "PKR 380,000+", label: "PKR 380k+" }] },
        { id: "whatsappNumber", question: "Your WhatsApp number?", type: "input", placeholder: "e.g. 0300 1234567" },
      ],
    },
    seo: {
      title: "Turkey Honeymoon Package from Karachi | Istanbul Cappadocia | Shine Star Tours and Travel",
      description: "8-day Turkey honeymoon from Karachi. Istanbul, Cappadocia balloon, Pamukkale. Halal-friendly. Plan on WhatsApp.",
    },
    featured: true,
    badge: "New",
    isSamplePricing: true,
  },
];

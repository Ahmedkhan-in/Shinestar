// Company facts used across pages. One place to update before launch.
// Anything not yet confirmed by the business is marked with a TODO.

export const SITE_URL = "https://shinestartravel.pk"; // TODO: confirm production domain

export const company = {
  name: "Shine Star Tours and Travel",
  shortName: "Shine Star",
  foundingYear: 2018,
  city: "Karachi",
  whatsappNumber: "923462646201",
  whatsappDisplay: "+92 346 2646201",
  // TODO: replace with the real street address (the map pin below is real)
  address: {
    street: "Shop 12, Travel Plaza, Shahrah-e-Faisal",
    city: "Karachi",
    region: "Sindh",
    country: "PK",
    isPlaceholder: true,
  },
  geo: { lat: 24.9026756, lng: 67.1144421 },
  mapsUrl: "https://maps.app.goo.gl/URjwPcr9nAv2NsMu8",
  mapsEmbed: "https://maps.google.com/maps?q=24.9026756,67.1144421&z=16&output=embed",
  hours: [
    { days: "Monday – Saturday", time: "9:00 am – 8:00 pm" },
    { days: "Sunday", time: "11:00 am – 5:00 pm" },
  ],
  social: {
    instagram: "https://www.instagram.com/shine_star_travel_and_tours/",
    // TODO: replace with the real Facebook page URL
    facebook: "https://facebook.com",
  },
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${company.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Pakistani departure cities we plan from. Karachi is home; others fly via domestic or direct routes. */
export const departureCities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Multan",
  "Peshawar",
  "Faisalabad",
  "Sialkot",
  "Quetta",
];

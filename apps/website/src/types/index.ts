export type PackageCategory = "international" | "umrah" | "honeymoon";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string[];
  image?: string;
}

export interface Accommodation {
  name: string;
  type: string;
  image: string;
  description: string;
  stars?: number;
}

export interface Review {
  id: string;
  name: string;
  photo?: string;
  trip: string;
  rating: number;
  quote: string;
  date: string;
  // NOTE: Sample data — replace with real reviews before launch
  isSampleData?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type PlannerQuestionType = "chips" | "cards" | "input" | "date";

export interface PlannerOption {
  value: string;
  label: string;
  icon?: string;
}

export interface PlannerQuestion {
  id: string;
  question: string;
  type: PlannerQuestionType;
  optional?: boolean;
  options?: PlannerOption[];
  placeholder?: string;
}

export interface PlannerConfig {
  packageName: string;
  questions: PlannerQuestion[];
}

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface TravelPackage {
  slug: string;
  category: PackageCategory;
  title: string;
  destination: string;
  country: string;
  heroImage: string;
  images: string[];
  duration: string;
  startingPrice?: number;
  currency: string;
  tagline: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  accommodations: Accommodation[];
  reviews: Review[];
  faqs: FAQ[];
  plannerConfig: PlannerConfig;
  seo: SEOMeta;
  featured: boolean;
  badge?: string;
  // NOTE: startingPrice and reviews are sample data until confirmed with real figures
  isSamplePricing?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  photo?: string;
  trip: string;
  rating: number;
  quote: string;
  date: string;
  isSampleData?: boolean;
}

export interface Airline {
  name: string;
  logo: string;
}

// ─── Visa assistance ──────────────────────────────────────────────────────────
// Shapes are CMS-ready: plain strings and arrays, no JSX in data.

export type VisaTypeId =
  | "umrah"
  | "tourist"
  | "family-visit"
  | "business"
  | "transit";

export interface VisaService {
  id: VisaTypeId;
  name: string;
  /** Who this service is for, written for a Pakistani passport holder */
  forWho: string;
  included: string[];
  /** Always phrased as an estimate, never a promise */
  processingGuide: string;
  ctaLabel: string;
}

export interface VisaDestination {
  slug: string;
  country: string;
  /** Short line for the selector, e.g. "Umrah e-visa" */
  summary: string;
  image?: string;
  imageAlt?: string;
  entryType: string;
  validity: string;
  documents: string[];
  biometrics: string;
  financialNotes: string;
  processingEstimate: string;
  /** Things Pakistani applicants commonly get wrong */
  watchOut?: string;
  relatedHref?: string;
  relatedLabel?: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  /** Visa types that need this document */
  appliesTo: VisaTypeId[];
}

export interface ProcessStep {
  title: string;
  youDo: string;
  weDo: string;
}

export interface VisaFAQ extends FAQ {
  id: string;
}

// ─── Reviews & gallery ────────────────────────────────────────────────────────

export type TripType = "umrah" | "international" | "honeymoon" | "family" | "group" | "visa";

export interface TravelerReview {
  id: string;
  name: string;
  city: string;
  photo?: string;
  tripType: TripType;
  trip: string;
  destination: string;
  /** ISO month, e.g. "2025-02" — used for sorting */
  travelMonth: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  /** Set true only when the booking has been matched to our records */
  verified: boolean;
  featured?: boolean;
  relatedHref?: string;
  isSampleData: boolean;
}

export type GalleryCategory = "umrah" | "beaches" | "mountains" | "cities" | "honeymoons" | "families";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** width / height of the source crop, used to reserve space and avoid layout shift */
  ratio: number;
  relatedHref?: string;
  relatedLabel?: string;
  /** Traveler credit — only for photos travelers have shared with permission */
  sharedBy?: string;
}

export interface SocialPost {
  id: string;
  platform: "instagram" | "facebook";
  href: string;
  poster: string;
  posterAlt: string;
  title: string;
  kind: "reel" | "post";
  isSampleData: boolean;
}

// ─── About ────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  /** Leave undefined until the person agrees to be named publicly */
  name?: string;
  role: string;
  specialization: string;
  languages: string[];
  experience: string;
  photo?: string;
  isSampleData: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  detail: string;
  isSampleData: boolean;
}

export interface CompanyValue {
  title: string;
  detail: string;
}

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  /** What it means for the traveler */
  meaning: string;
  /** Registration number once confirmed — undefined renders as "pending publication" */
  reference?: string;
  verifyHint: string;
}

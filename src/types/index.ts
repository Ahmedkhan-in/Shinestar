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
  isSampleData: true;
}

export interface Airline {
  name: string;
  logo: string;
}

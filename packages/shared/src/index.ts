// Row shapes mirroring database/supabase/migrations. Keep both in sync.
// Database rows are named *Record so they never clash with the website's display types
// (e.g. the website's TravelPackage holds itinerary, FAQs and images for a page).

export type AgencyRole = "owner" | "admin" | "agent";

export interface AgencyRecord {
  id: string;
  slug: string;
  name: string;
  whatsappNumber: string | null;
  createdAt: string;
}

export type PackageCategory = "international" | "umrah" | "honeymoon" | "visa";

export interface PackageRecord {
  id: string;
  agencyId: string;
  slug: string;
  category: PackageCategory;
  title: string;
  priceFrom: number | null;
  currency: string;
  isPublished: boolean;
}

export type LeadStatus = "new" | "contacted" | "qualified" | "booked" | "lost";
export type LeadSource = "website" | "whatsapp" | "meta_ad" | "walk_in" | "other";

export interface LeadRecord {
  id: string;
  agencyId: string;
  name: string | null;
  phone: string;
  source: LeadSource;
  status: LeadStatus;
  interest: string | null;
  createdAt: string;
}

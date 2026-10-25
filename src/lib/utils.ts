import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = "PKR"): string {
  if (currency === "PKR") {
    return `PKR ${price.toLocaleString("en-PK")}`;
  }
  return `${currency} ${price.toLocaleString()}`;
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  // Upright only: italic serif is used in one place, and its file (80 KB) was preloaded on every page
  style: ["normal"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shine Star Tours and Travel — Umrah, International & Honeymoon Packages from Karachi",
  description:
    "Premium travel agency based in Karachi. Specialists in Umrah packages, international tours (Thailand, Malaysia, Dubai, Singapore, Sri Lanka), and honeymoon packages. Clear pricing, WhatsApp support.",
  keywords: [
    "travel agency Karachi",
    "Umrah packages Pakistan",
    "international tour packages Karachi",
    "honeymoon packages",
    "Thailand tour Karachi",
    "Dubai package Pakistan",
    "Shine Star Tours and Travel",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Shine Star Tours and Travel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}

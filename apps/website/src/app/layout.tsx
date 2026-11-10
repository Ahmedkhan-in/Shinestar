import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/data/site";
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

// Defaults for any page that doesn't set its own; every page should still call pageMetadata()
export const metadata: Metadata = {
  // Lets relative image and canonical URLs resolve to the live address
  metadataBase: new URL(SITE_URL),
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

const SCROLL_FLAG_SCRIPT = `(function(){var h=document.documentElement;function u(){if(window.scrollY>24)h.setAttribute("data-scrolled","");else h.removeAttribute("data-scrolled")}u();window.addEventListener("scroll",u,{passive:true})})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the script below adds data-scrolled to <html> before React loads
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body>
        {/* Marks <html data-scrolled> once the page is scrolled, so the navbar turns solid
            even before (or without) the app's JavaScript loading — see Navbar.tsx */}
        <script dangerouslySetInnerHTML={{ __html: SCROLL_FLAG_SCRIPT }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}

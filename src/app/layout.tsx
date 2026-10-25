import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Shine Star Travel & Tours — Umrah, International & Honeymoon Packages from Karachi",
  description:
    "Premium travel agency based in Karachi. Specialists in Umrah packages, international tours (Thailand, Malaysia, Dubai, Singapore, Sri Lanka), and honeymoon packages. Clear pricing, WhatsApp support.",
  keywords: [
    "travel agency Karachi",
    "Umrah packages Pakistan",
    "international tour packages Karachi",
    "honeymoon packages",
    "Thailand tour Karachi",
    "Dubai package Pakistan",
    "Shine Star Travel",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Shine Star Travel & Tours",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

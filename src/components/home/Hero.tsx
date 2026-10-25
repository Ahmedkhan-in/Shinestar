"use client";

import Image from "next/image";
import { useState } from "react";
import { TripPlanner } from "@/components/planner/TripPlanner";
import { ChevronDown } from "lucide-react";

const orbitImages = [
  {
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&q=80&fit=crop",
    alt: "Masjid al-Haram, Makkah — Umrah",
    label: "Umrah",
    position: "top-8 left-[8%] md:top-16 md:left-[6%]",
    size: "w-20 h-20 md:w-28 md:h-28",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80&fit=crop",
    alt: "Dubai skyline at night",
    label: "Dubai",
    position: "top-8 right-[8%] md:top-16 md:right-[6%]",
    size: "w-20 h-20 md:w-28 md:h-28",
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80&fit=crop",
    alt: "Thailand temple landscape",
    label: "Thailand",
    position: "bottom-24 left-[4%] md:bottom-32 md:left-[8%]",
    size: "w-16 h-16 md:w-24 md:h-24",
  },
  {
    src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80&fit=crop",
    alt: "Maldives overwater villa at sunset — honeymoon",
    label: "Maldives",
    position: "bottom-24 right-[4%] md:bottom-32 md:right-[8%]",
    size: "w-16 h-16 md:w-24 md:h-24",
  },
];

const defaultPlannerConfig = {
  packageName: "General Inquiry",
  questions: [
    {
      id: "destination",
      question: "What type of trip are you planning?",
      type: "cards" as const,
      options: [
        { value: "Umrah", label: "Umrah / Hajj" },
        { value: "International Tour", label: "International Tour" },
        { value: "Honeymoon", label: "Honeymoon" },
        { value: "Not sure yet", label: "Not sure yet" },
      ],
    },
    {
      id: "travelDates",
      question: "When are you planning to travel?",
      type: "chips" as const,
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
      type: "chips" as const,
      options: [
        { value: "1 person", label: "Just me" },
        { value: "2 people", label: "2 people" },
        { value: "3–5 people", label: "3–5 people" },
        { value: "6+ people", label: "6+ people" },
      ],
    },
    {
      id: "whatsappNumber",
      question: "Your WhatsApp number?",
      type: "input" as const,
      placeholder: "e.g. 0300 1234567",
    },
  ],
};

export function Hero() {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85&fit=crop"
        alt="Aircraft above clouds at golden hour — Shine Star Travel & Tours"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Scrim — bottom-heavy for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/30 to-brand-ink/20" />

      {/* Orbit destination images */}
      {orbitImages.map((img) => (
        <div
          key={img.label}
          className={`absolute ${img.position} ${img.size} rounded-card overflow-hidden border-2 border-white/30 shadow-card hidden sm:block`}
          aria-hidden="true"
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="120px" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-1">
            <span className="text-body-sm font-semibold">{img.label}</span>
          </div>
        </div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Trust proof — sample data, marked */}
        {/* NOTE: Figures below are sample data — replace with real numbers before launch */}
        <div className="flex items-center justify-center gap-6 mb-8 text-white/80 text-body-sm">
          <span className="flex items-center gap-1.5">
            <span className="text-brand-gold">★</span>
            4.9 rating
          </span>
          <span className="w-px h-4 bg-white/30" />
          <span>5,000+ travelers</span>
          <span className="w-px h-4 bg-white/30" />
          <span>Since 2018</span>
        </div>

        <h1 className="font-serif text-display-lg md:text-display-xl text-white leading-tight">
          Umrah, International Tours & Honeymoons — from Karachi
        </h1>

        <p className="mt-4 text-body-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
          Planned properly, priced clearly, supported on WhatsApp — from the day you ask to the day you return.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setPlannerOpen(true)}
            className="bg-brand-blue text-white text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-brand-sky transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[48px]"
          >
            Check availability for my dates
          </button>
          <a
            href="#packages"
            className="border border-white/60 text-white text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-white/10 transition-colors w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] flex items-center justify-center"
          >
            Explore packages
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>

      {/* Planner modal */}
      {plannerOpen && (
        <TripPlanner
          config={defaultPlannerConfig}
          category="international"
          onClose={() => setPlannerOpen(false)}
        />
      )}
    </section>
  );
}

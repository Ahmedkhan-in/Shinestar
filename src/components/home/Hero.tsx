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
    position: "top-20 left-[5%] md:top-24 md:left-[7%]",
    size: "w-24 h-24 md:w-32 md:h-32",
    float: "animate-float-a",
    delay: "0s",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80&fit=crop",
    alt: "Dubai skyline at night",
    label: "Dubai",
    position: "top-20 right-[5%] md:top-24 md:right-[7%]",
    size: "w-24 h-24 md:w-32 md:h-32",
    float: "animate-float-b",
    delay: "1.5s",
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80&fit=crop",
    alt: "Thailand temple landscape",
    label: "Thailand",
    position: "bottom-28 left-[3%] md:bottom-36 md:left-[9%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    float: "animate-float-b",
    delay: "0.8s",
  },
  {
    src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80&fit=crop",
    alt: "Maldives overwater villa at sunset — honeymoon",
    label: "Maldives",
    position: "bottom-28 right-[3%] md:bottom-36 md:right-[9%]",
    size: "w-20 h-20 md:w-28 md:h-28",
    float: "animate-float-a",
    delay: "2.2s",
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
      {/* Background — cinematic slow zoom */}
      <Image
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85&fit=crop"
        alt="Aircraft above clouds at golden hour — Shine Star Travel & Tours"
        fill
        priority
        className="object-cover object-center animate-hero-zoom"
        sizes="100vw"
      />
      {/* Scrim — heavier at bottom for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/35 to-brand-ink/10" />

      {/* Orbit destination images — hidden on mobile */}
      {orbitImages.map((img) => (
        <div
          key={img.label}
          className={`absolute ${img.position} ${img.size} ${img.float} rounded-card overflow-hidden border-2 border-white/25 shadow-modal hidden sm:block`}
          style={{ animationDelay: img.delay }}
          aria-hidden="true"
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="140px" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-4 pb-1.5 px-2 text-center">
            <span className="text-white text-[11px] font-semibold tracking-wide">{img.label}</span>
          </div>
        </div>
      ))}

      {/* Hero content — staggered CSS reveal on page load */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {/* Gold eyebrow — first to appear */}
        <p
          className="text-eyebrow uppercase tracking-widest text-brand-gold mb-5 opacity-0"
          style={{ animation: "fadeUpReveal 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          Premium Travel from Karachi
        </p>

        {/* Trust proof */}
        {/* NOTE: Figures below are sample data — replace before launch */}
        <div
          className="flex items-center justify-center gap-5 mb-8 text-white/75 text-body-sm opacity-0"
          style={{ animation: "fadeUpReveal 0.6s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-brand-gold text-base">★</span>
            4.9 rating
          </span>
          <span className="w-px h-4 bg-white/25" />
          <span>5,000+ travelers</span>
          <span className="w-px h-4 bg-white/25" />
          <span>Since 2018</span>
        </div>

        {/* Headline — the hero moment */}
        <h1
          className="font-serif text-display-lg md:text-display-xl text-white opacity-0"
          style={{ animation: "fadeUpReveal 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s both" }}
        >
          Umrah, International Tours
          <br className="hidden sm:block" />
          {" "}&amp; Honeymoons — from Karachi
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-body-lg md:text-xl text-white/75 max-w-xl mx-auto leading-relaxed opacity-0"
          style={{ animation: "fadeUpReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.75s both" }}
        >
          Planned properly, priced clearly, supported on WhatsApp — from the day you ask to the day you return.
        </p>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0"
          style={{ animation: "fadeUpReveal 0.7s cubic-bezier(0.16,1,0.3,1) 1.0s both" }}
        >
          <button
            onClick={() => setPlannerOpen(true)}
            className="bg-brand-blue text-white text-label font-semibold px-7 py-4 rounded-btn hover:bg-brand-sky transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[52px] shadow-modal"
          >
            Check availability for my dates
          </button>
          <a
            href="#packages"
            className="border border-white/50 text-white text-label font-semibold px-7 py-4 rounded-btn hover:bg-white/10 transition-colors w-full sm:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[52px] flex items-center justify-center backdrop-blur-sm"
          >
            Explore packages
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>

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

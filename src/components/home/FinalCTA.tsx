"use client";

import Image from "next/image";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { TripPlanner } from "@/components/planner/TripPlanner";
import { Reveal } from "@/components/ui/Reveal";

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
        { value: "Not sure", label: "Not sure yet" },
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
        { value: "1", label: "Just me" },
        { value: "2", label: "2 people" },
        { value: "3–5", label: "3–5 people" },
        { value: "6+", label: "6+ people" },
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

export function FinalCTA() {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image — slow cinematic zoom */}
      <Image
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&fit=crop"
        alt="Aircraft at golden hour"
        fill
        className="object-cover object-center animate-hero-zoom"
        sizes="100vw"
      />
      {/* Deep overlay */}
      <div className="absolute inset-0 bg-brand-footer/88" />

      <div className="relative z-10 max-w-content mx-auto px-4 md:px-8 text-center">
        <Reveal>
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-4">
            Your next journey
          </p>
          <h2 className="font-serif text-display-md md:text-display-lg text-white max-w-2xl mx-auto leading-tight">
            Ready to plan your next trip?
          </h2>
          <p className="mt-5 text-body-lg text-white/65 max-w-lg mx-auto leading-relaxed">
            Tell us where you want to go. We will take care of the rest — package, pricing, visa, and support.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setPlannerOpen(true)}
              className="bg-brand-gold text-brand-ink text-label font-semibold px-7 py-4 rounded-btn hover:bg-brand-champagne transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[52px]"
            >
              Check availability for my dates
            </button>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/35 text-white text-label font-semibold px-7 py-4 rounded-btn hover:bg-white/10 transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[52px]"
            >
              <MessageCircle size={16} />
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

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

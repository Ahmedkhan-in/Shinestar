"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { TripPlanner } from "@/components/planner/TripPlanner";

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
    <section className="bg-brand-footer py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-display-md md:text-display-lg text-white max-w-2xl mx-auto">
          Ready to plan your next trip?
        </h2>
        <p className="mt-4 text-body-lg text-white/70 max-w-lg mx-auto">
          Tell us where you want to go. We will take care of the rest — package, pricing, visa, and support.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setPlannerOpen(true)}
            className="bg-brand-gold text-brand-ink text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-brand-champagne transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-footer min-h-[48px]"
          >
            Check availability for my dates
          </button>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/40 text-white text-label font-semibold px-6 py-3.5 rounded-btn hover:bg-white/10 transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
          >
            <MessageCircle size={16} />
            Message us on WhatsApp
          </a>
        </div>
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

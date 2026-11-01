"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Modals load on demand — their code isn't downloaded until opened
const CustomPricePlanner = dynamic(() => import("@/components/planner/custom-price-planner").then((m) => m.CustomPricePlanner), { ssr: false });
const VisaEnquirySheet = dynamic(() => import("@/components/visa/VisaEnquirySheet").then((m) => m.VisaEnquirySheet), { ssr: false });

interface FinalCTAProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  /** Which sheet the primary button opens */
  primary?: "price-planner" | "visa-enquiry";
  whatsappLabel?: string;
  whatsappHref?: string;
  image?: string;
  imageAlt?: string;
}

export function FinalCTA({
  eyebrow = "Your next journey",
  title = "Ready to plan your next trip?",
  body = "Tell us where you want to go. We will take care of the rest — package, pricing, visa, and support.",
  primaryLabel = "Check my custom package price",
  primary = "price-planner",
  whatsappLabel = "Message us on WhatsApp",
  whatsappHref = "https://wa.me/923462646201",
  image = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80&fit=crop",
  imageAlt = "Aircraft at golden hour",
}: FinalCTAProps = {}) {
  const [plannerOpen, setPlannerOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image — slow cinematic zoom */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-center animate-hero-zoom"
        sizes="100vw"
      />
      {/* Deep overlay */}
      <div className="absolute inset-0 bg-brand-footer/[0.88]" />

      <div className="relative z-10 max-w-content mx-auto px-4 md:px-8 text-center">
        <Reveal>
          <p className="text-eyebrow uppercase tracking-widest text-brand-gold mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-display-md md:text-display-lg text-white max-w-3xl mx-auto leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-body-lg text-white/65 max-w-lg mx-auto leading-relaxed">
            {body}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setPlannerOpen(true)}
              className="bg-brand-gold text-brand-ink text-label font-semibold px-7 py-4 rounded-btn hover:bg-brand-champagne transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[52px]"
            >
              {primaryLabel}
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/35 text-white text-label font-semibold px-7 py-4 rounded-btn hover:bg-white/10 transition-colors w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[52px]"
            >
              <MessageCircle size={16} aria-hidden="true" />
              {whatsappLabel}
            </a>
          </div>
        </Reveal>
      </div>

      {plannerOpen && primary === "visa-enquiry" && (
        <VisaEnquirySheet onClose={() => setPlannerOpen(false)} />
      )}
      {plannerOpen && primary === "price-planner" && (
        <CustomPricePlanner
          mode="home"
          onClose={() => setPlannerOpen(false)}
        />
      )}
    </section>
  );
}

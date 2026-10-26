"use client";

import { cn } from "@/lib/utils";
import type { StepId } from "./types";
import { STANDARD_TIERS } from "./types";
import { STEP_QUESTIONS, STEP_OPTIONS } from "./planner-config";
import { PlannerOptionCard, StandardTierCard } from "./planner-option-card";
import { PlannerWhatsappStep } from "./planner-whatsapp-step";
import type { PlannerMode } from "./types";
import type { LandingContext } from "./types";

interface PlannerQuestionProps {
  stepId: StepId;
  stepIndex: number;
  totalSteps: number;
  answer?: string;
  direction: "forward" | "back";
  mode: PlannerMode;
  context?: LandingContext;
  onSelect: (value: string) => void;
  onWhatsappSubmit: (number: string, countryCode: string) => void;
}

export function PlannerQuestion({
  stepId,
  stepIndex,
  totalSteps,
  answer,
  direction,
  mode,
  context,
  onSelect,
  onWhatsappSubmit,
}: PlannerQuestionProps) {
  const animationClass =
    direction === "forward"
      ? "animate-slide-from-right"
      : "animate-slide-from-left";

  // WhatsApp step has its own specialised layout
  if (stepId === "whatsapp") {
    return (
      <PlannerWhatsappStep
        mode={mode}
        packageName={context?.packageName}
        initialNumber=""
        onSubmit={onWhatsappSubmit}
        animationClass={animationClass}
      />
    );
  }

  // Standard tier step — full-width stacked cards with descriptions
  if (stepId === "standard") {
    return (
      <div className={animationClass}>
        <StepCounter index={stepIndex} total={totalSteps} />
        <h2 className="font-serif text-display-sm text-brand-ink leading-tight mb-6">
          {STEP_QUESTIONS.standard}
        </h2>
        <div
          className="flex flex-col gap-3"
          role="group"
          aria-label="Travel standard options"
        >
          {STANDARD_TIERS.map((tier) => (
            <StandardTierCard
              key={tier.value}
              value={tier.value}
              label={tier.label}
              description={tier.description}
              inclusions={tier.inclusions}
              selected={answer === tier.value}
              isGold={tier.value === "premium"}
              onClick={() => onSelect(tier.value)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Duration — show fixed duration confirmation on landing pages with a fixed package
  if (stepId === "duration" && context?.fixedDuration) {
    return null; // should not render (filtered from step flow)
  }

  // All other steps — 2-column chip grid
  const options = STEP_OPTIONS[stepId] ?? [];
  const question = STEP_QUESTIONS[stepId];

  return (
    <div className={animationClass}>
      <StepCounter index={stepIndex} total={totalSteps} />
      <h2 className="font-serif text-display-sm text-brand-ink leading-tight mb-6">
        {question}
      </h2>
      <div
        className={cn(
          "grid gap-3",
          options.length > 4 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
        )}
        role="group"
        aria-label={question}
      >
        {options.map((opt) => (
          <PlannerOptionCard
            key={opt.value}
            value={opt.value}
            label={opt.label}
            selected={answer === opt.value}
            onClick={() => onSelect(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Step counter ─────────────────────────────────────────────────────────────

function StepCounter({
  index,
  total,
}: {
  index: number;
  total: number;
}) {
  return (
    <p className="text-body-sm text-brand-muted/60 mb-2" aria-live="polite">
      {index + 1} of {total}
    </p>
  );
}

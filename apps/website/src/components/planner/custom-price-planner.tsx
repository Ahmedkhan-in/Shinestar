"use client";

import { ChevronLeft } from "lucide-react";
import type { PlannerMode, LandingContext } from "./types";
import { useTripPlanner } from "./use-trip-planner";
import { PlannerShell } from "./planner-shell";
import { PlannerProgress } from "./planner-progress";
import { PlannerQuestion } from "./planner-question";
import { PlannerProcessing } from "./planner-processing";
import { PlannerSummary } from "./planner-summary";

// ─── Public API ───────────────────────────────────────────────────────────────

interface CustomPricePlannerProps {
  mode: PlannerMode;
  onClose: () => void;
  context?: LandingContext;
  /** Overrides the default sessionStorage key */
  sessionKey?: string;
}

export function CustomPricePlanner({
  mode,
  onClose,
  context,
  sessionKey,
}: CustomPricePlannerProps) {
  const planner = useTripPlanner({ mode, context, sessionKey });

  const shellEyebrow =
    mode === "landing" && context ? context.packageName : "Shine Star Tours and Travel";

  const shellTitle =
    planner.phase === "summary"
      ? "Your tailored estimate"
      : planner.phase === "processing"
      ? "Preparing your estimate…"
      : mode === "home"
      ? "Check my custom package price"
      : "Get my tailored package estimate";

  return (
    <PlannerShell
      onClose={onClose}
      eyebrow={shellEyebrow}
      title={shellTitle}
    >
      {/* Progress bar — only during questions */}
      {planner.phase === "questions" && (
        <PlannerProgress
          value={planner.progress}
          stepIndex={planner.currentStepIndex}
          totalSteps={planner.steps.length}
        />
      )}

      {/* Main content */}
      <div className="px-6 py-6 pb-8">
        {planner.phase === "questions" && (
          <>
            <PlannerQuestion
              // key drives the slide-in animation on each step change
              key={`${planner.currentStepIndex}-${planner.direction}`}
              stepId={planner.currentStep}
              stepIndex={planner.currentStepIndex}
              totalSteps={planner.steps.length}
              answer={planner.answers[planner.currentStep]}
              direction={planner.direction}
              mode={mode}
              context={context}
              onSelect={(value) => {
                planner.setAnswer(planner.currentStep, value);
                // Auto-advance after chip/card tap (except WhatsApp — has own submit)
                if (planner.currentStep !== "whatsapp") {
                  setTimeout(() => planner.advanceStep(), 280);
                }
              }}
              onWhatsappSubmit={(number, code) => {
                planner.setAnswer("whatsapp", number);
                planner.setAnswer("countryCode", code);
                setTimeout(() => planner.advanceStep(), 120);
              }}
            />

            <QuestionFooter
              canGoBack={planner.canGoBack}
              onBack={planner.goBack}
              stepId={planner.currentStep}
              hasAnswer={!!planner.answers[planner.currentStep]}
              onNext={planner.advanceStep}
            />
          </>
        )}

        {/* Processing: auto-advances to summary after ~1.8 s */}
        {planner.phase === "processing" && (
          <PlannerProcessing onComplete={planner.showSummary} />
        )}

        {planner.phase === "summary" && (
          <>
            <PlannerSummary
              answers={planner.answers}
              context={context}
              mode={mode}
            />
            <button
              type="button"
              onClick={planner.goBack}
              className="flex items-center gap-1.5 mt-5 text-body-sm text-brand-muted hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              <ChevronLeft size={14} aria-hidden="true" />
              Edit my preferences
            </button>
          </>
        )}
      </div>
    </PlannerShell>
  );
}

// ─── Question navigation footer ───────────────────────────────────────────────

interface QuestionFooterProps {
  canGoBack: boolean;
  onBack: () => void;
  stepId: string;
  hasAnswer: boolean;
  onNext: () => void;
}

function QuestionFooter({
  canGoBack,
  onBack,
  stepId,
  hasAnswer,
  onNext,
}: QuestionFooterProps) {
  // WhatsApp step uses its own form submit — no external Next button needed
  if (stepId === "whatsapp") {
    return canGoBack ? (
      <div className="mt-5">
        <BackButton onBack={onBack} />
      </div>
    ) : null;
  }

  return (
    <div className="flex items-center justify-between mt-5">
      {canGoBack ? <BackButton onBack={onBack} /> : <span />}
      {hasAnswer && (
        <button
          type="button"
          onClick={onNext}
          className="text-body-sm font-semibold text-brand-blue hover:text-brand-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded px-1"
        >
          Next →
        </button>
      )}
    </div>
  );
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="flex items-center gap-1.5 text-body-sm text-brand-muted hover:text-brand-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
    >
      <ChevronLeft size={14} aria-hidden="true" />
      Back
    </button>
  );
}

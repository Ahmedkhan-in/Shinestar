"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type {
  StepId,
  PlannerMode,
  LandingContext,
  CustomPlannerAnswers,
  PlannerPhase,
} from "./types";
import { getVisibleSteps, impliedAnswers } from "./planner-config";

// ─── Analytics hook (wire to your analytics provider when ready) ──────────────

/**
 * Funnel events for the planner. Silent on the live site; logged only while developing.
 * Never pass personal data (phone numbers, names) — events may go to analytics later.
 * When analytics are added, update the Privacy Policy first (app/privacy/page.tsx).
 */
export function trackPlannerEvent(
  name: string,
  data?: Record<string, string>
): void {
  if (typeof window === "undefined") return;
  // e.g. window.gtag?.("event", name, data);
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Planner] ${name}`, data ?? {});
  }
}

// ─── Partial lead stub ────────────────────────────────────────────────────────

/**
 * Called when the user has provided a WhatsApp number but has not yet
 * completed the full planner flow. Currently a no-op.
 *
 * TODO: POST partial lead data to your backend / CRM in a future sprint.
 * Example:
 *   fetch("/api/leads/partial", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ answers, context, capturedAt: Date.now() }),
 *   });
 */
function savePartialLead(
  _answers: CustomPlannerAnswers,
  _context?: LandingContext
): void {
  // no-op — intentionally empty until backend is ready
}

// ─── Session storage helpers ──────────────────────────────────────────────────

export type SessionState = {
  answers: CustomPlannerAnswers;
  stepIndex: number;
  /** Steps answered by whatever opened the planner (e.g. the hero search) — never asked again */
  prefilled?: StepId[];
};

function readSession(key: string): Partial<SessionState> {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as SessionState) : {};
  } catch {
    return {};
  }
}

function writeSession(key: string, data: SessionState): void {
  try {
    // Keep the prefilled list the opener stored unless the caller replaces it
    const prefilled = data.prefilled ?? readSession(key).prefilled;
    sessionStorage.setItem(key, JSON.stringify({ ...data, prefilled }));
  } catch {}
}

function clearSession(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch {}
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export interface UseTripPlannerReturn {
  steps: StepId[];
  currentStepIndex: number;
  currentStep: StepId;
  answers: CustomPlannerAnswers;
  direction: "forward" | "back";
  phase: PlannerPhase;
  /** 0–100 progress through the question steps */
  progress: number;
  canGoBack: boolean;
  /** Store an answer. Also accepts "countryCode" for the WhatsApp step. */
  setAnswer: (key: StepId | "countryCode", value: string) => void;
  advanceStep: () => void;
  goBack: () => void;
  /** Called by PlannerProcessing when its timer completes */
  showSummary: () => void;
  reset: (clearStorage?: boolean) => void;
}

interface UseTripPlannerOptions {
  mode: PlannerMode;
  context?: LandingContext;
  sessionKey?: string;
}

export function useTripPlanner({
  mode,
  context,
  sessionKey = `shine-star-planner-${mode}`,
}: UseTripPlannerOptions): UseTripPlannerReturn {
  const started = useRef(false);

  const [stepIndex, setStepIndex] = useState(0);
  const [stored, setAnswers] = useState<CustomPlannerAnswers>({});
  const [prefilled, setPrefilled] = useState<StepId[]>([]);

  // Implied answers are derived, not stored, so changing the destination undoes them
  const answers: CustomPlannerAnswers = { ...stored, ...impliedAnswers(stored, context) };
  const steps = getVisibleSteps(mode, context, stored, prefilled);
  // Read at advance time — an answer just given can hide later steps
  const stepsRef = useRef(steps);
  stepsRef.current = steps;
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [phase, setPhase] = useState<PlannerPhase>("questions");

  // Restore from sessionStorage on mount (client-only)
  useEffect(() => {
    const saved = readSession(sessionKey);
    if (saved.answers) setAnswers(saved.answers);
    if (saved.prefilled) setPrefilled(saved.prefilled);
    const visible = getVisibleSteps(mode, context, saved.answers ?? {}, saved.prefilled);
    if (typeof saved.stepIndex === "number" && saved.stepIndex < visible.length) {
      setStepIndex(saved.stepIndex);
    }
    trackPlannerEvent("planner_opened", { mode });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAnswer = useCallback(
    (key: StepId | "countryCode", value: string) => {
      setAnswers((prev) => {
        const next: CustomPlannerAnswers = { ...prev, [key]: value };

        if (!started.current) {
          trackPlannerEvent("planner_started", { mode });
          started.current = true;
        }
        // The step is recorded for every answer; the value only when it isn't personal data
        if (key === "whatsapp") {
          trackPlannerEvent("planner_question_answered", { step: key });
        } else if (key !== "countryCode") {
          trackPlannerEvent("planner_question_answered", { step: key, value });
        }

        // WhatsApp number captured — save partial lead for future CRM wiring
        if (key === "whatsapp") {
          trackPlannerEvent("whatsapp_number_provided", { mode });
          savePartialLead(next, context);
        }

        writeSession(sessionKey, { answers: next, stepIndex });
        return next;
      });
    },
    [sessionKey, stepIndex, mode, context]
  );

  const advanceStep = useCallback(() => {
    setDirection("forward");
    if (stepIndex < stepsRef.current.length - 1) {
      const next = stepIndex + 1;
      setStepIndex(next);
      setAnswers((prev) => {
        writeSession(sessionKey, { answers: prev, stepIndex: next });
        return prev;
      });
    } else {
      // All questions answered
      trackPlannerEvent("planner_completed", {});
      setPhase("processing");
    }
  }, [stepIndex, sessionKey]);

  const goBack = useCallback(() => {
    setDirection("back");
    if (phase === "processing" || phase === "summary") {
      setPhase("questions");
    } else if (stepIndex > 0) {
      const prev = stepIndex - 1;
      setStepIndex(prev);
      setAnswers((cur) => {
        writeSession(sessionKey, { answers: cur, stepIndex: prev });
        return cur;
      });
    }
  }, [phase, stepIndex, sessionKey]);

  const goToProcessing = useCallback(() => {
    trackPlannerEvent("custom_price_request_started", {});
    setPhase("processing");
  }, []);

  const showSummary = useCallback(() => {
    setPhase("summary");
  }, []);

  const reset = useCallback(
    (clearStorage = true) => {
      setStepIndex(0);
      setAnswers({});
      setPrefilled([]);
      setDirection("forward");
      setPhase("questions");
      if (clearStorage) clearSession(sessionKey);
    },
    [sessionKey]
  );

  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);

  return {
    steps,
    currentStepIndex: stepIndex,
    currentStep: steps[Math.min(stepIndex, steps.length - 1)],
    answers,
    direction,
    phase,
    progress,
    canGoBack: stepIndex > 0 || phase !== "questions",
    setAnswer,
    advanceStep,
    goBack,
    showSummary,
    reset,
  };
}

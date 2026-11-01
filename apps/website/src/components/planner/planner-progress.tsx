// Slim gold progress bar shown during the question phase

interface PlannerProgressProps {
  /** 0–100 */
  value: number;
  stepIndex: number;
  totalSteps: number;
}

export function PlannerProgress({
  value,
  stepIndex,
  totalSteps,
}: PlannerProgressProps) {
  return (
    <div
      className="h-0.5 bg-surface-grey"
      role="progressbar"
      aria-valuenow={stepIndex + 1}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={`Step ${stepIndex + 1} of ${totalSteps}`}
    >
      <div
        className="h-full bg-brand-gold transition-all duration-500 ease-premium"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

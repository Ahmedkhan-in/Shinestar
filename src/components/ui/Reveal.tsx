"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const [ref, isInView] = useInView();

  const hiddenClass =
    direction === "up"    ? "opacity-0 translate-y-4" :
    direction === "left"  ? "opacity-0 translate-x-4" :
    direction === "right" ? "opacity-0 -translate-x-4" :
                            "opacity-0";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700",
        isInView ? "opacity-100 translate-y-0 translate-x-0" : hiddenClass,
        className
      )}
      style={{
        transitionDelay: delay > 0 ? `${delay}ms` : undefined,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

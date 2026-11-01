import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Extra delay (ms) before this block animates in — use for staggered lists */
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  /** Render as a list item when revealing children of a <ul>/<ol> */
  as?: "div" | "li";
}

// Scroll reveal. Rendered visible on the server; <RevealObserver /> (in the root layout)
// hides only blocks still below the viewport once JS runs, then fades them in on scroll.
// So nothing on screen ever waits for JavaScript to appear.
export function Reveal({ children, className, delay = 0, direction = "up", as = "div" }: RevealProps) {
  const Tag = as;

  return (
    <Tag
      className={cn("reveal", `reveal-${direction}`, className)}
      style={delay > 0 ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

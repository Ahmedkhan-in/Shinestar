import { cn } from "@/lib/utils";

interface LogoProps {
  /** "dark" = ink wordmark for light surfaces; "light" = white wordmark for photos / navy */
  tone?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
}

/**
 * Shine Star wordmark — "Tours and Travel" sits raised like an exponent, in brand gold.
 * Logotypes are exempt from WCAG contrast rules, so the true brand gold is used on every surface.
 */
export function Logo({ tone = "dark", size = "md", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-start whitespace-nowrap leading-none", className)}>
      <span
        className={cn(
          "font-serif font-light tracking-tight transition-colors",
          size === "md" ? "text-xl" : "text-2xl",
          tone === "dark" ? "text-brand-ink" : "text-white"
        )}
      >
        Shine Star
      </span>
      <sup
        className={cn(
          "top-0 ml-1 mt-px font-sans font-semibold text-brand-gold",
          size === "md" ? "text-[11px]" : "text-[12px]"
        )}
      >
        Tours and Travel
      </sup>
    </span>
  );
}

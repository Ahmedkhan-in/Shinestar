import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: content is simply there, no entrance
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    let frame = 0;
    // Safety net: anything already scrolled past (anchor jumps, fast flicks) is revealed too,
    // so content never stays hidden because an intersection was skipped.
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          setIsInView(true);
          if (once) cleanup();
        }
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) cleanup();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    }

    observer.observe(el);
    if (once) {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    return cleanup;
  }, [threshold, rootMargin, once]);

  return [ref, isInView] as const;
}

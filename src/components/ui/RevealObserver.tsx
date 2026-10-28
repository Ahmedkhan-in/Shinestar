"use client";

import { useEffect } from "react";

// One observer for every <Reveal> on the site (see `.reveal` in globals.css).
// Blocks already on screen are left alone; blocks below the fold are hidden
// (without a transition) and faded in when they scroll into view. A MutationObserver
// picks up blocks added later — client-side navigation, filtered lists, etc.
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("reveal-pending");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const seen = new WeakSet<Element>();
    const scan = (root: ParentNode) => {
      root.querySelectorAll(".reveal").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        // Only hide what the visitor can't see yet
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.add("reveal-pending");
          io.observe(el);
        }
      });
    };

    scan(document);

    // Mutation callbacks run before the next paint, so new blocks never flash
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (n instanceof Element) scan(n.parentElement ?? n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: anything scrolled past without intersecting (anchor jumps, fast flicks)
    const onScroll = () => {
      document.querySelectorAll(".reveal-pending").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.remove("reveal-pending");
          io.unobserve(el);
        }
      });
    };
    let frame = 0;
    const onScrollThrottled = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(onScroll);
    };
    window.addEventListener("scroll", onScrollThrottled, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScrollThrottled);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

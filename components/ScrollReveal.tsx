"use client";

/**
 * ScrollReveal — wraps any children in a reveal animation.
 *
 * Strategy (per modern-web-guidance "scroll-entry-exit-effects"):
 *  1. Native CSS `animation-timeline: view()` for Chrome/Edge/Safari 26+ — zero JS cost.
 *  2. IntersectionObserver fallback for Firefox — bidirectional (resets when scrolled back).
 *  3. `prefers-reduced-motion: reduce` → all elements shown immediately (CSS-only).
 */

import React, { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right";
type Delay =
  | ""
  | "reveal-delay-100"
  | "reveal-delay-200"
  | "reveal-delay-300"
  | "reveal-delay-400";

interface Props {
  direction?: Direction;
  delay?: Delay;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

export default function ScrollReveal({
  direction = "up",
  delay = "",
  className = "",
  as: Tag = "div",
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if the browser natively supports CSS scroll-driven animations.
    // If it does, the CSS classes alone handle everything — no JS needed.
    const supportsNative =
      typeof CSS !== "undefined" &&
      CSS.supports("(animation-timeline: view()) and (animation-range: entry)");

    if (supportsNative) return;

    // Fallback: IntersectionObserver for Firefox and other browsers.
    // Add the "reveal-io" class so CSS applies the hidden initial state + transition.
    el.classList.add("reveal-io");

    // Respect reduced-motion — show immediately without animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          // Once visible, disconnect — element stays visible forever
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = `reveal-${direction}`;
  const classes = [dirClass, delay, className].filter(Boolean).join(" ");

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={classes}>{children}</Tag>;
}

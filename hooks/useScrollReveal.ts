"use client";

import { useEffect, useRef } from "react";

export type RevealDirection = "up" | "left" | "right";

export interface ScrollRevealOptions {
  /** Animation direction: elements slide from this direction into view */
  direction?: RevealDirection;
  /** Delay in ms before the animation starts (for staggering siblings) */
  delay?: number;
  /** 0–1 fraction of element visible before triggering */
  threshold?: number;
  /** If true, element stays visible once revealed (no reverse on scroll up) */
  once?: boolean;
}

/**
 * Returns a ref to attach to any DOM element.
 * The element will animate in when scrolled into view, and
 * animate out (reset) when scrolled back past it — bidirectional.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  direction = "up",
  delay = 0,
  threshold = 0.15,
  once = false,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set the initial "hidden" transform and opacity via data attribute
    el.dataset.revealDir = direction;
    el.dataset.revealDelay = String(delay);
    el.classList.add("scroll-reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("scroll-reveal--visible");
          if (once) observer.disconnect();
        } else {
          if (!once) {
            el.style.transitionDelay = "0ms";
            el.classList.remove("scroll-reveal--visible");
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, threshold, once]);

  return ref;
}


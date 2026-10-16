"use client";

import { useEffect, useRef, useState } from "react";

const SLIDE_DURATION = 8000; // ms per slide

const slides = [
  {
    video: "/compressed/REEL1.mp4", // length 0:47
    start: 30, // 0:04 muthal play
    eyebrow: "Nailpenter by Soniya",
    title: "Luxury Nail Care",
    cta: {
      label: "Book Your Set",
      href: "https://wa.me/918111897359?text=Hi%20Nailpenter%2C%20I%27d%20like%20to%20book%20an%20appointment.",
    },
  },
  {
    video: "/compressed/REEL2.mp4", // length 0:31
    start: 15, // 0:03 muthal play
    eyebrow: "Handmade Press-ons",
    title: "Elegant Nails. Effortless Confidence.",
    cta: { label: "Explore Collection", href: "#categories" },
  },
  {
    video: "/compressed/REEL3.mp4", // length 0:50
    start: 37, // 0:07 muthal play
    eyebrow: "Nails · Lashes · More",
    title: "Beauty, Redefined",
    cta: { label: "Our Services", href: "#services" },
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play only the active video (from its start time), pause the rest
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = slides[i].start;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_DURATION,
    );
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-black">
      {/* Video layers (crossfade) */}
      {slides.map((s, i) => (
        <video
          key={s.video}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          // #t= kodukkumbol browser thanne aa second-il ninnu start cheyyum
          src={`${s.video}#t=${s.start}`}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          autoPlay={i === 0}
          // video theernnaal start time-il ninnu veendum
          onEnded={(e) => {
            const v = e.currentTarget;
            v.currentTime = s.start;
            v.play().catch(() => {});
          }}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Centered text (crossfade with slide) */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-x-6 mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-1000 ${
              i === active
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-4 opacity-0"
            }`}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/90 md:text-xs">
              {s.eyebrow}
            </span>
            <h1 className="font-display mt-5 text-4xl font-normal uppercase leading-[1.1] tracking-wide text-white md:text-6xl lg:text-7xl">
              {s.title}
            </h1>
            <a
              href={s.cta.href}
              className="mt-9 bg-white px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[#1f9a89] hover:text-white md:text-xs"
            >
              {s.cta.label}
            </a>
          </div>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-6 w-12"
          >
            <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-white/30" />
            <span
              key={i === active ? `a-${active}` : `i-${i}`}
              className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-white"
              style={
                i === active
                  ? {
                      animation: `heroProgress ${SLIDE_DURATION}ms linear forwards`,
                    }
                  : { width: "0%" }
              }
            />
          </button>
        ))}
      </div>
    </section>
  );
}
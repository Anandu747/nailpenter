/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import FadeUp from "@/components/FadeUp";

const GALLERY = [
  { src: "/11.jpg", alt: "Nail art by Soniya" },
  { src: "/10.jpg", alt: "Nail set" },
  { src: "/6.jpg", alt: "Nail design" },
  { src: "/8.jpg", alt: "Press-on nails" },
  { src: "/9.jpg", alt: "Studio work" },
];

const N = GALLERY.length;
const AUTOPLAY_MS = 3500;
// 3 copies so the carousel can loop endlessly
const LOOP = [...GALLERY, ...GALLERY, ...GALLERY];

export default function Gallery() {
  const [idx, setIdx] = useState(N); // start on the first image of the middle copy
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  const go = (dir: 1 | -1) => {
    setAnimate(true);
    setIdx((i) => i + dir);
  };

  const goTo = (k: number) => {
    setAnimate(true);
    setIdx(N + k);
  };

  // Autoplay: restarts whenever the slide changes, stops while paused
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setAnimate(true);
      setIdx((i) => i + 1);
    }, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx, paused]);

  // After sliding into a duplicated copy, silently jump back to the middle copy
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (idx >= 2 * N) {
      setAnimate(false);
      setIdx(idx - N);
    } else if (idx < N) {
      setAnimate(false);
      setIdx(idx + N);
    }
  };

  const activeDot = ((idx % N) + N) % N;

  return (
    <section
      id="gallery"
      className="relative left-1/2 mt-28 w-screen -translate-x-1/2 md:mt-40"
    >
      {/* Title + intro + CTA */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
            Gallery
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
            Our work,
            <br />
            up close.
          </h2>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="mt-8 text-base font-normal leading-relaxed text-ink/80 md:text-xl md:leading-relaxed">
            We started this with one belief: that nails are an expression of
            your style and confidence. Every set is designed around you, with
            clean work, quality products and personal attention, made right here
            in Kochi.
          </p>
        </FadeUp>

        <FadeUp delay={300}>
          <a
             href="https://wa.me/918111897359?text=Hi%20Nailpenter%2C%20I%27d%20like%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
            className="mt-10 inline-block border-b border-ink pb-1 text-xs font-semibold uppercase tracking-[0.25em] text-ink transition hover:border-teal-dark hover:text-teal-dark"
          >
            Book Appointment
          </a>
        </FadeUp>
      </div>

      {/* Center-mode slider */}
      <FadeUp delay={250}>
        <div className="mt-14 md:mt-20">
          <div
            className="relative overflow-hidden [--card:78vw] [--gap:12px] md:[--card:38.5vw] md:[--gap:2.6vw]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={(e) => {
              setPaused(true);
              setTouchX(e.touches[0].clientX);
            }}
            onTouchEnd={(e) => {
              if (touchX !== null) {
                const dx = e.changedTouches[0].clientX - touchX;
                if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
              }
              setTouchX(null);
              setPaused(false);
            }}
          >
            {/* Track: starts at 50% and shifts so the active card is centered */}
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`ml-[50%] flex w-max ${
                animate
                  ? "transition-transform duration-700 ease-in-out"
                  : "transition-none"
              }`}
              style={{
                transform: `translateX(calc(-1 * (${idx} * (var(--card) + var(--gap)) + var(--card) / 2)))`,
              }}
            >
              {LOOP.map((g, i) => (
                <div
                  key={i}
                  aria-hidden={Math.floor(i / N) !== 1}
                  className="mr-[var(--gap)] w-[var(--card)] shrink-0"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-mint md:aspect-[3/2]">
                    <img
                      src={g.src}
                      alt={g.alt}
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-ink transition hover:scale-110 md:left-8"
            >
              <LuChevronLeft size={52} strokeWidth={1} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-ink transition hover:scale-110 md:right-8"
            >
              <LuChevronRight size={52} strokeWidth={1} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {GALLERY.map((g, k) => (
              <button
                key={g.src}
                type="button"
                onClick={() => goTo(k)}
                aria-label={`Show image ${k + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  k === activeDot
                    ? "h-3 w-3 bg-teal-dark"
                    : "h-2 w-2 bg-ink/40 hover:bg-ink/70"
                }`}
              />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
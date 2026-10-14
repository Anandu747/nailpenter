/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu";
import { IMG } from "@/lib/data";
import FadeUp from "@/components/FadeUp";

type Review = { name: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Danitta D'cruz",
    text: "Absolutely loved my floral luxe nails. The design turned out exactly how I wanted, the gel polish finish is flawless, and the service was so warm and welcoming. Highly recommend!",
  },
  {
    name: "Sevi 368",
    text: "I done my lashes here. The work was amazing. If you are looking for a perfect lash extension you definitely try this salon. Once you try here, you will definitely love it.",
  },
  {
    name: "Revathy K",
    text: "It was overall good experience and great service by team and owner Soniya, she is very friendly. Overall great experience, I recommend to everyone.",
  },
  {
    name: "juvana celine",
    text: "I had such a wonderful experience getting my nail extensions here! The staff was so friendly, patient, and professional, and they paid great attention to every little detail.",
  },
  {
    name: "Riya Dominic",
    text: "It's too good, I loved the nail art and extension. The work was neat and they paid attention to every little detail, they did just like I have shown in the reference. Definitely recommended!",
  },
  {
    name: "Janaki Mantra",
    text: "I'm in love with their work! Such a cosy and warm place to make your nails even more fabulous. The staff are so friendly and welcoming, and a big thanks to Aswathi for making my nails this beautiful.",
  },
  {
    name: "Leya Boby",
    text: "This was the first time I got my nails done and I am extremely satisfied by the services provided! The staff was kind enough to answer all my queries patiently, being a first timer!",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const total = REVIEWS.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  // Auto-advance every 7s (restarts whenever the slide changes)
  useEffect(() => {
    const t = setTimeout(() => setActive((a) => (a + 1) % total), 7000);
    return () => clearTimeout(t);
  }, [active, total]);

  return (
    <section
      id="reviews"
      className="relative left-1/2 mt-28 w-screen -translate-x-1/2 md:mt-40"
    >
      <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
        {/* Teal panel (left) */}
        <FadeUp>
          <div className="relative overflow-hidden bg-teal-dark px-6 py-20 md:px-16 md:py-28">
            {/* Watermark illustration */}
            <img
              src="/review-watermark.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 w-[620px] max-w-none select-none opacity-[0.14] md:-bottom-16 md:-left-16 md:w-[900px]"
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="font-display text-4xl font-normal leading-[1.1] text-white md:text-6xl">
                Loved by our clients
              </h2>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80 md:text-xs">
                Real words, straight from Google
              </p>

              {/* Slider */}
              <div className="mt-12 flex items-center gap-2 md:mt-16 md:gap-8">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous review"
                  className="shrink-0 text-white/70 transition hover:text-white"
                >
                  <LuChevronLeft size={44} strokeWidth={1} className="size-8 md:size-11" />
                </button>

                {/* Sliding track */}
                <div className="min-w-0 flex-1 overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                  >
                    {REVIEWS.map((r, i) => (
                      <div
                        key={r.name}
                        aria-hidden={i !== active}
                        className="flex w-full shrink-0 flex-col items-center justify-center px-2 md:px-4"
                      >
                        <div className="flex gap-1 text-white">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <LuStar
                              key={s}
                              size={16}
                              className="fill-current"
                            />
                          ))}
                        </div>
                        <p className="mt-6 text-lg font-normal leading-relaxed text-white md:text-[22px]">
                          &ldquo;{r.text}&rdquo;
                        </p>
                        <p className="mt-8 text-sm font-medium text-white md:text-base">
                          {r.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="shrink-0 text-white/70 transition hover:text-white"
                >
                  <LuChevronRight size={44} strokeWidth={1} className="size-8 md:size-11" />
                </button>
              </div>

              {/* Dots */}
              <div className="mt-10 flex justify-center gap-2">
                {REVIEWS.map((r, i) => (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show review ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Image (right) */}
        <FadeUp delay={200}>
          <div className="px-6 py-12 md:px-12 lg:px-20">
            <div className="mx-auto aspect-square w-full max-w-[420px] overflow-hidden bg-mint">
              <img
                src={IMG.client}
                alt="Happy Nailbento client"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
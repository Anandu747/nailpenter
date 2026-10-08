"use client";

import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import ScrollReveal from "@/components/ScrollReveal";

const FAQS = [
  {
    q: "How do I book an appointment?",
    a: "Tap any Book Now button, or DM us on Instagram or call the studio. Tell us the look you want and we'll confirm a slot.",
  },
  {
    q: "How long does a nail set take?",
    a: "It depends on the design. A clean everyday set is quicker, detailed nail art takes longer. We'll give you a time estimate when you book.",
  },
  {
    q: "Are your products safe?",
    a: "Yes. We use non-toxic, cruelty-free products, and all tools are sterilized before every client.",
  },
  {
    q: "What if I don't like my nails?",
    a: "Love it or we fix it. Tell us and we'll redo it, free.",
  },
  {
    q: "Do you sell press-on nails?",
    a: "Yes, we make handmade press-on nails you can wear at home. DM us to order or ask for a custom set.",
  },
  {
    q: "Can I bring my own design reference?",
    a: "Absolutely. Share a photo or Pinterest idea when you book and we'll design your set around it.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto mt-28 max-w-[1440px] px-6 md:mt-40 md:px-16 lg:px-24"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        {/* Left: heading — slides from left */}
        <ScrollReveal direction="left" as="div">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
              FAQ
            </p>
            <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
              Got questions?
              <br />
              We&apos;ve got answers.
            </h2>
            <p className="mt-8 max-w-sm text-base font-normal leading-loose text-ink/70 md:text-lg">
              Everything you need to know before your first visit. Still unsure?
              Just DM us.
            </p>
          </div>
        </ScrollReveal>

        {/* Right: accordion — slides from right */}
        <ScrollReveal direction="right" as="div">
          <div className="border-t border-ink/15">
            {FAQS.map((f, i) => {
              const open = openIndex === i;
              return (
                <div key={f.q} className="border-b border-ink/15">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                  >
                    <span className="font-display text-2xl font-normal text-ink md:text-3xl">
                      {f.q}
                    </span>
                    <LuPlus
                      size={26}
                      strokeWidth={1.25}
                      className={`shrink-0 text-teal transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-8 text-base font-normal leading-loose text-ink/70">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
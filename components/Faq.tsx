"use client";

import { useState } from "react";
import { LuPlus } from "react-icons/lu";

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
    <section id="faq" className="mt-16 px-6 md:px-10">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <div>
          <span className="inline-block rounded-full border border-teal/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-dark">
            FAQ
          </span>
          <h2 className="mt-5 text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
            Got questions?
            <br />
            We&apos;ve got answers.
          </h2>
          <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-ink/75 md:text-lg">
            Everything you need to know before your first visit. Still unsure?
            Just DM us.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="rounded-3xl bg-mint">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-ink md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/80 text-teal transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    <LuPlus size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-base font-medium leading-relaxed text-ink/75">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
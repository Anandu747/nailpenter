"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import FadeUp from "@/components/FadeUp";
import { LuArrowRight } from "react-icons/lu";

export default function Categories() {
  return (
    <section id="categories" className="mt-16 px-6 md:px-10">
      {/* Header + View all pricing (right) */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <FadeUp>
            <h2 className="font-display text-5xl font-normal md:text-7xl">
              What are you in for?
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-ink/75 md:text-lg">
              Pick what you&apos;re here for, from fresh nail sets to lashes and
              more. Clear starting prices, so you know what to expect before you
              book.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={100}>
          <Link
            href="/pricing"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-teal-dark px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-ink"
          >
            View all products
            <LuArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </FadeUp>
      </div>

      {/* Cards grid - first 3 only */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.slice(0, 3).map((c, i) => (
          <FadeUp key={c.title} delay={(i % 3) * 150} className="h-full">
            <article
              className={`group flex h-full flex-col rounded-[2rem] p-2.5 ${c.bg}`}
            >
              <div className="h-56 overflow-hidden rounded-3xl md:h-64">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
                <h3 className="text-2xl font-medium text-ink">{c.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink/75">
                  {c.desc}
                </p>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
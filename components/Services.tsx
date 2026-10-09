/* eslint-disable @next/next/no-img-element */
import { SERVICES } from "@/lib/data";
import FadeUp from "@/components/FadeUp";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto mt-28 max-w-[1440px] px-6 md:mt-40 md:px-16 lg:px-24"
    >
      {/* Header */}
      <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-20">
        <div>
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
              Our Services
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
              Crafted with
              <br />
              care, every time.
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={200}>
          <p className="max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
            From classic manicures to detailed nail art, every service is done
            with clean tools, quality products and a finish you&apos;ll love.
          </p>
        </FadeUp>
      </div>

      {/* Grid: each card staggered up */}
      <div className="mt-14 grid gap-5 md:mt-20 md:h-[680px] md:grid-flow-col md:grid-cols-3 md:grid-rows-5 md:gap-6">
        {SERVICES.map((s, i) => (
          <FadeUp
            key={s.name}
            delay={(i % 5) * 100}
            className={`h-72 md:h-auto ${
              s.tall ? "md:row-span-3" : "md:row-span-2"
            }`}
          >
            <div className="group relative h-full overflow-hidden rounded-2xl bg-mint">
              <img
                src={s.img}
                alt={s.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />
              <p className="absolute bottom-5 left-6 font-display text-2xl font-normal text-white md:text-3xl">
                {s.name}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
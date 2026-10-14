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

      {/* Alternating rows */}
      <div className="mt-14 flex flex-col gap-16 md:mt-20 md:gap-24">
        {SERVICES.map((s, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={s.name}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-20"
            >
              {/* Image (DOM-il first, so mobile-il image mukalil) */}
              <FadeUp className={imageLeft ? "md:order-1" : "md:order-2"}>
                <div className="group aspect-[4/3] overflow-hidden rounded-2xl bg-mint">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </FadeUp>

              {/* Details */}
              <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                <FadeUp delay={100}>
                  <span className="font-display text-2xl font-normal text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </FadeUp>
                <FadeUp delay={200}>
                  <h3 className="mt-3 font-display text-4xl font-normal uppercase tracking-[0.04em] text-ink md:text-5xl">
                    {s.name}
                  </h3>
                </FadeUp>
                <FadeUp delay={300}>
                  <p className="mt-5 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
                    {s.desc}
                  </p>
                </FadeUp>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
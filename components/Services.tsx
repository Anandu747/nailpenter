/* eslint-disable @next/next/no-img-element */
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="mt-16 px-6 md:px-10">
      <h2 className="text-4xl font-medium text-ink md:text-6xl">
        Our Services
      </h2>
      <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-ink/75 md:text-lg">
        From classic manicures to detailed nail art, every service is done with
        clean tools, quality products and a finish you&apos;ll love.
      </p>

      <div className="mt-8 grid gap-4 md:h-[600px] md:grid-flow-col md:grid-cols-3 md:grid-rows-5">
        {SERVICES.map((s) => (
          <div
            key={s.name}
            className={`group relative h-64 overflow-hidden rounded-3xl bg-mint md:h-auto ${
              s.tall ? "md:row-span-3" : "md:row-span-2"
            }`}
          >
            <img
              src={s.img}
              alt={s.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow-sm">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
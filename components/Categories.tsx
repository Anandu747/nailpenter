/* eslint-disable @next/next/no-img-element */
import { CATEGORIES } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";

export default function Categories() {
  return (
    <section className="mt-16 px-6 md:px-10">
      <p className="text-lg font-light italic text-teal md:text-xl">
        Nails, lashes &amp; more
      </p>
      <h2 className="mt-1 text-4xl font-extralight text-ink/85 md:text-6xl">
        What are you in for?
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {CATEGORIES.map((c) => (
          <article
            key={c.title}
            className={`group flex flex-col rounded-[2rem] p-2.5 ${c.bg}`}
          >
            <div className="h-56 overflow-hidden rounded-3xl md:h-64">
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
              <h3 className="text-2xl font-light text-ink/90">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                {c.desc}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-2xl font-light text-teal-dark">
                  from {c.price}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition hover:text-teal"
                >
                  See prices
                  <LuArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
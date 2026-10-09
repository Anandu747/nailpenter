"use client";

/* eslint-disable @next/next/no-img-element */
import { CATEGORIES } from "@/lib/data";
import FadeUp from "@/components/FadeUp";
import { useCart } from "@/components/CartProvider";
import { singleEnquiry, waLink } from "@/lib/whatsapp";
import { LuShoppingBag } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

export default function Categories() {
  const { add } = useCart();

  return (
    <section className="mt-16 px-6 md:px-10">
      {/* Header */}
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

      {/* Cards grid */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {CATEGORIES.map((c, i) => (
          <FadeUp key={c.title} delay={i * 150} className="h-full">
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
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-ink/75">
                  {c.desc}
                </p>

                <p className="mt-6 text-2xl font-medium text-teal-dark">
                  from {c.price}
                </p>

                <div className="mt-4 flex gap-2">
                  <a
                    href={waLink(singleEnquiry(c.title, c.price))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:brightness-95"
                  >
                    <FaWhatsapp size={18} />
                    WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => add({ title: c.title, price: c.price })}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-teal-dark"
                  >
                    <LuShoppingBag size={16} />
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
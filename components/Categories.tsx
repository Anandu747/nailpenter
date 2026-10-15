"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { PRICING } from "@/lib/pricing";
import FadeUp from "@/components/FadeUp";
import { useCart } from "@/components/CartProvider";
import { singleEnquiry, waLink } from "@/lib/whatsapp";
import { LuShoppingBag, LuArrowRight } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

// CATEGORIES-ile title -> PRICING-ile section id
const SECTION_OF: Record<string, string> = {
  Nails: "nails",
  "Lashes & Brows": "lashes-brows",
  Lips: "lips",
  Hair: "hair",
  "Skin & Body": "skin",
  Combos: "combos",
};

const fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// Pricing page-ile ettavum kuranja price. Section kittiyillenkil data.ts-ile price fallback.
const startingPrice = (title: string, fallback: string) => {
  const section = PRICING.find((s) => s.id === SECTION_OF[title]);
  if (!section) return fallback;
  const prices = section.groups.flatMap((g) => g.items.map((i) => i.price));
  if (prices.length === 0) return fallback;
  return `₹${fmt(Math.min(...prices))}`;
};

export default function Categories() {
  const { add } = useCart();

  return (
    <section id="categories" className="mt-16 px-6 md:px-10">
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
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c, i) => {
          const price = startingPrice(c.title, c.price);

          return (
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
                  <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-ink/75">
                    {c.desc}
                  </p>

                  <p className="mt-6 text-2xl font-medium text-teal-dark">
                    from {price}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <a
                      href={waLink(singleEnquiry(c.title, price))}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${c.title} on WhatsApp`}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#25D366] bg-white text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
                    >
                      <FaWhatsapp size={22} />
                    </a>
                    <button
                      type="button"
                      onClick={() => add({ title: c.title, price })}
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white transition hover:bg-teal-dark"
                    >
                      <LuShoppingBag size={18} />
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            </FadeUp>
          );
        })}
      </div>

      {/* View all pricing */}
      <FadeUp delay={100}>
        <div className="mt-10 flex justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-teal-dark px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-ink"
          >
            View all pricing
            <LuArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
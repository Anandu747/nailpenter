"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import { useCart } from "@/components/CartProvider";
import { singleEnquiry, waLink } from "@/lib/whatsapp";
import { formatPrice, type PriceGroup } from "@/lib/pricing";
import { LuShoppingBag, LuChevronLeft, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

const DURATION = 700; // ms, slide speed maattan ivide + duration-700 maattuka

// Client price venda ennu paranju — true aakkiyaal pazhaya slide/price panel thirichu varum
const SHOW_PRICES = false;
const PHONE = "+918111897359";

export default function PriceCard({
  group,
  bg,
  index,
}: {
  group: PriceGroup;
  bg: string;
  index: number;
}) {
  const { add } = useCart();
  const [open, setOpen] = useState(false);

  const groupEnquiry = waLink(
    `Hi, I'd like to know more about ${group.title} services.`
  );

  return (
    <FadeUp delay={(index % 3) * 150} className="h-full">
      <article
        className={`group h-[460px] rounded-[2rem] p-2.5 md:h-[500px] ${bg}`}
      >
        <div className="h-full overflow-hidden rounded-3xl">
          <div
            className={`flex h-full w-[200%] transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
              open ? "-translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* ---------- Panel 1: image + heading ---------- */}
            <div
              aria-hidden={open}
              className={`flex min-h-0 w-1/2 shrink-0 flex-col transition-[visibility] duration-0 ${
                open ? "invisible delay-700" : "visible delay-0"
              }`}
            >
              <div
                onClick={SHOW_PRICES ? () => setOpen(true) : undefined}
                className={`relative min-h-0 flex-1 overflow-hidden rounded-3xl ${
                  SHOW_PRICES ? "cursor-pointer" : ""
                }`}
              >
                <img
                  src={group.img}
                  alt={group.title}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-5">
                <div className="min-w-0">
                  <h3 className="text-2xl font-medium text-ink">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink/65">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "service" : "services"}
                  </p>
                </div>

                {/* Chevron-nu pakaram WhatsApp + Call */}
                <div className="flex shrink-0 gap-2">
                  <a
                    href={groupEnquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${group.title} on WhatsApp`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition duration-300 hover:bg-[#1ebe5a] active:scale-95"
                  >
                    <FaWhatsapp size={22} />
                  </a>
                  <a
                    href={`tel:${PHONE}`}
                    aria-label="Call us"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition duration-300 hover:bg-teal-dark active:scale-95"
                  >
                    <LuPhone size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* ---------- Panel 2: prices + buttons ---------- */}
            {SHOW_PRICES && (
              <div
                aria-hidden={!open}
                className={`flex min-h-0 w-1/2 shrink-0 flex-col px-4 pb-4 pt-3 transition-[visibility] duration-0 ${
                  open ? "visible delay-0" : "invisible delay-700"
                }`}
              >
                <div className="flex shrink-0 items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Back"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink transition duration-300 hover:bg-ink hover:text-white active:scale-95"
                  >
                    <LuChevronLeft size={20} />
                  </button>
                  <h3 className="text-2xl font-medium text-ink">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-1 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 [scrollbar-width:thin]">
                  {group.desc && (
                    <p className="mt-3 text-sm font-medium leading-relaxed text-ink/75">
                      {group.desc}
                    </p>
                  )}

                  <ul className="mt-3 divide-y divide-ink/10">
                    {group.items.map((it, i) => {
                      const title = `${group.title} – ${it.name}`;
                      const price = formatPrice(it);
                      return (
                        <li
                          key={it.name}
                          className={`flex items-center gap-3 py-3 transition-opacity duration-500 motion-reduce:transition-none ${
                            open ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            transitionDelay: open
                              ? `${DURATION * 0.45 + i * 70}ms`
                              : "0ms",
                          }}
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-base font-medium text-ink">
                              {it.name}
                            </p>
                            {it.desc && (
                              <p className="mt-0.5 text-xs font-medium leading-relaxed text-ink/65">
                                {it.desc}
                              </p>
                            )}
                            <p className="mt-1 text-xl font-medium text-teal-dark">
                              {price}
                            </p>
                          </div>

                          <div className="flex shrink-0 gap-2">
                            <a
                              href={waLink(singleEnquiry(title, price))}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Enquire about ${title} on WhatsApp`}
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#25D366] bg-white text-[#25D366] transition duration-300 hover:bg-[#25D366] hover:text-white active:scale-95"
                            >
                              <FaWhatsapp size={18} />
                            </a>
                            <button
                              type="button"
                              onClick={() => add({ title, price })}
                              aria-label={`Add ${title} to cart`}
                              className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white transition duration-300 hover:bg-teal-dark active:scale-95"
                            >
                              <LuShoppingBag size={16} />
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </FadeUp>
  );
}
"use client";

/* eslint-disable @next/next/no-img-element */
import FadeUp from "@/components/FadeUp";
import { useCart } from "@/components/CartProvider";
import { singleEnquiry, waLink } from "@/lib/whatsapp";
import { formatPrice, type PriceGroup } from "@/lib/pricing";
import { LuShoppingBag } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

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

  return (
    <FadeUp delay={(index % 3) * 150} className="h-full">
      <article
        className={`group flex h-full flex-col rounded-[2rem] p-2.5 ${bg}`}
      >
        <div className="h-52 overflow-hidden rounded-3xl md:h-60">
          <img
            src={group.img}
            alt={group.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
          <h3 className="text-2xl font-medium text-ink">{group.title}</h3>
          {group.desc && (
            <p className="mt-2 text-sm font-medium leading-relaxed text-ink/75">
              {group.desc}
            </p>
          )}

          <ul className="mt-5 divide-y divide-ink/10">
            {group.items.map((it) => {
              const title = `${group.title} – ${it.name}`;
              const price = formatPrice(it);
              return (
                <li key={it.name} className="flex items-center gap-3 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-medium text-ink">{it.name}</p>
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
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#25D366] bg-white text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                    <button
                      type="button"
                      onClick={() => add({ title, price })}
                      aria-label={`Add ${title} to cart`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white transition hover:bg-teal-dark"
                    >
                      <LuShoppingBag size={16} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </FadeUp>
  );
}
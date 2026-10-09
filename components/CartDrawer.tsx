"use client";

import { LuMinus, LuPlus, LuShoppingBag, LuTrash2, LuX } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "@/components/CartProvider";
import { formatINR, parsePrice, waLink } from "@/lib/whatsapp";

export default function CartDrawer() {
  const { items, count, isOpen, setOpen, changeQty, remove, clear } = useCart();

  const total = items.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0);

  const message =
    `Hi Soniya, I'd like to enquire about:\n\n` +
    items
      .map(
        (i, n) =>
          `${n + 1}. ${i.title} x${i.qty} - ${formatINR(
            parsePrice(i.price) * i.qty
          )}`
      )
      .join("\n") +
    `\n\n*Estimated total: ${formatINR(total)}*` +
    `\n(based on starting prices)` +
    `\n\nPlease share the available designs, slots and final prices.`;

  return (
    <>
      {/* Floating cart button */}
      {count > 0 && !isOpen && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open cart"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:scale-105"
        >
          <LuShoppingBag size={22} />
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-teal px-1 text-xs font-semibold">
            {count}
          </span>
        </button>
      )}

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-ink">
            Your Enquiry ({count})
          </h3>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="text-ink/70 transition hover:text-ink"
          >
            <LuX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-ink/60">Nothing added yet.</p>
          ) : (
            items.map((i) => (
              <div
                key={i.title}
                className="flex items-center justify-between gap-4 border-b border-ink/10 py-5"
              >
                <div>
                  <p className="text-lg font-medium text-ink">{i.title}</p>
                  <p className="text-sm text-teal-dark">from {i.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-ink/20">
                    <button
                      type="button"
                      onClick={() => changeQty(i.title, -1)}
                      aria-label={`Decrease ${i.title}`}
                      className="p-2 text-ink/70 hover:text-ink"
                    >
                      <LuMinus size={14} />
                    </button>
                    <span className="min-w-6 text-center text-sm font-medium">
                      {i.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => changeQty(i.title, 1)}
                      aria-label={`Increase ${i.title}`}
                      className="p-2 text-ink/70 hover:text-ink"
                    >
                      <LuPlus size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(i.title)}
                    aria-label={`Remove ${i.title}`}
                    className="text-ink/50 transition hover:text-red-500"
                  >
                    <LuTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-base text-ink">Estimated total</p>
              <p className="text-base font-medium text-ink">
                {formatINR(total)}
              </p>
            </div>

            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:brightness-95"
            >
              <FaWhatsapp size={20} />
              Enquire on WhatsApp
            </a>
            <button
              type="button"
              onClick={clear}
              className="mt-3 w-full text-center text-xs uppercase tracking-[0.2em] text-ink/50 transition hover:text-ink"
            >
              Clear all
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
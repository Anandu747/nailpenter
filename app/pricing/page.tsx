/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import PriceCard from "@/components/PriceCard";
import { CATEGORIES, IMG } from "@/lib/data";
import { PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing | The Nailpenter by Soniya",
  description:
    "Clear prices for nails, lashes, brows, lips, hair, skin and combos. Know what to expect before you book.",
};

// Banner image maattan: IMG.hero-ku pakaram IMG.art / IMG.beauty ... ennu idu
const BANNER_IMG = IMG.about;

export default function PricingPage() {
  let idx = 0;

  return (
    <main className="pb-20">
      {/* ---------- Banner ---------- */}
      <section className="relative isolate overflow-hidden rounded-b-[2.5rem] md:rounded-b-[3.5rem]">
        <img
          src={BANNER_IMG}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* navbar-ode same container: max-w-7xl px-4 md:px-8 */}
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-36 md:px-8 md:pb-20 md:pt-56">
          <FadeUp>
            <h1 className="font-display text-5xl font-normal text-white md:text-7xl">
              What are you in for?
            </h1>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-white/85 md:text-lg">
              Every service with a clear price, so you know what to expect
              before you book. Tap the arrow on a card to see prices, then add
              to cart or enquire on WhatsApp.
            </p>
          </FadeUp>

          <nav className="mt-8 flex flex-wrap gap-2">
            {PRICING.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-ink"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ---------- Price sections ---------- */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {PRICING.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-16 scroll-mt-28"
          >
            <FadeUp>
              <h2 className="font-display text-4xl font-normal md:text-5xl">
                {section.title}
              </h2>
            </FadeUp>
            <FadeUp delay={100}>
              <p className="mt-2 max-w-xl text-base font-medium text-ink/75">
                {section.intro}
              </p>
            </FadeUp>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {section.groups.map((g, gi) => (
                <PriceCard
                  key={g.title}
                  group={g}
                  index={gi}
                  bg={CATEGORIES[idx++ % CATEGORIES.length].bg}
                />
              ))}
            </div>
          </section>
        ))}

        <p className="mt-12 text-sm font-medium text-ink/60">
          * Prices marked &quot;from&quot; are starting rates and may vary with
          design, length and consultation.
        </p>
      </div>
    </main>
  );
}
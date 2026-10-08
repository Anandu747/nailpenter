import { LuHeart, LuPalette, LuShieldCheck } from "react-icons/lu";

const PILLARS = [
  {
    icon: LuHeart,
    no: "01",
    title: "How It Began",
    text: "Nailbento started with Soniya's love for nail art, right here in Kochi. What began as designing sets for friends grew into a studio where every client gets a look made just for her.",
  },
  {
    icon: LuPalette,
    no: "02",
    title: "What We Do",
    text: "Nail extensions, gel and nail art, lashes and more. We also make handmade press-on nails, so you can wear a salon-style set at home.",
  },
  {
    icon: LuShieldCheck,
    no: "03",
    title: "Our Promise",
    text: "Sterilized tools, clean space and non-toxic, cruelty-free products. And if you don't love your set, we'll fix it. Free.",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="mx-auto mt-28 max-w-[1440px] px-6 md:mt-40 md:px-16 lg:px-24"
    >
      {/* Header */}
      <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
            Who We Are
          </p>
          <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
            A Kochi studio for
            <br />
            nails you&apos;ll love.
          </h2>
        </div>
        <p className="max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
          We&apos;re a small, passionate nail studio. No rush, no copy-paste
          designs, just clean work, honest prices and a finish you&apos;re
          proud to show off.
        </p>
      </div>

      {/* Pillars: no boxes, divider lines */}
      <div className="mt-14 grid border-t border-ink/15 md:mt-20 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <div
            key={p.title}
            className={`py-10 md:py-14 ${
              i > 0
                ? "border-t border-ink/15 md:border-l md:border-t-0 md:pl-10"
                : ""
            } ${i < PILLARS.length - 1 ? "md:pr-10" : ""}`}
          >
            <div className="flex items-center justify-between">
              <p.icon size={44} strokeWidth={1.25} className="text-teal" />
              <span className="font-display text-2xl font-normal text-ink/30">
                {p.no}
              </span>
            </div>
            <h3 className="mt-8 font-display text-3xl font-normal text-ink">
              {p.title}
            </h3>
            <p className="mt-4 text-base font-normal leading-loose text-ink/70">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
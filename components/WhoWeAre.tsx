import Image from "next/image";
import FadeUp from "@/components/FadeUp";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;

const PILLARS = [
  {
    no: "01",
    image: unsplash("photo-1690749138086-7422f71dc159"),
    title: "How It Began",
    text: "Nailpenter started with Soniya's love for nail art, right here in Kochi. What began as designing sets for friends grew into a studio where every client gets a look made just for her.",
  },
  {
    no: "02",
    image: unsplash("photo-1619607146034-5a05296c8f9a"),
    title: "What We Do",
    text: "Nail extensions, gel and nail art, lashes and more. We also make handmade press-on nails, so you can wear a salon-style set at home.",
  },
  {
    no: "03",
    image: unsplash("photo-1599206676335-193c82b13c9e"),
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
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
              Who We Are
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
              A Kochi studio for
              <br />
              nails you&apos;ll love.
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={200}>
          <p className="max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
            We&apos;re a small, passionate nail studio. No rush, no copy-paste
            designs, just clean work, honest prices and a finish you&apos;re
            proud to show off.
          </p>
        </FadeUp>
      </div>

      {/* Image hover cards */}
      <div className="mt-14 rounded-[28px] bg-mint p-3 md:mt-20 md:p-4">
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {PILLARS.map((p, i) => (
            <FadeUp
              key={p.title}
              delay={i * 150}
              className="h-[440px] md:h-[560px]"
            >
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-8 md:p-10">
                {/* Background image (blurs on hover) */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-all duration-700 ease-out md:group-hover:scale-110 md:group-hover:blur-md"
                />

                {/* Gradient (keeps text readable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 transition-colors duration-500 md:from-black/60 md:via-transparent md:to-black/20 md:group-hover:from-black/70 md:group-hover:via-black/40 md:group-hover:to-black/40" />

                {/* Top: number */}
                <div className="relative z-10 flex items-start justify-end">
                  <span className="font-display text-2xl font-normal text-white/70">
                    {p.no}
                  </span>
                </div>

                {/* Bottom: title + description (rises on hover) */}
                <div className="relative z-10">
                  <h3 className="font-display text-3xl font-normal text-white md:text-4xl">
                    {p.title}
                  </h3>
                  <div className="grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-500 ease-out md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <p className="pt-4 text-base leading-relaxed text-white/90 transition-transform duration-500 ease-out md:translate-y-6 md:group-hover:translate-y-0">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
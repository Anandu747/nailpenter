import FadeUp from "@/components/FadeUp";

// Ninte videos ivide maattu (public/ folder-ile path)
const MISSION_VIDEO = "/showcase1.mp4";
const VISION_VIDEO = "/showcase2.mp4";

const CARDS = [
  {
    title: "Our Mission",
    video: MISSION_VIDEO,
    text: "To deliver handcrafted, high-quality nail care with honest prices and a promise you can rely on. Every set is designed around what you want, with sterilized tools, a clean space and non-toxic, cruelty-free products. And if you don't love it, we fix it free.",
  },
  {
    title: "Our Vision",
    video: VISION_VIDEO,
    text: "To be the nail studio people in Kochi trust for beautiful, healthy nails, where every client walks out feeling confident, cared for and completely herself.",
  },
];

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="mx-auto mt-28 max-w-[1440px] px-6 md:mt-40 md:px-16 lg:px-24"
    >
      {/* Header */}
      <FadeUp>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
          Vision &amp; Mission
        </p>
      </FadeUp>
      <FadeUp delay={100}>
        <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
          What drives us.
        </h2>
      </FadeUp>

      {/* 2 cards */}
      <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
        {CARDS.map((c, i) => (
          <FadeUp key={c.title} delay={i * 150} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white">
              {/* Video (top) */}
              <div className="relative aspect-video overflow-hidden bg-mint">
                <video
                  className="h-full w-full object-cover"
                  src={c.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                {/* Soft fade into the card body */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-7 pb-9 pt-6 md:px-10 md:pb-12">
                <h3 className="font-display text-4xl font-normal uppercase tracking-[0.04em] text-ink md:text-5xl">
                  {c.title}
                </h3>
                <p className="mt-5 text-base font-normal leading-loose text-ink/70 md:text-lg">
                  {c.text}
                </p>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
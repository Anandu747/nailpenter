import { LuEye, LuTarget, LuCheck } from "react-icons/lu";
import FadeUp from "@/components/FadeUp";

// Ninte videos ivide maattu (public/ folder-ile path)
const MISSION_VIDEO = "/showcase1.mp4";
const VISION_VIDEO = "/showcase2.mp4";

const MISSION_POINTS = [
  "Design every set around what you want",
  "Keep tools sterilized and the space clean",
  "Use non-toxic, cruelty-free products",
  "Fix it free if you don't love it",
];

function VideoBox({ src }: { src: string }) {
  return (
    <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-mint md:aspect-[5/6]">
      <video
        className="h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

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

      <div className="mt-14 flex flex-col gap-20 md:mt-20 md:gap-32">
        {/* Row 1: Mission content (left) + video (right) */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <FadeUp>
              <LuTarget size={44} strokeWidth={1.25} className="text-teal" />
            </FadeUp>
            <FadeUp delay={100}>
              <h3 className="mt-8 font-display text-4xl font-normal text-ink md:text-5xl">
                Our Mission
              </h3>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-5 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
                To deliver handcrafted, high-quality nail care with honest
                prices and a promise you can rely on.
              </p>
            </FadeUp>

            <div role="list" className="mt-8 flex flex-col gap-4">
              {MISSION_POINTS.map((point, i) => (
                <FadeUp key={point} delay={300 + i * 100}>
                  <div
                    role="listitem"
                    className="flex items-start gap-3 border-b border-ink/10 pb-4 text-base font-normal text-ink/80"
                  >
                    <LuCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-teal"
                    />
                    {point}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={200}>
            <VideoBox src={MISSION_VIDEO} />
          </FadeUp>
        </div>

        {/* Row 2: video (left) + Vision content (right) */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          {/* Content first in DOM so mobile shows text then video */}
          <div className="md:order-2">
            <FadeUp>
              <LuEye size={44} strokeWidth={1.25} className="text-teal" />
            </FadeUp>
            <FadeUp delay={100}>
              <h3 className="mt-8 font-display text-4xl font-normal text-ink md:text-5xl">
                Our Vision
              </h3>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-5 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
                To be the nail studio people in Kochi trust for beautiful,
                healthy nails, where every client walks out feeling
                confident, cared for and completely herself.
              </p>
            </FadeUp>
          </div>

          <div className="md:order-1">
            <FadeUp delay={200}>
              <VideoBox src={VISION_VIDEO} />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
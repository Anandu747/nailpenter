import { LuEye, LuTarget, LuCheck } from "react-icons/lu";

const MISSION_POINTS = [
  "Design every set around what you want",
  "Keep tools sterilized and the space clean",
  "Use non-toxic, cruelty-free products",
  "Fix it free if you don't love it",
];

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="mx-auto mt-28 max-w-[1440px] px-6 md:mt-40 md:px-16 lg:px-24"
    >
      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
        Vision &amp; Mission
      </p>
      <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
        What drives us.
      </h2>

      {/* Two columns, divider line, no boxes */}
      <div className="mt-14 grid border-t border-ink/15 md:mt-20 md:grid-cols-2">
        {/* Vision */}
        <div className="py-10 md:py-14 md:pr-14">
          <LuEye size={44} strokeWidth={1.25} className="text-teal" />
          <h3 className="mt-8 font-display text-4xl font-normal text-ink md:text-5xl">
            Our Vision
          </h3>
          <p className="mt-5 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
            To be the nail studio people in Kochi trust for beautiful, healthy
            nails, where every client walks out feeling confident, cared for
            and completely herself.
          </p>
        </div>

        {/* Mission */}
        <div className="border-t border-ink/15 py-10 md:border-l md:border-t-0 md:py-14 md:pl-14">
          <LuTarget size={44} strokeWidth={1.25} className="text-teal" />
          <h3 className="mt-8 font-display text-4xl font-normal text-ink md:text-5xl">
            Our Mission
          </h3>
          <p className="mt-5 max-w-md text-base font-normal leading-loose text-ink/70 md:text-lg">
            To deliver handcrafted, high-quality nail care with honest prices
            and a promise you can rely on.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {MISSION_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 border-b border-ink/10 pb-4 text-base font-normal text-ink/80"
              >
                <LuCheck size={20} className="mt-0.5 shrink-0 text-teal" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
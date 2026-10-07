import Card from "@/components/ui/Card";
import { LuEye, LuTarget, LuCheck } from "react-icons/lu";

const MISSION_POINTS = [
  "Design every set around what you want",
  "Keep tools sterilized and the space clean",
  "Use non-toxic, cruelty-free products",
  "Fix it free if you don't love it",
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="mt-16 px-6 md:px-10">
      <span className="inline-block rounded-full border border-teal/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-dark">
        Vision &amp; Mission
      </span>
      <h2 className="mt-5 text-4xl font-medium leading-[1.05] text-ink md:text-6xl">
        What drives us.
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {/* Vision */}
        <Card className="flex flex-col bg-mint p-6 md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/80 text-teal">
            <LuEye size={26} />
          </span>
          <h3 className="mt-6 text-3xl font-medium text-ink md:text-4xl">
            Our Vision
          </h3>
          <p className="mt-3 text-base font-medium leading-relaxed text-ink/75 md:text-lg">
            To be the nail studio people in Kochi trust for beautiful, healthy
            nails, where every client walks out feeling confident, cared for
            and completely herself.
          </p>
        </Card>

        {/* Mission */}
        <Card className="flex flex-col bg-ink p-6 text-white md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white">
            <LuTarget size={26} />
          </span>
          <h3 className="mt-6 text-3xl font-medium md:text-4xl">
            Our Mission
          </h3>
          <p className="mt-3 text-base font-medium leading-relaxed text-white/85 md:text-lg">
            To deliver handcrafted, high-quality nail care with honest prices
            and a promise you can rely on.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {MISSION_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-base font-medium"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-white">
                  <LuCheck size={14} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
import { FEATURES } from "@/lib/data";
import { LuHeartHandshake, LuSparkles, LuCrown } from "react-icons/lu";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  Hygienic: LuHeartHandshake,
  "Best Products": LuSparkles,
  "Expert Artist": LuCrown,
};

export default function Features() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-5 px-6 py-10 md:grid-cols-3 md:gap-8 md:px-10 md:py-12">
      {FEATURES.map((f) => {
        const Icon = ICONS[f.title] ?? LuSparkles;
        return (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-3xl bg-mint/40 p-4 md:justify-center md:bg-transparent md:p-0"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-mint text-teal md:h-16 md:w-16">
              <Icon size={26} className="md:h-[30px] md:w-[30px]" />
            </span>
            <div>
              <p className="text-lg font-semibold text-ink md:text-xl">
                {f.title}
              </p>
              <p className="mt-0.5 text-sm font-medium text-ink/70">{f.sub}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
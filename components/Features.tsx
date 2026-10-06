import Card from "@/components/ui/Card";
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
    <section className="grid gap-4 px-6 py-8 md:grid-cols-4 md:px-10">
      {FEATURES.map((f) => {
        const Icon = ICONS[f.title] ?? LuSparkles;
        return (
          <div key={f.title} className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mint text-teal">
              <Icon size={22} />
            </span>
            <div>
              <p className="font-semibold">{f.title}</p>
              <p className="text-xs text-ink/60">{f.sub}</p>
            </div>
          </div>
        );
      })}
      <Card className="bg-mint p-4 text-center font-medium tracking-wide text-teal-dark">
        FAST &amp; ON TIME
        <br />
        DONE IN 45 MIN
      </Card>
    </section>
  );
} 
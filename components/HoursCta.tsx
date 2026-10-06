import Card from "@/components/ui/Card";
import { HOURS } from "@/lib/data";
import { LuArrowRight, LuClock, LuSparkles } from "react-icons/lu";

export default function HoursCta() {
  return (
    <section
      id="contact"
      className="mt-4 grid gap-4 px-6 md:grid-cols-2 md:px-10"
    >
      {/* Hours */}
      <Card className="min-h-[280px] bg-mint p-6 md:p-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/80 text-teal-dark">
            <LuClock size={22} />
          </span>
          <p className="text-lg font-semibold">Hours</p>
        </div>

        <div className="space-y-4 text-sm">
          {HOURS.map(([day, time]) => (
            <div key={day} className="flex justify-between">
              <span className="text-ink/55">{day}</span>
              <span className={time === "Closed" ? "text-ink/55" : "text-ink/80"}>
                {time}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* CTA */}
      <Card className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#12211f] p-6 text-white md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />

        <LuSparkles size={30} className="relative text-white" />

        <div className="relative flex items-end justify-between gap-4">
          <div>
            <p className="text-4xl font-light md:text-5xl">Ready to glow?</p>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Book your appointment
              <br />
              and let&apos;s bring your vision to life
            </p>
          </div>
          <a
            href="#"
            aria-label="Book appointment"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-ink transition hover:bg-teal hover:text-white"
          >
            <LuArrowRight size={22} />
          </a>
        </div>
      </Card>
    </section>
  );
}
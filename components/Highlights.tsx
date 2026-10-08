import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { LuArrowRight } from "react-icons/lu";

export default function Highlights() {
  return (
    <section
      id="new-clients"
      className="mt-4 grid gap-4 px-6 md:grid-cols-3 md:px-10"
    >
      {/* Price card — from left */}
      <ScrollReveal direction="left">
        <Card className="relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1f9a89] via-[#136b5e] to-ink p-6 text-white">
          {/* curved shape */}
          <div className="pointer-events-none absolute -left-20 -top-28 h-60 w-[85%] rounded-full bg-gradient-to-br from-white/25 to-white/0" />

          <div className="relative flex items-center justify-between text-sm">
            <span className="rounded-full border border-white/70 px-4 py-1.5">
              Gel manicure
            </span>
            <span className="font-medium">No hidden fees</span>
          </div>

          <div className="relative flex items-end justify-between">
            <p className="text-6xl font-semibold leading-none md:text-7xl">₹499</p>
            <a
              href="#contact"
              aria-label="Book gel manicure"
              className="grid h-14 w-14 place-items-center rounded-full bg-mint text-ink transition hover:bg-white"
            >
              <LuArrowRight size={22} />
            </a>
          </div>
        </Card>
      </ScrollReveal>

      {/* Years card — from bottom */}
      <ScrollReveal direction="up" delay="reveal-delay-100">
        <Card className="flex min-h-[260px] flex-col justify-end bg-mint p-6">
          <p className="text-3xl font-light md:text-4xl">5+ years in business</p>
          <p className="mt-1 text-sm text-ink/60">Trusted by happy clients</p>
        </Card>
      </ScrollReveal>

      {/* Testimonial — from right */}
      <ScrollReveal direction="right" delay="reveal-delay-200">
        <div className="flex min-h-[260px] flex-col justify-center px-2 py-6 md:px-4">
          <p className="text-3xl font-normal leading-[1.1] tracking-tight text-ink/85 md:text-4xl">
            &ldquo;The best nail studio I&apos;ve been to. They actually listen to
            what you want.&rdquo;
          </p>
          <p className="mt-4 text-sm text-ink/55">— Happy Client</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
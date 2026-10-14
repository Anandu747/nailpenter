/* eslint-disable @next/next/no-img-element */
import { ABOUT_STATS, CONTACT, IMG } from "@/lib/data";
import FadeUp from "@/components/FadeUp";
import { LuArrowRight } from "react-icons/lu";

export default function About() {
  return (
    <section
      id="about"
      className="relative left-1/2 flex w-screen -translate-x-1/2 items-center py-10 md:min-h-screen md:py-12"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-16 lg:px-24">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 md:items-center lg:gap-x-28">
          {/* Text block (left) */}
          <div>
            <FadeUp>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-ink/70">
                Our Story
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <h2 className="mt-3 whitespace-nowrap font-display text-4xl font-normal uppercase leading-[1.05] tracking-[0.04em] text-ink md:text-5xl lg:text-6xl">
                A Vision Born
                <br />
                from Creativity
              </h2>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-ink/70">
                Founded by Soniya Mahesh in 2022, Nail Penter began as her step
                into entrepreneurship at the age of 21. The brand was built
                around a distinctive name and the idea of creating an identity
                that stands apart. Inspired by the word Carpenter, the name Nail
                Penter brings a fresh perspective to the concept of
                craftsmanship. By reimagining the word through the lens of
                nails, Soniya gave her brand a name that is memorable,
                expressive, and uniquely its own. For Soniya, starting Nail
                Penter marked the beginning of building something independently
                — a brand with its own identity and a story that continues to
                evolve. Since 2022, it has represented her journey from an idea
                to a business shaped by her vision and entrepreneurial spirit.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-3 border border-ink/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink hover:bg-ink hover:text-white"
              >
                DM to book
                <LuArrowRight size={16} />
              </a>
            </FadeUp>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 border-t border-ink/20 pt-6">
              {ABOUT_STATS.map((s, i) => (
                <FadeUp key={s.label} delay={400 + i * 120}>
                  <p className="whitespace-nowrap font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                    {s.label}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Image (right) */}
          <FadeUp delay={200}>
            <figure>
              <div className="aspect-[4/5] max-h-[70vh] w-full overflow-hidden rounded-[4px] bg-mint">
                <img
                  src={IMG.owner}
                  alt="Soniya, nail artist and owner"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/50">
                Soniya, Founder &amp; Nail Artist
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
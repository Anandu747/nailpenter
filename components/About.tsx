/* eslint-disable @next/next/no-img-element */
import { ABOUT_STATS, CONTACT, IMG } from "@/lib/data";
import FadeUp from "@/components/FadeUp";
import { LuArrowRight } from "react-icons/lu";

export default function About() {
  return (
    <section
      id="about"
      className="relative left-1/2 mt-8 w-screen -translate-x-1/2 bg-white py-24 md:mt-12 md:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <div className="grid gap-x-20 gap-y-16 md:grid-cols-2 md:items-start lg:gap-x-40">
          {/* Text block (left) */}
          <div className="md:pr-10">
            <FadeUp>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-ink/70">
                Our Story
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <h2 className="mt-3 font-display text-5xl font-light uppercase leading-[1.05] tracking-[0.04em] text-ink md:text-7xl">
                Handcrafted
                <br />
                In {CONTACT.location}
              </h2>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-10 max-w-md text-[15px] leading-relaxed text-ink/70">
                Nailbento by Soniya is a Kochi-based nail studio for nails,
                lashes and more. Every set is designed around what you want,
                from clean everyday looks to detailed nail art, and we also
                make handmade press-on nails you can wear at home.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-3 border border-ink/40 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink hover:bg-ink hover:text-white"
              >
                DM to book
                <LuArrowRight size={16} />
              </a>
            </FadeUp>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-8 border-t border-ink/20 pt-8">
              {ABOUT_STATS.map((s, i) => (
                <FadeUp key={s.label} delay={400 + i * 120}>
                  <p className="whitespace-nowrap font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">
                    {s.label}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Image (right) */}
          <FadeUp delay={200}>
            <figure>
              <div className="aspect-[3/4] overflow-hidden rounded-[4px] bg-mint">
                <img
                  src={IMG.owner}
                  alt="Soniya, nail artist and owner"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/50">
                Soniya, Founder &amp; Nail Artist
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
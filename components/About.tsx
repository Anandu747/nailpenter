/* eslint-disable @next/next/no-img-element */
import { ABOUT_STATS, CONTACT, IMG } from "@/lib/data";
import { LuArrowRight } from "react-icons/lu";

export default function About() {
  return (
    <section
      id="about"
      className="relative left-1/2 mt-8 w-screen -translate-x-1/2 md:mt-12"
    >
      <div className="grid md:grid-cols-2">
        {/* Image: full height, edge to edge */}
        <div className="relative min-h-[420px] md:min-h-[680px]">
          <img
            src={IMG.owner}
            alt="Soniya, nail artist and owner"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Content panel */}
        <div className="flex min-w-0 flex-col justify-center bg-mint/60 px-6 py-14 md:px-12 md:py-20 lg:px-16">
          <span className="block h-[3px] w-14 bg-teal" />

          <h2 className="mt-8 font-display text-5xl font-normal leading-[1.05] text-ink md:text-7xl">
            Our Story
          </h2>

          <p className="mt-8 text-lg font-medium text-ink md:text-xl">
            Nailbento by Soniya: handcrafted nails in {CONTACT.location}
          </p>

          <p className="mt-5 max-w-xl text-base font-normal leading-loose text-ink/70">
            Nailbento by Soniya is a Kochi-based nail studio for nails, lashes
            and more. Every set is designed around what you want, from clean
            everyday looks to detailed nail art, and we also make handmade
            press-on nails you can wear at home.
          </p>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 border border-ink/40 px-7 py-4 text-base font-medium text-teal-dark transition hover:border-teal hover:bg-teal hover:text-white"
          >
            DM to book
            <LuArrowRight size={18} />
          </a>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-ink/30 pt-10">
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className="min-w-0 text-center">
                <p className="break-words font-display text-2xl font-normal leading-tight text-teal sm:text-3xl lg:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs font-medium text-ink/75 md:text-sm lg:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
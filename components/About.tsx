/* eslint-disable @next/next/no-img-element */
import Card from "@/components/ui/Card";
import { ABOUT_STATS, ABOUT_TAGS, CONTACT, IMG } from "@/lib/data";
import { FaInstagram } from "react-icons/fa";
import { LuMapPin, LuPhone } from "react-icons/lu";

export default function About() {
  return (
    <section id="about" className="mt-16 px-6 md:px-10">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Image card */}
        <div className="relative min-h-[460px] overflow-hidden rounded-3xl bg-mint md:min-h-[560px]">
          <img
            src={IMG.owner}
            alt="Soniya, nail artist and owner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />

          <div className="absolute bottom-5 left-5 rounded-2xl border border-white/40 bg-white/30 px-5 py-4 backdrop-blur-md">
            <p className="text-lg font-semibold text-white">Soniya</p>
            <p className="text-xs uppercase tracking-wide text-white/90">
              Nail Artist &amp; Owner
            </p>
          </div>

          <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-white/85 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <LuMapPin size={14} className="text-teal" />
            {CONTACT.location}
          </span>
        </div>

        {/* Content card */}
        <Card className="flex flex-col justify-between bg-mint p-6 md:p-10">
          <div>
            <span className="inline-block rounded-full border border-teal/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-teal-dark">
              About Us
            </span>

            <h2 className="mt-6 text-4xl font-extralight leading-[1.05] text-ink/85 md:text-6xl">
              Handcrafted nails,
              <br />
              made with love.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/70 md:text-base">
              Nailbento by Soniya is a Kochi-based nail studio for nails, lashes
              and more. Every set is designed around what you want, from clean
              everyday looks to detailed nail art, and we also make handmade
              press-on nails you can wear at home.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {ABOUT_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/80 px-4 py-1.5 text-sm text-teal-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-teal"
            >
              <FaInstagram size={16} />
              DM to book
            </a>
            <a
              href={`tel:+91${CONTACT.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/60 px-6 py-3 text-sm font-medium transition hover:border-teal hover:text-teal"
            >
              <LuPhone size={16} />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </Card>
      </div>

      {/* Stats */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {ABOUT_STATS.map((s) => (
          <Card key={s.label} className="bg-mint p-6">
            <p className="text-3xl font-light md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-ink/60">{s.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

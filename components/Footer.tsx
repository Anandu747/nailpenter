/* eslint-disable @next/next/no-img-element */
import { NAV_LINKS, CONTACT } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { FaInstagram } from "react-icons/fa";
import { LuMapPin, LuPhone, LuArrowUpRight } from "react-icons/lu";

// public/ folder-ile image
const CTA_BG = "/footer-bg.jpg";

export default function Footer() {
  return (
    <footer className="relative left-1/2 mt-28 w-screen -translate-x-1/2 bg-ink text-white md:mt-40">
      {/* CTA band with background image (full width) */}
      <div className="relative isolate">
        <img
          src={CTA_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 px-6 py-24 md:flex-row md:items-center md:px-16 md:py-36 lg:px-24">
          <ScrollReveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Book your visit
              </p>
              <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] md:text-7xl">
                Ready for nails
                <br />
                you&apos;ll love?
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-ink transition hover:bg-teal hover:text-white"
            >
              Book Now
              <LuArrowUpRight size={18} />
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer body */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-20 md:py-20">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Nailbento by Soniya"
              className="h-16 w-16 rounded-full bg-white object-cover p-0.5"
            />
            <p className="mt-6 font-display text-3xl font-normal">
              Nailpenter by Soniya
            </p>
            <p className="mt-4 max-w-sm text-base leading-loose text-white/60">
              A Kochi nail studio for nails, lashes and more. Handcrafted sets,
              clean tools and a finish you&apos;ll love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Quick Links
            </p>
            <nav className="mt-6 flex flex-col gap-4 text-base">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="w-fit text-white/80 transition hover:text-teal"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Contact
            </p>
            <ul className="mt-6 flex flex-col gap-5 text-base">
              <li>
                <a
                  href={`tel:+91${CONTACT.phone}`}
                  className="flex items-center gap-4 text-white/80 transition hover:text-teal"
                >
                  <LuPhone size={20} strokeWidth={1.25} className="text-teal" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 transition hover:text-teal"
                >
                  <FaInstagram size={20} className="text-teal" />
                  Follow on Instagram
                </a>
              </li>
              <li className="flex items-center gap-4 text-white/80">
                <LuMapPin size={20} strokeWidth={1.25} className="text-teal" />
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 py-8 text-xs font-medium uppercase tracking-[0.2em] text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} Nailpenter by Soniya. All rights
            reserved.
          </p>
          <a href="#" className="transition hover:text-teal">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
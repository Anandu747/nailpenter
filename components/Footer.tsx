/* eslint-disable @next/next/no-img-element */
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { FaInstagram } from "react-icons/fa";
import { LuMapPin, LuPhone, LuArrowUpRight } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="mt-28 rounded-t-[2rem] bg-ink text-white md:mt-40">
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-20 md:px-16 md:pt-28 lg:px-24">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/15 pb-16 md:flex-row md:items-end md:pb-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              Book your visit
            </p>
            <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] md:text-7xl">
              Ready for nails
              <br />
              you&apos;ll love?
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-ink transition hover:bg-teal hover:text-white"
          >
            Book Now
            <LuArrowUpRight size={18} />
          </a>
        </div>

        {/* Main columns */}
        <div className="grid gap-14 py-16 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-20 md:py-24">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Nailbento by Soniya"
              className="h-16 w-16 rounded-full bg-white object-cover p-0.5"
            />
            <p className="mt-6 font-display text-3xl font-normal">
              Nailbento by Soniya
            </p>
            <p className="mt-4 max-w-sm text-base font-normal leading-loose text-white/60">
              A Kochi nail studio for nails, lashes and more. Handcrafted sets,
              clean tools and a finish you&apos;ll love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Quick Links
            </p>
            <nav className="mt-6 flex flex-col gap-4 text-base font-normal">
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
            <ul className="mt-6 flex flex-col gap-5 text-base font-normal">
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
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-8 text-xs font-medium uppercase tracking-[0.2em] text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} Nailbento by Soniya. All rights
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
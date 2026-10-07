/* eslint-disable @next/next/no-img-element */
import { NAV_LINKS, CONTACT } from "@/lib/data";
import { FaInstagram } from "react-icons/fa";
import { LuMapPin, LuPhone, LuArrowUpRight } from "react-icons/lu";

const EXTRA_LINKS = [
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-[40px] bg-ink px-6 pb-8 pt-12 text-white md:px-10 md:pt-16">
      <div className="mx-auto max-w-[1440px]">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/15 pb-10 md:flex-row md:items-center md:pb-14">
          <h2 className="text-3xl font-medium leading-tight md:text-5xl">
            Ready for nails
            <br />
            you&apos;ll love?
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white transition hover:bg-teal-dark"
          >
            Book Now
            <LuArrowUpRight size={18} />
          </a>
        </div>

        {/* Main columns */}
        <div className="grid gap-10 py-10 md:grid-cols-[1.4fr_1fr_1.2fr] md:py-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Nailbento"
                className="h-14 w-14 rounded-full bg-white p-0.5"
              />
              <p className="text-xl font-semibold">Nailpenter by Soniya</p>
            </div>
            <p className="mt-4 max-w-sm text-base font-medium leading-relaxed text-white/75">
              A Kochi nail studio for nails, lashes and more. Handcrafted sets,
              clean tools and a finish you&apos;ll love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Quick Links
            </p>
            <nav className="mt-4 flex flex-col gap-3 text-base font-medium">
              {[...NAV_LINKS, ...EXTRA_LINKS].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="w-fit text-white/90 transition hover:text-teal"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-4 text-base font-medium">
              <li>
                <a
                  href={`tel:+91${CONTACT.phone}`}
                  className="flex items-center gap-3 text-white/90 transition hover:text-teal"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                    <LuPhone size={18} />
                  </span>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/90 transition hover:text-teal"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                    <FaInstagram size={18} />
                  </span>
                  Follow on Instagram
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                  <LuMapPin size={18} />
                </span>
                {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm font-medium text-white/60 md:flex-row">
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
/* eslint-disable @next/next/no-img-element */
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#">
          <img
            src="/logo.png"
            alt="Nailbento by Soniya"
            className="h-25 w-25 rounded-full bg-white p-0.5 shadow"
          />
        </a>

        <nav className="hidden gap-8 rounded-full bg-white/80 px-8 py-3 text-sm font-medium backdrop-blur md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="transition hover:text-teal">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
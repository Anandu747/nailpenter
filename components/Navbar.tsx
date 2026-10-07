/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 10);

      if (y < 10) {
        setVisible(true); // always show at the very top
      } else if (y > lastY.current + 5) {
        setVisible(false); // scrolling down -> hide
        setOpen(false); // close mobile menu too
      } else if (y < lastY.current - 5) {
        setVisible(true); // scrolling up -> show
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#">
          <img
            src="/logo.png"
            alt="Nailbento by Soniya"
            className="h-25 w-25 rounded-full bg-white p-0.5 shadow"
          />
        </a>

        {/* Desktop pill */}
        <nav
          className={`fixed left-1/2 z-50 hidden -translate-x-1/2 gap-8 rounded-full bg-white/80 px-8 py-3 text-sm font-medium backdrop-blur transition-all duration-300 md:flex ${
            atTop ? "top-[42px]" : "top-4 shadow-lg"
          } ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="transition hover:text-teal">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop Book Now */}
        <a
          href="#contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal md:inline-block"
        >
          Book Now
        </a>

        {/* Mobile hamburger + dropdown */}
        <div
          className={`fixed right-6 z-50 transition-all duration-300 md:hidden ${
            atTop ? "top-12" : "top-4"
          } ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
        >
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-white/80 shadow backdrop-blur"
          >
            <span
              className={`h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          <div
            className={`absolute right-0 top-full mt-3 w-60 origin-top-right rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur transition-all duration-200 ${
              open
                ? "pointer-events-auto scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-1 text-base font-medium">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 transition hover:bg-teal/10 hover:text-teal"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-teal"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
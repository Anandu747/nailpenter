/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 10);

      if (y < 10) {
        setVisible(true);
      } else if (y > lastY.current + 5) {
        setVisible(false);
        setOpen(false);
      } else if (y < lastY.current - 5) {
        setVisible(true);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 px-4 transition-all duration-300 md:px-8 ${
        atTop ? "top-5" : "top-3"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"}`}
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between gap-6 rounded-full bg-white/90 px-3 py-2 backdrop-blur-md md:px-4 ${
          atTop ? "shadow-sm" : "shadow-lg"
        }`}
      >
        {/* Logo */}
        <a href="#" aria-label="Nailbento by Soniya home" className="shrink-0">
          <img
            src="/logo.png"
            alt="Nailbento by Soniya"
            className="h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`relative py-1 text-[15px] font-medium transition hover:text-teal ${
                  isActive ? "text-teal-dark" : "text-ink/80"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 rounded bg-teal-dark transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden shrink-0 rounded-full bg-teal-dark px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-ink md:inline-block"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-mint md:hidden"
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
      </div>

      {/* Mobile dropdown */}
      <div
        className={`mx-auto mt-3 max-w-5xl origin-top rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur-md transition-all duration-200 md:hidden ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 text-base font-medium">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => {
                setActive(l.href);
                setOpen(false);
              }}
              className="rounded-xl px-3 py-3 transition hover:bg-teal/10 hover:text-teal"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-3 block rounded-full bg-teal-dark px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-ink"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
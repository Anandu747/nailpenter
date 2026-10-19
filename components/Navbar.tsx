/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();
  const lastY = useRef(0);

  // "#about" ennu ullathine "/#about" aakki maattum, appo ethu page-il ninnum home-ilekku pokum
  const links = NAV_LINKS.map((l) => ({
    ...l,
    href: l.href.startsWith("#") ? `/${l.href}` : l.href,
  }));

  const isLinkActive = (href: string) =>
    href.startsWith("/#")
      ? pathname === "/" && active === href
      : pathname === href;

  // Home page-il aanenkil smooth scroll, allenkil normal navigation
  const handleLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setActive(href);
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  };

  // Vere page-il ninnu home-il vannaal, section kittunnath vare wait cheythu scroll
  useEffect(() => {
    if (pathname !== "/") return;
    const id = window.location.hash.slice(1);
    if (!id) return;

    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el) {
        clearInterval(timer);
        el.scrollIntoView({ behavior: "smooth" });
      } else if (++tries > 30) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [pathname]);

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
      className={`pointer-events-none fixed inset-x-0 z-50 px-4 transition-all duration-300 md:px-8 ${
        atTop ? "top-5" : "top-3"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Logo (left, outside pill) */}
        {/* <Link
          href="/"
          onClick={() => setActive("")}
          aria-label="Nailbento by Soniya home"
          className="pointer-events-auto shrink-0 justify-self-start"
        >
          <img
            src="/logo.png"
            alt="Nailbento by Soniya"
            className="h-20 w-20 rounded-full object-cover md:h-28 md:w-28"
          />
        </Link> */}
<Link
  href="/"
  onClick={() => setActive("")}
  aria-label="Nailpenter by Soniya home"
  className="pointer-events-auto block h-20 w-20 shrink-0 justify-self-start overflow-hidden rounded-full bg-white shadow-md md:h-28 md:w-28"
>
  <img
    src="/logo1.png"
    alt="Nailpenter by Soniya"
    className="h-full w-full scale-[1.3] object-contain"
  />
</Link>

        {/* Center pill: links only */}
        <nav
          className={`pointer-events-auto hidden items-center gap-8 rounded-full bg-white/90 px-8 py-3.5 backdrop-blur-md transition-shadow md:flex ${
            atTop ? "shadow-sm" : "shadow-lg"
          }`}
        >
          {links.map((l) => {
          const isActive = isLinkActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l.href)}
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
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA (right, outside pill) */}
        <a
          href="https://wa.me/918111897359?text=Hi%20Nailpenter%2C%20I%27d%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto hidden shrink-0 justify-self-end rounded-full bg-teal-dark px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-ink md:inline-block"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="pointer-events-auto flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-mint md:hidden"
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
          {links.map((l) => (
          <Link
           key={l.href}
              href={l.href}
              onClick={(e) => {
                handleLinkClick(e, l.href);
                setOpen(false);
              }}
              className={`rounded-xl px-3 py-3 transition hover:bg-teal/10 hover:text-teal ${
                isLinkActive(l.href) ? "text-teal-dark" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          onClick={(e) => {
            handleLinkClick(e, "/#contact");
            setOpen(false);
          }}
          className="mt-3 block rounded-full bg-teal-dark px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-ink"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
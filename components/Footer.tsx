/* eslint-disable @next/next/no-img-element */
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-ink/10 px-6 py-8 md:px-10">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Nailbento" className="h-10 w-10 rounded-full" />
          <p className="text-sm font-medium">Nailbento by Soniya</p>
        </div>

        <nav className="flex gap-6 text-sm text-ink/60">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-teal">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-ink/50">
          © {new Date().getFullYear()} Nailbento by Soniya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
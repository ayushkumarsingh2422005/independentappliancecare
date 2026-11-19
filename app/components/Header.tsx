"use client";

import { useState } from "react";
import { site } from "../lib/site";

const links = [
  { href: "#refrigerator", label: "Refrigerator Repair" },
  { href: "#washing-machine", label: "Washing Machine Repair" },
  { href: "#book", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1c2c] text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-400 text-xs font-bold text-[#0b1c2c] shadow-inner">
            {site.shortName}
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-xs">
              Independent
            </span>
            <span className="block text-sm font-bold uppercase tracking-wide text-white sm:text-base">
              Appliance Care
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0b1c2c] shadow-sm transition hover:bg-slate-100 sm:inline-flex"
        >
          {site.phone}
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0b1c2c] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-[#0b1c2c]"
            >
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

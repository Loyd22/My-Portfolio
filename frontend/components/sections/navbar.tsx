"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#070a12]/85 backdrop-blur-xl">
      <nav
        className="site-container flex items-center justify-between px-4 py-3 sm:px-6 lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-text"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-xs text-accent">
            LV
          </span>
          LOYD
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-textMuted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent/60 hover:bg-accent/20"
          >
            Let&apos;s Work
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#070a12]/95 px-4 py-4 md:hidden">
          <div className="site-container flex flex-col gap-2">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-textMuted transition hover:bg-white/5 hover:text-text"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-center text-sm font-semibold text-accent"
            >
              Let&apos;s Work
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

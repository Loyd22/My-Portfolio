"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, Github, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const roles = portfolioData.identity.rotatingRoles;
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home" className="grid gap-6 pb-20 pt-4 md:grid-cols-12 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-shell grid-glass relative overflow-hidden p-6 sm:p-8 md:col-span-8 md:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="mb-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <Sparkles size={14} />
            {portfolioData.availability.status}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-textMuted">
            <MapPin size={14} />
            Based in {portfolioData.identity.location}
          </span>
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-textMuted">
          {portfolioData.identity.fullName}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-text sm:text-5xl xl:text-6xl">
          {portfolioData.identity.preferredName}
        </h1>

        <div className="mb-6 min-h-[2.6rem] text-lg font-semibold text-accent sm:min-h-[3rem] sm:text-2xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[activeRole]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="inline-block"
            >
              {roles[activeRole]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-textMuted sm:text-base">
          {portfolioData.identity.shortPositioning}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:translate-y-[-1px] hover:bg-[#7eebd2]"
          >
            View Featured Work
            <ArrowDownRight size={16} />
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-text transition hover:border-white/30 hover:bg-white/10"
          >
            GitHub
            <Github size={16} />
          </a>
          <a
            href={portfolioData.contact.phone}
            className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition hover:border-accent/60 hover:bg-accent/20"
          >
            Call: 0929249953
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="section-shell p-6 sm:p-8 md:col-span-4"
      >
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.17em] text-textMuted">
          Current Focus
        </h2>
        <ul className="space-y-2.5 text-sm text-textMuted">
          {portfolioData.currentFocus.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-white/10 pt-5">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-textMuted">
            Education Snapshot
          </h3>
          <ul className="space-y-2 text-xs text-textMuted sm:text-sm">
            {portfolioData.quickFacts.map((fact) => (
              <li key={fact.label} className="flex items-start justify-between gap-3">
                <span>{fact.label}</span>
                <span className="text-right text-text">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </section>
  );
}

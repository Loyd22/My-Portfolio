import { portfolioData } from "@/data/portfolio";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="site-container flex flex-col items-start justify-between gap-3 px-4 text-sm text-textMuted sm:flex-row sm:items-center sm:px-6 lg:px-10">
        <p>
          © {new Date().getFullYear()} {portfolioData.identity.fullName}. All rights reserved.
        </p>
        <p className="text-xs uppercase tracking-[0.14em]">
          Built with Next.js, TypeScript, Tailwind, Framer Motion
        </p>
      </div>
    </footer>
  );
}

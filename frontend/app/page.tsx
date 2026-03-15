import { ScrollProgress } from "@/components/sections/scroll-progress";
import { GalleryStrip } from "@/components/resume/gallery";
import { LeftColumn } from "@/components/resume/left-column";
import { RightColumn } from "@/components/resume/right-column";
import { TopHeader } from "@/components/resume/top-header";
import { getPortfolioData } from "@/lib/portfolio-api";

export default async function Home() {
  const portfolioData = await getPortfolioData();

  return (
    <>
      <ScrollProgress />
      <main className="site-container px-3 pb-8 pt-6 sm:px-4 sm:pt-8">
        <article className="resume-paper rounded-2xl p-4 sm:p-5 lg:p-7">
          <header className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#1e263611] pb-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a2234]">
              Loyd Portfolio
            </p>
            <nav aria-label="Section links" className="flex flex-wrap items-center gap-2">
              <a
                href="#about"
                className="rounded-md border border-[#1d263813] bg-[#f1f4fa] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#344158]"
              >
                About
              </a>
              <a
                href="#projects"
                className="rounded-md border border-[#1d263813] bg-[#f1f4fa] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#344158]"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-[#594df03f] bg-[#594df012] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4d43da]"
              >
                Contact
              </a>
            </nav>
          </header>

          <TopHeader data={portfolioData} />

          <section className="grid gap-8 border-t border-[#1e263611] pt-5 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <LeftColumn data={portfolioData} />
            </div>
            <div className="lg:col-span-4">
              <RightColumn data={portfolioData} />
            </div>
          </section>

          <div className="resume-rule mt-3" />
          <GalleryStrip data={portfolioData} />

          <footer className="mt-6 flex flex-col gap-2 border-t border-[#1e263611] pt-4 text-xs text-[#42506a] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {portfolioData.identity.fullName}. Built for internship and collaboration opportunities.
            </p>
            <p className="text-[11px] uppercase tracking-[0.12em] text-[#5a6783]">
              Next.js + TypeScript + Tailwind + Framer Motion
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

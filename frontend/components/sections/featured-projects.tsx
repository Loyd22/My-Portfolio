import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="section-shell mt-6 px-6 py-14 sm:px-8 md:px-10 md:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="End-to-end builds focused on real business workflows"
          description="Projects are framed around architecture quality, product behavior, and deployment readiness."
        />
      </Reveal>

      <div className="grid gap-5">
        {portfolioData.projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-accent/35 hover:bg-white/[0.055] sm:p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-text sm:text-xl">{project.title}</h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.13em] text-accent">
                  Project {index + 1}
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-textMuted sm:text-base">{project.summary}</p>

              <div className="grid gap-4 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-textMuted">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-textMuted">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-textMuted">
                    Stack
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <Tag key={tool}>{tool}</Tag>
                    ))}
                  </div>
                  <p className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-xs leading-relaxed text-accent sm:text-sm">
                    {project.impact}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

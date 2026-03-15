import { FlaskConical, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperimentsSection() {
  return (
    <section id="experiments" className="section-shell mt-6 px-6 py-14 sm:px-8 md:px-10 md:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="More Builds / Experiments"
          title="Exploration track for new AI automation ideas"
          description="Smaller concepts and iteration projects that support long-term LLMOps and applied ML growth."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.experiments.map((experiment, index) => (
          <Reveal key={experiment.title} delay={index * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent/35 hover:bg-white/[0.055] sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-lg border border-accent/30 bg-accent/10 p-1.5 text-accent">
                  {index % 2 === 0 ? <FlaskConical size={16} /> : <Sparkles size={16} />}
                </span>
                <h3 className="text-base font-semibold text-text">{experiment.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-textMuted">{experiment.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

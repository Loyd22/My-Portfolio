import { GraduationCap, TrendingUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CertificationsSection() {
  return (
    <section id="learning" className="section-shell mt-6 px-6 py-14 sm:px-8 md:px-10 md:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Certifications / Learning"
          title="Structured learning roadmap for production AI engineering"
          description="Focused on practical capability growth with transparent status instead of inflated claims."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {portfolioData.learning.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent/35 hover:bg-white/[0.055]">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.status}
                </span>
                {index === 0 ? (
                  <TrendingUp size={18} className="text-accent" />
                ) : (
                  <GraduationCap size={18} className="text-accent" />
                )}
              </div>
              <h3 className="mb-2 text-base font-semibold text-text">{item.title}</h3>
              <p className="text-sm leading-relaxed text-textMuted">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

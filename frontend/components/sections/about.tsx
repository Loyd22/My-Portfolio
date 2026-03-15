import { BookOpenCheck, Cog, Layers3 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Layers3, Cog, BookOpenCheck];

export function AboutSection() {
  return (
    <section id="about" className="section-shell px-6 py-14 sm:px-8 md:px-10 md:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Building production-minded AI products from backend to interface"
          description="Strong early-career engineering profile focused on reliable, maintainable delivery for real workflows."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="space-y-5 text-sm leading-relaxed text-textMuted sm:text-base">
            <p>{portfolioData.identity.about}</p>
            <p>{portfolioData.identity.aboutExtended}</p>
            <p>{portfolioData.identity.longTerm}</p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          {portfolioData.workValues.map((value, index) => {
            const Icon = icons[index] ?? Layers3;

            return (
              <Reveal key={value.title} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <Icon size={18} className="mb-3 text-accent" />
                  <h3 className="mb-2 text-sm font-semibold text-text sm:text-base">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-textMuted">{value.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

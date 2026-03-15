import { Braces, DatabaseZap, Server, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";

const iconByCategory = {
  Frontend: Braces,
  Backend: Server,
  "AI / Data": DatabaseZap,
  "DevOps / Tools": Wrench
};

export function TechStackSection() {
  return (
    <section id="stack" className="section-shell mt-6 px-6 py-14 sm:px-8 md:px-10 md:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Practical full-stack and AI toolset for product delivery"
          description="Organized by frontend, backend, AI/data, and deployment workflows."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.stack.map((group, index) => {
          const Icon =
            iconByCategory[group.category as keyof typeof iconByCategory] ?? iconByCategory.Backend;

          return (
            <Reveal key={group.category} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent/35 hover:bg-white/[0.055]">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-text">{group.category}</h3>
                    <p className="text-sm text-textMuted">{group.description}</p>
                  </div>
                  <span className="rounded-xl border border-accent/30 bg-accent/10 p-2 text-accent">
                    <Icon size={18} />
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

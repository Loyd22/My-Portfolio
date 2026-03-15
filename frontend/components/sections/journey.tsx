import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function JourneySection() {
  return (
    <section id="journey" className="section-shell mt-6 px-6 py-14 sm:px-8 md:px-10 md:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Experience / Journey"
          title="Credible progression through internship, academics, and project execution"
          description="A transparent timeline that reflects practical growth and continuous technical depth."
        />
      </Reveal>

      <div className="relative border-l border-white/10 pl-6 sm:pl-8">
        {portfolioData.journey.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className="mb-8 last:mb-0">
            <article className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6">
              <span
                aria-hidden
                className="absolute -left-[37px] top-8 h-3 w-3 rounded-full border-2 border-bg bg-accent sm:-left-[45px]"
              />
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-text sm:text-lg">{item.title}</h3>
                <p className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.period}
                </p>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-textMuted">{item.details}</p>
              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-textMuted">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

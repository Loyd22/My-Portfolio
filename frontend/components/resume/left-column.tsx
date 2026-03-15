import { ArrowUpRight, Link2, Mail, Phone, Trophy } from "lucide-react";
import type { PortfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { ResumeSection } from "@/components/resume/resume-section";

type LeftColumnProps = {
  data: PortfolioData;
};

export function LeftColumn({ data }: LeftColumnProps) {
  return (
    <div className="space-y-1">
      <Reveal>
        <ResumeSection title="About" id="about">
          <p className="text-sm leading-relaxed text-[#2f3b53]">{data.identity.about}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#2f3b53]">
            {data.identity.aboutExtended}
          </p>
        </ResumeSection>
      </Reveal>

      <div className="resume-rule" />

      <Reveal delay={0.04}>
        <ResumeSection title="Tech Stack & Skills" actionText="Core Tools" id="stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {data.stack.map((group) => (
              <article key={group.category}>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#111827]">
                  {group.category}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#44506a]">
                  {group.items.join("  •  ")}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-4 space-y-2 rounded-lg border border-[#1d263813] bg-[#eef1f8] p-3">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#111827]">
              Core Strengths
            </h3>
            {data.skillsGroups.map((group) => (
              <p key={group.category} className="text-xs leading-relaxed text-[#344158]">
                <span className="font-extrabold text-[#111827]">{group.category}: </span>
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </ResumeSection>
      </Reveal>

      <div className="resume-rule" />

      <Reveal delay={0.12}>
        <ResumeSection title="Hackathons & Competitions">
          <div className="space-y-3">
            {data.hackathons.map((hackathon) => (
              <article
                key={`${hackathon.event}-${hackathon.period}`}
                className="rounded-lg border border-[#1d263813] bg-[#eef1f8] p-3"
              >
                <header className="mb-1.5 flex items-start justify-between gap-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.04em] text-[#111827]">
                    {hackathon.event}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#4a5772]">
                    {hackathon.period}
                  </span>
                </header>

                <p className="mb-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4f43d7]">
                  <Trophy size={11} />
                  {hackathon.role}
                </p>

                <ul className="space-y-1.5">
                  {hackathon.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs leading-relaxed text-[#344158]">
                      • {highlight}
                    </li>
                  ))}
                </ul>

                {hackathon.repo ? (
                  <a
                    href={hackathon.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#4b41d5] hover:underline"
                  >
                    Repo: {hackathon.repo}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </ResumeSection>
      </Reveal>

      <div className="resume-rule" />

      <Reveal delay={0.16}>
        <ResumeSection title="Connect" id="contact">
          <div className="grid gap-2 sm:grid-cols-2">
            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-[#1d263811] bg-[#eef1f8] px-3 py-2 text-xs font-semibold text-[#172033]"
            >
              <span className="inline-flex items-center gap-2">
                <Link2 size={13} />
                GitHub
              </span>
              <span className="inline-flex items-center gap-1 text-[#4a5772] group-hover:text-[#4b41d5]">
                Open <ArrowUpRight size={11} />
              </span>
            </a>
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-[#1d263811] bg-[#eef1f8] px-3 py-2 text-xs font-semibold text-[#172033]"
            >
              <span className="inline-flex items-center gap-2">
                <Link2 size={13} />
                LinkedIn
              </span>
              <span className="inline-flex items-center gap-1 text-[#4a5772] group-hover:text-[#4b41d5]">
                Open <ArrowUpRight size={11} />
              </span>
            </a>
            <a
              href={data.contact.email}
              className="group flex items-center justify-between rounded-lg border border-[#1d263811] bg-[#eef1f8] px-3 py-2 text-xs font-semibold text-[#172033]"
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={13} />
                Email
              </span>
              <span className="inline-flex items-center gap-1 text-[#4a5772] group-hover:text-[#4b41d5]">
                Send <ArrowUpRight size={11} />
              </span>
            </a>
            <a
              href={data.contact.phone}
              className="group flex items-center justify-between rounded-lg border border-[#1d263811] bg-[#eef1f8] px-3 py-2 text-xs font-semibold text-[#172033]"
            >
              <span className="inline-flex items-center gap-2">
                <Phone size={13} />
                Phone
              </span>
              <span className="text-[11px] text-[#4a5772]">0929249953</span>
            </a>
          </div>
        </ResumeSection>
      </Reveal>
    </div>
  );
}

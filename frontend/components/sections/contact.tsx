import { FileText, Github, Linkedin, Mail, MessageSquareShare } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const links = [
  {
    label: "GitHub",
    href: portfolioData.contact.github,
    value: "github.com/Loyd22",
    icon: Github,
    placeholder: false
  },
  {
    label: "LinkedIn",
    href: portfolioData.contact.linkedin,
    value: "Replace with your LinkedIn URL",
    icon: Linkedin,
    placeholder: true
  },
  {
    label: "Email",
    href: portfolioData.contact.email,
    value: "Replace with your professional email",
    icon: Mail,
    placeholder: true
  },
  {
    label: "Resume",
    href: portfolioData.contact.resume,
    value: "Replace with your resume link",
    icon: FileText,
    placeholder: true
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell mt-6 px-6 py-14 sm:px-8 md:px-10 md:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Open for internship, collaboration, and product-focused opportunities"
          description="If you are building AI-powered products or need strong full-stack execution, I would be glad to connect."
        />
      </Reveal>

      <Reveal className="mb-8">
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5 sm:p-6">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <MessageSquareShare size={16} />
            Let&apos;s build something valuable
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-textMuted sm:text-base">
            I&apos;m currently interested in internship roles and project collaborations around AI engineering,
            backend systems, and intelligent business automation.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <Reveal key={link.label} delay={index * 0.06}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent/35 hover:bg-white/[0.055]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-text">{link.label}</h3>
                  <span className="rounded-lg border border-accent/30 bg-accent/10 p-1.5 text-accent">
                    <Icon size={16} />
                  </span>
                </div>
                <p className="text-sm text-textMuted">{link.value}</p>
                {link.placeholder && (
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-amber-300">
                    Placeholder - update this
                  </p>
                )}
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

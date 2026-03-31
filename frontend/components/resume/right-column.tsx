"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Layers3, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { PortfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { ResumeSection } from "@/components/resume/resume-section";

type RightColumnProps = {
  data: PortfolioData;
};

export function RightColumn({ data }: RightColumnProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<PortfolioData["experienceResume"][number] | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioData["projects"][number] | null>(
    null
  );
  const previewProjects = data.projects.slice(0, 3);

  return (
    <>
      <aside className="space-y-1">
        <Reveal>
          <ResumeSection title="Experience">
            <div className="space-y-3">
              {data.experienceResume.map((item, index) => (
                <button
                  key={item.role}
                  type="button"
                  onClick={() => setSelectedExperience(item)}
                  className="relative flex h-[140px] w-full flex-col rounded-xl border border-[#1e263711] bg-[#eef1f8] p-3 text-left transition hover:border-[#5b4ff03d]"
                >
                  <span
                    aria-hidden
                    className="absolute left-[-10px] top-5 h-2.5 w-2.5 rounded-full border border-[#d8dded] bg-[#5d52e8]"
                  />
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="line-clamp-1 text-sm font-extrabold text-[#101827]">{item.role}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4a5772]">
                      {item.year}
                    </span>
                  </div>
                  <p className="line-clamp-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4e40cf]">
                    {item.track}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4a5772]">{item.summary}</p>
                  <p className="mt-auto text-[11px] font-semibold text-[#4b41d5]">Click for more info</p>
                  {index !== data.experienceResume.length - 1 ? (
                    <div className="absolute left-[-5px] top-10 h-[calc(100%-0.5rem)] w-px bg-[#cfd6e7]" />
                  ) : null}
                </button>
              ))}
            </div>
          </ResumeSection>
        </Reveal>

        <div className="resume-rule" />

        <Reveal delay={0.06}>
          <ResumeSection
            title="Recent Projects"
            action={
              <button
                type="button"
                onClick={() => setShowAllProjects(true)}
                className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#2d456d] transition hover:text-[#4b41d5]"
              >
                View all
              </button>
            }
            id="projects"
          >
            <div className="space-y-3">
              {previewProjects.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="block w-full rounded-xl border border-[#20273914] bg-[#eef1f8] p-3 text-left transition hover:border-[#5b4ff03d]"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-[#0f1728]">{project.title}</h3>
                    <ArrowUpRight size={14} className="shrink-0 text-[#4f5f7c]" />
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#4a5772]">{project.summary}</p>
                  <p className="mt-2 text-[11px] font-semibold text-[#4b41d5]">Click for more info</p>
                </button>
              ))}
            </div>
          </ResumeSection>
        </Reveal>
      </aside>

      <AnimatePresence>
        {showAllProjects ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071022]/60 p-4 backdrop-blur-[2px]"
            onClick={() => setShowAllProjects(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl border border-[#cfd8eb] bg-[#f6f8fc] p-4 shadow-[0_20px_45px_rgba(35,55,95,0.2)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#1b2941]">
                  All Projects
                </h3>
                <button
                  type="button"
                  onClick={() => setShowAllProjects(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#c7d2e5] bg-white text-[#334766]"
                  aria-label="Close all projects"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {data.projects.map((project) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => {
                      setSelectedProject(project);
                      setShowAllProjects(false);
                    }}
                    className="rounded-xl border border-[#d3dced] bg-white p-3 text-left transition hover:border-[#91a7d6]"
                  >
                    <h4 className="text-sm font-bold text-[#0f1728]">{project.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#4a5772]">{project.summary}</p>
                    <p className="mt-2 text-[11px] font-semibold text-[#4b41d5]">More info</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {selectedExperience ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[81] flex items-center justify-center bg-[#071022]/62 p-4 backdrop-blur-[2px]"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedExperience.role} experience details`}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-xl rounded-2xl border border-[#cad5ea] bg-[#f7f9fd] p-5 shadow-[0_24px_50px_rgba(35,55,95,0.25)]"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold text-[#0f1728]">{selectedExperience.role}</h3>
                <button
                  type="button"
                  onClick={() => setSelectedExperience(null)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#c7d2e5] bg-white text-[#334766]"
                  aria-label="Close experience details"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#4e40cf]">
                  {selectedExperience.track}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#4a5772]">
                  {selectedExperience.year}
                </span>
              </div>

              <div className="rounded-xl border border-[#cad8f0] bg-[#edf3ff] p-3">
                <p className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-[#2f4d79]">
                  <Layers3 size={13} />
                  Summary
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#2e4568]">{selectedExperience.summary}</p>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[82] flex items-center justify-center bg-[#071022]/62 p-4 backdrop-blur-[2px]"
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project details`}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-xl rounded-2xl border border-[#cad5ea] bg-[#f7f9fd] p-5 shadow-[0_24px_50px_rgba(35,55,95,0.25)]"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold text-[#0f1728]">{selectedProject.title}</h3>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#c7d2e5] bg-white text-[#334766]"
                  aria-label="Close project details"
                >
                  <X size={14} />
                </button>
              </div>

              <p className="text-sm leading-relaxed text-[#334866]">{selectedProject.summary}</p>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-[#c4d3ea] bg-white px-2.5 py-1 text-xs font-semibold text-[#2e466b] transition hover:border-[#8ea7d6]"
                >
                  GitHub Repo
                  <ArrowUpRight size={12} />
                </a>
                {selectedProject.deploymentStatus === "deployed" && selectedProject.deploymentUrl ? (
                  <a
                    href={selectedProject.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#b9dfc6] bg-[#e7f7ec] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] text-[#1f7a3c] transition hover:border-[#88c8a0]"
                  >
                    Deployed
                  </a>
                ) : (
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-[0.06em] ${
                      selectedProject.deploymentStatus === "deployed"
                        ? "border-[#b9dfc6] bg-[#e7f7ec] text-[#1f7a3c]"
                        : "border-[#dfc7ac] bg-[#f7ede3] text-[#8a5a2b]"
                    }`}
                  >
                    {selectedProject.deploymentStatus === "deployed" ? "Deployed" : "Not Deployed"}
                  </span>
                )}
              </div>

              {selectedProject.deploymentStatus === "not_deployed" ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-[#d1dcee] bg-white">
                  <Image
                    src={selectedProject.previewImage ?? "/gallery/work-4.svg"}
                    alt={`${selectedProject.title} preview`}
                    width={960}
                    height={540}
                    className="h-44 w-full object-cover"
                  />
                </div>
              ) : null}

              <div className="mt-4">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#24344f]">
                  Highlights
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm leading-relaxed text-[#3c506f]">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#24344f]">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#c4d3ea] bg-[#eef4ff] px-2.5 py-1 text-xs font-medium text-[#2e466b]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#cad8f0] bg-[#edf3ff] p-3">
                <p className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-[#2f4d79]">
                  <Layers3 size={13} />
                  Impact
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#2e4568]">{selectedProject.impact}</p>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

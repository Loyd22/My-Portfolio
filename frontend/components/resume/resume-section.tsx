import { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  actionText?: string;
  action?: ReactNode;
  children: ReactNode;
  id?: string;
};

export function ResumeSection({ title, actionText, action, children, id }: ResumeSectionProps) {
  return (
    <section id={id} className="py-5">
      <header className="mb-3 flex items-center justify-between gap-3">
        <h2 className="resume-title">{title}</h2>
        {action ? action : null}
        {!action && actionText ? (
          <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#3e4b66]">
            {actionText}
          </span>
        ) : null}
      </header>
      <div>{children}</div>
    </section>
  );
}

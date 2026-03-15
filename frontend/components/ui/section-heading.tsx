type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-2xl font-semibold text-text sm:text-3xl md:text-4xl">{title}</h2>
      <p className="max-w-3xl text-sm leading-relaxed text-textMuted sm:text-base">{description}</p>
    </div>
  );
}

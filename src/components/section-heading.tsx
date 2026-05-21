type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="font-display text-sm tracking-[0.3em] text-[var(--color-burgundy)] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-balance text-4xl leading-tight text-[var(--color-charcoal)] sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

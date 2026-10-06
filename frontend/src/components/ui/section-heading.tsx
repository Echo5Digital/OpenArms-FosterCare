type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  className = "",
  titleClassName,
}: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] ${
            tone === "dark" ? "text-leaf-deep" : "text-leaf"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={
          titleClassName ??
          `font-display text-[2.1rem] font-medium leading-[1.25] tracking-tight sm:text-[2.6rem] ${
            tone === "dark" ? "text-pine" : "text-cream"
          }`
        }
      >
        {title}
      </h2>
    </div>
  );
}

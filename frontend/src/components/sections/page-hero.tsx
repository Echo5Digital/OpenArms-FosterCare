import Image from "next/image";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
  backgroundImage,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumb?: Crumb[];
  backgroundImage?: string;
}) {
  return (
    <section
      className={`relative flex overflow-hidden bg-pine ${
        backgroundImage ? "min-h-[70vh] items-center py-12" : "pb-16 pt-12 sm:pb-20 sm:pt-16"
      }`}
    >
      {backgroundImage && (
        <>
          <Image src={backgroundImage} alt="" fill priority sizes="100vw" className="object-cover object-[85%_35%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/90 via-pine-deep/60 to-pine-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent" />
        </>
      )}
      {!backgroundImage && (
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
      )}

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-cream/55">
            {breadcrumb.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {c.href ? <a href={c.href} className="hover:text-cream">{c.label}</a> : <span className="text-cream/80">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            {eyebrow}
          </span>
        )}
        <h1 className={`${eyebrow ? "mt-4" : ""} max-w-2xl font-display text-[2.4rem] font-medium leading-[1.08] tracking-tight text-cream sm:text-[3.1rem]`}>
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">{intro}</p>}
      </div>
    </section>
  );
}

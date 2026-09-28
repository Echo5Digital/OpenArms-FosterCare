type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumb?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-pine pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
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
        <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-2xl font-display text-[2.4rem] font-medium leading-[1.08] tracking-tight text-cream sm:text-[3.1rem]">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">{intro}</p>}
      </div>
    </section>
  );
}

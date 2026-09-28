import Link from "next/link";

const offices = [
  { city: "Oklahoma City", note: "Headquarters" },
  { city: "Tulsa", note: "Regional office" },
  { city: "Lawton", note: "Regional office" },
];

export function TrustedAgencyBanner() {
  return (
    <section className="relative bg-cream-alt">
      <div className="relative overflow-hidden bg-pine pb-24 pt-16 sm:pb-32 sm:pt-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-leaf/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Serving Oklahoma
            </span>

            <h2 className="mt-4 max-w-xl font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight text-cream sm:text-[2.4rem]">
              A Trusted Foster Care Agency Serving Oklahoma City
            </h2>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream/80">
              Open Arms Foster Care supports children who need a safe, stable home and the families who open their
              doors to them. As an Oklahoma City foster care agency, we recruit, train, and walk alongside foster
              parents so no family has to navigate the process alone. Our work spans the full range of foster care
              from becoming a first-time foster parent, to emergency placements, to therapeutic foster care for
              children with elevated emotional or behavioral needs.
            </p>

            <Link
              href="/contact-us"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-leaf px-6 py-3 font-sans text-sm font-semibold text-pine-deep transition-colors duration-300 hover:bg-leaf-deep"
            >
              Talk With Our Foster Care Team
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
                <path
                  d="M9 8l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="rounded-[1.5rem_1.5rem_1.5rem_3rem] border border-cream/10 bg-cream/5 p-7 backdrop-blur-sm sm:p-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Our Offices</p>
            <ul className="mt-5 flex flex-col gap-5">
              {offices.map((office, i) => (
                <li key={office.city} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf/15 font-display text-lg font-medium text-leaf">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-display text-lg font-medium leading-snug text-cream">{office.city}</p>
                    <p className="text-sm text-cream/60">{office.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-cream/10 pt-5 text-sm leading-relaxed text-cream/70">
              Families across Oklahoma connect with us through our offices in{" "}
              <strong className="font-semibold text-cream">Oklahoma City, Tulsa, and Lawton</strong>.
            </p>
          </div>
        </div>

        <svg
          aria-hidden
          viewBox="0 0 1400 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-16 w-full text-cream-alt sm:h-20"
        >
          <path d="M0 40c150 40 350 40 500 10s350-40 500-10 350 40 400 10V80H0Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

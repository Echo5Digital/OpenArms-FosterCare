import { HoverPrefetchLink as Link } from "@/components/ui/hover-prefetch-link";

const features = [
  {
    title: "Dedicated Case Management",
    body: "One point of contact to guide you through the process and answer questions along the way.",
    icon: (
      <path
        d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-3.3 0-6 1.6-6 3.6V18h9.5M17 8v4m0 0v4m0-4h4m-4 0h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    span: "lg:col-span-2",
  },
  {
    title: "Foster Parent Training",
    body: "Trauma-informed preparation plus ongoing workshops and refreshers throughout the year.",
    icon: (
      <path
        d="M4 6h16v9H12l-3 3v-3H4V6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    span: "lg:col-span-2",
  },
  {
    title: "Peer Support",
    body: "Connection with other foster parents who understand the journey.",
    icon: (
      <path
        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 18c0-2.2 2.2-4 5-4s5 1.8 5 4M11 18c0-2.2 2.2-4 5-4s5 1.8 5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    span: "lg:col-span-2",
  },
  {
    title: "Post-Placement Support",
    body: "Coordinated help once a child is in your home, including access to our clinical team.",
    icon: (
      <path
        d="M4 11 12 4l8 7M6 10v8h12v-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    span: "lg:col-span-3",
  },
  {
    title: "Guidance for Challenging Moments",
    body: "Practical, compassionate help when situations get hard.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth={1.6} />
        <path d="M12 8v5M12 16h.01" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      </>
    ),
    span: "sm:col-span-2 lg:col-span-3",
  },
] as const;

export function FosterFamilySupport() {
  return (
    <section
      aria-labelledby="family-support-heading"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#e6f2d6_0%,#f1f8e8_55%,#dcedc4_100%)] py-20 sm:py-28"
    >
      {/* soft organic shapes, in our greens */}
      <svg
        aria-hidden
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path d="M0 430C190 300 430 360 610 530S940 790 0 810Z" fill="#8dc540" fillOpacity="0.2" />
        <path d="M1440 90C1260 130 1190 320 1010 370S720 300 650 0H1440Z" fill="#ffffff" fillOpacity="0.45" />
        <path d="M1440 560C1300 520 1210 620 1100 700S900 810 840 800H1440Z" fill="#8dc540" fillOpacity="0.14" />
      </svg>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.65fr] lg:gap-14 xl:gap-20">
        {/* heading + intro */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Foster Parent Support
          </span>
          <h2
            id="family-support-heading"
            className="mt-4 font-sans text-[2.1rem] font-bold leading-[1.12] tracking-tight text-pine sm:text-[2.7rem]"
          >
            Support for Foster Families — Before, During, and <span className="text-leaf-deep">After Placement</span>
          </h2>
          <span aria-hidden className="mx-auto mt-6 block h-[3px] w-16 rounded-full bg-leaf-deep" />
          <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-relaxed text-slate">
            Foster parents are at the heart of everything we do, so we build support around you rather than leaving
            you to figure it out alone. Families working with Open Arms can expect:
          </p>
          <Link
            href="/sign-up-now"
            className="mt-8 inline-flex h-15 items-center gap-3 rounded-full bg-pine-deep pl-8 pr-2.5 font-sans text-[0.95rem] font-bold text-white shadow-[0_18px_34px_-16px_rgba(15,33,27,0.6)] hover:bg-pine focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-pine-deep"
          >
            Request Foster Parent Information
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-pine-deep">
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M4 12h15m0 0-6-6m6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* cards */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature) => (
            <li
              key={feature.title}
              className={`group rounded-3xl bg-[#d6eab9] px-7 pb-8 pt-8 shadow-[0_24px_50px_-30px_rgba(25,53,45,0.4)] ring-1 ring-leaf-deep/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-pine-deep hover:shadow-[0_32px_55px_-22px_rgba(15,33,27,0.6)] hover:ring-leaf/40 ${feature.span}`}
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-leaf text-pine-deep transition-all duration-300 lg:bg-white/60 lg:text-pine group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-leaf group-hover:text-pine-deep">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
                  {feature.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-center font-sans text-[1.15rem] font-bold leading-snug text-pine transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>
              <span
                aria-hidden
                className="mx-auto mt-3 block h-0.5 w-9 rounded-full bg-leaf-deep transition-all duration-300 group-hover:w-16 group-hover:bg-leaf"
              />
              <p className="mt-4 text-[0.96rem] leading-relaxed text-pine/75 transition-colors duration-300 group-hover:text-white/80">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

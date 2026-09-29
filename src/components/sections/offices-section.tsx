import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { offices } from "@/lib/site-config";

export function OfficesSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Office Locations"
        title="Local presence across Oklahoma"
        align="center"
        className="mx-auto"
        titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {offices.map((office) => (
          <Link
            key={office.id}
            href={`/${office.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[0.5rem_2.5rem_0.5rem_2.5rem] border border-pine/10 bg-white p-8 transition-colors hover:border-leaf/50"
          >
            <div>
              <h3 className="font-display text-2xl font-medium text-pine">{office.city}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {office.streetAddress}
                <br />
                {office.addressLocality}, {office.addressRegion} {office.postalCode}
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-leaf-deep">
              Learn More
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                <path
                  d="M2 8h11m0 0-5-5m5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Foster Parent Training",
    href: "/foster-parent-training",
    body: "State-approved, trauma-informed training that prepares you for the realities of caregiving.",
  },
  {
    title: "Child Welfare Advocacy",
    href: "/child-welfare-advocacy",
    body: "Case management and OKDHS coordination that keeps every child's and family's voice represented.",
  },
  {
    title: "Support for School Staff",
    href: "/support-for-school-staff",
    body: "Workshops and resources that help educators recognize trauma and support foster students.",
  },
  {
    title: "Post-Placement Therapy",
    href: "/post-placement-therapy",
    body: "Licensed therapists help children and families adjust emotionally after placement.",
  },
];

export function Services() {
  return (
    <section className="grain relative bg-pine py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Our Services" title="Foster care services tailored to your needs" tone="light" />
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative flex min-h-[16rem] flex-col justify-between bg-pine p-8 transition-colors duration-300 hover:bg-pine-deep"
            >
              <span className="font-display text-2xl font-medium leading-snug text-cream">{service.title}</span>
              <div>
                <p className="text-sm leading-relaxed text-cream/70">{service.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-leaf">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

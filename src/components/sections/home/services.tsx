import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Foster Parent Training",
    href: "/foster-parent-training",
    image: "/clmn_4.png",
    tone: "dark",
  },
  {
    title: "Support for School Staff",
    href: "/support-for-school-staff",
    image: "/clmn_3.png",
    tone: "light",
  },
  {
    title: "Post-Placement Therapy",
    href: "/post-placement-therapy",
    image: "/clmn_2.png",
    tone: "dark",
  },
] as const;

export function Services() {
  return (
    <section className="relative bg-mint py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Foster Care Services Tailored to Your Needs"
          align="center"
          className="mx-auto"
          titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
        />
        <p className="mx-auto mt-5 max-w-xl text-center text-[1.05rem] leading-relaxed text-slate">
          Open Arms Foster Care is proud to offer a range of services designed to support both children and foster
          parents.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative flex min-h-[30rem] flex-col overflow-hidden rounded-[1.75rem] p-10 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[34rem] ${
                service.tone === "dark"
                  ? "bg-gradient-to-b from-[#6b8479] to-[#4c6058]"
                  : "bg-gradient-to-b from-[#a9d94a] to-[#7ab332]"
              } ${i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}`}
            >
              <div className="relative z-10">
                <h3
                  className={`font-display text-[1.75rem] font-medium leading-snug sm:text-3xl ${
                    service.tone === "dark" ? "text-cream" : "text-pine-deep"
                  }`}
                >
                  {service.title}
                </h3>
                <span
                  className={`mt-2 inline-flex items-center gap-2 font-sans text-sm font-semibold underline decoration-1 underline-offset-4 ${
                    service.tone === "dark" ? "text-cream" : "text-pine-deep"
                  }`}
                >
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

              <div className="relative mt-auto flex flex-1 items-end justify-center pt-8">
                <Image
                  src={service.image}
                  alt=""
                  width={520}
                  height={520}
                  className="h-auto w-full max-w-[440px] object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const reasons = [
  {
    title: "Expertise in Therapeutic Foster Care",
    body: "We specialize in therapeutic foster care in Oklahoma City, providing services for children who have experienced trauma. Our program is designed to help children heal emotionally, socially, and psychologically, using therapy and support from our experienced team of professionals.",
  },
  {
    title: "Comprehensive Emergency Foster Care Services",
    body: "We understand that there are times when children need immediate placement due to unsafe home environments. Our emergency foster care services in Oklahoma provide immediate, temporary homes for children in crisis, ensuring they receive immediate care and support during a vulnerable time.",
  },
  {
    title: "Support for Foster Parents",
    body: "Open Arms Foster Care believes in the importance of fostering supportive relationships with foster parents. We offer foster care parent training and ongoing support to ensure that our foster families feel equipped and confident in their roles.",
  },
  {
    title: "Advocacy and Case Management",
    body: "We provide comprehensive case management services that ensure both the children and foster parents receive the attention and resources they need. We also advocate for the needs of the children and help guide foster families through the foster care system. Our Child Welfare Services in Oklahoma are the best in the state.",
  },
  {
    title: "Personalized Care",
    body: "We take pride in offering personalized care and making sure that each child's unique needs are met, whether they are dealing with behavioral issues, trauma, or emotional challenges. We work closely with foster parents to ensure that the child's needs are addressed in a supportive environment.",
  },
] as const;

const stats = [
  { value: "24/7", label: "Response for emergency foster placements" },
  { value: "100%", label: "Licensed, trauma-informed programs" },
  { value: "3", label: "Local offices — OKC, Tulsa, and Lawton" },
] as const;

export function WhyOpenArms() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal noMobileAnimation>
          <span className="block h-[3px] w-24 rounded-full bg-gradient-to-r from-leaf-deep to-leaf" />
          <h2 className="mt-5 max-w-4xl font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-pine sm:text-[2.8rem] lg:text-[3.1rem]">
            Why Choose Open Arms Foster Care in{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="bg-gradient-to-r from-leaf-deep to-leaf bg-clip-text text-transparent">Oklahoma City?</span>
              <svg
                aria-hidden
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2.5 left-0 h-3 w-full text-leaf"
                fill="none"
                stroke="currentColor"
                strokeWidth={4}
                strokeLinecap="round"
              >
                <path d="M3 9C45 2 95 2 135 7S195 11 217 4" />
              </svg>
            </span>
          </h2>
          <p className="mt-8 max-w-3xl text-[1.05rem] leading-relaxed text-ink/70">
            When it comes to selecting a foster care agency in Oklahoma, it is important to find an agency that
            understands the unique needs of both children and foster parents. Open Arms Foster Care is proud to be
            recognized as one of the best foster care agencies in Oklahoma City, and here&rsquo;s why:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start" delay={100} noMobileAnimation>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/father-spending-time-with-his-daughter-outdoors-father-s-day 1-100kb.jpg"
                alt="A father spending time outdoors with his daughter"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/60 via-transparent to-transparent" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-mint p-3 text-center shadow-sm sm:p-4 ring-1 ring-pine/8"
                >
                  <p className="font-display text-2xl font-semibold text-leaf-deep sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[0.7rem] leading-snug text-ink/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} from="right" triggerOffset="-12%" noMobileAnimation>
                <div className="group flex flex-col gap-3 rounded-[1.75rem] bg-cream-alt p-7 sm:flex-row sm:gap-6 shadow-[0_4px_20px_-8px_rgba(15,33,27,0.1)] ring-1 ring-pine/6 transition-all duration-300 hover:-translate-y-1 hover:bg-[rgb(25,53,45)] hover:shadow-[0_20px_40px_-16px_rgba(15,33,27,0.35)] sm:p-8">
                  <span className="font-display text-4xl font-light leading-none text-leaf/60 transition-colors duration-300 group-hover:text-leaf">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-pine transition-colors duration-300 group-hover:text-white">{reason.title}</h3>
                    <p className="mt-2.5 text-[0.98rem] leading-relaxed text-ink/70 transition-colors duration-300 group-hover:text-white/80">{reason.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

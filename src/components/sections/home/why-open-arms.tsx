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
    <section className="relative overflow-hidden bg-pine py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <span className="inline-block rounded-full bg-gradient-to-r from-leaf to-pine-deep px-6 py-2.5 font-display text-lg font-medium text-cream shadow-sm sm:text-xl">
            Why Choose Open Arms Foster Care in Oklahoma City?
          </span>
          <p className="mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-cream/75">
            When it comes to selecting a foster care agency in Oklahoma, it is important to find an agency that
            understands the unique needs of both children and foster parents. Open Arms Foster Care is proud to be
            recognized as one of the best foster care agencies in Oklahoma City, and here&rsquo;s why:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start" delay={100}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/teen-girl-participates-drawing-activity-as-part-psychotherapy-100kb.jpg"
                alt="Therapist and foster parent reviewing a child's drawing during a supportive session"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-cream/5 p-4 text-center ring-1 ring-cream/10">
                  <p className="font-display text-2xl font-semibold text-leaf sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[0.7rem] leading-snug text-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80}>
                <div className="group flex gap-6 border-b border-cream/10 py-7 first:pt-0 last:border-0">
                  <span className="font-display text-4xl font-light leading-none text-leaf/50 transition-colors duration-300 group-hover:text-leaf">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-cream">{reason.title}</h3>
                    <p className="mt-2.5 text-[0.98rem] leading-relaxed text-cream/70">{reason.body}</p>
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

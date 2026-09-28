import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const programs = [
  {
    title: "Therapeutic Foster Care",
    body: "Our program helps children who have experienced trauma or significant emotional and behavioral challenges. Foster parents receive specialized training, and families have access to counseling, behavior supports, and coordinated care with our clinical team.",
    bullets: ["Individual and family counseling", "Behavior support plans and skill building", "Stability, structure, and nurturing routines"],
    cta: { label: "Learn More", href: "/therapeutic-foster-care-agency" },
    image: "/teenager-girl-making-progress-self-love-self-acceptance-therapy-100kb.jpg",
    alt: "Teenage girl in a supportive counseling session, building self-acceptance",
    imagePosition: "object-center",
  },
  {
    title: "Emergency Foster Care",
    body: "When a child needs immediate placement, our team responds quickly to secure a safe, short-term home while a longer-term plan is developed.",
    bullets: ["Rapid, safe placement", "24/7 availability", "Short-term care with transition planning"],
    cta: { label: "Refer a Child", href: "/referrals" },
    image: "/mother-son-looking-tablet-100kb.jpg",
    alt: "Mother and son looking at a tablet together on the couch",
    imagePosition: "object-center",
  },
  {
    title: "Support for Foster Parents",
    body: "",
    bullets: [
      "Dedicated case management: one point of contact to guide your journey",
      "Peer support: connect with other foster parents",
      "Ongoing training: workshops and refreshers throughout the year",
    ],
    cta: { label: "Refer a Child", href: "/referrals" },
    image: "/family-with-baby-standing-outside-house-100kb.jpg",
    alt: "Parents holding their baby outside their home",
    imagePosition: "object-center",
  },
] as const;

export function FosterCarePrograms() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-pine shadow-2xl">
        <div className="divide-y divide-cream/10">
          {programs.map((program, i) => (
            <div
              key={program.title}
              className="group grid gap-8 p-8 transition-colors duration-500 hover:bg-white/[0.03] sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-12"
            >
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className={`object-cover ${program.imagePosition} transition-transform duration-500 group-hover:scale-105`}
                />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-2xl font-medium text-cream sm:text-3xl">{program.title}</h3>
                {program.body && (
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-cream/80">{program.body}</p>
                )}
                <ul className="mt-4 space-y-2">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[0.98rem] leading-relaxed text-cream/80">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={program.cta.href}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 font-sans text-sm font-semibold text-pine-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf-deep hover:shadow-lg"
                >
                  {program.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

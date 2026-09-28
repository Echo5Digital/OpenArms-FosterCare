import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const points = [
  {
    title: "Comprehensive trauma-informed training.",
    body: "Every foster parent completes certified training built around real caregiving situations, not just theory.",
  },
  {
    title: "Counseling services to support foster families.",
    body: "Licensed therapists work alongside families, giving children and caregivers real clinical support.",
  },
  {
    title: "Local offices in Oklahoma City, Tulsa, and Lawton for easy access.",
    body: "Help is never far away, with in-person support available across all three regions we serve.",
  },
];

export function TrustedAgency() {
  return (
    <section className="bg-cream-alt mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Your Trusted Partner in Foster Care Across Oklahoma"
          />
          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-slate">
            Open Arms Foster Care supports children who need a safe, stable home and the families who open their
            doors to them. As an Oklahoma City foster care agency, we recruit, train, and walk alongside foster
            parents so no family has to navigate the process alone. Our work spans the full range of foster care,
            from becoming a first-time foster parent, to emergency placements, to therapeutic foster care for
            children with elevated emotional or behavioral needs.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about-us" variant="ghost">
              Our Story
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="group relative flex gap-5 rounded-[0.5rem_2rem_0.5rem_2rem] border border-pine/10 bg-white/60 p-6 transition-colors hover:border-leaf/40"
            >
              <span className="font-display text-3xl font-light text-leaf-deep/70">0{i + 1}</span>
              <div>
                <h3 className="font-display text-lg font-medium leading-snug text-pine">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

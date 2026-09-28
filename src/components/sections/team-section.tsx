import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/lib/content/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export function TeamSection() {
  return (
    <section className="grain relative bg-pine py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind our success"
          tone="light"
          align="center"
          className="mx-auto"
        />
        <p className="mx-auto mt-5 max-w-xl text-center text-[1.05rem] leading-relaxed text-cream/75">
          A group of caring individuals dedicated to supporting children and families in their foster care journey.
        </p>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-leaf/90 font-display text-xl font-medium text-pine-deep">
                {initials(member.name)}
              </div>
              <h3 className="mt-4 font-sans text-sm font-semibold text-cream">{member.name}</h3>
              <p className="mt-1 text-xs leading-snug text-cream/60">
                {member.credential ? `${member.credential} · ` : ""}
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

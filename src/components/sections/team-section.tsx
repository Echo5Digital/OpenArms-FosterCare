import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/lib/content/team";

export function TeamSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading eyebrow="Our Team" title="The People Behind Our Success" className="sm:max-w-md" />
          <p className="max-w-md text-[1.05rem] leading-relaxed text-ink/70 sm:pt-1">
            Our team is a group of caring individuals dedicated to supporting children and families in their foster
            care journey. With warmth and understanding, we strive to create brighter futures for every child we
            serve.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-pine px-4 py-3.5">
                <h3 className="font-sans text-sm font-semibold leading-snug text-cream sm:text-base">
                  {member.name}
                  {member.credential ? ` – ${member.credential}` : ""}
                </h3>
                <p className="mt-1 text-xs leading-snug text-cream/85">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

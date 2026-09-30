import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/lib/content/team";

export function TeamSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The People Behind Our Success"
          titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
        />
        <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">
          Our team is a group of caring individuals dedicated to supporting children and families in their foster
          care journey. With warmth and understanding, we strive to create brighter futures for every child we
          serve.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 bg-pine px-4 py-3.5">
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

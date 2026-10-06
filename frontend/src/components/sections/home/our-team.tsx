import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { teamMembers } from "@/lib/content/team";

// alternating large corner, so neighbouring photos have different silhouettes
const shapes = ["rounded-[3.5rem_1.25rem_1.25rem_1.25rem]", "rounded-[1.25rem_3.5rem_1.25rem_1.25rem]"];

export function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-28 -top-20 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-mint blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
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

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 lg:gap-y-10">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 90} className="h-full">
              <div className="group flex h-full flex-col">
                <div
                  className={`relative aspect-[5/4] w-full overflow-hidden shadow-md ring-1 ring-pine/10 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-leaf/30 ${
                    shapes[i % 2]
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/35 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 -mt-7 mx-2.5 flex flex-1 flex-col rounded-2xl bg-pine px-4 pb-4 pt-3.5 shadow-lg transition-transform duration-500 group-hover:-translate-y-1.5 sm:mx-3">
                  <span className="mb-2.5 block h-0.5 w-7 rounded-full bg-leaf transition-all duration-500 group-hover:w-14" />
                  <h3 className="font-sans text-sm font-semibold leading-snug text-cream sm:text-base">
                    {member.name}
                    {member.credential && (
                      <span className="ml-2 inline-block translate-y-[-1px] rounded-full bg-leaf px-2 py-0.5 align-middle font-sans text-[0.62rem] font-bold uppercase tracking-wide text-pine-deep">
                        {member.credential}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-cream/80">{member.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

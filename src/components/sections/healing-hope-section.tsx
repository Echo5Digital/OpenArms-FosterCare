import { SectionHeading } from "@/components/ui/section-heading";
import { HealingHopeForm } from "@/components/forms/healing-hope-form";

export function HealingHopeSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="grain relative overflow-hidden rounded-[2.5rem_2.5rem_5rem_2.5rem] bg-mint p-8 sm:p-14">
        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="To Healing & Hope"
              title="Fill out some info and we'll be reaching out shortly"
              titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
            />
          </div>
          <HealingHopeForm />
        </div>
      </div>
    </section>
  );
}

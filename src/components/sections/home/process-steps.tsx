import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

const steps = [
  { title: "Initial Inquiry", body: "Reach out online or by phone to tell us a little about your household." },
  { title: "Consultation / Orientation", body: "A brief meeting to review what fostering involves and answer your questions." },
  { title: "Application", body: "Complete the foster parent application and required paperwork." },
  {
    title: "Training",
    body: "Take part in trauma-informed foster parent training that prepares you for the realities of caring for children who have experienced hardship.",
  },
  { title: "Home Study & Background Checks", body: "We complete a home assessment and background checks to confirm a safe, supportive environment." },
  { title: "Approval & Placement Preparation", body: "Once approved, we help you get ready to welcome a child." },
  { title: "Ongoing Support", body: "Placement is the beginning, not the end. Your case manager, training, and support continue throughout." },
];

export function ProcessSteps() {
  return (
    <section className="relative bg-mint py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="How to Become a Foster Parent"
          title="A meaningful commitment, with support at every stage"
          align="center"
          className="mx-auto"
          titleClassName="font-sans text-[2.1rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]"
        />

        <ol className="relative mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[linear-gradient(to_right,transparent,var(--color-leaf-deep)_8%,var(--color-leaf-deep)_92%,transparent)] opacity-40 lg:block" />

          {steps.slice(0, 4).map((step, i) => (
            <li key={step.title} className="group relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine font-display text-lg font-medium text-cream shadow-[0_0_0_6px_var(--color-mint)] transition-colors duration-300 group-hover:bg-leaf-deep">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-medium leading-snug text-pine">{step.title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-slate">{step.body}</p>
            </li>
          ))}
        </ol>

        <ol className="relative mx-auto mt-14 grid max-w-3xl gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-[linear-gradient(to_right,transparent,var(--color-leaf-deep)_8%,var(--color-leaf-deep)_92%,transparent)] opacity-40 lg:block" />

          {steps.slice(4).map((step, i) => (
            <li key={step.title} className="group relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine font-display text-lg font-medium text-cream shadow-[0_0_0_6px_var(--color-mint)] transition-colors duration-300 group-hover:bg-leaf-deep">
                {i + 5}
              </span>
              <h3 className="mt-5 font-display text-lg font-medium leading-snug text-pine">{step.title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-slate">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 flex flex-col items-center gap-8 rounded-[2rem_2rem_2rem_0.5rem] bg-pine px-8 py-10 text-center sm:px-16">
          <p className="max-w-2xl font-display text-xl font-medium italic leading-snug text-cream sm:text-2xl">
            Fostering is not always easy — but you will never do it without guidance.
          </p>
          <ButtonLink href="/sign-up-now" variant="secondary">
            Take the First Step
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

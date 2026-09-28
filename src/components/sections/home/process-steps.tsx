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
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="How to Become a Foster Parent"
          title="A meaningful commitment, with support at every stage"
        />
        <ButtonLink href="/sign-up-now" variant="secondary" className="hidden sm:inline-flex">
          Take the First Step
        </ButtonLink>
      </div>

      <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative border-l-2 border-leaf/40 pl-6">
            <span className="absolute -left-[11px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-leaf font-sans text-[0.65rem] font-bold text-pine-deep">
              {i + 1}
            </span>
            <h3 className="font-display text-lg font-medium leading-snug text-pine">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
          </li>
        ))}
      </ol>

      <ButtonLink href="/sign-up-now" variant="secondary" className="mt-10 inline-flex sm:hidden">
        Take the First Step
      </ButtonLink>
    </section>
  );
}

import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

const checklist = [
  "Trauma-Informed Training",
  "Licensed Counseling",
  "24/7 Placement Support",
  "Ongoing Case Management",
  "Family-First Approach",
  "Local Oklahoma Offices",
];

export function TrustedAgency() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-16 lg:grid-cols-[0.6fr_1fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-[20rem] pb-16 pr-10 lg:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-24px_rgba(15,33,27,0.35)]">
            <Image
              src="/parents-kid-doing-therapy 1-100kb.jpg"
              alt="A family in a supportive therapy session with their foster care counselor"
              fill
              sizes="(min-width: 1024px) 22vw, 70vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -right-6 -top-6 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-leaf-deep text-center text-cream shadow-lg sm:h-28 sm:w-28">
            <p className="font-display text-2xl font-semibold leading-none sm:text-3xl">10+</p>
            <p className="mt-1.5 px-2 text-[0.65rem] font-medium leading-tight">Years Of Experience</p>
          </div>

          <div className="absolute bottom-0 right-0 h-1/2 w-1/2 overflow-hidden rounded-full border-4 border-cream shadow-xl">
            <Image
              src="/close-up-girl-therapy-session-with-parents-100kb.jpg"
              alt="A close-up moment between a child and her parents during a therapy session"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            About Us
          </span>

          <h2 className="mt-3 font-sans text-[1.9rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.35rem]">
            Your Trusted Partner in Foster Care Across Oklahoma
          </h2>

          <p className="mt-3 font-sans text-sm font-semibold text-ink/60 sm:text-base">
            Supporting Children, Families, and Lasting Foster Placements
          </p>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-deep">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-sans text-sm font-medium text-pine">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate">
            Open Arms Foster Care supports children who need a safe, stable home and the families who open their
            doors to them. As an Oklahoma City foster care agency, we recruit, train, and walk alongside foster
            parents so no family has to navigate the process alone.
          </p>

          <div className="mt-7">
            <ButtonLink href="/about-us" variant="secondary">
              Read More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

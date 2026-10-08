import type { ReactNode } from "react";
import Image from "next/image";
import { AppointmentRequestForm } from "@/components/forms/appointment-request-form";
import { HomeContactForm } from "@/components/forms/home-contact-form";
import { siteConfig } from "@/lib/site-config";

const PHOTO = "/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg";
const PHOTO_ALT = "Father and son blowing bubbles together in a garden";

const noteIconProps = {
  viewBox: "0 0 24 24",
  className: "h-4 w-4",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// Small glass chips along the bottom of the photo (`card` variant). Both lines already appear elsewhere on the site.
const photoNotes: { text: string; icon: ReactNode }[] = [
  {
    text: "Offices in Oklahoma City, Tulsa and Lawton",
    icon: (
      <svg {...noteIconProps}>
        <path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11Z" />
        <circle cx={12} cy={10} r={2.4} />
      </svg>
    ),
  },
  {
    text: "We reply within one business day",
    icon: (
      <svg {...noteIconProps}>
        <circle cx={12} cy={12} r={8.5} />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
];

// One cut-out corner of the photo, drawn in the card's own white: a tab with a rounded inner corner, plus a small
// fillet on each side that rounds off the photo where it meets the tab. Drawn at the top left; the caller rotates it for
// the bottom right.
const NOTCH_W = "6rem";
const NOTCH_H = "3.75rem";
const NOTCH_R = "1.5rem";
const NOTCH_FILLET = `radial-gradient(circle at 100% 100%, transparent calc(${NOTCH_R} - 1px), #fff ${NOTCH_R})`;

function CornerNotch({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 ${className}`}
      style={{ width: `calc(${NOTCH_W} + ${NOTCH_R})`, height: `calc(${NOTCH_H} + ${NOTCH_R})` }}
    >
      <span
        className="absolute left-0 top-0 bg-white"
        style={{ width: NOTCH_W, height: NOTCH_H, borderBottomRightRadius: NOTCH_R }}
      />
      <span
        className="absolute top-0"
        style={{ left: NOTCH_W, width: NOTCH_R, height: NOTCH_R, background: NOTCH_FILLET }}
      />
      <span
        className="absolute left-0"
        style={{ top: NOTCH_H, width: NOTCH_R, height: NOTCH_R, background: NOTCH_FILLET }}
      />
    </span>
  );
}

function Copy() {
  return (
    <div>
      <span className="inline-flex items-center rounded-full border border-cream/40 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-cream">
        Family Support
      </span>
      <h2 className="mt-6 font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-cream sm:text-5xl">
        The right support starts with a conversation.
      </h2>
      <span className="mt-6 block h-0.5 w-16 bg-leaf" />
      <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/85">
        Fill out some info and we&rsquo;ll be reaching out shortly to help you find the right support.
      </p>
    </div>
  );
}

function FormCard({ form, className }: { form: "appointment" | "contact"; className: string }) {
  return (
    <div className={className}>
      <h3 className="font-sans text-2xl font-bold tracking-tight text-pine-deep">Request an Appointment</h3>
      <div className="mt-6">{form === "contact" ? <HomeContactForm /> : <AppointmentRequestForm />}</div>
    </div>
  );
}

/**
 * "The right support starts with a conversation" form section.
 * - `full` (default): the photo fills the whole band, edge to edge. Used on the service pages.
 * - `card`: a white card with a clean form on the left and the photo on the right, with a bite cut out of two of the
 *   photo's corners. Opt-in, so only the pages that ask for it change (the home page).
 */
export function HealingHopeSection({
  form = "appointment",
  variant = "full",
}: {
  form?: "appointment" | "contact";
  variant?: "full" | "card";
}) {
  if (variant === "card") {
    return (
      <section className="bg-[rgb(25,53,45)] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-[1400px] gap-3 rounded-[2rem] bg-white p-3 shadow-[0_40px_90px_-50px_rgba(15,33,27,0.45)] ring-1 ring-pine/5 sm:gap-4 sm:p-4 lg:grid-cols-[0.9fr_1.1fr]">
          {/* form */}
          <div className="flex flex-col gap-8 px-4 py-6 sm:px-8 sm:py-8 lg:justify-between lg:px-12 lg:py-10">
            <Image src="/images/logo.png" alt={siteConfig.name} width={168} height={56} className="h-11 w-auto self-start" />

            <div className="mx-auto w-full max-w-md">
              <h3 className="font-sans text-[1.45rem] font-semibold leading-tight tracking-tight text-pine-deep sm:text-2xl">
                Request an Appointment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Fill out some info and we&rsquo;ll be reaching out shortly to help you find the right support.
              </p>
              <div className="mt-6">
                {form === "contact" ? <HomeContactForm variant="clean" /> : <AppointmentRequestForm />}
              </div>
            </div>

            <p className="text-center font-sans text-xs text-slate">
              Prefer to call?{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-pine-deep underline underline-offset-2">
                {siteConfig.phone}
              </a>
            </p>
          </div>

          {/* photo, with a bite cut out of its top-left and bottom-right corners */}
          <div className="relative order-first min-h-[30rem] overflow-hidden rounded-[1.25rem] rounded-br-none rounded-tl-none sm:min-h-[36rem] lg:order-none lg:min-h-0">
            <Image
              src={PHOTO}
              alt={PHOTO_ALT}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-bottom"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-pine-deep/90 via-pine-deep/20 via-45% to-transparent" />

            <div className="absolute inset-x-0 bottom-0 px-6 pb-24 sm:px-8 sm:pb-8 lg:px-10">
              <h2 className="max-w-[28rem] font-display text-[1.85rem] font-normal italic leading-[1.15] text-white sm:text-[2.2rem] lg:text-[2.5rem]">
                The right support starts with a conversation.
              </h2>
              <ul className="mt-6 hidden gap-3 sm:grid sm:grid-cols-2 sm:pr-32 lg:grid-cols-1 xl:grid-cols-2">
                {photoNotes.map((note) => (
                  <li
                    key={note.text}
                    className="flex items-center gap-3 rounded-xl bg-white/15 px-3.5 py-3 text-xs leading-snug text-white ring-1 ring-white/25 backdrop-blur-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      {note.icon}
                    </span>
                    {note.text}
                  </li>
                ))}
              </ul>
            </div>

            <CornerNotch className="left-0 top-0" />
            <CornerNotch className="bottom-0 right-0 rotate-180" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image src={PHOTO} alt={PHOTO_ALT} fill sizes="100vw" className="object-cover object-[center_60%]" />
      <div className="absolute inset-0 bg-pine-deep/55" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <Copy />
        <FormCard
          form={form}
          className="rounded-[2rem] bg-white p-8 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)] sm:p-10"
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import { AppointmentRequestForm } from "@/components/forms/appointment-request-form";
import { HomeContactForm } from "@/components/forms/home-contact-form";

const PHOTO = "/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg";
const PHOTO_ALT = "Father and son blowing bubbles together in a garden";

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
 * - `card`: the photo sits in a rounded card with a dark-to-clear gradient, like the home page's other closing
 *   cards. Opt-in, so only the pages that ask for it change.
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
      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[2rem]">
          <Image
            src={PHOTO}
            alt={PHOTO_ALT}
            fill
            sizes="100vw"
            className="object-cover object-[center_60%]"
          />
          <div className="absolute inset-0 bg-pine-deep/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-pine-deep/90 lg:via-pine-deep/60 lg:to-pine-deep/20" />

          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-16">
            <Copy />
            <FormCard
              form={form}
              className="rounded-[1.75rem] bg-white p-7 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)] sm:p-9"
            />
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

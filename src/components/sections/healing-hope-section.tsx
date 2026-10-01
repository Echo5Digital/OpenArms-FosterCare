import Image from "next/image";
import { AppointmentRequestForm } from "@/components/forms/appointment-request-form";
import { HomeContactForm } from "@/components/forms/home-contact-form";

export function HealingHopeSection({ form = "appointment" }: { form?: "appointment" | "contact" }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src="/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 bg-pine-deep/55" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
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

        <div className="rounded-[2rem] bg-white p-8 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)] sm:p-10">
          <h3 className="font-sans text-2xl font-bold tracking-tight text-pine-deep">Request an Appointment</h3>
          <div className="mt-6">
            {form === "contact" ? <HomeContactForm /> : <AppointmentRequestForm />}
          </div>
        </div>
      </div>
    </section>
  );
}

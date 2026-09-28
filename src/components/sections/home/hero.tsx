import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-alt pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-mint blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-pine">
            Oklahoma City · Tulsa · Lawton
          </span>

          <h1 className="mt-6 max-w-xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-pine sm:text-[3.4rem]">
            Foster care that helps families{" "}
            <span className="relative italic text-leaf-deep">thrive,</span> not just survive.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
            Open Arms Foster Care is a full-service foster care agency based in Oklahoma City, with additional
            offices in Tulsa and Lawton. We help Oklahoma families become foster parents and stay supported every
            step of the way — from training and licensing through placement and beyond, including specialized
            therapeutic foster care for children with higher needs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/sign-up-now" variant="primary">
              Start Your Foster Care Journey
            </ButtonLink>
            <ButtonLink href="/contact-us" variant="ghost">
              Talk With Our Team
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="arch-mask relative aspect-[4/5] w-full overflow-hidden bg-pine">
            <Image
              src="/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg"
              alt="Father and son blowing bubbles together in a garden"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-pine/10 to-transparent" />
          </div>

          <div className="blob-mask absolute -bottom-8 -left-8 w-40 bg-leaf p-5 shadow-xl sm:w-48">
            <p className="font-display text-3xl font-semibold text-pine-deep">300+</p>
            <p className="mt-1 font-sans text-xs font-medium leading-tight text-pine-deep/80">
              children placed in safe, loving homes each year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

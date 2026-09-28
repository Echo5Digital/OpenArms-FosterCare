import Image from "next/image";

export function WhatIsFosterCare() {
  return (
    <section className="relative overflow-hidden bg-cream-alt py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div className="relative aspect-square w-[78%] overflow-hidden rounded-[2.5rem] bg-leaf shadow-xl">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full text-cream/25"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
            >
              <path d="M20 30h18M20 30q0 14 14 14" />
              <circle cx="150" cy="35" r="9" />
              <path d="M170 90q-16 0-16 16t16 16" />
              <path d="M25 130q10-14 24-4t4 24" />
              <path d="M60 170q18-6 18 12" />
              <path d="M140 155q14 4 10 20" />
              <circle cx="35" cy="95" r="4" />
              <path d="M110 20q6 12-6 16" />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 aspect-[4/5] w-[62%] overflow-hidden rounded-[2rem] shadow-2xl ring-8 ring-cream-alt">
            <Image
              src="/beautiful-boy-playing-with-bubbles-sunny-day-garden-100kb.jpg"
              alt="Father and son blowing bubbles together in a garden"
              fill
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="absolute left-0 top-6 aspect-[4/5] w-[46%] overflow-hidden rounded-[2rem] shadow-2xl ring-8 ring-cream-alt">
            <Image
              src="/black-baby-spending-time-with-her-dad-90kb (1).jpg"
              alt="Child sitting on her father's shoulders, laughing together"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-gradient-to-r from-leaf to-pine px-6 py-2.5 font-display text-lg font-medium text-cream shadow-sm sm:text-xl">
            What is Foster Care?
          </span>

          <p className="mt-7 text-[1.05rem] leading-relaxed text-slate">
            Foster care provides a safe, temporary home for children who cannot remain with their biological
            families due to safety concerns. While reunification is the primary goal, some children transition to
            long-term foster care or adoption. Open Arms coordinates placements and supports each child&rsquo;s
            emotional, behavioral, and social needs through comprehensive services.
          </p>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slate">
            At Open Arms Foster Care, we offer a full spectrum of foster care services, including{" "}
            <strong className="font-semibold text-pine">emergency foster care services</strong> for children in
            immediate need, therapeutic foster care and child welfare services in Oklahoma for children who
            require specialized emotional and psychological support.
          </p>
        </div>
      </div>
    </section>
  );
}

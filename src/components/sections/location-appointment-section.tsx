import Image from "next/image";
import { LocationAppointmentForm } from "@/components/forms/location-appointment-form";
import { Reveal } from "@/components/ui/reveal";

export type LocationAppointmentPhoto = {
  src: string;
  alt: string;
  /** Object-fit / position classes for the cut-out (default suits a wide photo with the people on the left). */
  className?: string;
  /** Aspect ratio + max widths of the photo block (default suits a wide photo; use the photo's own ratio for a tall one). */
  boxClassName?: string;
};

export function LocationAppointmentSection({ photo }: { photo: LocationAppointmentPhoto }) {
  return (
    <section className="relative overflow-x-clip bg-[rgb(243,249,237)]">
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-leaf/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-14 lg:gap-y-0">
          {/* heading */}
          <Reveal className="lg:col-start-2 lg:row-start-2">
            <span className="block h-[3px] w-24 rounded-full bg-gradient-to-r from-leaf-deep to-leaf" />
            <h2 className="mt-5 font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-pine sm:text-[2.8rem] lg:text-[3.1rem]">
              To Healing &amp;{" "}
              <span className="bg-gradient-to-r from-leaf-deep to-leaf bg-clip-text text-transparent">Hope</span>
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/75 sm:text-lg">
              Fill out some info and we will be reaching out shortly!
            </p>
          </Reveal>

          {/* cut-out photo rising out of a green panel */}
          <Reveal from="left" delay={100} className="lg:col-start-1 lg:row-span-4 lg:row-start-1">
            <div
              className={`relative mx-auto w-full ${
                photo.boxClassName ?? "aspect-[10/11] max-w-[26rem] sm:max-w-[30rem] lg:max-w-[34rem]"
              }`}
            >
              <div className="absolute inset-x-0 bottom-0 top-[17%] overflow-hidden rounded-[2rem_2rem_2rem_5rem] bg-gradient-to-br from-leaf via-[#a3d455] to-leaf-deep shadow-[0_40px_80px_-30px_rgba(25,53,45,0.55)]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.25]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1.4px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[22px] border-white/15" />
                <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-pine-deep/25 blur-2xl" />
              </div>

              <div className="absolute inset-0 [clip-path:inset(-12%_0_0_0_round_0_0_2rem_5rem)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 34rem, (min-width: 640px) 30rem, 26rem"
                  className={`${photo.className ?? "object-cover object-[28%_bottom]"} drop-shadow-[0_20px_25px_rgba(15,33,27,0.3)]`}
                />
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={150} className="lg:col-start-2 lg:row-start-3 lg:mt-8">
            <div className="rounded-[2rem_2rem_5rem_2rem] border-4 border-white bg-[#ebf0ee] p-6 shadow-[0_35px_70px_-30px_rgba(25,53,45,0.5)] sm:p-9">
              <LocationAppointmentForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

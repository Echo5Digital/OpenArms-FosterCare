import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function CareersHiring() {
  return (
    <section className="relative overflow-x-clip">
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-leaf/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1300px] px-5 pb-6 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* photo with an offset green shape behind it */}
          <Reveal from="left">
            <div className="relative h-full min-h-[18rem] sm:min-h-[22rem]">
              <div className="absolute -bottom-3 -left-3 h-[88%] w-[88%] rounded-[1.75rem] bg-gradient-to-br from-leaf to-leaf-deep" />
              <div className="relative h-full overflow-hidden rounded-[1.5rem] shadow-[0_35px_70px_-35px_rgba(25,53,45,0.65)]">
                <Image
                  src="/happy-family-field-autumn-mother-father-baby-play-nature-rays-sunset-100kb.jpg"
                  alt="A family walking together through a sunlit field"
                  fill
                  sizes="(min-width: 1024px) 640px, 90vw"
                  className="object-cover object-[50%_63%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/25 to-transparent" />
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={100}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[1.5rem] bg-[#ebf0ee] p-8 shadow-[0_30px_60px_-40px_rgba(25,53,45,0.4)] sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[22px] border-leaf/20" />
              <div className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-leaf/20 blur-3xl" />

              <div className="relative">
                <span className="block h-[3px] w-20 rounded-full bg-gradient-to-r from-leaf-deep to-leaf" />
                <h2 className="mt-5 font-sans text-[2.4rem] font-medium leading-[1.05] tracking-tight text-pine-deep sm:text-[3.5rem]">
                  We’re{" "}
                  <span className="bg-gradient-to-r from-leaf-deep to-leaf bg-clip-text text-transparent">Hiring!</span>
                </h2>
                <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-pine-deep">
                  Interested in joining our team of talented individuals dedicated to making a positive impact in the
                  lives of the families we serve?
                </p>
                <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-pine-deep">
                  Check out ‘Current Open Positions’ and ‘Apply’ below:
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

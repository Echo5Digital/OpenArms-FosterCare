import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function ClosingCta() {
  return (
    <section className="px-5 pb-20 pt-6 sm:px-8 sm:pb-28 sm:pt-8">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[2rem]">
        <Image src="/fam10.jpg" alt="A mother, father and two children sitting close together on a sofa in a sunlit living room" fill sizes="100vw" className="object-cover object-[85%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/90 via-pine-deep/60 to-pine-deep/20" />

        <div className="relative flex flex-col gap-8 px-6 py-14 sm:px-12 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl">
              Ready to open your home?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">
              Every child deserves a safe, supportive place to grow, and every foster family deserves a partner who
              has their back. Reach out today to learn more or begin the process of becoming a foster parent.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:mr-8 lg:justify-end lg:shrink-0 xl:mr-16">
            <ButtonLink href="/sign-up-now" variant="secondary">
              Start Your Foster Care Journey
            </ButtonLink>
            <ButtonLink
              href="/contact-us"
              variant="ghost-light"
              className="hover:text-leaf! hover:ring-leaf!"
            >
              Talk With Our Team
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

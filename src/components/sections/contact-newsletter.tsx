import Image from "next/image";
import { ContactNewsletterForm } from "@/components/forms/contact-newsletter-form";
import { Reveal } from "@/components/ui/reveal";

export function ContactNewsletter() {
  return (
    <section className="px-3 pb-12 pt-3 sm:px-5 sm:pb-16">
      <div className="relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        <Image src="/fam10.jpg" alt="A mother, father and two children sitting close together on a sofa in a sunlit living room" fill sizes="100vw" className="-z-20 object-cover object-[80%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pine-deep/95 via-pine-deep/80 to-pine/55" />
        <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border-[28px] border-leaf/15" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 -z-10 h-72 w-72 rounded-full bg-leaf/25 blur-3xl" />

        <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
          <Reveal>
            <p className="inline-flex items-center gap-3 font-sans text-sm font-bold text-leaf">
              <span aria-hidden className="h-px w-10 bg-leaf" />
              Newsletter
            </p>
            <h2 className="mt-4 max-w-3xl font-sans text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[3rem]">
              Follow our newsletter to Stay tuned
            </h2>
            <ContactNewsletterForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

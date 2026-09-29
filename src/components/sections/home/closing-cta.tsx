import { ButtonLink } from "@/components/ui/button-link";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-leaf py-20 sm:py-28">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-cream/20 blur-2xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-pine-deep sm:text-4xl">
          Ready to open your home?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pine-deep/80">
          Every child deserves a safe, supportive place to grow, and every foster family deserves a partner who has
          their back. Reach out today to learn more or begin the process of becoming a foster parent.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/sign-up-now" variant="primary">
            Start Your Foster Care Journey
          </ButtonLink>
          <ButtonLink href="/contact-us" variant="ghost" className="ring-pine-deep/30 text-pine-deep hover:ring-pine-deep/60">
            Talk With Our Team
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-cream py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

      <div className="relative mx-auto max-w-xl px-5 text-center sm:px-8">
        <span className="font-display text-6xl font-medium text-leaf-deep/60">404</span>
        <h1 className="mt-4 font-display text-3xl font-medium leading-tight text-pine sm:text-4xl">
          This page hasn&apos;t found its home yet.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate">
          The page you&apos;re looking for may have moved. Let&apos;s get you back to somewhere safe and familiar.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/" variant="primary">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact-us" variant="ghost">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

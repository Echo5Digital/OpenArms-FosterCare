import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema } from "@/lib/schema";
import { SignupForm } from "@/components/forms/signup-form";

const description = "Sign up to begin your foster care journey with Open Arms Foster Care in Oklahoma.";

export const metadata: Metadata = {
  title: "Sign Up Now",
  description,
  alternates: { canonical: "/sign-up-now" },
  openGraph: { title: "Sign Up Now - Open Arms Foster Care", description, url: "/sign-up-now" },
};

export default function SignUpNowPage() {
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/sign-up-now/`, name: "Sign Up Now - Open Arms Foster Care", description }),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-leaf-deep">
            To Healing &amp; Hope
          </span>
          <h1 className="mt-4 font-display text-[2.4rem] font-medium leading-[1.1] tracking-tight text-pine sm:text-[3rem]">
            Start your foster care journey
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            Fill out some info and we&apos;ll be reaching out shortly to guide you through every next step.
          </p>

          <div className="mt-12 rounded-[2rem_2rem_4rem_2rem] border border-pine/10 bg-white p-8 sm:p-10">
            <SignupForm />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { pageSchema } from "@/lib/schema";
import { SignupForm } from "@/components/forms/signup-form";

const description = "Sign up to begin your foster care journey with Open Arms Foster Care in Oklahoma.";

export const metadata: Metadata = {
  title: "Sign Up Now",
  description,
  alternates: { canonical: "/sign-up-now" },
  openGraph: { title: "Sign Up Now - Open Arms Foster Care", description, url: "/sign-up-now" },
};

export default function SignUpNowPage() {
  const schema = pageSchema({
    path: "/sign-up-now",
    name: "Sign Up Now - Open Arms Foster Care",
    description,
    breadcrumb: "Sign Up Now",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-white px-3 pb-6 pt-3 sm:px-5 sm:pb-8 sm:pt-4">
        <div className="mx-auto max-w-3xl px-2 pb-8 pt-10 text-center sm:pb-10 sm:pt-14">
          <h1 className="font-sans text-[2rem] font-bold leading-tight tracking-tight text-pine sm:text-[2.6rem]">
            Begin Your Foster Care Journey
          </h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/80 sm:text-lg">
            Every child deserves a safe, loving home, and it can start with you. Share a few details below and our team
            will reach out to guide you through the next steps.
          </p>
        </div>

        <div className="mx-auto max-w-[1830px] rounded-[1.9rem] bg-[#ebf0ee] px-5 pb-7 pt-6 sm:px-10">
          <div className="mx-auto max-w-[1260px]">
            <h2 className="font-sans text-[2.2rem] font-medium leading-[1.1] tracking-tight text-pine-deep sm:text-[3.25rem]">
              To Healing &amp; Hope
            </h2>
            <div className="mt-2">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

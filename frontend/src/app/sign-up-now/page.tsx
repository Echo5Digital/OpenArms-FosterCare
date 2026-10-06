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
        <div className="mx-auto max-w-[1830px] rounded-[1.9rem] bg-[#ebf0ee] px-5 pb-7 pt-6 sm:px-10">
          <div className="mx-auto max-w-[1260px]">
            <h1 className="font-sans text-[2.2rem] font-medium leading-[1.1] tracking-tight text-pine-deep sm:text-[3.25rem]">
              To Healing &amp; Hope
            </h1>
            <div className="mt-2">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

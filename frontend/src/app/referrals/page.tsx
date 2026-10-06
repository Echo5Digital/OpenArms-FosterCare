import type { Metadata } from "next";
import Image from "next/image";
import { pageSchema } from "@/lib/schema";
import { ReferralForm } from "@/components/forms/referral-form";

const description = "Did you know we offer a $500 referral bonus? Refer a prospective foster parent to Open Arms Foster Care in Oklahoma.";

export const metadata: Metadata = {
  title: "Referral Bonus",
  description,
  alternates: { canonical: "/referrals" },
  openGraph: { title: "Referrals - Open Arms Foster Care", description, url: "/referrals" },
};

export default function ReferralsPage() {
  const schema = pageSchema({
    path: "/referrals",
    name: "Referrals - Open Arms Foster Care",
    description,
    breadcrumb: "Referrals",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-pine-deep px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <h2 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-cream sm:text-5xl">
              Refer <span className="text-leaf">Someone</span> Today
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/70">
              Did you know we offer a $500 referral bonus?
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/70">
              Qualifying is super easy &ndash; all you have to do is refer a prospective foster parent to us. Once
              they complete the training and approval process and take placement of a foster child, you&rsquo;ll
              receive your well-deserved $500.
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/70">How awesome is that?</p>

            <div className="mt-8">
              <ReferralForm />
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-cream/60">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
                <rect x="5" y="10" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth={1.6} />
                <path d="M8 10V7a4 4 0 1 1 8 0v3" fill="none" stroke="currentColor" strokeWidth={1.6} />
              </svg>
              Your information stays private and is only used to contact you.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/cute-family-playing-summer-park-100kb.jpg"
                  alt="A family playing together in the park"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

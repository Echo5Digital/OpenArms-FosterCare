import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { graph, webPageSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/page-hero";
import { ReferralForm } from "@/components/forms/referral-form";

const description = "Did you know we offer a $500 referral bonus? Refer a prospective foster parent to Open Arms Foster Care in Oklahoma.";

export const metadata: Metadata = {
  title: "Referral Bonus",
  description,
  alternates: { canonical: "/referrals" },
  openGraph: { title: "Referrals - Open Arms Foster Care", description, url: "/referrals" },
};

export default function ReferralsPage() {
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/referrals/`, name: "Referrals - Open Arms Foster Care", description }),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow="Referral Bonus"
        title="Take the Next Step in Your Journey"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Referrals" }]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="rounded-[2rem_2rem_4rem_2rem] bg-leaf p-9">
              <p className="font-display text-5xl font-semibold text-pine-deep">$500</p>
              <p className="mt-3 max-w-xs text-[1.05rem] leading-relaxed text-pine-deep/85">
                Did you know we offer a $500 referral bonus? Qualifying is easy — refer a prospective foster parent
                to us. Once they complete training and approval and take placement of a foster child, you&apos;ll
                receive your well-deserved reward.
              </p>
            </div>
            <p className="mt-8 max-w-md text-slate">
              If you are a foster or adoptive family seeking support after placement, we invite you to reach out to
              us.
            </p>
          </div>

          <div className="rounded-[2rem_2rem_4rem_2rem] border border-pine/10 bg-white p-8 sm:p-10">
            <h2 className="font-display text-2xl font-medium text-pine">Refer Someone Today</h2>
            <div className="mt-8">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

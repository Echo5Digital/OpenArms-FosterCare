import Link from "next/link";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import { getLead } from "@/lib/leads/store";
import { leadTypeLabels, pageLabel } from "@/lib/leads/types";
import { fieldLabel, formatDateTime, formatValue, leadTitle } from "@/lib/leads/format";
import { AdminHeader } from "@/app/admin/_components/admin-header";
import { StatusBadge, TypeBadge } from "@/app/admin/_components/badges";
import { LeadActions } from "@/app/admin/_components/lead-actions";

// the contact details are already shown at the top, so they are not repeated in the submitted answers
const SHOWN_ABOVE = new Set(["name", "firstName", "lastName", "email", "phone"]);

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin();
  const { id } = await params;

  const lead = await getLead(id).catch(() => null);
  if (!lead) redirect("/admin");

  const answers = Object.entries(lead.fields).filter(([key]) => !SHOWN_ABOVE.has(key));

  return (
    <>
      <AdminHeader username={admin.username} />

      <main className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-pine hover:text-leaf-deep">
          ← All leads
        </Link>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-pine-deep sm:text-4xl">
              {leadTitle(lead)}
            </h1>
            <p className="mt-2 text-sm text-ink/65">
              {leadTypeLabels[lead.type]} · sent from <strong className="text-pine">{pageLabel(lead.page)}</strong> · {formatDateTime(lead.createdAt)}
            </p>
            {lead.inquiryAt && (
              <p className="mt-1 text-sm text-ink/65">
                Signed up, then completed the inquiry form on <strong className="text-pine">{formatDateTime(lead.inquiryAt)}</strong>
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <TypeBadge type={lead.type} />
            <StatusBadge status={lead.status} />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <section className="rounded-3xl bg-gradient-to-br from-pine-deep to-pine p-6 text-white shadow-[0_18px_40px_-26px_rgba(15,33,27,0.6)]">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-leaf">Contact</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-[1fr_1.7fr_1fr]">
                <div>
                  <dt className="text-xs text-white/60">Name</dt>
                  <dd className="mt-1 font-semibold">{lead.name || "—"}</dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-xs text-white/60">Email</dt>
                  <dd className="mt-1 break-words font-semibold">
                    {lead.email ? (
                      <a href={`mailto:${lead.email}`} className="underline-offset-4 hover:text-leaf hover:underline">
                        {lead.email}
                      </a>
                    ) : (
                      "—"
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-white/60">Phone</dt>
                  <dd className="mt-1 font-semibold">
                    {lead.phone ? (
                      <a href={`tel:${lead.phone}`} className="underline-offset-4 hover:text-leaf hover:underline">
                        {lead.phone}
                      </a>
                    ) : (
                      "—"
                    )}
                  </dd>
                </div>
              </dl>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-26px_rgba(15,33,27,0.4)] ring-1 ring-pine/10">
              <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-pine">What they sent</h2>
              {answers.length === 0 ? (
                <p className="mt-3 text-sm text-ink/55">Nothing else was filled in.</p>
              ) : (
                <dl className="mt-4 divide-y divide-pine/10">
                  {answers.map(([key, value]) => (
                    <div key={key} className="grid gap-1 py-3 sm:grid-cols-[14rem_1fr] sm:gap-4">
                      <dt className="text-sm font-semibold text-pine">{fieldLabel(key)}</dt>
                      <dd className="whitespace-pre-wrap break-words text-sm text-ink/85">{formatValue(value)}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </section>
          </div>

          <LeadActions id={lead.id} status={lead.status} note={lead.note} />
        </div>
      </main>
    </>
  );
}

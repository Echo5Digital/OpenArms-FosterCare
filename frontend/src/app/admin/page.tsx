import Link from "next/link";
import { requireAdmin } from "@backend/admin/auth";
import { getLeadStats, listLeads } from "@backend/leads/store";
import {
  LEAD_STATUSES,
  LEAD_TYPES,
  isLeadStatus,
  isLeadType,
  leadStatusLabels,
  leadTypeTabs,
  pageLabel,
  type LeadStatus,
  type LeadType,
} from "@backend/leads/types";
import { formatDay, formatTime, leadTitle, timeAgo } from "@backend/leads/format";
import { AdminHeader } from "@/app/admin/_components/admin-header";
import { TypeBadge } from "@/app/admin/_components/badges";
import { StatusSelect } from "@/app/admin/_components/status-select";

type Query = { type?: LeadType; status?: LeadStatus; q?: string; page?: number };

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

/** Link to the dashboard with some filters changed. */
function href(current: Query, change: Partial<Query>) {
  const next = { ...current, ...change };
  const params = new URLSearchParams();
  if (next.type) params.set("type", next.type);
  if (next.status) params.set("status", next.status);
  if (next.q) params.set("q", next.q);
  if (next.page && next.page > 1) params.set("page", String(next.page));
  const qs = params.toString();
  return qs ? `/admin?${qs}` : "/admin";
}

function StatCard({ label, value, hint, tone }: { label: string; value: number; hint?: string; tone: "pine" | "leaf" | "plain" }) {
  const toneClass =
    tone === "pine"
      ? "bg-gradient-to-br from-pine-deep to-pine text-white"
      : tone === "leaf"
        ? "bg-gradient-to-br from-leaf to-[#a3d455] text-pine-deep"
        : "bg-white text-pine-deep ring-1 ring-pine/10";
  const sub = tone === "plain" ? "text-ink/60" : tone === "pine" ? "text-white/70" : "text-pine-deep/75";
  return (
    <div className={`relative overflow-hidden rounded-3xl p-5 shadow-[0_18px_40px_-26px_rgba(15,33,27,0.55)] ${toneClass}`}>
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border-[14px] border-current opacity-[0.08]" />
      <p className={`relative font-sans text-sm font-semibold ${sub}`}>{label}</p>
      <p className="relative mt-2 font-sans text-[2.4rem] font-extrabold leading-none tracking-tight">{value}</p>
      {hint && <p className={`relative mt-2 text-xs ${sub}`}>{hint}</p>}
    </div>
  );
}

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const admin = await requireAdmin();
  const sp = await searchParams;

  const typeParam = first(sp.type);
  const statusParam = first(sp.status);
  const query: Query = {
    type: isLeadType(typeParam) ? typeParam : undefined,
    status: isLeadStatus(statusParam) ? statusParam : undefined,
    q: first(sp.q)?.trim().slice(0, 100) || undefined,
    page: Math.max(1, Number.parseInt(first(sp.page) ?? "1", 10) || 1),
  };

  const data = await Promise.all([getLeadStats(), listLeads(query, query.page ?? 1)])
    .then(([stats, list]) => ({ stats, list }))
    .catch(() => null);

  const filtered = !!(query.type || query.status || query.q);
  const exportHref = `/admin/export${href({ ...query, page: undefined }, {}).replace("/admin", "")}`;

  return (
    <>
      <AdminHeader username={admin.username} />

      <main className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-pine-deep sm:text-4xl">Leads</h1>
            <p className="mt-1 text-sm text-ink/65">Everything sent through the website&rsquo;s forms, newest first.</p>
          </div>
          {data && data.list.total > 0 && (
            <a
              href={exportHref}
              className="inline-flex items-center gap-2 rounded-full bg-pine px-5 py-2.5 font-sans text-sm font-bold text-white shadow-md transition-colors hover:bg-pine-deep"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
              </svg>
              Download CSV{filtered ? " (filtered)" : ""}
            </a>
          )}
        </div>

        {!data ? (
          <div role="alert" className="mt-8 rounded-3xl bg-red-50 p-8 text-red-800 ring-1 ring-red-200">
            <p className="font-sans text-lg font-bold">The leads could not be loaded.</p>
            <p className="mt-1 text-sm">
              The database did not answer. Check the connection settings (MONGODB_URI) and that the database allows this server,
              then refresh the page.
            </p>
          </div>
        ) : (
          <>
            {/* numbers */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              <StatCard label="Total leads" value={data.stats.total} tone="pine" />
              <StatCard label="New" value={data.stats.new} hint="Not followed up yet" tone="leaf" />
              <StatCard label="Last 24 hours" value={data.stats.last24h} tone="plain" />
              <StatCard label="Last 7 days" value={data.stats.last7d} tone="plain" />
            </div>

            {/* form type tabs */}
            <nav aria-label="Form type" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {[undefined, ...LEAD_TYPES].map((t) => {
                const active = query.type === t;
                const count = t ? data.stats.byType[t] : data.stats.total;
                return (
                  <Link
                    key={t ?? "all"}
                    href={href(query, { type: t, page: 1 })}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-bold transition-colors ${
                      active ? "bg-pine-deep text-white shadow-md" : "bg-white text-pine ring-1 ring-pine/10 hover:bg-mint"
                    }`}
                  >
                    {t ? leadTypeTabs[t] : "All leads"}
                    <span className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-leaf text-pine-deep" : "bg-mint text-pine"}`}>{count}</span>
                  </Link>
                );
              })}
            </nav>

            {/* search + status filter */}
            <form action="/admin" className="mt-4 flex flex-wrap items-center gap-2">
              {query.type && <input type="hidden" name="type" value={query.type} />}
              <input
                type="search"
                name="q"
                defaultValue={query.q}
                placeholder="Search name, email or phone"
                aria-label="Search leads"
                className="min-w-[14rem] flex-1 rounded-full border border-pine/15 bg-white px-5 py-2.5 text-sm outline-none transition focus:border-leaf-deep focus:ring-4 focus:ring-leaf/25 sm:max-w-sm"
              />
              <select
                name="status"
                defaultValue={query.status ?? ""}
                aria-label="Filter by status"
                className="rounded-full border border-pine/15 bg-white px-4 py-2.5 text-sm font-semibold text-pine outline-none focus:border-leaf-deep focus:ring-4 focus:ring-leaf/25"
              >
                <option value="">Any status</option>
                {LEAD_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {leadStatusLabels[s]}
                  </option>
                ))}
              </select>
              <button type="submit" className="rounded-full bg-leaf px-5 py-2.5 text-sm font-bold text-pine-deep transition-colors hover:bg-leaf-deep">
                Search
              </button>
              {filtered && (
                <Link href="/admin" className="px-2 text-sm font-semibold text-pine underline underline-offset-4 hover:text-leaf-deep">
                  Clear filters
                </Link>
              )}
            </form>

            {/* the list */}
            {data.list.items.length === 0 ? (
              <div className="mt-6 rounded-3xl bg-white px-6 py-16 text-center shadow-[0_18px_40px_-26px_rgba(15,33,27,0.4)] ring-1 ring-pine/10">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint text-pine">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 5h16v11H9l-5 4V5Z" />
                  </svg>
                </span>
                <p className="mt-4 font-sans text-lg font-bold text-pine-deep">{filtered ? "No leads match those filters" : "No leads yet"}</p>
                <p className="mx-auto mt-1 max-w-md text-sm text-ink/65">
                  {filtered
                    ? "Try a different search, or clear the filters to see everything."
                    : "When someone sends a form on the website it appears here straight away."}
                </p>
              </div>
            ) : (
              <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_-26px_rgba(15,33,27,0.4)] ring-1 ring-pine/10">
                <div className="hidden grid-cols-[9.5rem_9.5rem_1.2fr_1.4fr_1fr_11rem] gap-4 border-b border-pine/10 bg-mint/60 px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-pine lg:grid">
                  <span>Received</span>
                  <span>Form</span>
                  <span>Name</span>
                  <span>Contact</span>
                  <span>Sent from</span>
                  <span>Status</span>
                </div>
                <ul className="divide-y divide-pine/10">
                  {data.list.items.map((lead) => (
                    <li
                      key={lead.id}
                      className={`grid gap-x-4 gap-y-2 px-5 py-4 transition-colors hover:bg-mint/40 sm:px-6 lg:grid-cols-[9.5rem_9.5rem_1.2fr_1.4fr_1fr_11rem] lg:items-center ${
                        lead.status === "new" ? "border-l-4 border-l-leaf" : "border-l-4 border-l-transparent"
                      }`}
                    >
                      <div className="text-sm">
                        <p className="font-semibold text-pine-deep">{timeAgo(lead.createdAt)}</p>
                        <p className="text-xs text-ink/55">
                          {formatDay(lead.createdAt)}, {formatTime(lead.createdAt)}
                        </p>
                      </div>
                      <div>
                        <TypeBadge type={lead.type} />
                      </div>
                      <div className="min-w-0">
                        <Link href={`/admin/leads/${lead.id}`} className="block truncate font-sans font-bold text-pine-deep underline-offset-4 hover:text-leaf-deep hover:underline">
                          {leadTitle(lead)}
                        </Link>
                      </div>
                      <div className="min-w-0 text-sm">
                        {lead.email && (
                          <a href={`mailto:${lead.email}`} className="block truncate text-pine hover:text-leaf-deep hover:underline">
                            {lead.email}
                          </a>
                        )}
                        {lead.phone && (
                          <a href={`tel:${lead.phone}`} className="block truncate text-ink/70 hover:text-leaf-deep hover:underline">
                            {lead.phone}
                          </a>
                        )}
                        {!lead.email && !lead.phone && <span className="text-ink/40">—</span>}
                      </div>
                      <p className="truncate text-sm text-ink/70">{pageLabel(lead.page)}</p>
                      <div className="flex items-center gap-3">
                        <StatusSelect id={lead.id} status={lead.status} />
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          aria-label={`Open ${leadTitle(lead)}`}
                          className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-pine transition-colors hover:bg-leaf hover:text-pine-deep lg:ml-0"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M4 12h15m0 0-6-6m6 6-6 6" />
                          </svg>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* pages */}
            {data.list.pages > 1 && (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm">
                <p className="text-ink/65">
                  Showing {(data.list.page - 1) * data.list.pageSize + 1}–{Math.min(data.list.page * data.list.pageSize, data.list.total)} of{" "}
                  {data.list.total}
                </p>
                <div className="flex gap-2">
                  {data.list.page > 1 && (
                    <Link href={href(query, { page: data.list.page - 1 })} className="rounded-full bg-white px-4 py-2 font-bold text-pine ring-1 ring-pine/10 hover:bg-mint">
                      ← Newer
                    </Link>
                  )}
                  <span className="rounded-full bg-pine-deep px-4 py-2 font-bold text-white">
                    Page {data.list.page} of {data.list.pages}
                  </span>
                  {data.list.page < data.list.pages && (
                    <Link href={href(query, { page: data.list.page + 1 })} className="rounded-full bg-white px-4 py-2 font-bold text-pine ring-1 ring-pine/10 hover:bg-mint">
                      Older →
                    </Link>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}

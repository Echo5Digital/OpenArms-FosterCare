import { requireAdmin } from "@backend/admin/auth";
import { listAdmins } from "@backend/admin/users";
import { formatDay } from "@backend/leads/format";
import { AdminHeader } from "@/app/admin/_components/admin-header";
import { AddAdminForm } from "@/app/admin/users/add-admin-form";
import { RemoveAdminButton } from "@/app/admin/users/remove-admin-button";

const card = "rounded-3xl bg-white p-6 shadow-[0_18px_40px_-26px_rgba(15,33,27,0.4)] ring-1 ring-pine/10";

function Avatar({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint font-sans text-base font-extrabold uppercase text-pine ring-1 ring-pine/10"
    >
      {name.charAt(0)}
    </span>
  );
}

function Pill({ children, tone }: { children: string; tone: "owner" | "you" }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${
        tone === "owner" ? "bg-pine-deep text-white ring-pine-deep" : "bg-leaf/30 text-pine-deep ring-leaf-deep/40"
      }`}
    >
      {children}
    </span>
  );
}

export default async function AdminUsersPage() {
  const me = await requireAdmin();
  const owner = process.env.ADMIN_USERNAME;
  const admins = await listAdmins().catch(() => null);

  return (
    <>
      <AdminHeader username={me.username} current="users" />

      <main className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8">
        <h1 className="font-sans text-3xl font-extrabold tracking-tight text-pine-deep sm:text-4xl">Admin users</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
          Everyone listed here can sign in to this dashboard and see every lead. Add a teammate with their email and a
          password; they sign in at <strong className="text-pine">/admin/login</strong> with those.
        </p>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.4fr_1fr]">
          <section className={card} aria-labelledby="people">
            <h2 id="people" className="font-sans text-sm font-bold uppercase tracking-wider text-pine">
              Who has access
            </h2>

            {admins === null ? (
              <p role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-red-200">
                The list of admins could not be loaded. The database did not answer; refresh the page to try again.
              </p>
            ) : (
              <ul className="mt-2 divide-y divide-pine/10">
                {owner && (
                  <li className="flex items-center gap-3 py-4">
                    <Avatar name={owner} />
                    <div className="min-w-0 flex-1">
                      <p className="flex flex-wrap items-center gap-2 break-all font-semibold text-pine-deep">
                        {owner}
                        <Pill tone="owner">Owner</Pill>
                        {me.owner && <Pill tone="you">You</Pill>}
                      </p>
                      <p className="mt-0.5 text-xs text-ink/55">Main account, set in the website&rsquo;s server settings</p>
                    </div>
                  </li>
                )}

                {admins.map((admin) => {
                  const isMe = admin.email === me.username.toLowerCase();
                  return (
                    <li key={admin.email} className="flex items-center gap-3 py-4">
                      <Avatar name={admin.email} />
                      <div className="min-w-0 flex-1">
                        <p className="flex flex-wrap items-center gap-2 break-all font-semibold text-pine-deep">
                          {admin.email}
                          {isMe && <Pill tone="you">You</Pill>}
                        </p>
                        <p className="mt-0.5 text-xs text-ink/55">
                          Added {formatDay(admin.createdAt)} by {admin.createdBy}
                        </p>
                      </div>
                      {!isMe && <RemoveAdminButton email={admin.email} />}
                    </li>
                  );
                })}

                {admins.length === 0 && (
                  <li className="py-4 text-sm text-ink/55">No other admins yet. Add the first one with the form.</li>
                )}
              </ul>
            )}
          </section>

          <section className={card} aria-labelledby="add">
            <h2 id="add" className="font-sans text-sm font-bold uppercase tracking-wider text-pine">
              Add an admin
            </h2>
            <p className="mt-1 text-xs text-ink/55">They get full access, so only add people you trust with the leads.</p>
            <AddAdminForm />
          </section>
        </div>
      </main>
    </>
  );
}

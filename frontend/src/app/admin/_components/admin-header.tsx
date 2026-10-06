import Link from "next/link";
import { logoutAction } from "@/app/admin/actions";

const navItems = [
  { key: "leads", label: "Leads", href: "/admin" },
  { key: "users", label: "Users", href: "/admin/users" },
] as const;

export function AdminHeader({ username, current = "leads" }: { username: string; current?: "leads" | "users" }) {
  return (
    <header className="bg-gradient-to-r from-pine-deep via-pine to-[#1f4a36] text-white">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-4 sm:px-8">
        <Link href="/admin" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-leaf text-pine-deep shadow-[0_8px_18px_-8px_rgba(141,197,64,0.9)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 5h16v11H9l-5 4V5Z" />
              <path d="M8 9h8M8 12.5h5" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-sans text-[0.68rem] font-bold uppercase tracking-[0.2em] text-leaf">Open Arms</span>
            <span className="block font-sans text-lg font-bold tracking-tight">Lead Dashboard</span>
          </span>
        </Link>

        <nav aria-label="Dashboard" className="order-last flex w-full gap-1.5 sm:order-none sm:w-auto">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={current === item.key ? "page" : undefined}
              className={`rounded-full px-4 py-2 font-sans text-sm font-bold transition-colors ${
                current === item.key ? "bg-white/15 text-white ring-1 ring-white/25" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="hidden rounded-full px-4 py-2 font-sans text-sm font-semibold text-white/80 ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            View website ↗
          </a>
          <span className="hidden font-sans text-sm text-white/70 md:inline">{username}</span>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full bg-white/10 px-4 py-2 font-sans text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-leaf hover:text-pine-deep"
            >
              Log out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

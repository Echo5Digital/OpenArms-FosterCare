"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/actions";

const inputClass =
  "w-full rounded-full border border-leaf bg-[#e2e8e5] px-5 py-3.5 font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/45 focus:border-leaf-deep focus:bg-white focus:ring-4 focus:ring-leaf/25";

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(loginAction, {});

  return (
    <form action={action} className="mt-8 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-sans text-sm font-bold text-pine-deep">
          Email or username
        </label>
        <input id="username" name="username" autoComplete="username" required autoFocus className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-sans text-sm font-bold text-pine-deep">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={inputClass}
        />
      </div>

      {state.error && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-leaf px-8 py-3.5 font-sans text-sm font-bold text-pine-deep shadow-[0_14px_30px_-12px_rgba(141,197,64,0.8)] transition-colors hover:bg-leaf-deep"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

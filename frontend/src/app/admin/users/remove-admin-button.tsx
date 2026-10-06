"use client";

import { useTransition } from "react";
import { removeAdminAction } from "@/app/admin/users/actions";

export function RemoveAdminButton({ email }: { email: string }) {
  const [pending, startTransition] = useTransition();

  function remove() {
    if (!window.confirm(`Remove ${email}? They will no longer be able to sign in to the dashboard.`)) return;
    startTransition(async () => {
      await removeAdminAction(email);
    });
  }

  return (
    <button
      type="button"
      onClick={remove}
      disabled={pending}
      aria-label={`Remove ${email}`}
      className="shrink-0 rounded-full bg-red-50 px-4 py-2 text-xs font-bold text-red-700 ring-1 ring-red-200 transition-colors hover:bg-red-600 hover:text-white disabled:opacity-60"
    >
      {pending ? "Removing…" : "Remove"}
    </button>
  );
}

"use client";

import { useActionState, useState } from "react";
import { addAdminAction, type AddAdminState } from "@backend/admin/users-actions";

const inputClass =
  "w-full rounded-full border border-pine/15 bg-[#f4f7f5] px-5 py-3 font-sans text-sm text-ink outline-none transition-all placeholder:text-ink/40 focus:border-leaf-deep focus:bg-white focus:ring-4 focus:ring-leaf/25";
const smallButton =
  "rounded-full bg-mint px-3.5 py-1.5 text-xs font-bold text-pine ring-1 ring-pine/10 transition-colors hover:bg-leaf hover:text-pine-deep";

// no 0/O, 1/l/I: easier to read out loud or copy by eye
const ALPHABET = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";

function generatePassword(length = 16) {
  const limit = 256 - (256 % ALPHABET.length); // skip the bytes that would make some letters likelier than others
  let out = "";
  while (out.length < length) {
    for (const byte of crypto.getRandomValues(new Uint8Array(length))) {
      if (byte < limit && out.length < length) out += ALPHABET[byte % ALPHABET.length];
    }
  }
  return out;
}

function Fields() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked: the password is visible, so it can still be selected by hand
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="admin-email" className="font-sans text-sm font-bold text-pine-deep">
          Email
        </label>
        <input
          id="admin-email"
          name="email"
          type="email"
          required
          autoComplete="off"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <label htmlFor="admin-password" className="font-sans text-sm font-bold text-pine-deep">
            Password
          </label>
          <div className="flex gap-1.5">
            <button
              type="button"
              className={smallButton}
              onClick={() => {
                setPassword(generatePassword());
                setShow(true);
              }}
            >
              Generate
            </button>
            <button type="button" className={smallButton} onClick={() => setShow((s) => !s)} aria-pressed={show}>
              {show ? "Hide" : "Show"}
            </button>
            <button type="button" className={smallButton} onClick={copy} disabled={!password}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
        <input
          id="admin-password"
          name="password"
          type={show ? "text" : "password"}
          required
          minLength={10}
          maxLength={200}
          autoComplete="new-password"
          placeholder="At least 10 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
        <p className="text-xs text-ink/55">Copy it before you add the admin: it is not shown again afterwards.</p>
      </div>
    </>
  );
}

/** Email + password for a new admin. Fields clear after a success and keep what was typed after an error. */
export function AddAdminForm() {
  const [state, action, pending] = useActionState<AddAdminState, FormData>(addAdminAction, { count: 0 });

  return (
    <form action={action} className="mt-4 flex flex-col gap-4">
      {/* a new key after each success starts the fields again from empty */}
      <Fields key={state.count} />

      {state.error && (
        <p role="alert" className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
          {state.error}
        </p>
      )}
      {state.added && (
        <p role="status" className="rounded-2xl bg-mint px-4 py-3 text-sm font-medium text-pine-deep ring-1 ring-leaf/50">
          <strong className="break-all">{state.added}</strong> can now sign in at /admin/login with that email and password.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-leaf px-6 py-3 font-sans text-sm font-bold text-pine-deep shadow-[0_14px_30px_-12px_rgba(141,197,64,0.8)] transition-colors hover:bg-leaf-deep disabled:opacity-60"
      >
        {pending ? "Adding…" : "Add admin"}
      </button>
    </form>
  );
}

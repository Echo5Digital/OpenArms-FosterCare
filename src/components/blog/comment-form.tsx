"use client";

import { useEffect, useRef } from "react";
import { FormError, Honeypot } from "@/components/forms/form-ui";
import { useLeadForm } from "@/lib/use-lead-form";

const STORAGE_KEY = "open-arms-comment-author";

const fieldClass =
  "w-full rounded-lg border border-pine/10 bg-mint/70 px-5 py-3.5 font-sans text-base text-ink outline-none transition-colors placeholder:text-slate/80 focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/20";

type Saved = { name?: string; email?: string };

// browser storage can be missing or blocked (private windows, strict settings), so every access is guarded
function readSaved(): Saved | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

function writeSaved(saved: Saved | null) {
  try {
    if (saved) localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // nothing to do: the comment itself was already sent
  }
}

/** "Leave A Comment" form under a post. Comments are sent to the team's dashboard like every other website form. */
export function CommentForm({ postTitle }: { postTitle: string }) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);

  const { sent, sending, error, handleSubmit } = useLeadForm("comment", {
    onSaved: () => {
      writeSaved(rememberRef.current?.checked ? { name: nameRef.current?.value, email: emailRef.current?.value } : null);
    },
  });

  // fill in the name and email a visitor chose to remember last time
  useEffect(() => {
    const saved = readSaved();
    if (!saved) return;
    if (nameRef.current && saved.name) nameRef.current.value = saved.name;
    if (emailRef.current && saved.email) emailRef.current.value = saved.email;
    if (rememberRef.current) rememberRef.current.checked = true;
  }, []);

  return (
    <section aria-labelledby="comment-form-heading" className="mt-8 rounded-[1.25rem] bg-white p-6 sm:p-10">
      <h2 id="comment-form-heading" className="font-sans text-2xl font-bold tracking-tight text-pine sm:text-[1.7rem]">
        Leave A Comment
      </h2>

      {sent ? (
        <p role="status" className="mt-6 rounded-lg bg-mint px-5 py-4 font-sans text-base text-pine">
          Thank you for your comment. Our team has received it.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="relative mt-6 flex flex-col gap-5">
          <Honeypot />
          <input type="hidden" name="post" value={postTitle} />

          <label className="sr-only" htmlFor="comment-name">
            Name
          </label>
          <input ref={nameRef} id="comment-name" name="name" type="text" required autoComplete="name" placeholder="Name" className={fieldClass} />

          <label className="sr-only" htmlFor="comment-email">
            Email
          </label>
          <input ref={emailRef} id="comment-email" name="email" type="email" required autoComplete="email" placeholder="Email" className={fieldClass} />

          <label className="sr-only" htmlFor="comment-subject">
            Subject
          </label>
          <input id="comment-subject" name="subject" type="text" placeholder="Subject" className={fieldClass} />

          <label className="sr-only" htmlFor="comment-message">
            Comment
          </label>
          <textarea id="comment-message" name="comment" required rows={6} placeholder="Comment..." className={`resize-y ${fieldClass}`} />

          <label className="flex items-center gap-3 font-sans text-sm text-ink">
            <input ref={rememberRef} type="checkbox" className="h-4 w-4 shrink-0 accent-pine" />
            Save my name and email in this browser for the next time I comment.
          </label>

          <FormError message={error} />

          <button
            type="submit"
            disabled={sending}
            className="w-fit rounded-lg bg-pine px-7 py-3.5 font-sans text-base font-semibold text-cream transition-colors hover:bg-pine-deep"
          >
            {sending ? "Sending…" : "Post Comment"}
          </button>
        </form>
      )}
    </section>
  );
}

"use client";

import { useState, useTransition } from "react";
import { deleteLeadAction, saveNoteAction, setStatusAction } from "@backend/admin/actions";
import { LEAD_STATUSES, leadStatusLabels, type LeadStatus } from "@backend/leads/types";

const activeStyle: Record<LeadStatus, string> = {
  new: "bg-leaf text-pine-deep shadow-md",
  contacted: "bg-amber-400 text-amber-950 shadow-md",
  closed: "bg-slate-500 text-white shadow-md",
};

/** Status buttons, a private note box and delete, for one lead. */
export function LeadActions({ id, status, note }: { id: string; status: LeadStatus; note: string }) {
  const [current, setCurrent] = useState(status);
  const [text, setText] = useState(note);
  const [savedText, setSavedText] = useState(note);
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  function changeStatus(next: LeadStatus) {
    const previous = current;
    setCurrent(next);
    startTransition(async () => {
      try {
        await setStatusAction(id, next);
      } catch {
        setCurrent(previous);
        setMessage("Could not change the status. Please try again.");
      }
    });
  }

  function saveNote() {
    setMessage(null);
    startTransition(async () => {
      try {
        await saveNoteAction(id, text);
        setSavedText(text);
        setMessage("Note saved.");
      } catch {
        setMessage("Could not save the note. Please try again.");
      }
    });
  }

  function remove() {
    if (!window.confirm("Delete this lead permanently? This cannot be undone.")) return;
    startTransition(async () => {
      await deleteLeadAction(id);
    });
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-26px_rgba(15,33,27,0.4)] ring-1 ring-pine/10">
        <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-pine">Status</h2>
        <div role="group" aria-label="Status" className="mt-3 grid grid-cols-3 gap-1.5 rounded-full bg-mint p-1.5">
          {LEAD_STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => changeStatus(s)}
              aria-pressed={current === s}
              disabled={pending}
              className={`rounded-full px-2 py-2 text-sm font-bold transition-all ${
                current === s ? activeStyle[s] : "text-pine hover:bg-white/70"
              }`}
            >
              {leadStatusLabels[s]}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-[0_18px_40px_-26px_rgba(15,33,27,0.4)] ring-1 ring-pine/10">
        <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-pine">Private notes</h2>
        <p className="mt-1 text-xs text-ink/55">Only people who can log in here see these.</p>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setMessage(null);
          }}
          rows={5}
          maxLength={5000}
          aria-label="Private notes"
          placeholder="e.g. Called on Tuesday, left a voicemail…"
          className="mt-3 w-full resize-y rounded-2xl border border-pine/15 bg-[#f4f7f5] px-4 py-3 text-sm outline-none transition focus:border-leaf-deep focus:bg-white focus:ring-4 focus:ring-leaf/25"
        />
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={saveNote}
            disabled={pending || text === savedText}
            className="rounded-full bg-leaf px-5 py-2 text-sm font-bold text-pine-deep transition-colors hover:bg-leaf-deep disabled:opacity-50"
          >
            {pending ? "Saving…" : "Save note"}
          </button>
          {message && (
            <span role="status" className="text-sm font-semibold text-pine">
              {message}
            </span>
          )}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 ring-1 ring-red-200">
        <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-red-700">Delete</h2>
        <p className="mt-1 text-xs text-ink/55">Removes this lead for good, for example a test or a duplicate.</p>
        <button
          type="button"
          onClick={remove}
          disabled={pending}
          className="mt-3 rounded-full bg-red-50 px-5 py-2 text-sm font-bold text-red-700 ring-1 ring-red-200 transition-colors hover:bg-red-600 hover:text-white"
        >
          Delete this lead
        </button>
      </section>
    </div>
  );
}

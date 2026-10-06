"use client";

/** Shown when a dashboard page cannot get an answer from the backend server at all. */
export default function AdminError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-12">
      <div role="alert" className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-[0_18px_40px_-26px_rgba(15,33,27,0.4)] ring-1 ring-pine/10">
        <h1 className="font-sans text-xl font-bold text-pine-deep">The dashboard could not reach the server</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          The backend did not answer. If it has been idle it may need up to a minute to wake up. Wait a moment and try
          again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-leaf px-6 py-2.5 font-sans text-sm font-bold text-pine-deep transition-colors hover:bg-leaf-deep"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

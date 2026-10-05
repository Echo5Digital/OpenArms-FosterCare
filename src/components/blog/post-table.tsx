"use client";

import { useId, useMemo, useState } from "react";

const PAGE_SIZES = [10, 25, 50, 100];

type Sort = { column: number; direction: "asc" | "desc" };

function SortIcon({ direction }: { direction: "asc" | "desc" | null }) {
  return (
    <svg aria-hidden viewBox="0 0 10 16" className="h-4 w-2.5 shrink-0">
      <path d="M5 1 9 6H1z" className={direction === "asc" ? "fill-pine" : "fill-pine/25"} />
      <path d="M5 15 1 10h8z" className={direction === "desc" ? "fill-pine" : "fill-pine/25"} />
    </svg>
  );
}

const controlClass =
  "rounded-md border border-pine/15 bg-white px-3 py-1.5 font-sans text-sm text-ink outline-none transition-colors focus:border-leaf focus:ring-2 focus:ring-leaf/25";
const pagerButton =
  "flex h-9 min-w-9 items-center justify-center rounded-md border px-2 font-sans text-sm transition-colors disabled:cursor-default disabled:opacity-40";

/** A comparison table that can be searched, sorted by any column and split into pages. */
export function PostTable({ headers, rows, caption }: { headers: string[]; rows: string[][]; caption?: string }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort | null>(null);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? rows.filter((row) => row.some((cell) => cell.toLowerCase().includes(q))) : rows;
  }, [rows, query]);

  const sorted = useMemo(() => {
    if (!sort) return filtered;
    const sign = sort.direction === "asc" ? 1 : -1;
    return [...filtered].sort((a, b) => a[sort.column].localeCompare(b[sort.column], undefined, { numeric: true, sensitivity: "base" }) * sign);
  }, [filtered, sort]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const current = Math.min(page, pageCount);
  const first = (current - 1) * pageSize;
  const visible = sorted.slice(first, first + pageSize);

  function sortBy(column: number) {
    setSort((s) => (s?.column === column && s.direction === "asc" ? { column, direction: "desc" } : { column, direction: "asc" }));
  }

  return (
    <div className="my-10">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 font-sans text-sm text-slate">
        <div className="flex items-center gap-2">
          <select
            aria-label="Entries per page"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className={controlClass}
          >
            {PAGE_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>entries per page</span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor={`${id}-search`}>Search:</label>
          <input
            id={`${id}-search`}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className={`${controlClass} w-44 sm:w-56`}
          />
        </div>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-pine/10 shadow-sm">
        <table className="w-full min-w-[34rem] border-collapse text-left text-[0.95rem]">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="bg-mint/70">
              {headers.map((header, column) => {
                const direction = sort?.column === column ? sort.direction : null;
                return (
                  <th
                    key={header}
                    scope="col"
                    aria-sort={direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none"}
                    className="border-b border-pine/10 px-4 py-3.5 font-sans font-semibold text-pine"
                  >
                    <button type="button" onClick={() => sortBy(column)} className="flex w-full items-center justify-between gap-3 text-left">
                      {header}
                      <SortIcon direction={direction} />
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {visible.length > 0 ? (
              visible.map((row) => (
                <tr key={row[0]} className="odd:bg-white even:bg-mint/30">
                  {row.map((cell, column) =>
                    column === 0 ? (
                      <th key={column} scope="row" className="border-t border-pine/10 px-4 py-3 text-left align-top font-sans font-semibold text-pine">
                        {cell}
                      </th>
                    ) : (
                      <td key={column} className="border-t border-pine/10 px-4 py-3 align-top text-ink/80">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length} className="border-t border-pine/10 px-4 py-6 text-center text-slate">
                  No matching entries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-sans text-sm text-slate">
        <p aria-live="polite">
          Showing {sorted.length === 0 ? 0 : first + 1} to {first + visible.length} of {sorted.length} entries
          {sorted.length !== rows.length && ` (filtered from ${rows.length} total entries)`}
        </p>
        <nav aria-label="Table pages" className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous page"
            disabled={current === 1}
            onClick={() => setPage(current - 1)}
            className={`${pagerButton} border-transparent text-slate hover:text-pine`}
          >
            ‹
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`Page ${n}`}
              aria-current={n === current ? "page" : undefined}
              onClick={() => setPage(n)}
              className={`${pagerButton} ${n === current ? "border-pine bg-white text-pine" : "border-transparent text-slate hover:border-pine/20"}`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            disabled={current === pageCount}
            onClick={() => setPage(current + 1)}
            className={`${pagerButton} border-transparent text-slate hover:text-pine`}
          >
            ›
          </button>
        </nav>
      </div>
    </div>
  );
}

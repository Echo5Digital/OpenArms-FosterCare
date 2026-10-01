"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavItem, NavLink } from "@/lib/site-config";
import { NavMenuCard } from "@/components/layout/nav-menu-card";

export function NavDropdown({
  label,
  items,
  menu = "services",
  light = false,
}: {
  label: string;
  items: NavLink[];
  menu?: NonNullable<NavItem["menu"]>;
  light?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  function clearTimer() {
    if (timeout.current) clearTimeout(timeout.current);
  }
  function show() {
    clearTimer();
    setOpen(true);
  }
  function hide() {
    clearTimer();
    timeout.current = setTimeout(() => setOpen(false), 140);
  }
  function close() {
    clearTimer();
    setOpen(false);
  }

  useEffect(() => clearTimer, []);

  // close on Escape, or when pressing anywhere outside the menu (touch screens have no mouse-leave)
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={show}
        className={`relative flex items-center gap-1.5 px-4 py-2 font-sans text-[0.95rem] font-medium transition-colors ${
          light
            ? open
              ? "text-cream"
              : "text-cream/90 hover:text-cream"
            : open
              ? "text-pine"
              : "text-ink/85 hover:text-pine"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
      >
        {label}
        <svg viewBox="0 0 12 8" className={`h-2 w-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden>
          <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
        </svg>
        <span
          aria-hidden
          className={`absolute inset-x-4 bottom-0 h-0.5 origin-left rounded-full bg-leaf transition-transform duration-300 ${
            open ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </button>

      {/*
        Always in the page, only hidden while closed: the links are visible to search engines, and the photo is already
        loaded by the time the menu first opens. `invisible` also takes the links out of the tab order and the pointer path.
      */}
      <div
        id={panelId}
        className={`absolute left-1/2 top-full z-20 -translate-x-1/2 pt-4 transition-[visibility] duration-200 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`relative transition-all duration-200 ease-out motion-reduce:transition-none ${
            open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-2 scale-[0.97] opacity-0"
          }`}
          style={{ transformOrigin: "top center" }}
        >
          {/* pointer notch toward the label */}
          <span aria-hidden className="absolute -top-1.5 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-[3px] bg-pine-deep" />
          <NavMenuCard menu={menu} title={label} items={items} onNavigate={close} open={open} />
        </div>
      </div>
    </div>
  );
}

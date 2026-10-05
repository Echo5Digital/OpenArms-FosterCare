"use client";

import { useState, type ComponentProps } from "react";
import Link from "next/link";

type Props = ComponentProps<typeof Link>;

/**
 * Drop-in replacement for next/link that holds off prefetching until the visitor shows intent
 * (hover, keyboard focus or touch). The default prefetches every link as it scrolls into view,
 * which downloads the JavaScript of each linked page up front even though most are never opened.
 */
export function HoverPrefetchLink({ prefetch, onMouseEnter, onFocus, onTouchStart, ...props }: Props) {
  const [intent, setIntent] = useState(false);

  return (
    <Link
      {...props}
      prefetch={intent ? prefetch : false}
      onMouseEnter={(e) => {
        setIntent(true);
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        setIntent(true);
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        setIntent(true);
        onTouchStart?.(e);
      }}
    />
  );
}

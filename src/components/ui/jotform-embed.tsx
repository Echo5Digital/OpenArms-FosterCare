"use client";

import { useEffect, useRef, useState } from "react";

const JOTFORM_ORIGIN = "https://form.jotform.com";

/**
 * Embeds a Jotform form and grows the frame to the form's real height (Jotform posts "setHeight:<px>:<formId>" to the
 * parent page), so the form never shows a second scrollbar. The class-based heights are the fallback until then.
 */
export function JotformEmbed({ src, title }: { src: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== JOTFORM_ORIGIN || e.source !== frameRef.current?.contentWindow) return;
      if (typeof e.data !== "string") return;
      const [type, value] = e.data.split(":");
      const px = Number(value);
      // Jotform reports a few px less than the form really needs, which would leave a thin scrollbar in the frame
      if (type === "setHeight" && Number.isFinite(px) && px > 0) setHeight(Math.ceil(px) + 24);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={frameRef}
      src={src}
      title={title}
      allowFullScreen
      className="block h-[7700px] w-full border-0 bg-white sm:h-[5300px] lg:h-[4300px]"
      style={height ? { height } : undefined}
    />
  );
}

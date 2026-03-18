"use client";

import { usePathname } from "next/navigation";

export default function TickerDivider() {
  const pathname = usePathname();

  // Homepage pe mat dikhao — wahan already marquee hai
  if (pathname === "/") return null;

  const text = "HACKIT 2026 \u00a0•\u00a0 AMITY UNIVERSITY PATNA \u00a0•\u00a0 27–28 MAR \u00a0•\u00a0 BUILD \u00a0•\u00a0 INNOVATE \u00a0•\u00a0 CREATE \u00a0•\u00a0";

  return (
    <div
      className="w-full py-3 overflow-hidden border-y border-white/5"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-gray-600 text-[10px] tracking-[0.25em] uppercase mx-6 flex-shrink-0"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
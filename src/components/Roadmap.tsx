"use client";

import { useEffect, useRef, useState } from "react";
import { FaRocket } from "react-icons/fa";

export default function Roadmap() {
  const pathRef       = useRef<SVGPathElement>(null);
  const sectionRef    = useRef<HTMLElement>(null);
  const [progress,    setProgress]    = useState(0);
  const [pathLength,  setPathLength]  = useState(3000);
  const [orbPoint,    setOrbPoint]    = useState({ x: 0, y: 100 });

  const items = [
    { date: "05 FEB 2026", text: "Registration starts"  },
    { date: "20 FEB 2026", text: "Registration closes"  },
    { date: "22 FEB 2026", text: "Shortlisting phase"   },
    { date: "24 FEB 2026", text: "Teams notified"       },
    {
      date: "28 FEB 2026",
      text: "Hackathon begins",
      icon: <FaRocket className="text-[#FF6600] text-sm ml-2" />,
    },
  ];

  // ── Layout constants ─────────────────────────────────────────────────────
  const SVG_WIDTH    = 160;
  const ROW_HEIGHT   = 180;
  const START_Y      = 100;
  const TOTAL_HEIGHT = START_Y + (items.length - 1) * ROW_HEIGHT + 100;

  // ── S-curve path ─────────────────────────────────────────────────────────
  let pathD = `M 0 ${START_Y}`;
  for (let i = 1; i < items.length; i++) {
    const prevY = START_Y + (i - 1) * ROW_HEIGHT;
    const currX = i % 2 === 0 ? 0 : SVG_WIDTH;
    const currY = START_Y + i * ROW_HEIGHT;
    pathD += ` C ${SVG_WIDTH / 2} ${prevY}, ${SVG_WIDTH / 2} ${currY}, ${currX} ${currY}`;
  }

  // ── Scroll → progress + orb position ────────────────────────────────────
  useEffect(() => {
    const path = pathRef.current;
    if (path) setPathLength(path.getTotalLength());

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || !pathRef.current) return;

      const rect    = section.getBoundingClientRect();
      const visible = window.innerHeight / 2 - rect.top;
      const pct     = Math.max(0, Math.min(1, visible / (rect.height * 0.8)));
      setProgress(pct);

      // Get exact x,y on the SVG path for the orb
      const len   = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(pct * len);
      setOrbPoint({ x: point.x, y: point.y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="w-full py-24 flex flex-col items-center px-4 overflow-hidden"
      style={{ fontFamily: "var(--font-exo2)" }}
    >

      {/* ── TITLE ─────────────────────────────────────────────────────── */}
      <div className="text-center mb-16 md:mb-24 relative z-10">
        <p
          className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          // Mission Timeline
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          Roadmap
        </h2>
      </div>

      {/* ── DESKTOP ───────────────────────────────────────────────────── */}
      <div
        className="hidden md:block relative w-full max-w-5xl mx-auto"
        style={{ height: TOTAL_HEIGHT }}
      >
        <svg
          width={SVG_WIDTH}
          height={TOTAL_HEIGHT}
          className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
          overflow="visible"
        >
          <defs>
            <linearGradient id="path-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#ffffff" />
              <stop offset="50%"  stopColor="#FF6600" />
              <stop offset="100%" stopColor="#CC5200" />
            </linearGradient>
            <filter id="orb-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Faint track */}
          <path
            d={pathD}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="3"
            fill="none"
          />

          {/* Scroll-driven progress line */}
          <path
            ref={pathRef}
            d={pathD}
            stroke="url(#path-grad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - progress * pathLength}
            style={{ transition: "stroke-dashoffset 0.08s linear" }}
          />

          {/* Static node dots */}
          {items.map((_, i) => {
            const cx = i % 2 === 0 ? 0 : SVG_WIDTH;
            const cy = START_Y + i * ROW_HEIGHT;
            const reached = progress >= i / (items.length - 1);
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="5"
                fill={reached ? "#FF6600" : "#1a1a2e"}
                stroke={reached ? "#FF6600" : "rgba(255,255,255,0.15)"}
                strokeWidth="2"
                style={{ transition: "fill 0.3s, stroke 0.3s" }}
              />
            );
          })}

          {/* Scroll-driven orb — follows path exactly */}
          <circle
            cx={orbPoint.x}
            cy={orbPoint.y}
            r="7"
            fill="white"
            filter="url(#orb-glow)"
            opacity={progress > 0.01 ? 1 : 0}
            style={{ transition: "cx 0.08s linear, cy 0.08s linear, opacity 0.3s" }}
          />
        </svg>

        {/* ── Cards — consistent LEFT text alignment ─────────────────── */}
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          const yPos   = START_Y + i * ROW_HEIGHT;
          const reached = progress >= i / (items.length - 1);

          return (
            <div
              key={i}
              className={`absolute w-[calc(50%-100px)] ${
                isLeft ? "right-[50%] mr-[80px]" : "left-[50%] ml-[80px]"
              }`}
              style={{ top: yPos, transform: "translateY(-50%)" }}
            >
              {/* Connector dash */}
              <div
                className={`absolute top-1/2 w-[40px] h-[1px] -translate-y-1/2 transition-colors duration-300 ${
                  isLeft ? "right-[-40px]" : "left-[-40px]"
                } ${reached ? "bg-[#FF6600]/40" : "bg-white/8"}`}
              />

              {/* Card — always left-aligned text */}
              <div
                className={`bg-[#0a0b14] border rounded-2xl p-6 transition-all duration-300 w-full max-w-sm
                            text-left
                            ${reached
                              ? "border-white/15 hover:border-white/25"
                              : "border-white/6"
                            }`}
              >
                <p
                  className={`text-xs tracking-[0.2em] mb-2 transition-colors duration-300 ${
                    reached ? "text-[#4a9eff]" : "text-gray-700"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.date}
                </p>
                <p
                  className={`text-base font-semibold flex items-center transition-colors duration-300 ${
                    reached ? "text-white" : "text-gray-600"
                  }`}
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {item.text}
                  {item.icon && item.icon}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── MOBILE ────────────────────────────────────────────────────── */}
      <div className="block md:hidden w-full max-w-sm mx-auto relative pl-10">

        {/* Vertical track */}
        <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-white/8 rounded-full" />

        {/* Scroll-driven fill line */}
        <div
          className="absolute left-[15px] top-2 w-[1px] bg-gradient-to-b from-white/60 to-[#FF6600]/60 rounded-full transition-all duration-100"
          style={{ height: `calc(${progress * 100}% - 8px)` }}
        />

        {/* Scroll-driven orb */}
        <div
          className="absolute left-[10px] w-[11px] h-[11px] bg-white rounded-full transition-all duration-100"
          style={{
            top:       `calc(${progress * 100}% - 5px)`,
            boxShadow: "0 0 8px rgba(255,102,0,0.6)",
          }}
        />

        <div className="flex flex-col gap-8">
          {items.map((item, i) => {
            const reached = progress >= i / (items.length - 1);
            return (
              <div key={i} className="relative">
                {/* Static node dot */}
                <div
                  className={`absolute -left-[35px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    reached
                      ? "bg-[#FF6600] border-[#FF6600]"
                      : "bg-[#03040a] border-white/15"
                  }`}
                />

                {/* Card */}
                <div
                  className={`border rounded-xl p-4 transition-all duration-300
                              ${reached
                                ? "bg-[#0a0b14] border-white/12"
                                : "bg-transparent border-white/5"
                              }`}
                >
                  <p
                    className={`text-[10px] tracking-[0.2em] mb-1 transition-colors duration-300 ${
                      reached ? "text-[#4a9eff]" : "text-gray-700"
                    }`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.date}
                  </p>
                  <p
                    className={`text-sm font-semibold flex items-center transition-colors duration-300 ${
                      reached ? "text-white" : "text-gray-600"
                    }`}
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {item.text}
                    {item.icon && item.icon}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
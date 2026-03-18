"use client";

import Image from "next/image";
import { useState } from "react";

export default function MemoriesClient({ images }: { images: any[] }) {
  const [isPaused,    setIsPaused]    = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full py-16 md:py-24 flex flex-col items-center overflow-hidden"
      style={{ fontFamily: "var(--font-exo2)" }}
    >

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <div className="text-center px-6 mb-10 md:mb-16">
        <p
          className="text-[#4a9eff] text-[10px] tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          // Gallery
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          Glimpse Into The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8533] to-[#CC5200]">
            Memories
          </span>
        </h2>
        <p className="text-gray-600 text-xs md:text-sm mt-3 tracking-widest uppercase"
           style={{ fontFamily: "var(--font-mono)" }}>
          The story of HackIT in moments
        </p>
      </div>

      {/* ── MARQUEE GALLERY ───────────────────────────────────────── */}
      <div className="w-full overflow-hidden relative">

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
             style={{ background: "linear-gradient(to right, #03040a, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
             style={{ background: "linear-gradient(to left, #03040a, transparent)" }} />

        <div
          className="flex items-center animate-marquee"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            willChange: "transform",
          }}
        >
          {images.map((img: any, index: number) => {
            const tilt = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"][index % 4];
            const isActive = activeIndex === index;

            return (
              <div
                key={img.asset_id}
                onMouseEnter={() => { setIsPaused(true);  setActiveIndex(index); }}
                onMouseLeave={() => { setIsPaused(false); setActiveIndex(null);  }}
                className={`
                  relative flex-shrink-0
                  w-[200px] md:w-[300px] lg:w-[340px]
                  aspect-[4/3]
                  ${tilt}
                  -ml-6 md:-ml-10 first:ml-0
                  transition-all duration-500 cursor-pointer
                  ${isActive ? "scale-110 z-20" : "hover:scale-105"}
                `}
              >
                <div
                  className={`relative w-full h-full rounded-xl overflow-hidden
                              border transition-all duration-500
                              shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                              md:shadow-[0_15px_40px_rgba(0,0,0,0.7)]
                              ${isActive ? "border-white/20" : "border-white/8"}`}
                >
                  <Image
                    src={img.secure_url}
                    alt="HackIT memory"
                    fill
                    sizes="(max-width: 768px) 200px, 340px"
                    className={`object-cover transition-all duration-500
                                ${isActive ? "grayscale-0 scale-105" : "grayscale"}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DIVIDER ───────────────────────────────────────────────── */}
      <div className="w-full flex justify-center mt-14 md:mt-20 px-6">
        <div className="relative w-full max-w-sm md:w-[55%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6600]/40 to-transparent blur-[2px]" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-1.5 h-1.5 bg-[#FF6600] rounded-full" />
        </div>
      </div>

    </section>
  );
}
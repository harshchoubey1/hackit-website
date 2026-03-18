"use client";

import Image from "next/image";

export default function Venue() {
  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden"
             style={{ minHeight: "clamp(260px, 50vw, 420px)" }}>

      {/* Background image */}
      <Image
        src="/images/venue-bg-332441.png"
        alt="Venue"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay — slightly stronger on mobile */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/70" />

      {/* Bottom fade — blends into page */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#03040a] to-transparent" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#03040a] to-transparent" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center px-6 py-12 md:py-16"
        style={{ fontFamily: "var(--font-exo2)" }}
      >
        {/* Tag */}
        <p
          className="text-[#4a9eff] text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          // Hackathon Venue
        </p>

        {/* Main heading */}
        <h2
          className="text-white text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide uppercase"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          Amity University Patna
        </h2>

        {/* Address */}
        <p
          className="text-gray-500 text-[10px] md:text-sm mt-3 tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Rupaspur, Gola Road, Patna
        </p>
      </div>

    </section>
  );
}
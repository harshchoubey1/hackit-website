"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center
                 text-center px-4 py-24 md:py-32 
                 overflow-hidden snap-start shrink-0"
      style={{ fontFamily: "var(--font-exo2)" }}
    >

      {/* ================================================================
          BACKGROUND EFFECTS
          Rule: Orange sirf ek subtle glow — baki sab neutral
      ================================================================ */}

      {/* Fading grid — unchanged */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 100%)",
        }}
      />

      {/* Central glow — opacity bahut kam ki, barely visible */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#FF6600]/6 blur-[140px] rounded-full pointer-events-none" />

      {/* HUD blue — bottom-right ambient, same */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[#4a9eff]/4 blur-[120px] rounded-full pointer-events-none" />

      {/* Bottom horizon — very subtle, almost invisible */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* ================================================================
          MAIN CONTENT
      ================================================================ */}
      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO — drop shadow removed, logo speaks for itself */}
        <div className="mb-4">
          <Image
            src="/HACK.png"
            alt="HackIT Logo"
            width={600}
            height={240}
            priority
            className="object-contain"
          />
        </div>

        {/* ORGANIZER — gray, not orange */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <p
            className="text-[10px] text-gray-600 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Organised By
          </p>
          <div className="opacity-60 hover:opacity-90 transition-opacity">
            <Image
              src="/images/powered by.png"
              alt="Aikyam"
              width={110}
              height={35}
            />
          </div>
        </div>

        {/* VENUE DETAILS — clean white/gray, orange hataya */}
        <div className="mt-12 flex flex-col items-center bg-white/[0.03] border border-white/6 backdrop-blur-sm py-5 px-10 rounded-2xl">

          {/* Label — HUD blue instead of orange */}
          <p
            className="text-[#4a9eff] text-[10px] md:text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Amity School of Engineering &amp; Technology
          </p>

          {/* Main venue name — white, bold */}
          <h2
            className="text-white text-2xl md:text-4xl font-bold mt-2 tracking-wide uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Amity University Patna
          </h2>

          {/* Date — gray */}
          <p
            className="text-gray-500 mt-2 text-xs md:text-sm tracking-[0.25em]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            27–28 MAR, 2026
          </p>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {/* Disabled — same */}
          <button
            className="px-6 py-3 rounded-full bg-[#111118] border border-white/8
                       text-gray-600 text-xs md:text-sm font-semibold
                       opacity-60 cursor-not-allowed"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Registrations Closed
          </button>

          {/* Secondary — clean white outline */}
          <Link href="/template">
            <button
              className="px-6 py-3 rounded-full border border-white/15 bg-transparent
                         text-gray-300 text-xs md:text-sm font-semibold
                         hover:border-white/40 hover:text-white
                         transition-all duration-300"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              Download Template
            </button>
          </Link>

          {/* Primary CTA — only orange element on the page */}
          <Link href="/problem-statement">
            <button
              className="px-6 py-3 rounded-full bg-[#FF6600] text-white
                         text-xs md:text-sm font-bold
                         hover:bg-[#FF8533]
                         hover:-translate-y-0.5 transition-all duration-300"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              Problem Statements
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}
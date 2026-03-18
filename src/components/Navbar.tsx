"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home",     path: "/"                 },
  { name: "About",    path: "/about"             },
  { name: "Problems", path: "/problem-statement" },
  { name: "Rules",    path: "/rules"             },
  { name: "Teams",    path: "/teams"             },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ── TOP BAR ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#03040a]/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="relative z-50 hover:opacity-75 transition-opacity">
            <Image
              src="/images/logo-footer-1913c3.png"
              alt="HackIT"
              width={130}
              height={36}
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${open ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block w-6 h-[1.5px] bg-white rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>

        </div>
      </header>

      {/* ── FULLSCREEN MENU ─────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center
                    transition-all duration-400
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(3,4,10,0.97)", backdropFilter: "blur(24px)" }}
      >
        {/* Subtle orange glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6600]/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Links */}
        <nav className="flex flex-col items-center gap-2">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-5xl md:text-6xl font-bold uppercase tracking-tight
                            transition-all duration-200
                            ${isActive ? "text-white" : "text-white/25 hover:text-white/80"}`}
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  opacity:    open ? 1 : 0,
                  transform:  open ? "translateY(0)" : "translateY(16px)",
                  transition: `color 0.2s, opacity 0.4s ${i * 60}ms, transform 0.4s ${i * 60}ms`,
                }}
              >
                {link.name}
                {/* Active underline */}
                {isActive && (
                  <span className="block h-[2px] w-full bg-[#FF6600] mt-0.5" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Register button */}
        <div
          className="mt-12"
          style={{
            opacity:   open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(12px)",
            transition: `opacity 0.4s ${navLinks.length * 60 + 80}ms, transform 0.4s ${navLinks.length * 60 + 80}ms`,
          }}
        >
          <Link
            href="/register"
            className="px-8 py-3 rounded-full bg-[#FF6600] text-white text-sm font-bold
                       hover:bg-[#FF8533] hover:-translate-y-0.5 transition-all duration-300"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Register Now
          </Link>
        </div>

        {/* Bottom info */}
        <p
          className="absolute bottom-8 text-gray-600 text-xs tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-exo2)",
            opacity:    open ? 1 : 0,
            transition: `opacity 0.4s ${navLinks.length * 60 + 160}ms`,
          }}
        >
          HackIT 2026 &nbsp;·&nbsp; Amity University Patna &nbsp;·&nbsp; 27–28 Mar
        </p>

      </div>
    </>
  );
}
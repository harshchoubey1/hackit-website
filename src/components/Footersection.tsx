import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { label: "Home",             href: "/"                 },
  { label: "Problem Statements", href: "/problem-statement" },
  { label: "Rules",            href: "/rules"            },
  { label: "Teams",            href: "/teams"            },
  { label: "Register",         href: "/register"         },
];

const contacts = [
  { name: "Aman Kishore",      phone: "+91 77649 15775" },
  { name: "Shubhanjali Sinha", phone: "+91 92637 99037" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t border-white/5"
      style={{ fontFamily: "var(--font-exo2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ── BRAND ──────────────────────────────────────────────────── */}
        <div className="space-y-5">
          <Image
            src="/images/logo.png"
            alt="HackIT"
            width={130}
            height={40}
            className="object-contain"
          />
          <p className="text-gray-500 text-sm leading-relaxed">
            HackIT 2026 — a 48-hour hackathon organised by AIKYAM Club at
            Amity University Patna. Build, design, and innovate.
          </p>
          {/* Social */}
          <div className="flex gap-3 pt-1">
            {[
              { icon: <FaInstagram size={14} />, href: "https://www.instagram.com/aikyam_aset/?igsh=MXd6OWJ2YXY5emtzZQ%3D%3D#" },
              { icon: <FaLinkedin  size={14} />, href: "https://www.linkedin.com/company/aikyam-aset/"  },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center
                           border border-white/8 rounded-lg text-gray-500
                           hover:border-white/20 hover:text-white
                           transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── QUICK LINKS ────────────────────────────────────────────── */}
        <div>
          <p
            className="text-[#4a9eff] text-[10px] tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // Quick Links
          </p>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── CONTACT ────────────────────────────────────────────────── */}
        <div>
          <p
            className="text-[#4a9eff] text-[10px] tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // Contact
          </p>
          <div className="space-y-4">
            {contacts.map((c) => (
              <div key={c.name}>
                <p className="text-white text-sm font-medium">{c.name}</p>
                <p
                  className="text-gray-500 text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {c.phone}
                </p>
              </div>
            ))}
            <div className="pt-1">
              <p className="text-white text-sm font-medium">Email</p>
              <a
                href="mailto:asset.aikyam@gmail.com"
                className="text-gray-500 text-xs hover:text-[#4a9eff] transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                asset.aikyam@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── MAP ────────────────────────────────────────────────────── */}
        <div>
          <p
            className="text-[#4a9eff] text-[10px] tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // Venue
          </p>
          <p className="text-gray-500 text-xs mb-3 leading-relaxed">
            Amity University Patna<br />
            Rupaspur, Patna — 801503<br />
            Bihar, India
          </p>
          <div className="rounded-xl overflow-hidden border border-white/8">
            <iframe
              src="https://www.google.com/maps?q=Amity+University+Patna&output=embed"
              className="w-full h-[140px]"
              loading="lazy"
              title="Venue Map"
            />
          </div>
        </div>

      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────────────────── */}
      <div className="border-t border-white/5 py-5 px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p
          className="text-gray-600 text-[10px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          © 2026 HackIT — Amity University Patna
        </p>
        <p
          className="text-gray-700 text-[10px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Built by AIKYAM Club
        </p>
      </div>
    </footer>
  );
}
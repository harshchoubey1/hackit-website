"use client";

import { FaClipboardList } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaBox } from "react-icons/fa";

export default function RulesPage() {
  const judging = [
    { title: "Innovation & Creativity",    value: 20 },
    { title: "Technical Implementation",   value: 20 },
    { title: "Feasibility & Impact",       value: 20 },
    { title: "Problem-Solving Approach",   value: 20 },
    { title: "Presentation & Teamwork",    value: 20 },
  ];

  const cards = [
    {
      icon: <FaClipboardList />,
      title: "General Rules",
      rules: [
        <>Teams must consist of <strong className="text-white font-semibold">2–4 members</strong>.</>,
        "All participants must register before the deadline.",
        "Participants must carry a valid college ID.",
        "Respect mentors and fellow participants.",
      ],
    },
    {
      icon: <MdComputer />,
      title: "Project Rules",
      rules: [
        <>Projects must be built <strong className="text-white font-semibold">during</strong> the hackathon.</>,
        "No pre-built complete solutions allowed.",
        "Open-source libraries can be used.",
        "Teams must present a working prototype.",
      ],
    },
    {
      icon: <FaBox />,
      title: "Submission",
      rules: [
        "Submit project before the strict deadline.",
        <>Provide public <strong className="text-white font-semibold">GitHub repository</strong>.</>,
        "Include documentation and live demo link.",
        "Judges' decision will be final.",
      ],
    },
  ];

  const phases = [
    {
      title: "Phase 1 — Registration & Orientation",
      desc: "Participants complete registration and attend the opening ceremony. Problem statements are introduced and teams select their challenge. Mentors guide teams in understanding the problem and planning their solution.",
    },
    {
      title: "Phase 2 — Ideation & Prototyping",
      desc: "Teams brainstorm innovative ideas and begin developing their initial prototype.",
    },
    {
      title: "Phase 3 — Development & Testing",
      desc: "Participants continue building their project by adding features and improving performance.",
    },
    {
      title: "Phase 4 — Final Demo & Judging",
      desc: "Each team presents their project to judges with a live demonstration.",
    },
  ];

  return (
    <div
      className="min-h-screen  text-white relative flex flex-col items-center pt-32 pb-0 overflow-x-hidden"
      style={{ fontFamily: "var(--font-exo2)" }}
    >

      {/* Subtle background orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#d4510d]/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="w-full max-w-6xl px-6 relative z-10 flex flex-col items-center">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-16 md:mb-24">
          <p
            className="text-[#4a9eff] tracking-[0.3em] text-xs uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // HackIT 2026
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Rules &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b2b] to-[#a33a08]">
              Regulations
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Please read the guidelines carefully before submitting your team&apos;s application.
          </p>
        </div>

        {/* ── RULE CARDS ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#0a0b14] border border-white/8 rounded-2xl p-8
                         hover:border-[#d4510d]/40 hover:bg-[#0d0e1a]
                         transition-all duration-300 flex flex-col h-full group"
            >
              {/* Card header */}
              <div className="flex flex-col gap-4 mb-6 border-b border-white/5 pb-6">
                <div
                  className="w-12 h-12 rounded-full bg-[#d4510d]/10 flex items-center justify-center
                             text-[#d4510d] text-xl group-hover:scale-110 transition-transform"
                >
                  {card.icon}
                </div>
                <h3
                  className="text-base font-bold text-white tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Rules list */}
              <ul className="text-gray-400 space-y-4 text-sm flex-grow">
                {card.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4510d] mt-0.5 flex-shrink-0">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── EVENT FLOW ─────────────────────────────────────────────────── */}
        <div className="w-full max-w-3xl mb-24">
          <div className="text-center mb-12">
            <p
              className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              // Event Flow
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Mission Timeline
            </h2>
          </div>

          <div className="border-l-2 border-white/8 pl-8 space-y-12 ml-4 md:ml-0 relative">
            {phases.map((phase, i) => (
              <div key={i} className="relative group">
                {/* Dot */}
                <div
                  className="absolute -left-[41px] top-1.5 w-5 h-5 
                             border-2 border-[#d4510d] rounded-full
                             group-hover:bg-[#d4510d] transition-colors duration-300"
                />
                {/* Phase number badge */}
                <span
                  className="text-[10px] tracking-[0.25em] text-[#4a9eff] uppercase mb-1 block"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <h4
                  className="text-lg font-bold text-white mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {phase.title.split("—")[1]?.trim() ?? phase.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── JUDGING CRITERIA ───────────────────────────────────────────── */}
        <div className="w-full max-w-4xl mb-24 bg-[#0a0b14] border border-white/8 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <p
              className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              // Evaluation Matrix
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Judging Criteria
            </h2>
          </div>

          <div className="space-y-8">
            {judging.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-300 text-sm md:text-base">{item.title}</span>
                  <span
                    className="text-[#d4510d] font-bold text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.value}%
                  </span>
                </div>
                {/* Track */}
                <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                  {/* Fill */}
                  <div
                    className="h-full bg-gradient-to-r from-[#ff6b2b] to-[#a33a08] rounded-full
                               transition-all duration-700"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── MARQUEE BANNER ─────────────────────────────────────────────── */}
      <div className="w-full py-4 overflow-hidden bg-[#d4510d]">
        <div
          className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]
                     hover:[animation-play-state:paused]"
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              className="text-white font-bold tracking-[0.15em] text-sm md:text-base mx-8"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              DOWNLOAD HACKIT PPT TEMPLATE &nbsp;•&nbsp; DOWNLOAD HACKIT TEMPLATE &nbsp;•&nbsp; DOWNLOAD HACKIT PPT TEMPLATE &nbsp;•&nbsp; DOWNLOAD HACKIT TEMPLATE &nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
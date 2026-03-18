"use client";

import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaBox } from "react-icons/fa";

export default function RulesPage() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

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
      tag:   "Phase 01",
      title: "Registration & Orientation",
      time:  "Day 0",
      desc:  "Participants complete registration and attend the opening ceremony. Problem statements are introduced and teams select their challenge. Mentors guide teams in understanding the problem and planning their solution.",
      stats: ["Team formation", "Problem selection", "Mentor briefing"],
    },
    {
      tag:   "Phase 02",
      title: "Ideation & Prototyping",
      time:  "Hour 0–12",
      desc:  "Teams brainstorm innovative ideas and begin developing their initial prototype. Rapid iteration encouraged.",
      stats: ["Wireframing", "Tech stack selection", "MVP planning"],
    },
    {
      tag:   "Phase 03",
      title: "Development & Testing",
      time:  "Hour 12–36",
      desc:  "Participants continue building their project by adding features and improving performance. Mentor check-ins available.",
      stats: ["Feature building", "QA & testing", "Documentation"],
    },
    {
      tag:   "Phase 04",
      title: "Final Demo & Judging",
      time:  "Hour 36–48",
      desc:  "Each team presents their project to judges with a live demonstration. Q&A session follows each presentation.",
      stats: ["Live demo", "Judges Q&A", "Results"],
    },
  ];

  // Colors per phase
  const phaseColors = [
    { dot: "#4a9eff", tag: "text-[#4a9eff]", border: "border-[#4a9eff]/30", bg: "bg-[#4a9eff]/5"  },
    { dot: "#FF6600", tag: "text-[#FF6600]", border: "border-[#FF6600]/30", bg: "bg-[#FF6600]/5"  },
    { dot: "#4a9eff", tag: "text-[#4a9eff]", border: "border-[#4a9eff]/30", bg: "bg-[#4a9eff]/5"  },
    { dot: "#FF6600", tag: "text-[#FF6600]", border: "border-[#FF6600]/30", bg: "bg-[#FF6600]/5"  },
  ];

  return (
    <div
      className="min-h-screen text-white relative flex flex-col items-center pt-16 pb-0 overflow-x-hidden"
      style={{ fontFamily: "var(--font-exo2)" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF6600]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl px-4 md:px-6 relative z-10 flex flex-col items-center">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[#4a9eff] tracking-[0.3em] text-xs uppercase mb-3"
             style={{ fontFamily: "var(--font-mono)" }}>
            // HackIT 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-white"
              style={{ fontFamily: "var(--font-rajdhani)" }}>
            Rules &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8533] to-[#CC5200]">
              Regulations
            </span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Please read the guidelines carefully before submitting your team&apos;s application.
          </p>
        </div>

        {/* RULE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-24">
          {cards.map((card) => (
            <div key={card.title}
                 className="bg-[#0a0b14] border border-white/8 rounded-2xl p-6 md:p-8
                            hover:border-white/20 hover:bg-[#0d0e1a]
                            transition-all duration-300 flex flex-col h-full group">
              <div className="flex flex-col gap-4 mb-6 border-b border-white/5 pb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8
                                flex items-center justify-center text-gray-400 text-base">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-rajdhani)" }}>
                  {card.title}
                </h3>
              </div>
              <ul className="text-gray-400 space-y-3 text-sm flex-grow">
                {card.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5 flex-shrink-0">—</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── EVENT FLOW — redesigned ──────────────────────────────────── */}
        <div className="w-full max-w-4xl mb-24">

          {/* Section header */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
               style={{ fontFamily: "var(--font-mono)" }}>
              // Event Flow
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase"
                style={{ fontFamily: "var(--font-rajdhani)" }}>
              Mission Timeline
            </h2>
          </div>

          {/* ── Desktop — horizontal stepper ───────────────────────── */}
          <div className="hidden md:block">

            {/* Progress bar with phase dots */}
            <div className="relative flex items-center mb-0">

              {/* Track line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/8" />

              {/* Filled portion */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-[#4a9eff] to-[#FF6600] transition-all duration-500"
                style={{
                  width: activePhase !== null
                    ? `${(activePhase / (phases.length - 1)) * 100}%`
                    : "0%",
                }}
              />

              {/* Phase dots */}
              {phases.map((phase, i) => {
                const c       = phaseColors[i];
                const isActive = activePhase === i;
                const isPast   = activePhase !== null && i < activePhase;
                return (
                  <div
                    key={i}
                    className="relative flex-1 flex flex-col items-center cursor-pointer group"
                    onClick={() => setActivePhase(activePhase === i ? null : i)}
                  >
                    {/* Dot */}
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 z-10
                                  ${isActive || isPast
                                    ? `border-transparent`
                                    : "bg-[#03040a] border-white/20 group-hover:border-white/40"
                                  }`}
                      style={{
                        background: isActive || isPast ? c.dot : undefined,
                        boxShadow:  isActive ? `0 0 12px ${c.dot}60` : "none",
                      }}
                    />

                    {/* Phase tag below dot */}
                    <span
                      className={`mt-3 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300
                                  ${isActive ? c.tag : "text-gray-600 group-hover:text-gray-400"}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {phase.tag}
                    </span>

                    {/* Time badge */}
                    <span
                      className="text-[9px] text-gray-700 mt-0.5 tracking-wider"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {phase.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Expanded detail card */}
            <div
              className={`mt-8 overflow-hidden transition-all duration-500 ${
                activePhase !== null ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {activePhase !== null && (
                <div className={`bg-[#0a0b14] border ${phaseColors[activePhase].border} rounded-2xl p-6 md:p-8`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">

                    {/* Left */}
                    <div className="flex-1">
                      <span
                        className={`text-[10px] tracking-[0.3em] uppercase mb-2 block ${phaseColors[activePhase].tag}`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {phases[activePhase].tag} &nbsp;·&nbsp; {phases[activePhase].time}
                      </span>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white uppercase mb-3"
                        style={{ fontFamily: "var(--font-rajdhani)" }}
                      >
                        {phases[activePhase].title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {phases[activePhase].desc}
                      </p>
                    </div>

                    {/* Right — stats */}
                    <div className="flex flex-col gap-2 md:min-w-[180px]">
                      {phases[activePhase].stats.map((s, i) => (
                        <div
                          key={i}
                          className={`text-xs px-3 py-2 rounded-lg border ${phaseColors[activePhase].bg} ${phaseColors[activePhase].border}`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          <span className={`${phaseColors[activePhase].tag} mr-2`}>▸</span>
                          <span className="text-gray-300 tracking-wider">{s}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Hint */}
            {activePhase === null && (
              <p
                className="text-center text-gray-700 text-[10px] tracking-[0.2em] uppercase mt-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Click a phase to expand
              </p>
            )}
          </div>

          {/* ── Mobile — vertical accordion ────────────────────────── */}
          <div className="block md:hidden space-y-3">
            {phases.map((phase, i) => {
              const c        = phaseColors[i];
              const isOpen   = activePhase === i;
              return (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-300
                              ${isOpen ? c.border : "border-white/8"}`}
                >
                  {/* Header row */}
                  <button
                    onClick={() => setActivePhase(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      {/* Colored dot */}
                      <div
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: c.dot }}
                      />
                      <div>
                        <span
                          className={`text-[9px] tracking-[0.25em] uppercase block ${c.tag}`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {phase.tag} &nbsp;·&nbsp; {phase.time}
                        </span>
                        <span
                          className="text-white text-sm font-bold uppercase mt-0.5 block"
                          style={{ fontFamily: "var(--font-rajdhani)" }}
                        >
                          {phase.title}
                        </span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <span
                      className={`text-gray-500 text-xs transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  {/* Expandable body */}
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className={`px-4 pb-4 border-t ${c.border}`}>
                        <p className="text-gray-400 text-sm leading-relaxed mt-3 mb-4">
                          {phase.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {phase.stats.map((s, j) => (
                            <span
                              key={j}
                              className={`text-[10px] px-2.5 py-1 rounded-lg border ${c.bg} ${c.border} ${c.tag} tracking-wider`}
                              style={{ fontFamily: "var(--font-mono)" }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* JUDGING CRITERIA */}
        <div className="w-full max-w-4xl mb-24 bg-[#0a0b14] border border-white/8 rounded-2xl p-6 md:p-12">
          <div className="text-center mb-10">
            <p className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
               style={{ fontFamily: "var(--font-mono)" }}>
              // Evaluation Matrix
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase"
                style={{ fontFamily: "var(--font-rajdhani)" }}>
              Judging Criteria
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {judging.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-300 text-sm md:text-base">{item.title}</span>
                  <span className="text-gray-500 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                    {item.value}%
                  </span>
                </div>
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-white/40 to-white/10 rounded-full"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
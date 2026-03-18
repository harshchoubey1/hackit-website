"use client";

export default function Prizes() {

  const prizes = [
    {
      rank:        "01",
      label:       "Winner",
      amount:      "₹5,000",
      accentColor: "#FF6600",              // site ka primary orange
      amountColor: "text-[#FF6600]",
      borderColor: "hover:border-[#FF6600]/30",
      topLine:     "via-[#FF6600]",
    },
    {
      rank:        "02",
      label:       "1st Runner Up",
      amount:      "₹3,000",
      accentColor: "#4a9eff",              // site ka HUD blue
      amountColor: "text-[#4a9eff]",
      borderColor: "hover:border-[#4a9eff]/30",
      topLine:     "via-[#4a9eff]",
    },
    {
      rank:        "03",
      label:       "2nd Runner Up",
      amount:      "₹2,000",
      accentColor: "#a0a0b2",              // site ka gray — subtle silver
      amountColor: "text-[#a0a0b2]",
      borderColor: "hover:border-[#a0a0b2]/30",
      topLine:     "via-[#a0a0b2]",
    },
  ];

  return (
    <section
      className="w-full py-24 px-4 flex flex-col items-center"
      style={{ fontFamily: "var(--font-exo2)" }}
    >

      {/* Header */}
      <div className="text-center mb-16">
        <p
          className="text-[#4a9eff] text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          // Rewards
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          Prize Pool
        </h2>
      </div>

      {/* Prize cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
        {prizes.map((prize, i) => (
          <div
            key={i}
            className={`group relative bg-[#0a0b14] border border-white/8 rounded-2xl p-8
                        flex flex-col items-center text-center
                        ${prize.borderColor}
                        hover:bg-[#0d0e1a] transition-all duration-300`}
          >
            {/* Top accent line — unique color per card */}
            <div
              className={`absolute top-0 left-8 right-8 h-[2px]
                          bg-gradient-to-r from-transparent ${prize.topLine} to-transparent
                          rounded-full`}
            />

            {/* Rank */}
            <span
              className="text-gray-700 text-xs tracking-[0.3em] mb-6 block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {prize.rank}
            </span>

            {/* Amount — unique color per card */}
            <h3
              className={`font-bold tracking-tight mb-4 ${prize.amountColor} ${
                i === 0 ? "text-4xl" : "text-3xl"
              }`}
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {prize.amount}
            </h3>

            {/* Label */}
            <p
              className="text-gray-600 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {prize.label}
            </p>

          </div>
        ))}
      </div>

      {/* Goodies strip */}
      <div
        className="mt-6 w-full max-w-4xl bg-white/[0.02] border border-white/6
                   rounded-2xl px-8 py-4 flex items-center justify-center"
      >
        <p
          className="text-gray-500 text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          + Goodies &amp; Certificates for All Participants
        </p>
      </div>

    </section>
  );
}
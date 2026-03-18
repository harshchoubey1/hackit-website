"use client";

const text = "HACKIT '26 • BUILD • INNOVATE • CODE • AI • WEB • CYBER • ";

// Repeat text enough times to fill any screen width
function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      style={{ animationDuration: reverse ? "22s" : "18s" }}
    >
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="mx-6 text-white font-bold uppercase text-sm md:text-base whitespace-nowrap"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="w-full  py-8 overflow-hidden">
      <div className="flex flex-col gap-3">

        {/* TOP ROW — tilted left, Mars orange background */}
        <div className="relative rotate-[-2deg] scale-[1.02]">
          {/* Left/right fade mask */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #03040a 0%, transparent 8%, transparent 92%, #03040a 100%)",
            }}
          />
          <div className="bg-[#d4510d] py-4 overflow-hidden">
            <MarqueeTrack reverse={false} />
          </div>
        </div>

        {/* BOTTOM ROW — tilted right, HUD blue background */}
        <div className="relative rotate-[2deg] scale-[1.02]">
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #03040a 0%, transparent 8%, transparent 92%, #03040a 100%)",
            }}
          />
          <div className="bg-[#4a9eff] py-4 overflow-hidden">
            <MarqueeTrack reverse={true} />
          </div>
        </div>

      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { FaRocket } from "react-icons/fa";

export default function Roadmap() {
  const pathRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(3000);

  const items = [
    { date: "05 FEB 2026", text: "Registration starts" },
    { date: "20 FEB 2026", text: "Registration closes" },
    { date: "22 FEB 2026", text: "Shortlisting phase" },
    { date: "24 FEB 2026", text: "Teams notified" },
    {
      date: "28 FEB 2026",
      text: "Hackathon begins",
      icon: <FaRocket className="text-[#d4510d] text-sm md:text-base ml-2 animate-bounce" />
    },
  ];

  // ==========================================
  // MATHEMATICAL GRID LAYOUT (Matches your sketch)
  // ==========================================
  const SVG_WIDTH = 160; // Curve kitna chauda hoga
  const ROW_HEIGHT = 180; // Har box ke beech ka gap
  const START_Y = 100; // Upar se pehla gap
  const TOTAL_HEIGHT = START_Y + (items.length - 1) * ROW_HEIGHT + 100;

  // DYNAMIC SVG PATH GENERATOR (Sine Wave S-Curve)
  let pathD = `M ${0} ${START_Y}`;
  for (let i = 1; i < items.length; i++) {
    const prevY = START_Y + (i - 1) * ROW_HEIGHT;
    const currX = i % 2 === 0 ? 0 : SVG_WIDTH;
    const currY = START_Y + i * ROW_HEIGHT;
    const cpX = SVG_WIDTH / 2; // Control point center mein rakhne se smooth S-curve banta hai
    
    pathD += ` C ${cpX} ${prevY}, ${cpX} ${currY}, ${currX} ${currY}`;
  }

  // SCROLL PROGRESS CALCULATION
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    const handleScroll = () => {
      const section = document.getElementById("roadmap");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = rect.height;
      // Screen ke center aane par progress count ho
      const visible = window.innerHeight / 2 - rect.top; 

      let percent = visible / (total * 0.8);
      percent = Math.max(0, Math.min(1, percent));
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="roadmap" className="w-full py-24  flex flex-col items-center px-4 font-outfit overflow-hidden">
      
      {/* TITLE */}
      <div className="text-center mb-16 md:mb-24 relative z-10">
        <h2 className="text-[#d4510d] text-sm font-semibold tracking-widest uppercase mb-3">
          Timeline
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          ROADMAP
        </h1>
      </div>

      {/* ======================================= */}
      {/* DESKTOP VIEW (Perfectly matching sketch) */}
      {/* ======================================= */}
      <div 
        className="hidden md:block relative w-full max-w-5xl mx-auto"
        style={{ height: TOTAL_HEIGHT }}
      >
        {/* CENTRAL SVG WAVE */}
        <svg
          width={SVG_WIDTH}
          height={TOTAL_HEIGHT}
          className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none"
        >
          {/* Faint Background Line */}
          <path
            d={pathD}
            stroke="rgba(255,179,0,0.15)"
            strokeWidth="4"
            fill="none"
          />

          {/* Glowing Progress Line */}
          <path
            ref={pathRef}
            d={pathD}
            stroke="url(#golden-grad)"
            strokeWidth="5"
            fill="none"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - progress * pathLength}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />

          <defs>
            <linearGradient id="golden-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset="50%" stopColor="#d4510d" />
              <stop offset="100%" stopColor="#a33a08" />
            </linearGradient>
          </defs>

          {/* Draw dots exactly on the curve nodes */}
          {items.map((_, i) => (
            <circle 
              key={i}
              cx={i % 2 === 0 ? 0 : SVG_WIDTH} 
              cy={START_Y + i * ROW_HEIGHT} 
              r="6" 
              fill="#d4510d"
              className="shadow-[0_0_10px_#d4510d]"
            />
          ))}

          {/* Moving Glowing Orb */}
          <circle r="6" fill="#FFF" filter="drop-shadow(0 0 8px #d4510d)">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path={pathD}
            />
          </circle>
        </svg>

        {/* HTML BOXES (Locked to SVG coordinates) */}
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          const yPos = START_Y + i * ROW_HEIGHT;

          return (
            <div
              key={i}
              className={`absolute w-[calc(50%-120px)] ${
                isLeft ? "right-[50%] mr-[80px]" : "left-[50%] ml-[80px]"
              }`}
              style={{ top: yPos, transform: "translateY(-50%)" }}
            >
              <div className={`flex flex-col ${isLeft ? "items-end text-right" : "items-start text-left"}`}>
                
                {/* Connecting horizontal dash to touch the box */}
                <div 
                  className={`absolute top-1/2 w-[40px] h-[2px] bg-[#d4510d]/30 -translate-y-1/2 ${
                    isLeft ? "right-[-40px]" : "left-[-40px]"
                  }`}
                />

                <div className=" border border-white/10 p-6 rounded-2xl shadow-xl hover:border-[#d4510d]/50 hover:bg-[#111118] transition-all duration-300 w-full max-w-sm group">
                  <p className="text-[#d4510d] text-sm tracking-widest mb-2 font-mono font-semibold">
                    {item.date}
                  </p>
                  <p className="text-white text-lg font-medium flex items-center group-hover:text-[#d4510d] transition-colors">
                    {item.text}
                    {item.icon && item.icon}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* ======================================= */}
      {/* MOBILE VIEW (Straight vertical line) */}
      {/* ======================================= */}
      <div className="block md:hidden w-full max-w-md mx-auto relative pl-8">
        
        {/* Vertical Line */}
        <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#d4510d] to-[#a33a08] opacity-50 rounded-full"></div>
        
        {/* Moving Dot (Mobile) */}
        <div 
          className="absolute left-[11px] w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_10px_#d4510d] transition-all duration-300"
          style={{ top: `calc(${progress * 100}% - 5px)` }}
        ></div>

        <div className="flex flex-col gap-8">
          {items.map((item, i) => (
            <div key={i} className="relative">
              {/* Static Dot */}
              <div className="absolute -left-[32px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full  border-2 border-[#d4510d]"></div>
              
              <div className=" border border-white/10 p-5 rounded-xl shadow-lg active:border-[#d4510d]/50">
                <p className="text-[#d4510d] text-xs tracking-widest mb-1 font-mono font-semibold">
                  {item.date}
                </p>
                <p className="text-white text-base font-medium flex items-center">
                  {item.text}
                  {item.icon && item.icon}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
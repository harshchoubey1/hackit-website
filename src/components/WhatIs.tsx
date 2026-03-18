"use client";

import { useEffect, useState } from "react";

export default function Hero() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const targetDate = new Date("Feb 28, 2027 18:00:00").getTime();

    const timer = setInterval(() => {

      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center  text-white font-outfit snap-start shrink-0">

      {/* TITLE */}
      <h1 className="text-3xl md:text-6xl font-black tracking-[0.2em] mb-4">

        <span className="text-white">WELCOME TO</span>{" "}
        <span className="text-cyber-cyan">HACKIT 26</span>

      </h1>

      {/* SUBTITLE */}
      <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed mb-6 font-inter">
        Join us for the Inaugural Hackathon Fest at Amity University Patna.
      </p>

      {/* DIVIDER */}
      <div className="w-20 h-[2px] bg-cyber-cyan/70 mb-10"></div>

      {/* COUNTDOWN TITLE */}
      <h2 className="text-lg md:text-2xl font-semibold mb-6 tracking-wide text-white">
        Time Left to Start <span className="text-cyber-cyan">Hackathon</span>
      </h2>

      {/* COUNTDOWN BOXES */}
      <div className="flex gap-4 flex-wrap justify-center">

        {Object.entries(timeLeft).map(([label, value], index) => {

          // color rotation system (🔥 important)
          const colors = [
            "border-yellow-400 text-yellow-400",
            "border-cyan-400 text-cyan-400",
            "border-blue-400 text-blue-400",
            "border-yellow-400 text-yellow-400"
          ];

          return (
            <div
              key={label}
              className="w-20 h-20 md:w-24 md:h-24 border border-cyber-cyan/40 
  flex flex-col items-center justify-center 
  hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,245,212,0.3)]
  transition"
            >

              {/* number */}
              <span className="text-white text-xl md:text-2xl font-bold font-mono">
                {String(value).padStart(2, "0")}
              </span>

              {/* label */}
              <span className="text-cyber-cyan text-[10px] md:text-xs mt-1 tracking-widest uppercase">
                {label}
              </span>

            </div>
          );
        })}

      </div>

    </section>
  );
}
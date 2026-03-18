"use client";

import Image from "next/image";

export default function Venue() {
  return (
    <section className="relative w-full h-[350px] md:h-[420px] flex items-center justify-center text-center overflow-hidden">

      {/* background image */}
      <Image
        src="/images/venue-bg-332441.png"
        alt="Venue"
        fill
        className="object-cover object-center"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* small tag - Changed to Golden */}
        <p className="text-[#d4510d] text-xs md:text-sm tracking-[0.3em] mb-3 uppercase">
          HACKATHON VENUE
        </p>

        {/* main heading */}
        <h2 className="text-white text-2xl md:text-5xl font-bold tracking-wide">
          AMITY UNIVERSITY PATNA
        </h2>

        {/* address */}
        <p className="text-gray-400 text-xs md:text-sm mt-4 tracking-wide">
          RUPASPUR, GOLA ROAD, PATNA
        </p>

      </div>

    </section>
  );
}
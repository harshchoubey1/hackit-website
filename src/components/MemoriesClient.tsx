"use client";

import Image from "next/image";
import { useState } from "react";

export default function MemoriesClient({ images }: any) {

    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 flex flex-col items-center overflow-hidden font-outfit">

            {/* TITLE */}
            <h2 className="text-center text-2xl md:text-4xl font-bold tracking-[0.25em] text-white mb-16 flex flex-wrap justify-center items-center gap-3">

                <span className="text-gray-300">GLIMPSE INTO THE</span>

                <span className="px-5 py-2 rounded-full border border-[#d4510d] text-[#d4510d] 
        shadow-[0_0_15px_rgba(255,179,0,0.3)] tracking-[0.2em] bg-[#d4510d]/5">
                    MEMORIES
                </span>

                <span className="text-gray-300">WE HAVE CREATED.</span>

            </h2>

            {/* GALLERY */}
            <div className="w-full overflow-hidden relative">

                <div
                    className="flex items-center animate-marquee"
                    style={{
                        animationPlayState: isPaused ? "paused" : "running",
                        willChange: "transform"
                    }}
                >

                    {images.map((img: any, index: number) => {

                        const tilt = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"][index % 4];

                        return (
                            <div
                                key={img.asset_id}
                                onMouseEnter={() => {
                                    setIsPaused(true);       // hover → ribbon rukega
                                    setActiveIndex(index);   // active image set
                                }}
                                onMouseLeave={() => {
                                    setIsPaused(false);      // leave → ribbon chalega
                                    setActiveIndex(null);    // reset
                                }}
                                className={`relative min-w-[280px] md:min-w-[340px] 
  aspect-[4/3] 
  ${tilt}
  -ml-10 first:ml-0
  transition duration-500 cursor-pointer
  ${activeIndex === index ? "scale-110 z-20" : "hover:scale-105"}
`}
                            >

                                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.7)] border border-white/10">

                                    <Image
                                        src={img.secure_url}
                                        alt="HackIT memory"
                                        fill
                                        sizes="340px"
                                        className={`object-cover  transition duration-500
                    ${activeIndex === index ? "grayscale-0" : "grayscale"}`}
                                    />

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

            {/* SUBTITLE */}
            <p className="text-[#d4510d] mt-14 text-sm tracking-[0.35em] font-bold">
                THE STORY OF HACKIT IN MOMENTS
            </p>

            {/* DIVIDER */}
            <div className="w-full flex justify-center mt-20">

                <div className="relative w-[55%] h-[1px] bg-gradient-to-r 
  from-transparent via-white/20 to-transparent">

                    {/* center golden glow line */}
                    <div className="absolute inset-0 bg-gradient-to-r 
    from-transparent via-[#d4510d] to-transparent 
    blur-[2px] opacity-80"></div>

                    {/* center golden dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-[4px] 
    w-2.5 h-2.5 bg-[#d4510d] rounded-full 
    shadow-[0_0_20px_#d4510d]"></div>

                </div>

            </div>

        </section>
    );
}
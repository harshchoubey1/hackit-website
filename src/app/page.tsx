"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Marquee from "@/components/Marquee";
import Prizes from "@/components/Prizes";
import Venue from "@/components/Venue";
import Roadmap from "@/components/Roadmap";
import Memories from "@/components/Memories";
import FaqPartners from "@/components/FaqPartners";
import FooterSection from "@/components/Footersection";

export default function Home() {
  // Is ref se hum WhatIs section ko target karenge
  const whatIsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isScrolling = false;
    let touchStartY = 0;

    // Desktop Mouse Wheel Logic
    const handleWheel = (e: WheelEvent) => {
      // Agar user top pe hai (scrollY < 50) aur neeche scroll kar raha hai (deltaY > 0)
      if (window.scrollY < 50 && e.deltaY > 0 && !isScrolling) {
        isScrolling = true;
        
        if (whatIsRef.current) {
          whatIsRef.current.scrollIntoView({ behavior: "smooth" });
        }

        // 1 second ka lock lagaya taaki multiple baar trigger na ho
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    // Mobile Swipe (Touch) Logic
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      // Agar user top pe hai aur upar ki taraf swipe kar raha hai (scroll down)
      if (window.scrollY < 50 && touchStartY > touchEndY && !isScrolling) {
        isScrolling = true;
        
        if (whatIsRef.current) {
          whatIsRef.current.scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    // Event Listeners add kar rahe hain (passive: false is recommended for custom scroll)
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen  overflow-x-hidden font-outfit">
      
      {/* GLOBAL BACKGROUND GLOWING BLOBS (Updated to Golden Theme) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Golden Glow (Top Left) */}
        <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#d4510d]/10 rounded-full blur-[100px] md:blur-[140px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        {/* Deep Orange/Amber Glow (Bottom Right) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#a33a08]/10 rounded-full blur-[100px] md:blur-[140px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 flex flex-col w-full items-center">
        
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. WhatIs Section Wrapped with the Ref for smooth scrolling target */}
        <div ref={whatIsRef} className="w-full">
          <WhatIs />
        </div>
        
        {/* 3. Remaining sections */}
        <Marquee />
        <Prizes />
        <Venue />
        <Roadmap />
        <Memories />
        <FaqPartners />
        <FooterSection />
        
      </main>

    </div>
  );
}
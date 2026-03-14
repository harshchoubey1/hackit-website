import Hero from "@/components/Hero";
import DecorativeElements from "@/components/DecorativeElements";
import ProblemStatement from "@/components/ProblemStatement";
import WhatIs from "@/components/WhatIs";
import Marquee from "@/components/Marquee";
import Prizes from "@/components/Prizes";
import Venue from "@/components/Venue";
import Roadmap from "@/components/Roadmap";
import Memories from "@/components/Memories";
import FaqPartners from "@/components/FaqPartners";
import Menu from "@/components/Menu";
import FooterSection from "@/components/Footersection";

export default function Home() {
  return (
    <>
      {/* Background for whole website */}
      <div className="site-background">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
      </div>

      <Menu />

      <main className="main-container">
        <Hero />
        <DecorativeElements />
        <WhatIs />
        <Marquee />
        <Prizes />
        <Venue />
        <Roadmap />
        <Memories />
        <FaqPartners />
        <FooterSection />
      </main>
    </>
  );
}
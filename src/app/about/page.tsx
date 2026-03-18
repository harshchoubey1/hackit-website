"use client";

import Navbar from "@/components/Navbar";

export default function AboutSection() {
  return (
    <section className="min-h-screen  text-white relative flex flex-col items-center pt-32 pb-20 overflow-x-hidden font-outfit">
      
      {/* Navbar already fixed top par hai */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <div className="w-full max-w-6xl px-6 relative z-10">
        
        {/* Clean, Premium Title Section */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-[#d4510d] text-sm font-semibold tracking-widest uppercase mb-3">
            The Chronicle
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            About HackIT 2026
          </h1>
        </div>

        {/* Editorial Style Grid Layout (Left: Text, Right: Info Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: About Paragraphs */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Empowering the Next Generation of Builders
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Welcome to <strong className="text-white font-medium">HackIT 2026</strong>, the premier hackathon at <strong className="text-white font-medium">Amity University Patna</strong>. Our mission is to bring together the brightest minds in technology, innovation, and creativity to solve real-world problems and build impactful projects.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              This <strong className="text-white font-medium">12-hour sprint</strong> isn't just a competition — it's an opportunity to collaborate, brainstorm, and push the boundaries of what modern technology can achieve.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you're a developer, designer, or problem solver, HackIT provides the platform to transform your ideas into reality. Let's code the future, together.
            </p>
          </div>

          {/* RIGHT SIDE: Why Join Us Card (Minimalist) */}
          <div className="lg:col-span-2  border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Why Join Us?
            </h3>

            <ul className="flex flex-col gap-5">
              {[
                "Work on real-world challenges",
                "Collaborate with industry mentors",
                "Win exciting prizes & recognition",
                "Learn new skills and network"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-400 group">
                  {/* Clean SVG Checkmark instead of glowing arrows */}
                  <div className="mt-1 flex-shrink-0 text-[#d4510d] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base font-medium group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Optional Small Detail/Metric */}
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between text-sm">
              <span className="text-gray-500">Duration</span>
              <span className="text-[#d4510d] font-mono font-semibold">12 HOURS</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
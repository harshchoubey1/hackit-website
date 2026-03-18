"use client";

// Ab Navbar import karne ki zaroorat nahi hai, layout.tsx sambhal lega!

export default function Teams() {
  
  // Arrays for dynamic rendering (Code clean rakhne ke liye)
  const coreTeam = [
    { name: "Core 1", role: "Technical Lead", img: "/images/vc.jpg" },
    { name: "Core 2", role: "Management", img: "/images/vc.jpg" },
    { name: "Core 3", role: "Design Head", img: "/images/vc.jpg" },
    { name: "Core 4", role: "Operations", img: "/images/vc.jpg" },
  ];

  const organizingTeam = [
    { name: "Student Name", role: "Volunteer", img: "/images/vc.jpg" },
    { name: "Student Name", role: "Volunteer", img: "/images/vc.jpg" },
    { name: "Student Name", role: "Volunteer", img: "/images/vc.jpg" },
  ];

  return (
    <div className="min-h-screen  text-white relative flex flex-col items-center pt-24 pb-24 font-outfit overflow-x-hidden">

      {/* PAGE CONTAINER */}
      <div className="w-full max-w-7xl px-6 relative z-10 flex flex-col items-center">

        {/* PAGE TITLE */}
        <div className="text-center mb-20 md:mb-24">
          <p className="text-[#d4510d] tracking-widest text-sm uppercase mb-3 font-semibold">
            Behind The Code
          </p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 text-white">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b2b] to-[#a33a08]">TEAM</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase">
            The minds making HackIT 2026 possible
          </p>
        </div>

        {/* ----------------- TOP LEADERSHIP SECTION ----------------- */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-28">
          
          {/* VICE CHANCELLOR */}
          <div className="group  border border-white/10 rounded-2xl p-8 hover:border-[#d4510d]/50 hover:bg-[#111118] transition-all duration-300 flex flex-col items-center w-full md:max-w-[360px] shadow-lg">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full p-1.5 border-2 border-transparent group-hover:border-[#d4510d] transition-all duration-500">
              {/* Photo styling: Grayscale to Color with a soft scale on hover */}
              <img 
                src="/images/VivekanandPandey.jpg" 
                alt="Vice Chancellor" 
                className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white text-center group-hover:text-[#d4510d] transition-colors">Prof. Vivekanand Pandey</h2>
            <p className="text-[#d4510d] text-xs font-semibold tracking-widest uppercase mt-3 bg-[#d4510d]/10 px-4 py-1.5 rounded-full">Vice Chancellor</p>
          </div>

          {/* HOD / MENTOR */}
          <div className="group  border border-white/10 rounded-2xl p-8 hover:border-[#d4510d]/50 hover:bg-[#111118] transition-all duration-300 flex flex-col items-center w-full md:max-w-[360px] shadow-lg">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full p-1.5 border-2 border-transparent group-hover:border-[#d4510d] transition-all duration-500">
              <img 
                src="/images/Dr.ShashiShekhar.jpg" 
                alt="HOD" 
                className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white text-center group-hover:text-[#d4510d] transition-colors">Dr. Shashi Shekhar</h2>
            <p className="text-[#d4510d] text-xs font-semibold tracking-widest uppercase mt-3 bg-[#d4510d]/10 px-4 py-1.5 rounded-full">Head of Department</p>
          </div>

        </div>

        {/* ----------------- FACULTY ADVISORS ----------------- */}
        <section className="w-full mb-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white">Faculty Advisors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Faculty 1 */}
            <div className="group  border border-white/10 rounded-xl p-8 hover:border-[#d4510d]/40 hover:bg-[#111118] transition-all duration-300 flex flex-col items-center shadow-md">
              <div className="relative p-1 border-2 border-transparent group-hover:border-[#d4510d]/50 rounded-full mb-5 transition-colors duration-500">
                <img src="/images/Dr.PreetishRanjan.jpg" alt="Faculty" className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold group-hover:text-[#d4510d] transition-colors text-white">Dr. Preetish Ranjan</h3>
              <p className="text-gray-400 text-xs font-medium tracking-widest uppercase mt-2">Advisor</p>
            </div>

            {/* Faculty 2 */}
            <div className="group  border border-white/10 rounded-xl p-8 hover:border-[#d4510d]/40 hover:bg-[#111118] transition-all duration-300 flex flex-col items-center shadow-md">
              <div className="relative p-1 border-2 border-transparent group-hover:border-[#d4510d]/50 rounded-full mb-5 transition-colors duration-500">
                <img src="/images/ShilpiSingh.jpg" alt="Faculty" className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold group-hover:text-[#d4510d] transition-colors text-white">Dr. Shilpi Singh</h3>
              <p className="text-gray-400 text-xs font-medium tracking-widest uppercase mt-2">Advisor</p>
            </div>
          </div>
        </section>

        {/* ----------------- CORE TEAM ----------------- */}
        <section className="w-full mb-28">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white">Core Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <div key={index} className="group relative  border border-white/10 rounded-xl p-6 overflow-hidden hover:border-[#d4510d]/40 hover:bg-[#111118] transition-all duration-300 flex flex-col items-center text-center shadow-md">
                {/* Accent Line on hover - Now Golden */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#ff6b2b] to-[#a33a08] transition-all duration-500 group-hover:w-full"></div>
                
                <img src={member.img} alt={member.name} className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500 mb-5" />
                <h3 className="text-base md:text-lg font-bold group-hover:text-[#d4510d] transition-colors text-white">{member.name}</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-medium tracking-widest uppercase mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------- ORGANIZING TEAM ----------------- */}
        <section className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white">Organizing Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {organizingTeam.map((member, index) => (
              <div key={index} className="group bg-transparent border border-white/5 rounded-xl p-4 hover:bg-[#111118] hover:border-[#d4510d]/30 transition-all duration-300 flex items-center gap-5">
                <img src={member.img} alt={member.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                <div className="text-left">
                  <h3 className="text-sm md:text-base font-bold group-hover:text-[#d4510d] transition-colors text-white">{member.name}</h3>
                  <p className="text-gray-500 text-[10px] md:text-xs font-medium tracking-widest uppercase mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
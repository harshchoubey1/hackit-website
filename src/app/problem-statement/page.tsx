"use client";

import { useState } from "react";

// Problem Domains ki list
const domains = ["All", "AI/ML", "Cybersecurity", "App Dev", "Web Dev"];

// Dummy Problem Statements 
// (Pro tip: Isko tu apni pichhli file wali problemStatementsList se import bhi kar sakta hai!)
const problems = [
  {
    id: "AI-201",
    title: "AI Campus Assistant",
    domain: "AI/ML",
    short: "Conversational assistant for campus queries.",
    detail: "Develop an intelligent conversational assistant that helps students with campus related queries such as schedules, events, faculty contacts and classroom navigation."
  },
  {
    id: "CY-301",
    title: "Phishing Detection Tool",
    domain: "Cybersecurity",
    short: "Detect phishing emails using ML.",
    detail: "Build a cybersecurity tool capable of scanning incoming emails and URLs to detect phishing attempts."
  },
  {
    id: "APP-401",
    title: "Campus Navigation App",
    domain: "App Dev",
    short: "Smart navigation for campus.",
    detail: "Develop a mobile application that provides smart navigation within the university campus."
  },
  {
    id: "WEB-501",
    title: "Anonymous Feedback System",
    domain: "Web Dev",
    short: "Students submit anonymous feedback.",
    detail: "Develop a secure web platform that allows students to submit anonymous feedback."
  }
];

export default function ProblemStatements() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [activeProblem, setActiveProblem] = useState<typeof problems[0] | null>(null);

  const filteredProblems =
    selectedDomain === "All"
      ? problems
      : problems.filter((p) => p.domain === selectedDomain);

  return (
    <div className="min-h-screen  text-white py-24 px-4 sm:px-6 font-outfit relative">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION (Clean & Sharp) */}
        <div className="text-center mb-16">
          <h2 className="text-[#d4510d] text-sm font-semibold tracking-widest uppercase mb-3">
            HackIT 2026 Tracks
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Problem Statements
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Choose a domain and build innovative solutions for real-world challenges.
          </p>
        </div>

        {/* DOMAIN FILTER BUTTONS (Minimalist) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {domains.map((domain) => {
            const isActive = selectedDomain === domain;
            return (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-5 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-md"
                    : "bg-transparent text-gray-400 border border-transparent hover:border-white/10 hover:text-white hover:bg-white/5"
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>

        {/* PROBLEM GRID (Premium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              onClick={() => setActiveProblem(problem)}
              className="group  border border-white/10 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-[#d4510d]/50 hover:bg-[#111118] flex flex-col h-full"
            >
              {/* Badges container */}
              <div className="flex justify-between items-center mb-5">
                <span className="bg-[#d4510d]/10 text-[#d4510d] text-xs font-semibold px-3 py-1 rounded-full">
                  {problem.id}
                </span>
                <span className="text-gray-500 text-xs font-medium">
                  {problem.domain}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#d4510d] transition-colors">
                {problem.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {problem.short}
              </p>

              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                <span>Read more</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* PROBLEM DETAIL MODAL (Clean Popup) */}
        {activeProblem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity"
            onClick={() => setActiveProblem(null)} 
          >
            {/* Modal Box */}
            <div
              className=" border border-white/10 shadow-2xl rounded-2xl p-6 md:p-10 max-w-2xl w-full relative animate-[fadeIn_0.2s_ease-out]"
              onClick={(e) => e.stopPropagation()} 
            >
              
              {/* Close 'X' Button at top right */}
              <button 
                onClick={() => setActiveProblem(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-white transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <div className="mb-6 pr-8">
                <div className="flex gap-3 items-center mb-3">
                  <span className="bg-[#d4510d]/10 text-[#d4510d] text-xs font-bold px-3 py-1 rounded-full">
                    {activeProblem.id}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {activeProblem.domain}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {activeProblem.title}
                </h2>
              </div>

              <div className="bg-[#111118] border border-white/5 rounded-xl p-6 mb-8">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Description</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {activeProblem.detail}
                </p>
              </div>

              {/* Clean Action Button */}
              <div className="flex justify-end">
                <button
                  className="px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  onClick={() => setActiveProblem(null)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
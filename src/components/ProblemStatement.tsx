import Link from "next/link";
import { domains, problemsList } from "@/data/problems";
import { useState } from "react";

export default function ProblemStatementButton() {
  const [selectedDomain, setSelectedDomain] = useState("All")
  const [activeProblem, setActiveProblem] = useState<typeof problemsList[0] | null>(null);

  const filteredProblems =
    selectedDomain === "All"
      ? problemsList
      : problemsList.filter((p) => p.domain === selectedDomain);
  return (
    <div className="w-full flex justify-center py-10 font-outfit">

      {/* Clean, Modern Button without Neon/Terminal effects */}
      <Link
        href="/problem-statement"
        className="group flex items-center gap-3 px-8 py-3.5 bg-[#111118] border border-white/10 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm md:text-base shadow-lg"
      >
        <span>View Problem Statements</span>

        {/* Simple smooth arrow animation on hover */}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </Link>

    </div>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "What is HACKIT 26?",
      answer: "HACKIT 26 is a groundbreaking hackathon at Amity University Patna, bringing together tech enthusiasts to innovate and solve real-world challenges in Web and App Development, AI/ML, Cybersecurity, IoT, and more.",
    },
    {
      question: "Who can participate in HACKIT 26?",
      answer: "HACKIT 26 is open to students and tech enthusiasts from all backgrounds. Anyone passionate about coding and problem-solving can participate.",
    },
    {
      question: "Where and when will HACKIT 26 take place?",
      answer: "HACKIT 26 will be held at AMITY UNIVERSITY PATNA, Bihar. 2 Days Hackathon. 27th-28th March 2026.",
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, registration for HACKIT 26 is not free. There is a registration fee of ₹500 per team. Selected teams must confirm their participation before the event.",
    },
    {
      question: "Can I participate alone or do I need a team?",
      answer: "HACKIT 26 is a team-based hackathon. Teams can have 2-4 members.",
    },
    {
      question: "How can I contact the organizers?",
      answer: (
        <>
          You can contact us at{" "}
          <Link
            href="mailto:asset.aikyam@gmail.com"
            className="text-white hover:text-gray-500 underline transition-colors"
            target="_blank"
          >
            asset.aikyam@gmail.com
          </Link>
          {" "}or via phone.
        </>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-24 flex flex-col items-center justify-center font-outfit z-10 px-4">

      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <p className="text-gray-400 tracking-[0.2em] text-sm uppercase mb-3 font-semibold">
          Got Questions?
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-4">
          FREQUENTLY ASKED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4510d] to-[#a33a08] drop-shadow-[0_0_15px_rgba(255,179,0,0.4)]">QUESTIONS</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase">
          Everything you need to know about our hackathon
        </p>
      </div>

      {/* FAQ CONTAINER */}
      <div className="w-full max-w-4xl space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border rounded-lg bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-[#d4510d]/60 shadow-[0_0_20px_rgba(255,179,0,0.15)]"
                  : "border-[#d4510d]/20 hover:border-[#d4510d]/50"
              }`}
            >
              {/* FAQ QUESTION BUTTON */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none group"
              >
                <span
                  className={`text-sm md:text-base font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isOpen ? "text-[#d4510d]" : "text-white group-hover:text-[#d4510d]"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Plus/Minus (or arrow) Icon Animation */}
                <div
                  className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border border-[#d4510d]/50 flex items-center justify-center text-[#d4510d] transition-all duration-400 ${
                    isOpen ? "bg-[#d4510d]/20 rotate-180" : "bg-transparent"
                  }`}
                >
                  <span className="text-xs font-black">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M5.516 7.548c.436-.446 1.043-.481 1.576 0L10 10.405l2.908-2.857c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615l-3.695 3.629a1.13 1.13 0 0 1-1.574 0l-3.696-3.629c-.41-.418-.436-1.17 0-1.614z" />
                    </svg>
                  </span>
                </div>
              </button>

              {/* FAQ ANSWER */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-5 md:p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
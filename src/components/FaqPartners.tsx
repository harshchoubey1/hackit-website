"use client";

import { useState } from "react";

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "WHAT IS THE TEAM SIZE?",
      answer: "Teams can have 1–4 members. Solo participation is also allowed."
    },
    {
      question: "WHAT IS EXPECTED TO BE BUILT?",
      answer: "Participants should build an innovative prototype or solution based on the hackathon theme."
    },
    {
      question: "HOW CAN I GET SHORTLISTED?",
      answer: "Teams are shortlisted based on idea originality, feasibility, and application quality."
    },
    {
      question: "IS THERE A REGISTRATION FEE?",
      answer: "Yes. The hackathon has a minimal fee to participate in."
    },
    {
      question: "WHO CAN PARTICIPATE?",
      answer: "Students, developers, designers, and innovators from any background are welcome to participate."
    },
    {
      question: "DO I NEED PRIOR HACKATHON EXPERIENCE?",
      answer: "No. Beginners are absolutely welcome. Mentors will be available to guide you during the event."
    },
    {
      question: "CAN I PARTICIPATE WITHOUT A TEAM?",
      answer: "Yes. Solo participants can join and also find teammates during the team formation phase."
    },
    {
      question: "WHAT SHOULD I BRING TO THE HACKATHON?",
      answer: "Bring your laptop, charger, creativity, and enthusiasm to build something amazing."
    },
    {
      question: "ARE THERE PRIZES?",
      answer: "Yes. Winning teams will receive exciting prizes, swag, and recognition."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about our hackathon</p>
      </div>

      <div className="faq-container">

        {faqData.map((faq, index) => (

          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
          >

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              {faq.question}

              <span className="faq-icon">
                {openIndex === index ? "▲" : "▼"}
              </span>

            </div>

            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
"use client";

import { useEffect } from "react";

export default function Roadmap() {

  const roadmapItems = [
    {
      date: "05TH FEBRUARY",
      text: "Registration for Hackathon '24 starts through Devfolio.",
    },
    {
      date: "20TH FEBRUARY",
      text: "Registration for Hackathon '24 comes to an end.",
    },
    {
      date: "22ND FEBRUARY",
      text: "Shortlisting based on submissions and prior designs.",
    },
    {
      date: "24TH FEBRUARY",
      text: "Shortlisted Participants are informed via emails.",
    },
    {
      date: "28TH FEBRUARY",
      text: "Hackathon '24 begins at 06 PM in the evening.",
    },
  ];

  useEffect(() => {

    const items = document.querySelectorAll(".roadmap-item");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            const index = Array.from(items).indexOf(entry.target);

            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 300);

          }

        });

      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();

  }, []);

  return (

    <section className="roadmap-section">

      <h2 className="roadmap-title">HACKATHON ROADMAP</h2>

      <div className="roadmap-container">

        <div className="roadmap-line"></div>

        {roadmapItems.map((item, index) => (
          <div
            key={index}
            className={`roadmap-item ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="roadmap-dot"></div>

            <div className="roadmap-date">{item.date}</div>

            <div className="roadmap-text">{item.text}</div>

          </div>
        ))}

      </div>

    </section>

  );
}
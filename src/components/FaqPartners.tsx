"use client";

import { useState } from "react";
import Image from "next/image";

export default function FaqPartners() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            answer: "No. The hackathon is completely free to participate in."
        }
    ];

    const partners = [
        { name: "Devfolio", icon: "/images/devfolio-partner.svg" },
        { name: "Polygon", icon: "/images/polygon-partner.svg" },
        { name: "Replit", icon: "/images/replit-partner.svg" },
        { name: "Solana", icon: "/images/solana-partner.svg" },
        { name: "Filecoin", icon: "/images/filecoin-partner.svg" },
    ];

    const toggleFAQ = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="faq-partners-section">

            <div className="faq-image"></div>

            <div className="faq-partners-content">

                <div className="faq-section">

                    <h2 className="faq-title">
                        FREQUENTLY ASKED
                        <br />
                        QUESTIONS
                    </h2>

                    <div className="faq-questions">

                        {faqData.map((faq, index) => (
                            <div className="faq-item" key={index}>

                                <div
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                </div>

                                {openIndex === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}

                            </div>
                        ))}

                    </div>
                </div>

                <div className="partners-section">

                    <h3 className="partners-title">
                        PARTNERING WITH
                    </h3>

                    <div className="partners-grid">

                        {partners.map((partner, index) => (
                            <div className="partner-item" key={index}>

                                <Image
                                    src={partner.icon}
                                    alt={partner.name}
                                    width={24}
                                    height={24}
                                    className="partner-icon"
                                />

                                <span>{partner.name}</span>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </section>
    );
}
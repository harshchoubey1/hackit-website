"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {

        const targetDate = new Date("March 20, 2026 09:00:00").getTime();

        const timer = setInterval(() => {

            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <section className="hero-section">

            {/* Dynamic Tech Grid Background */}
            <div className="cyber-grid"></div>

            {/* Floating Glow Shapes */}
            <div className="floating-shapes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="hero-content">

                {/* LOGO AREA */}
                <div className="hero-brand">

                    <div className="logo-group">
                        <div className="hero-logo-main"></div>
                        <div className="logo-x">×</div>
                        <div className="hero-logo"></div>
                    </div>

                    <div className="logo-presents">
                        PRESENTS
                    </div>

                </div>

                {/* MAIN TITLE */}
                <h1 className="hero-title">
                    HACKIT 2.0
                </h1>

                {/* SUBTITLE */}
                <h2 className="hero-subtitle">
                    THE BATTLE OF CODES - 2026
                </h2>

                {/* TAGLINE */}
                <div className="tagline-text">
                    Idea | Creativity | Innovation
                </div>

                {/* EVENT DETAILS */}
                <div className="event-details-bar">

                    <div className="event-detail">
                        <span className="icon">📅</span>
                        28th - 29th Feb 2026
                    </div>

                    <div className="event-detail">
                        <span className="icon">🕒</span>
                        12 Hours Sprint
                    </div>

                    <div className="event-detail">
                        <span className="icon">📍</span>
                        Amity University Patna
                    </div>

                </div>

                {/* COUNTDOWN TIMER */}
                <div className="countdown-container">

                    <div className="time-box">
                        <div className="time-value">
                            {String(timeLeft.days).padStart(2, "0")}
                        </div>
                        <div className="time-label">DAYS</div>
                    </div>

                    <div className="time-box">
                        <div className="time-value">
                            {String(timeLeft.hours).padStart(2, "0")}
                        </div>
                        <div className="time-label">HOURS</div>
                    </div>

                    <div className="time-box">
                        <div className="time-value">
                            {String(timeLeft.minutes).padStart(2, "0")}
                        </div>
                        <div className="time-label">MINS</div>
                    </div>

                    <div className="time-box glowing-box">
                        <div className="time-value">
                            {String(timeLeft.seconds).padStart(2, "0")}
                        </div>
                        <div className="time-label">SECS</div>
                    </div>

                </div>

                {/* ACTION BUTTONS */}
                <div className="hero-actions">

                

                  <Link href="/register">
               <button className="register-btn">
                REGISTER NOW ❯
                  </button>
                  </Link>

                    <Link
                        href="/problem-statement"
                        className="problem-statement-btn"
                    >
                        <span>VIEW PROBLEM STATEMENT</span>
                    </Link>

                </div>

            </div>

            {/* STATUE IMAGE */}
            <div className="hero-accent-image">

                <Image
                    src="/images/jesus.png"
                    alt="Statue Accent"
                    width={500}
                    height={400}
                    className="statue-overlay"
                />

            </div>

        </section>

    );
}

"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "amitian" | "nonAmitian";

export default function Prizes() {

const [category, setCategory] = useState<Category>("amitian");

const prizes = {
amitian: [
{ label: "WINNER", amount: "₹5,000", class: "winner" },
{ label: "RUNNER UP", amount: "₹3,000", class: "runner-up-1" },
{ label: "2ND RUNNER UP", amount: "₹2,000", class: "runner-up-2" }
],
nonAmitian: [
{ label: "WINNER", amount: "₹5,000", class: "winner" },
{ label: "RUNNER UP", amount: "₹3,000", class: "runner-up-1" },
{ label: "2ND RUNNER UP", amount: "₹2,000", class: "runner-up-2" }
]
};

return (

<section className="prizes-section">

{/* Animated Background */}
<div className="prizes-bg"></div>

{/* CATEGORY TOGGLE */}
<div className={`category-toggle ${category === "nonAmitian" ? "non-amitian" : ""}`}>

<button
className={`toggle-btn ${category === "amitian" ? "active" : ""}`}
onClick={() => setCategory("amitian")}
>
AMITIAN
</button>

<button
className={`toggle-btn ${category === "nonAmitian" ? "active" : ""}`}
onClick={() => setCategory("nonAmitian")}
>
NON-AMITIAN
</button>

</div>

{/* PRIZE CARDS */}
<div className="prizes-container">

{prizes[category].map((prize, index) => (

<div className="prize-item" key={index}>

<div className="prize-label">
{prize.label}
</div>

<div className={`prize-amount ${prize.class}`}>
{prize.amount}
</div>

</div>

))}

</div>

{/* REGISTRATION SECTION */}

<div className="registration-container">

<div className="registration-image"></div>

<div className="registration-content">

<div className="deadline-info">

<div className="deadline-label">
REGISTRATION IS
</div>

<div className="deadline-date">
GOING ON :
</div>

<div className="extra-perks">

<div className="perks-title">
✨ EXTRA PERKS
</div>

<div className="perks-items">

<span>🏅 Participation Certificate</span>

<span>🎁 Exciting Goodies</span>

<span>🧠 Expert Mentorship</span>

</div>

</div>

</div>

<Link href="/register">

<button className="register-button">

<svg
width="20"
height="20"
viewBox="0 0 20 20"
fill="none"
>

<path
d="M0.25 4.17L14.5 16.67H0.25V4.17Z"
stroke="#0B0B0C"
strokeWidth="1.6"
/>

</svg>

Register Now

</button>

</Link>

</div>

</div>

</section>

);
}
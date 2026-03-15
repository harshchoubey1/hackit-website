"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RulesPage() {

const [menuOpen,setMenuOpen] = useState(false);

const judging = [
{title:"Innovation & Creativity", value:20},
{title:"Technical Implementation", value:20},
{title:"Feasibility & Impact", value:20},
{title:"Problem-Solving Approach", value:20},
{title:"Presentation & Teamwork", value:20},
];

return (

<div className="rules-wrapper">

{/* NAVBAR */}

<nav className="navbar">

<div className="nav-left">
<Image
src="/images/logo-footer-1913c3.png"
alt="HackIT"
width={150}
height={40}
/>
</div>

{/* HAMBURGER MENU */}
<div
className="menu-toggle"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</div>

{/* NAV LINKS */}

<div className={`nav-links ${menuOpen ? "active" : ""}`}>

<Link href="/" onClick={()=>setMenuOpen(false)}>
Home
</Link>

<Link href="/problem-statement" onClick={()=>setMenuOpen(false)}>
Problems
</Link>

<Link href="/rules" onClick={()=>setMenuOpen(false)}>
Rules
</Link>

<Link href="/schedule" onClick={()=>setMenuOpen(false)}>
Download Template
</Link>

<Link href="/register" onClick={()=>setMenuOpen(false)}>
<button className="register-btn">
Register
</button>
</Link>

</div>

</nav>


{/* HEADER */}

<div className="rules-header">

<p className="small">HACKIT 2026</p>

<h1>
RULES & <span>REGULATIONS</span>
</h1>

<p className="desc">
Please read the rules carefully before participating in HackIT.
</p>

</div>


{/* RULE SECTIONS */}

<div className="rules-sections">

<div className="rule-box">

<div className="rule-title">
<span>📜</span>
<h3>General Rules</h3>
</div>

<ol>
<li>Teams must consist of 2-4 members.</li>
<li>All participants must register before deadline.</li>
<li>Participants must carry valid college ID.</li>
<li>Respect mentors and fellow participants.</li>
</ol>

</div>


<div className="rule-box">

<div className="rule-title">
<span>💻</span>
<h3>Project Rules</h3>
</div>

<ol>
<li>Projects must be built during the hackathon.</li>
<li>No pre-built complete solutions allowed.</li>
<li>Open-source libraries can be used.</li>
<li>Teams must present a working prototype.</li>
</ol>

</div>


<div className="rule-box">

<div className="rule-title">
<span>📦</span>
<h3>Submission Rules</h3>
</div>

<ol>
<li>Submit project before deadline.</li>
<li>Provide GitHub repository.</li>
<li>Include documentation and demo.</li>
<li>Judges decision will be final.</li>
</ol>

</div>

</div>


{/* EVENT FLOW */}

<div className="event-section">

<h2>EVENT FLOW</h2>

<div className="timeline">

<div className="timeline-step">

<h4>PHASE 1 — REGISTRATION & ORIENTATION</h4>

<p>
Participants complete registration and attend the opening ceremony.
Problem statements are introduced and teams select their challenge.
Mentors guide teams in understanding the problem and planning
their solution.
</p>

</div>


<div className="timeline-step">

<h4>PHASE 2 — IDEATION & PROTOTYPING</h4>

<p>
Teams brainstorm innovative ideas and begin developing their
initial prototype.
</p>

</div>


<div className="timeline-step">

<h4>PHASE 3 — DEVELOPMENT & TESTING</h4>

<p>
Participants continue building their project by adding
features and improving performance.
</p>

</div>


<div className="timeline-step">

<h4>PHASE 4 — FINAL DEMO & JUDGING</h4>

<p>
Each team presents their project to judges with a live
demonstration.
</p>

</div>

</div>

</div>


{/* JUDGING */}

<div className="judging-section">

<h2>JUDGING CRITERIA</h2>

<div className="judging-box">

{judging.map((item,index)=>(

<div key={index} className="judge-item">

<div className="judge-head">
<p>{item.title}</p>
<span>{item.value}%</span>
</div>

<div className="judge-bar">

<div
className="judge-fill"
style={{width:`${item.value}%`}}
></div>

</div>

</div>

))}

</div>

</div>


{/* DOWNLOAD */}

<div className="download-marquee">

<div className="marquee-track">

<a href="/hackit-template.pdf" download>

DOWNLOAD HACKIT PPT TEMPLATE • DOWNLOAD HACKIT TEMPLATE •
DOWNLOAD HACKIT PPT TEMPLATE • DOWNLOAD HACKIT TEMPLATE •

</a>

</div>

</div>

</div>

);
}
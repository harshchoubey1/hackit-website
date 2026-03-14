"use client";

import Image from "next/image";
import Link from "next/link";

export default function RulesPage() {

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

<div className="nav-links">

<Link href="/">Home</Link>
<Link href="/problem-statement">Problems</Link>
<Link href="/rules">Rules</Link>
<Link href="/schedule">Download Template</Link>

<Link href="/register">
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

{/* GENERAL */}

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


{/* PROJECT */}

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


{/* SUBMISSION */}

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
initial prototype. Mentors assist with technical guidance
and idea validation.
</p>

</div>


<div className="timeline-step">

<h4>PHASE 3 — DEVELOPMENT & TESTING</h4>

<p>
Participants continue building their project by adding
features, improving performance and testing the solution
for stability and usability.
</p>

</div>


<div className="timeline-step">

<h4>PHASE 4 — FINAL DEMO & JUDGING</h4>

<p>
Each team presents their project to judges with a live
demonstration. Judges evaluate innovation, implementation,
impact and presentation quality.
</p>

</div>

</div>

</div>


{/* JUDGING CRITERIA */}

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


{/* DOWNLOAD TEMPLATE MARQUEE */}

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
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const domains = ["All", "AI/ML", "Cybersecurity", "App Dev", "Web Dev"];

const problems = [
{
id:"AI-201",
title:"AI Campus Assistant",
domain:"AI/ML",
short:"Conversational assistant for campus queries.",
detail:"Develop an intelligent conversational assistant that helps students with campus related queries such as schedules, events, faculty contacts and classroom navigation."
},

{
id:"CY-301",
title:"Phishing Detection Tool",
domain:"Cybersecurity",
short:"Detect phishing emails using ML.",
detail:"Build a cybersecurity tool capable of scanning incoming emails and URLs to detect phishing attempts."
},

{
id:"APP-401",
title:"Campus Navigation App",
domain:"App Dev",
short:"Smart navigation for campus.",
detail:"Develop a mobile application that provides smart navigation within the university campus."
},

{
id:"WEB-501",
title:"Anonymous Feedback System",
domain:"Web Dev",
short:"Students submit anonymous feedback.",
detail:"Develop a secure web platform that allows students to submit anonymous feedback."
}
];

export default function ProblemStatements(){

const [selectedDomain,setSelectedDomain]=useState("All");
const [activeProblem,setActiveProblem]=useState<typeof problems[0] | null>(null);
const [menuOpen,setMenuOpen]=useState(false);

const filteredProblems =
selectedDomain==="All"
? problems
: problems.filter(p=>p.domain===selectedDomain);

return(

<div className="teams-wrapper">

<div className="cyber-lines"></div>

<div className="problem-page">

{/* NAVBAR */}

<nav className="navbar">

<div className="nav-left">
<Image
src="/images/logo-footer-1913c3.png"
alt="Amity"
width={160}
height={50}
/>
</div>

{/* HAMBURGER */}

<div
className="menu-toggle"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</div>

{/* NAV LINKS */}

<div className={`nav-links ${menuOpen ? "active" : ""}`}>

<Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>

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

<div className="problem-header">

<p className="small">HACKIT 2026</p>

<h1>
HACKIT <span>PROBLEM STATEMENTS</span>
</h1>

<p className="desc">
Choose a domain and solve real world challenges using modern technology.
</p>

</div>

{/* DOMAIN FILTER */}

<div className="domain-filter">

{domains.map((domain)=>(

<button
key={domain}
className={selectedDomain===domain?"active":""}
onClick={()=>setSelectedDomain(domain)}
>
{domain}
</button>

))}

</div>

{/* GRID */}

<div className="problem-grid">

{filteredProblems.map(problem=>(

<div
key={problem.id}
className="problem-card"
onClick={()=>setActiveProblem(problem)}
>

<p className="problem-id">{problem.id}</p>

<h3>{problem.title}</h3>

<p className="problem-short">{problem.short}</p>

</div>

))}

</div>

{/* MODAL */}

{activeProblem && (

<div
className="problem-modal-overlay"
onClick={()=>setActiveProblem(null)}
>

<div
className="problem-modal"
onClick={(e)=>e.stopPropagation()}
>

<h2>{activeProblem.title}</h2>

<p className="modal-domain">
{activeProblem.domain}
</p>

<p className="modal-text">
{activeProblem.detail}
</p>

<button
className="modal-close"
onClick={()=>setActiveProblem(null)}
>
Close
</button>

</div>

</div>

)}

</div>

</div>

);

}
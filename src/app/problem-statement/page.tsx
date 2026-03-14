"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const domains = ["All", "AI/ML", "Cybersecurity", "App Dev", "Web Dev"];

const problems = [

/* AI / ML */

{
id:"AI-201",
title:"AI Campus Assistant",
domain:"AI/ML",
short:"Conversational assistant for campus queries.",
detail:"Develop an intelligent conversational assistant that helps students with campus related queries such as schedules, events, faculty contacts and classroom navigation. The assistant should support natural language conversations and provide quick contextual responses. Integrate AI models capable of learning from interactions and continuously improving accuracy."
},

{
id:"AI-202",
title:"Smart Waste Prediction",
domain:"AI/ML",
short:"Predict waste levels using AI.",
detail:"Create a predictive system that analyzes historical waste collection data and IoT sensor inputs to estimate garbage levels across different campus zones. The system should help optimize waste pickup routes and reduce unnecessary trips, making the process more efficient and environmentally sustainable."
},

{
id:"AI-203",
title:"Student Performance Predictor",
domain:"AI/ML",
short:"AI model to predict student performance.",
detail:"Design a machine learning model that predicts academic performance using attendance, assignment scores, engagement metrics and historical results. The platform should help educators identify struggling students early and recommend personalized improvement strategies."
},

/* CYBER */

{
id:"CY-301",
title:"Phishing Detection Tool",
domain:"Cybersecurity",
short:"Detect phishing emails using ML.",
detail:"Build a cybersecurity tool capable of scanning incoming emails and URLs to detect phishing attempts. The system should analyze patterns, suspicious links and message structure to classify emails as safe or malicious, helping users avoid potential scams."
},

{
id:"CY-302",
title:"Secure Login System",
domain:"Cybersecurity",
short:"Multi-factor authentication platform.",
detail:"Develop a modern authentication system combining multi-factor authentication with behavioral biometrics such as typing patterns or device fingerprinting. The system should enhance login security while maintaining smooth user experience."
},

{
id:"CY-303",
title:"Real-time Threat Monitor",
domain:"Cybersecurity",
short:"Monitor suspicious system activity.",
detail:"Create a dashboard that monitors system logs and detects suspicious activities in real time. The platform should visualize threats, alert administrators and help prevent potential cyber attacks using anomaly detection algorithms."
},

/* APP DEV */

{
id:"APP-401",
title:"Campus Navigation App",
domain:"App Dev",
short:"Smart navigation for campus.",
detail:"Develop a mobile application that provides smart navigation within the university campus. Users should be able to search for buildings, classrooms, cafeterias and event locations with real time directions and interactive maps."
},

{
id:"APP-402",
title:"Event Discovery Platform",
domain:"App Dev",
short:"Discover campus events easily.",
detail:"Build a mobile app that helps students discover events happening across campus. The application should provide notifications, event registration and personalized recommendations based on interests."
},

{
id:"APP-403",
title:"Digital Lost & Found",
domain:"App Dev",
short:"Report and find lost items.",
detail:"Design a platform where students can report lost items and browse reported findings across campus. The application should allow image uploads, item descriptions and contact features to reunite owners with their belongings."
},

/* WEB DEV */

{
id:"WEB-501",
title:"Anonymous Feedback System",
domain:"Web Dev",
short:"Students submit anonymous feedback.",
detail:"Develop a secure web platform that allows students to submit anonymous feedback regarding courses, faculty or facilities. The system should protect user identity while giving administrators useful insights."
},

{
id:"WEB-502",
title:"Smart Resource Portal",
domain:"Web Dev",
short:"Central hub for study materials.",
detail:"Create a collaborative portal where students can upload, discover and organize study materials such as notes, guides and previous papers. The platform should include search filters and upvoting."
},

{
id:"WEB-503",
title:"Hackathon Collaboration Hub",
domain:"Web Dev",
short:"Team formation & collaboration.",
detail:"Build a web platform where hackathon participants can find teammates, share project ideas and collaborate efficiently. Include team discovery tools, chat features and project boards."
}

];

export default function ProblemStatements(){

const [selectedDomain,setSelectedDomain]=useState("All");
const [activeProblem,setActiveProblem]=useState(null);

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

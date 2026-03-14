"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {

return (

<section className="about-section">

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
<Link href="/about">About</Link>
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


{/* TITLE */}

<h1 className="about-title">
THE HACKIT CHRONICLE
</h1>


{/* CONTENT */}

<div className="about-container">


{/* LEFT SIDE */}

<div className="about-text">

<h2>ABOUT HACKIT</h2>

<p>
Welcome to <strong>HackIT 2026</strong>, the premier hackathon at Amity University
Patna. Our mission is to bring together the brightest minds in technology,
innovation, and creativity to solve real-world problems and build
impactful projects.
</p>

<p>
This 48-hour sprint isn't just a competition — it's an opportunity to
collaborate, brainstorm, and push the boundaries of what technology
can achieve.
</p>

<p>
Whether you're a developer, designer, or problem solver, HackIT provides
the platform to transform your ideas into reality.
</p>

</div>


{/* RIGHT SIDE */}

<div className="why-box">

<h3>WHY JOIN US?</h3>

<ul>

<li>Work on real-world challenges</li>
<li>Collaborate with industry mentors</li>
<li>Win exciting prizes & recognition</li>
<li>Learn new skills and network</li>

</ul>

</div>


</div>

</section>

);
}
"use client";

import Menu from "@/components/Menu";


export default function Teams() {
  return (
    <div className="teams-wrapper">

      {/* BACKGROUND */}
      <div className="cyber-lines"></div>

      {/* MENU */}
      <Menu />

      <div className="teams-page">

        {/* PAGE TITLE */}
        <div className="teams-header">
          <h1>Our Team</h1>
        </div>

        {/* VICE CHANCELLOR */}
        <section className="leader-section">

          <div className="leader-card">
            <img src="/images/VivekanandPandey.jpg" alt="Vice Chancellor" />
            <h2>Prof. Vivekanand Pandey</h2>
            <p>Vice Chancellor</p>
          </div>

        </section>


        {/* HOD / MENTOR */}
        <section className="leader-section">

          <div className="leader-card">
            <img src="/images/Dr.ShashiShekhar.jpg" alt="HOD" />
            <h2>Dr. Shashi Shekhar</h2>
            <p>Head of Department</p>
          </div>

        </section>


        {/* FACULTY ADVISORS */}
        <section className="team-section">

          <h2 className="section-title">Faculty Advisor</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src="/images/Dr.PreetishRanjan.jpg" alt="Faculty"/>
              <h3>Dr. Preetish Ranjan</h3>
            </div>

            <div className="team-card">
              <img src="/images/ShilpiSingh.jpg" alt="Faculty"/>
              <h3>Dr. Shilpi Singh</h3>
            </div>

          </div>

        </section>


        {/* CORE TEAM */}
        <section className="team-section">

          <h2 className="section-title">Core Team</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src="/images/vc.jpg" alt="Core"/>
              <h3>Core 1</h3>
            </div>

            <div className="team-card">
              <img src="/images/vc.jpg" alt="Core"/>
              <h3>Core 2</h3>
            </div>

            <div className="team-card">
              <img src="/images/vc.jpg" alt="Core"/>
              <h3>Core 3</h3>
            </div>

            <div className="team-card">
              <img src="/images/vc.jpg" alt="Core"/>
              <h3>Core 4</h3>
            </div>

          </div>

        </section>


        {/* ORGANIZING TEAM */}
        <section className="team-section">

          <h2 className="section-title">Organizing Team</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src="/images/vc.jpg" alt="Student"/>
              <h3>Student Name</h3>
            </div>

            <div className="team-card">
              <img src="/images/vc.jpg" alt="Student"/>
              <h3>Student Name</h3>
            </div>

            <div className="team-card">
              <img src="/images/vc.jpg" alt="Student"/>
              <h3>Student Name</h3>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}
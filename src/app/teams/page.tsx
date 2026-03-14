"use client";

import Menu from "@/components/Menu";

export default function Teams() {
  return (
    <div className="teams-wrapper">

      {/* BACKGROUND EFFECT */}
      <div className="cyber-lines"></div>

      {/* MENU */}
      <Menu />

      {/* PAGE CONTENT */}
      <div className="teams-page">

        {/* PAGE TITLE */}
        <div className="teams-header">
          <h1>Our Team</h1>
        </div>

        {/* VC */}
        <section className="leader-section">
          <div className="leader-card">
            <img src="/images/VivekanandPandey.jpg" alt="Vice Chancellor" />
            <h2>Prof. Vivekanand-Pandey</h2>
            <p>Vice Chancellor</p>
          </div>
        </section>

        {/* HOD */}
        <section className="leader-section">
          <div className="leader-card">
            <img src="/images/Dr.ShashiShekhar.jpg"  alt="HOD" />
            <h2>Dr. Shashi-shekhar</h2>
            <p>Head of Department</p>
          </div>
        </section>

        {/* FACULTY */}
        <section className="team-section">

          <h2 className="section-title">Faculty Coordinators</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src="/images/ShilpiSingh.jpg" alt="Faculty"/>
              <h3>Dr.Shilpi Singh</h3>
            </div>

            <div className="team-card">
              <img src="/images/Dr.Abhishek Anand.jpg" alt="Faculty"/>
              <h3>Dr.Abhishek Anand</h3>
            </div>

            <div className="team-card">
              <img src="/images/Dr.-Rakesh-Kumar-Yadav.jpg"  alt="Faculty"/>
              <h3>Dr.Rakesh kumar yadav</h3>
            </div>

          </div>

        </section>

        {/* STUDENTS */}
        <section className="team-section">

          <h2 className="section-title">Student Organizers</h2>

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
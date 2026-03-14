export default function FooterSection() {
  return (
    <footer id="contact" className="footer-section">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <img
            src="/images/logo.png"
            alt="HackIT Logo"
            className="footer-logo"
          />

          <p className="footer-text">
            HackIT Hackathon organized by AIKYAM Club at Amity University Patna.
            Build, design and innovate with the brightest minds.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Register</li>
            <li>Roadmap</li>
            <li>Venue</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* MAP LOCATION */}
        <div className="footer-map">
          <h3>Venue Location</h3>

          <iframe
            src="https://www.google.com/maps?q=Amity+University+Patna&output=embed"
            className="map-frame"
            loading="lazy"
          ></iframe>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <div>
            <div className="contact-person">Rahul Sharma</div>
            <div className="contact-number">+91 98765 43210</div>
          </div>

          <div>
            <div className="contact-person">Priya Singh</div>
            <div className="contact-number">+91 91234 56789</div>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-socials">
          <h3>Follow Us:</h3>

          <div className="social-icons">

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/social-icon.svg" alt="Instagram" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.svg" alt="LinkedIn" />
            </a>


          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 HackIT Designathon • Harsh Choubey
      </div>

    </footer>
  );
}
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="w-full  border-t border-cyber-cyan/20 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* LEFT */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="HackIT Logo"
            width={140}
            height={40}
            className="object-contain"
          />

          <p className="text-gray-400 text-sm leading-relaxed">
            HackIT Hackathon organized by AIKYAM Club at Amity University Patna.
            Build, design and innovate with the brightest minds.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-cyber-cyan font-semibold mb-4 tracking-wider">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/register" className="hover:text-cyber-cyan transition">
                Register
              </Link>
            </li>

            <li>
              <a href="#roadmap" className="hover:text-cyber-cyan transition">
                Roadmap
              </a>
            </li>

            <li>
              <a href="#venue" className="hover:text-cyber-cyan transition">
                Venue
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-cyber-cyan transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* MAP */}
        <div className="lg:col-span-2">
          <h3 className="text-cyber-cyan font-semibold mb-4 tracking-wider">
            Venue Location
          </h3>

          <div className="rounded-lg overflow-hidden border border-cyber-cyan/20">
            <iframe
              src="https://www.google.com/maps?q=Amity+University+Patna&output=embed"
              className="w-full h-[160px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="space-y-5">
          <div>
            <h3 className="text-cyber-cyan font-semibold mb-3 tracking-wider">
              Contact
            </h3>

            <div className="text-gray-400 text-sm space-y-2">
              <div>
                <p className="font-medium text-gray-300">Aman Kishore</p>
                <p>+91 77649 15775</p>
              </div>

              <div>
                <p className="font-medium text-gray-300">Shubhanjali Sinha</p>
                <p>+91 92637 99037</p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-cyber-cyan font-semibold mb-3 tracking-wider">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://instagram.com"
                target="_blank"
                className="p-2 border border-cyber-cyan/20 rounded-md hover:border-cyber-cyan hover:shadow-[0_0_12px_#d4510d] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2 border border-cyber-cyan/20 rounded-md hover:border-cyber-cyan hover:shadow-[0_0_12px_#d4510d] transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-cyber-cyan/10 text-center py-4 text-gray-500 text-sm">
        © 2026 HackIT Designathon • Built by AIKYAM
      </div>
    </footer>
  );
}
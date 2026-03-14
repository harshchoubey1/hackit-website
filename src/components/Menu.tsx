"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const goToContact = () => {
    setOpen(false);

    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>

      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* SIDE MENU */}
      <div className={`side-menu ${open ? "active" : ""}`}>

        <Link href="/" onClick={handleClose}>
          Home
        </Link>

        <Link href="/problem-statement" onClick={handleClose}>
          Problem Statement
        </Link>


        <Link href="/rules" onClick={handleClose}>
          Rules & Regulations
        </Link>
         <Link href="/teams" onClick={handleClose}>
           Our Teams
        </Link>

        <Link href="/about" onClick={handleClose}>
          About HackIT
        </Link>

        

      </div>

    </>
  );
}
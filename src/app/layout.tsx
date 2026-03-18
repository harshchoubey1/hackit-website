import type { Metadata } from "next";
import React from "react";
import { Exo_2, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar        from "@/components/Navbar";
import StarField     from "@/components/Starfield";
import TickerDivider from "@/components/Tickerdivider";
import Footer from "@/components/Footersection";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HackIT 2026 — Amity University Patna",
  description: "HackIT Hackathon 2026 — Amity University Patna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${spaceGrotesk.variable} text-white flex flex-col min-h-screen no-scrollbar`}
        style={{ backgroundColor: "#03040a" }}
        suppressHydrationWarning
      >
        {/* Stars background */}
        <StarField />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 w-full pt-24 relative z-10">
          {children}
        </main>

        {/* Ticker — footer ke upar divider, homepage pe nahi dikhega */}
        <TickerDivider />

        {/* Footer — har page pe */}
        <Footer />
      </body>
    </html>
  );
}
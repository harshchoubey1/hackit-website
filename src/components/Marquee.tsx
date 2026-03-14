"use client";

import { useEffect, useRef } from "react";

export default function Marquee() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // duplicate text for seamless scrolling
    if (marquee1Ref.current) {
      const content = marquee1Ref.current.innerHTML;
      marquee1Ref.current.innerHTML = content + content;
    }

    if (marquee2Ref.current) {
      const content = marquee2Ref.current.innerHTML;
      marquee2Ref.current.innerHTML = content + content;
    }
  }, []);

  const marqueeText =
    "hackit'26 • hackit'26 • hackit'26 • hackit'26 • hackit'26 • hackit'26 • hackit'26 • hackit'26 • ";

  return (
    <>
      {/* Marquee 1 */}
      <div className="marquee-section marquee-1">
        <div className="marquee-content" ref={marquee1Ref}>
          <span className="marquee-text">{marqueeText}</span>
        </div>
      </div>
    </>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Star {
  x:             number;
  y:             number;
  z:             number;
  size:          number;
  opacity:       number;
  speed:         number;
  twinkleOffset: number;
}

const STAR_COUNT = 180;

function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initStars() {
      if (!canvas) return;
      stars = Array.from({ length: STAR_COUNT }, () => {
        const z = Math.random();
        return {
          x:             Math.random() * canvas.width,
          y:             Math.random() * canvas.height,
          z,
          size:          0.4 + z * 1.8,
          opacity:       0.15 + z * 0.55,
          speed:         0.03 + z * 0.04,
          twinkleOffset: Math.random() * Math.PI * 2,
        };
      });
    }

    let tick = 0;
    function draw() {
      if (!canvas || !ctx) return;
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const twinkle = Math.sin(tick * 0.02 + star.twinkleOffset);
        const opacity = Math.max(0, star.opacity + twinkle * 0.2);

        star.x += star.speed;
        if (star.x > canvas.width + 2) star.x = -2;

        const roll = (star.twinkleOffset * 10) % 1;
        let color: string;
        if      (roll < 0.07) color = `rgba(255,200,120,${opacity})`;
        else if (roll < 0.13) color = `rgba(160,210,255,${opacity})`;
        else                  color = `rgba(255,255,255,${opacity})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        if (star.size > 1.5) {
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 4,
          );
          glow.addColorStop(0, `rgba(255,255,255,${opacity * 0.12})`);
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initStars();
    draw();

    window.addEventListener("resize", () => { resize(); initStars(); });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100vw",
        height:        "100vh",
        zIndex:        -1,       // ← KEY FIX: -1 so sections show above it
        pointerEvents: "none",
        display:       "block",
      }}
    />
  );
}

export default function StarField() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(<StarCanvas />, document.body);
}
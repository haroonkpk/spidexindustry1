
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FootballAnimation({
  className = "absolute top-20 left-10 w-12 h-12 pointer-events-none z-20",
}: {
  className?: string;
}) {
  const footballRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!footballRef.current) return;


    const animateRandomly = () => {
      gsap.to(footballRef.current, {
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
        duration: Math.random() * 2 + 2,
        ease: "power1.inOut",
        onComplete: animateRandomly,
      });
    };


    animateRandomly();


    return () => {
      gsap.killTweensOf(footballRef.current);
    };
  }, []);

  return (
    <img
      ref={footballRef}
      src="/images/football.webp"
      alt="football animation"
      className={className}
    />
  );
}
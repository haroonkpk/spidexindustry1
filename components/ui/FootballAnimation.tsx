// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function FootballAnimation({
//   className = "absolute top-20 left-10 w-12 h-12 pointer-events-none z-20",
// }: {
//   className?: string;
// }) {
//   const footballRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     if (footballRef.current) {

//       gsap.to(footballRef.current, {
//         y: -15,
//         repeat: -1,
//         yoyo: true,
//         duration: 1.2,
//         ease: "power1.inOut",
//       });
//     }
//   }, []);

//   return (
//     <img
//       ref={footballRef}
//       src="/images/football.webp"
//       alt="football animation"
//       className={className}
//     />
//   );
// }
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

    // Ek function jo random positions generate karega
    const animateRandomly = () => {
      gsap.to(footballRef.current, {
        // Window ki width/height ke andar kahin bhi random position (px mein)
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
        duration: Math.random() * 2 + 2, // 2 se 4 seconds ke beech random speed
        ease: "power1.inOut",
        onComplete: animateRandomly, // Jaise hi ek jagah pahuche, doosri jagah ke liye function phir chal jaye
      });
    };

    // Animation shuru karo
    animateRandomly();

    // Cleanup taaki component unmount hone par animation ruk jaye
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
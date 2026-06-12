
// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Link from "next/link";
// import Button from "../ui/Button";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Background Video Initial State (Aapka zoom effect)
//       gsap.fromTo(
//         ".video-bg",
//         { scale: 1.15 },
//         { scale: 1, duration: 2, ease: "power3.out" }
//       );

//       // Main Song-Lyrics Style Scroll Timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top top",     
//           end: "+=200%",        
//           scrub: 1,             
//           pin: true,            
//           anticipatePin: 1,
//         },
//       });

//       // Step-by-Step Song Lyrics Transition based on Scroll:
//       tl
//         // 1. Shuru mein Line 1 poori visible ho, baqi lines dim rahengi
//         .to(".line-1", { opacity: 1, y: 0, duration: 1 })
        
//         // 2. Scroll karne par Line 1 upar shift aur fade ho, Line 2 highlight ho
//         .to(".line-1", { y: -30, opacity: 0.2, duration: 1 }, "+=0.5")
//         .to(".line-2", { opacity: 1, y: 0, duration: 1 }, "<")
        
//         // 3. Mazeed scroll par Line 2 upar shift aur fade ho, Line 3 highlight ho
//         .to(".line-2", { y: -60, opacity: 0.2, duration: 1 }, "+=0.5")
//         .to(".line-3", { opacity: 1, y: 0, duration: 1 }, "<")
        
//         // 4. Teesri line bhi upar jaye aur sath hi paragraph aur buttons upar se reveal hon
//         .to(".line-3", { y: -90, opacity: 0.2, duration: 1 }, "+=0.5")
//         .to(".hero-details", { opacity: 1, y: -30, duration: 1 }, "<")

//         // 5. Akhir mein sab kuch screen se smoothly fade out ho jaye upar ki taraf
//         .to(".hero-content", { y: -100, opacity: 0, duration: 1.5 }, "+=0.5")

//         // Parallel Background Parallax & Indicator Fade
//         .to(".video-bg", { yPercent: 15, scale: 1.05, ease: "none" }, 0)
//         .to(".scroll-indicator", { opacity: 0, y: -20, ease: "none" }, 0);

//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative min-h-screen overflow-hidden bg-black"
//     >
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="video-bg absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/hero2.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent" />

//       {/* Content */}
//       <div className="hero-content relative z-10 container mx-auto px-6 min-h-screen flex items-center">
//         <div className="max-w-5xl w-full flex flex-col justify-center">
          
//           {/* Lyrical Typography Setup */}
//           <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex flex-col gap-3 origin-left">
//             {/* Shuru mein lines thodi niche (y: 20) aur dim hain, scroll karne par active hongi */}
//             <span className="line-1 block transform translate-y-5 opacity-40 transition-all duration-200">
//               Premium Custom
//             </span>
//             <span className="line-2 block text-blue-400 transform translate-y-5 opacity-20 transition-all duration-200">
//               Clothing Manufacturing
//             </span>
//             <span className="line-3 block transform translate-y-5 opacity-20 transition-all duration-200">
//               For Global Brands
//             </span>
//           </h1>

//           {/* Subtext and Buttons Group (Chupa hua hai, lines ke baad scroll se reveal hoga) */}
//           <div className="hero-details mt-12 opacity-0 transform translate-y-5">
//             <p className="hero-text text-xl text-gray-300 max-w-2xl">
//               From concept to production. We help fashion brands,
//               startups, sportswear companies and private labels
//               manufacture high-quality garments with low MOQ,
//               competitive pricing and worldwide shipping.
//             </p>

//             <div className="hero-buttons flex flex-wrap gap-4 mt-10">
//               <Link href="/get-quote">
//                 <Button>
//                   Get Free Quote
//                 </Button>
//               </Link>

//               <Link
//                 href="/portfolio"
//                 className="px-6 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition"
//               >
//                 View Portfolio
//               </Link>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Sirf background video ka initial zoom effect
      gsap.fromTo(
        ".video-bg",
        { scale: 1.15 },
        {
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="video-bg absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-5xl w-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex flex-col gap-3">
            <span>Premium Custom</span>

            <span className="text-blue-400">
              Clothing Manufacturing
            </span>

            <span>For Global Brands</span>
          </h1>

          <div className="mt-12">
            <p className="text-xl text-gray-300 max-w-2xl">
              From concept to production. We help fashion brands,
              startups, sportswear companies and private labels
              manufacture high-quality garments with low MOQ,
              competitive pricing and worldwide shipping.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/get-quote">
                <Button>
                  Get Free Quote
                </Button>
              </Link>

              <Link
                href="/portfolio"
                className="px-6 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
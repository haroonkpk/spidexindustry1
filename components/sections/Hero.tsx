
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
              <Link href="/get-quote" className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition">
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
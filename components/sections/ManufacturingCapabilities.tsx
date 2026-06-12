
"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { capabilities } from "../../data/site";
import SectionHeader from '../ui/SectionHeader';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ManufacturingCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.context use karne se saari animations component unmount par automatically clean ho jati hain memory leaks se bachane ke liye
    const ctx = gsap.context(() => {
      
      // 1. Title aur subtitle ka smoothly up-entrance animation
      gsap.fromTo(".section-header-anim", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out", stagger: 0.2 }
      );

      // 2. High performance ScrollTrigger batch processing card entry ke liye
      ScrollTrigger.batch(".streetwear-card", {
        interval: 0.1,
        batchMax: 3,
        onEnter: (elements) => {
          gsap.fromTo(elements,
            { opacity: 0, y: 60, scale: 0.98 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: 1.2, 
              ease: "power4.out", 
              stagger: 0.15,
              overwrite: "auto"
            }
          );
        },
        start: "top 88%",
        once: true
      });

      // 3. Card inner elements ke high-fidelity animations using pure GSAP engine
      const cards = gsap.utils.toArray<HTMLElement>('.streetwear-card');
      cards.forEach((card) => {
        const image = card.querySelector('.product-image-zoom');
        const arrow = card.querySelector('.arrow-rotate');
        const overlay = card.querySelector('.dark-overlay');
        const specLine = card.querySelector('.spec-line');

        card.addEventListener('mouseenter', () => {
          if (image) gsap.to(image, { scale: 1.08, filter: "grayscale(0%) contrast(100%)", duration: 0.6, ease: "power2.out" });
          if (arrow) gsap.to(arrow, { rotation: 45, x: 3, y: -3, scale: 1.1, duration: 0.4, ease: "back.out(2)" });
          if (overlay) gsap.to(overlay, { opacity: 0.1, duration: 0.4 });
          if (specLine) gsap.to(specLine, { x: 8, color: "#3b82f6", duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          if (image) gsap.to(image, { scale: 1, filter: "grayscale(100%) contrast(110%)", duration: 0.6, ease: "power2.out" });
          if (arrow) gsap.to(arrow, { rotation: 0, x: 0, y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
          if (overlay) gsap.to(overlay, { opacity: 0.4, duration: 0.4 });
          if (specLine) gsap.to(specLine, { x: 0, color: "#a1a1aa", duration: 0.3 });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className=" text-white py-24 md:py-32 font-sans overflow-hidden relative">
    
      <div className="absolute inset-0 opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
       <SectionHeader
 
  label="Built For Global Brands"
  title1="Manufacturing"
  title2="Without Limits"
  description="Advanced production facilities, skilled craftsmanship, and precision-driven quality control systems engineered to transform ambitious apparel concepts into premium products trusted by leading streetwear, sportswear, and private-label brands worldwide."
/>

        {/* Premium Streetwear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {capabilities.map((c: any, index: number) => {
            const targetLink = c.slug || c.href || `/capabilities/${c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            const imagePlaceholder = c.image || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop";

            return (
              <Link 
                href={targetLink} 
                key={c.id || index} 
                className="streetwear-card group flex flex-col h-full bg-zinc-900/40 border border-zinc-900 rounded-none overflow-hidden transition-all duration-500 hover:border-zinc-800 backdrop-blur-sm"
              >
                {/* Product/Fabric Showcase Display */}
              <div className="group relative aspect-[4/5] w-full bg-zinc-950 overflow-hidden border-b border-zinc-900">
  <img
    src={imagePlaceholder}
    alt={c.title}
    className="
      w-full h-full object-cover object-center
      transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-110
    "
    loading="lazy"
  />

  <div
    className="
      absolute inset-0 bg-white/0
      transition-all duration-700
      group-hover:bg-white/5
      pointer-events-none
    "
  />
</div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6 bg-black relative">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                      {c.title}
                    </h3>
                    <div className="arrow-rotate w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm font-normal leading-relaxed flex-grow">
                    {c.description}
                  </p>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
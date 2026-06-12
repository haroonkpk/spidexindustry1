"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { capabilities } from "../../data/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ManufacturingCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Center Header Entrance Animation
      gsap.fromTo(".section-header-anim", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 }
      );

      // 2. Streetwear Grid Cards Stagger Animation (ScrollTrigger)
      ScrollTrigger.batch(".streetwear-card", {
        interval: 0.1,
        batchMax: 3,
        onEnter: (elements) => {
          gsap.fromTo(elements,
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power4.out", stagger: 0.15 }
          );
        },
        once: true,
        start: "top 85%",
      });

      // 3. Hover Micro-Interactions for Clean Zoom & Rotation
      const cards = gsap.utils.toArray<HTMLElement>('.streetwear-card');
      cards.forEach((card) => {
        const image = card.querySelector('.product-image-zoom');
        const arrow = card.querySelector('.arrow-rotate');

        card.addEventListener('mouseenter', () => {
          if (image) gsap.to(image, { scale: 1.05, duration: 0.4, ease: "power2.out" });
          if (arrow) gsap.to(arrow, { rotation: 45, x: 2, y: -2, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          if (image) gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
          if (arrow) gsap.to(arrow, { rotation: 0, x: 0, y: 0, duration: 0.3 });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white text-zinc-900 py-20 md:py-28 font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section - Centered (Page ke mid mein text alignment) */}
        <div className="mb-20 max-w-3xl mx-auto text-center space-y-4">
          <div className="section-header-anim inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 border border-zinc-200 bg-zinc-50 px-3 py-1 rounded-none">
            Industrial Apparel Tech
          </div>
          <h2 className="section-header-anim text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Manufacturing Capabilities
          </h2>
          <p className="section-header-anim text-zinc-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Full service manufacturing across multiple product categories.
          </p>
        </div>

        {/* Premium Streetwear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {capabilities.map((c: any) => {
            // Dynamic URL generation (e.g., "/capabilities/hoodies")
            const targetLink = c.slug || c.href || `/capabilities/${c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            
            // Streetwear placeholders agar image link absent ho
            const imagePlaceholder = c.image || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop";

            return (
              <Link 
                href={targetLink} 
                key={c.id} 
                className="streetwear-card group flex flex-col h-full bg-zinc-50 border border-zinc-100 rounded-none overflow-hidden transition-all duration-300 hover:border-zinc-300 hover:shadow-sm"
              >
                {/* Product/Fabric Showcase Display */}
                <div className="relative aspect-[4/5] w-full bg-zinc-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  <img 
                    src={imagePlaceholder} 
                    alt={c.title}
                    className="product-image-zoom w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-white text-[10px] tracking-widest uppercase font-mono px-2.5 py-1 border border-zinc-200 text-zinc-500">
                    LINE-{c.id}09
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6 bg-white relative border-t border-zinc-100">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-900">
                      {c.title}
                    </h3>
                    <div className="arrow-rotate text-zinc-400 group-hover:text-zinc-900 transition-colors duration-200">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Aapki exact original description */}
                  <p className="text-zinc-500 text-sm font-normal leading-relaxed flex-grow">
                    {c.description}
                  </p>

                  {/* Tech/Industrial footer detail */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 text-[11px] font-mono tracking-wider text-zinc-400 uppercase group-hover:text-zinc-600 transition-colors">
                    // Open Specifications
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
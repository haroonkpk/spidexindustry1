"use client";

import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

export default function TeamShowcase() {
  return (
    <section className="mt-20">
    <SectionHeader
  label="Our Team"
  title1="The People Behind"
  title2="Every Product"
  description="Our skilled designers, technicians, and production specialists work together to ensure every product meets the highest standards of quality and craftsmanship."
/>

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:mt-12 sm:px-0">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
          {/* Team Group Photo */}
          <div className="relative h-[240px] w-full sm:h-[300px] md:h-[500px]">
            <Image
              src="/speedxteam.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-5 sm:p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Dedicated Professionals
              </h3>

              <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
                From concept development to final delivery, our experienced
                team ensures precision, quality, and customer satisfaction at
                every stage.
              </p>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid gap-5 p-5 sm:p-8 md:grid-cols-3 md:gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white sm:text-xl">
                Expert Workforce
              </h4>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Highly trained professionals with years of manufacturing
                experience.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white sm:text-xl">
                Quality Focused
              </h4>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Every product goes through strict quality control procedures.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white sm:text-xl">
                Global Standards
              </h4>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Delivering premium products for brands and businesses
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
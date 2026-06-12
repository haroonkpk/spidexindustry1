
"use client";

import SectionHeader from "../ui/SectionHeader";

export default function FactoryShowcase() {
  const areas = [
    {
      title: "Production Lines",
      video: "/machine1.mp4",
      description:
        "Advanced production lines designed for efficiency, consistency, and high-volume manufacturing.",
    },
    {
      title: "Sewing Units",
      video: "/sew2.mp4",
      description:
        "Skilled operators and modern machinery ensure precise stitching and durable garments.",
    },
      {
      title: "Cutting Area",
      video: "/cutting.mp4",
      description:
        "Precision cutting equipment ensures accurate fabric pieces for seamless assembly.",
    },
    {
      title: "Printing Area",
      video: "/printing1.mp4",
      description:
        "DTF, DTG, Screen Printing, and Sublimation facilities delivering vibrant results.",
    },
    {
      title: "Embroidery Department",
      video: "/embroidery1.mp4",
      description:
        "Premium embroidery machines producing clean, detailed, and long-lasting designs.",
    },
    {
      title: "Packing Department",
      video: "/packing.mp4",
      description:
        "Quality inspection, folding, packaging, and shipment preparation under one roof.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-custom relative z-10">
      <SectionHeader
  label="Factory"
  title1="Inside Our"
  title2="Production"
  description="From cutting and sewing to printing, embroidery, and packaging, every step is managed under strict quality standards."
/>

        <div className="grid lg:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Video */}
              <div className="relative h-[320px] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={area.video} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Number */}
                <div className="absolute top-5 right-5">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-400 leading-relaxed text-lg">
                  {area.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    View Process
                  </span>

                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-4xl font-bold text-primary">15+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-4xl font-bold text-primary">100K+</h3>
            <p className="text-gray-400 mt-2">Monthly Capacity</p>
          </div>

          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-4xl font-bold text-primary">50+</h3>
            <p className="text-gray-400 mt-2">Team Members</p>
          </div>

          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-4xl font-bold text-primary">100%</h3>
            <p className="text-gray-400 mt-2">Quality Checked</p>
          </div>
        </div>
      </div>
    </section>
  );
}
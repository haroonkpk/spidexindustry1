
import { services } from "../../data/site";
import ServiceCard from "../../components/cards/ServiceCard";
import FinalCTA from "../../components/sections/FinalCTA";

export const metadata = {
  title: "Services - Speedx Industry",
};

export default function Services() {
  return (
    <section className="bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback texture color if video fails to load */}
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-blue-950/70 z-10" />

        {/* Hero Content */}
        <div className="container relative py-20 z-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            Manufacturing Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-blue-100">
            Speedx Industry provides complete apparel manufacturing
            solutions for startups, fashion brands, wholesalers,
            sportswear companies, and private label businesses
            worldwide.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            What We Offer
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            From concept development to final delivery, we handle
            every stage of the manufacturing process with strict
            quality control and industry-leading expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>

      {/* Core Services */}
      <div className="bg-blue-50">
        <div className="container py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Core Manufacturing Solutions
            </h2>

            <p className="mt-4 text-slate-600">
              Professional services designed to help brands grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Custom Manufacturing",
                desc: "Fully customized apparel production based on your designs, measurements, fabrics, and specifications.",
              },
              {
                title: "OEM Manufacturing",
                desc: "End-to-end production solutions for brands looking to manufacture products under their own identity.",
              },
              {
                title: "Private Label",
                desc: "Custom neck labels, hang tags, packaging, and branding tailored to your business.",
              },
              {
                title: "Custom Packaging",
                desc: "Premium packaging solutions including poly bags, boxes, stickers, and inserts.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100"
              >
                <h3 className="text-xl font-semibold text-blue-800">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Printing & Decoration */}
      <div className="container py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Printing & Decoration Services
          </h2>

          <p className="mt-4 text-slate-600">
            High-quality branding and decoration methods for
            apparel and sportswear.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              title: "Embroidery",
              desc: "Premium embroidery with sharp detailing and long-lasting durability.",
            },
            {
              title: "Screen Printing",
              desc: "Cost-effective solution ideal for bulk orders and vibrant designs.",
            },
            {
              title: "DTF Printing",
              desc: "High-definition printing suitable for detailed graphics and full-color artwork.",
            },
            {
              title: "Sublimation",
              desc: "Perfect for sportswear with unlimited colors and all-over printing.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-800">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-slate-50">
        <div className="container py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Our Manufacturing Process
            </h2>

            <p className="mt-4 text-slate-600">
              A streamlined process ensuring quality and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mt-14">
            {[
              "Design Review",
              "Sampling",
              "Production",
              "Quality Control",
              "Packaging & Shipping",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container py-20">
        <div className="grid lg:grid-cols-4 gap-6">
          {[
            "Low MOQ Available",
            "Premium Quality Fabrics",
            "Worldwide Shipping",
            "Dedicated Client Support",
          ].map((item) => (
            <div
              key={item}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center"
            >
              <h3 className="font-semibold text-blue-800 text-lg">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <FinalCTA />
    </section>
  );
}
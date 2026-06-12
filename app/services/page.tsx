
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
      <div className="relative overflow-hidden bg-blue-900 text-white">
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
        <div className="container relative z-20 py-14 sm:py-20 lg:py-24">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Manufacturing Services
          </h1>

          <p className="mt-5 max-w-3xl text-base text-blue-100 sm:mt-6 sm:text-lg">
            Speedx Industry provides complete apparel manufacturing
            solutions for startups, fashion brands, wholesalers,
            sportswear companies, and private label businesses
            worldwide.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What We Offer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            From concept development to final delivery, we handle
            every stage of the manufacturing process with strict
            quality control and industry-leading expertise.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
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
        <div className="container py-14 sm:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Core Manufacturing Solutions
            </h2>

            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Professional services designed to help brands grow.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
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
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-lg font-semibold text-blue-800 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Printing & Decoration */}
      <div className="container py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Printing & Decoration Services
          </h2>

          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            High-quality branding and decoration methods for
            apparel and sportswear.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
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
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg sm:p-8"
            >
              <h3 className="text-lg font-semibold text-blue-800 sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-slate-50">
        <div className="container py-14 sm:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Manufacturing Process
            </h2>

            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              A streamlined process ensuring quality and efficiency.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-6">
            {[
              "Design Review",
              "Sampling",
              "Production",
              "Quality Control",
              "Packaging & Shipping",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white sm:h-14 sm:w-14 sm:text-lg">
                  {index + 1}
                </div>

                <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:mt-5 sm:text-base">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container py-14 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {[
            "Low MOQ Available",
            "Premium Quality Fabrics",
            "Worldwide Shipping",
            "Dedicated Client Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center sm:p-8"
            >
              <h3 className="text-base font-semibold text-blue-800 sm:text-lg">
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
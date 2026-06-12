"use clents"
import Image from "next/image";

export const metadata = {
  title: "Factory & Production - Speedx Industry",
};

const processSteps = [
  {
    step: "01",
    title: "Design",
    image: "/process/design.jpg",
    description:
      "Clients share concepts, sketches, references, or existing samples for development.",
  },
  {
    step: "02",
    title: "Tech Pack Review",
    image: "/process/tech-pack.jpg",
    description:
      "Our team reviews measurements, materials, trims, artwork, and production requirements.",
  },
  {
    step: "03",
    title: "Sampling",
    image: "/process/sampling.jpg",
    description:
      "Samples are produced and approved before moving into bulk production.",
  },
  {
    step: "04",
    title: "Production",
    image: "/process/production.jpg",
    description:
      "Bulk manufacturing begins using modern machinery and skilled operators.",
  },
  {
    step: "05",
    title: "QC Inspection",
    image: "/process/qc.jpg",
    description:
      "Every order undergoes strict quality control and inspection procedures.",
  },
  {
    step: "06",
    title: "Packaging",
    image: "/process/packaging.jpg",
    description:
      "Products are packed securely according to client branding requirements.",
  },
  {
    step: "07",
    title: "Shipping",
    image: "/process/shipping.jpg",
    description:
      "Orders are shipped worldwide using reliable logistics partners.",
  },
];

const departments = [
  {
    title: "Cutting Department",
    image: "/factory/cutting.jpg",
  },
  {
    title: "Sewing Department",
    image: "/factory/sewing.jpg",
  },
  {
    title: "Embroidery Department",
    image: "/factory/embroidery.jpg",
  },
  {
    title: "Printing Department",
    image: "/factory/printing.jpg",
  },
  {
    title: "Packing Area",
    image: "/factory/packing.jpg",
  },
  {
    title: "Warehouse",
    image: "/factory/warehouse.jpg",
  },
];

const machines = [
  {
    name: "Tajima Embroidery Machines",
    quantity: "8 Units",
    image: "/machinery/tajima.jpg",
  },
  {
    name: "Industrial Sewing Machines",
    quantity: "25 Units",
    image: "/machinery/sewing-machine.jpg",
  },
  {
    name: "Overlock Machines",
    quantity: "12 Units",
    image: "/machinery/overlock.jpg",
  },
  {
    name: "DTF Printers",
    quantity: "2 Units",
    image: "/machinery/dtf.jpg",
  },
  {
    name: "Heat Press Machines",
    quantity: "4 Units",
    image: "/machinery/heatpress.jpg",
  },
  {
    name: "Sublimation Setup",
    quantity: "3 Units",
    image: "/machinery/sublimation.jpg",
  },
];

const videos = [
  {
    title: "Sewing Process",
    src: "/videos/sewing.mp4",
  },
  {
    title: "Embroidery Running",
    src: "/videos/embroidery.mp4",
  },
  {
    title: "DTF Printing",
    src: "/videos/dtf.mp4",
  },
  {
    title: "Packaging Process",
    src: "/videos/packaging.mp4",
  },
];

export default function FactoryProductionPage() {
  return (
    <section className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container py-24">
          <h1 className="text-4xl md:text-5xl font-bold">
            Factory & Production
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-blue-100">
            Explore our manufacturing facility, production process,
            machinery, quality control systems, and factory operations
            that help us deliver premium garments worldwide.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-50">
        <div className="container py-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-700">10+</h3>
              <p className="mt-2 text-slate-600">Years Experience</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-700">40+</h3>
              <p className="mt-2 text-slate-600">Skilled Workers</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-700">25,000+</h3>
              <p className="mt-2 text-slate-600">
                Monthly Capacity
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-blue-700">20+</h3>
              <p className="mt-2 text-slate-600">
                Countries Served
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Process */}
      <div className="container py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Manufacturing Process
          </h2>

          <p className="mt-4 text-slate-600">
            A transparent production workflow trusted by brands
            worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="text-blue-700 font-bold text-sm">
                  STEP {item.step}
                </span>

                <h3 className="text-2xl font-semibold mt-2">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Factory Gallery */}
      <div className="bg-slate-50">
        <div className="container py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Factory Gallery
            </h2>

            <p className="mt-4 text-slate-600">
              Inside our production facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-72">
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {dept.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Machinery */}
      <div className="container py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Machinery & Equipment
          </h2>

          <p className="mt-4 text-slate-600">
            Modern machinery ensuring precision and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {machines.map((machine) => (
            <div
              key={machine.name}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-72">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {machine.name}
                </h3>

                <p className="mt-3 text-blue-700 font-medium">
                  Quantity: {machine.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Production Videos */}
      <div className="bg-blue-50">
        <div className="container py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Production Videos
            </h2>

            <p className="mt-4 text-slate-600">
              Watch our production process in action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {videos.map((video) => (
              <div
                key={video.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <video
                  controls
                  className="w-full h-80 object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                <div className="p-6">
                  <h3 className="font-semibold text-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Factory Information */}
      <div className="container py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">
              Factory Information
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li>📍 Location: Sialkot, Pakistan</li>
              <li>🏭 Factory Size: 10,000+ Sq Ft</li>
              <li>👥 Workforce: 40+ Employees</li>
              <li>📦 Capacity: 25,000+ Pieces Monthly</li>
              <li>🌎 Export Markets Worldwide</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">
              Quality Assurance
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li>✓ Fabric Inspection</li>
              <li>✓ In-Line Inspection</li>
              <li>✓ AQL Quality Control</li>
              <li>✓ Final Product Check</li>
              <li>✓ Secure Packaging</li>
              <li>✓ Shipment Verification</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-900 text-white">
        <div className="container py-24 text-center">
          <h2 className="text-4xl font-bold">
            Ready To Start Your Project?
          </h2>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto">
            Partner with Speedx Industry for reliable apparel
            manufacturing, premium quality products, and worldwide
            delivery.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-100 transition">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}



import Image from "next/image";
import FinalCTA from "../../components/sections/FinalCTA";

export const metadata = {
  title: "About Us - Speedx Industry",
};

const teamMembers = [
  {
    name: "Muhammad Ali",
    role: "Chief Executive Officer",
    image: "/team/ceo.jpg",
  },
  {
    name: "Ahmed Khan",
    role: "Production Manager",
    image: "/team/production-manager.jpg",
  },
  {
    name: "Usman Tariq",
    role: "Quality Control Manager",
    image: "/team/qc-manager.jpg",
  },
  {
    name: "Sales Team",
    role: "International Client Support",
    image: "/team/sales-team.jpg",
  },
];

export default function About() {
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
          <source src="/hero2.mp4" type="video/mp4" />
          {/* Fallback color if video fails to load */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-950/70 z-10" />

        {/* Hero Content */}
        <div className="container relative py-20 z-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Speedx Industry
          </h1>

          <p className="mt-6 max-w-3xl text-blue-100 text-lg">
            Speedx Industry is a trusted clothing manufacturing company
            specializing in premium custom apparel, private label production,
            OEM manufacturing, and worldwide export solutions for brands,
            startups, and wholesalers.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Our Story
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Speedx Industry was founded with a vision to provide premium
              quality garment manufacturing services to brands worldwide.
              Through years of dedication, innovation, and continuous
              improvement, we have built a reputation for delivering
              high-quality products, reliable production timelines, and
              exceptional customer service.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Today we proudly serve international clothing brands, startups,
              sportswear companies, gym wear labels, and fashion businesses
              seeking dependable manufacturing partners.
            </p>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/factory/factory-main.jpg"
              alt="Speedx Industry Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-50">
        <div className="container py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold text-blue-700">10+</h3>
              <p className="mt-2 text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold text-blue-700">
                25,000+
              </h3>
              <p className="mt-2 text-slate-600">
                Monthly Production Capacity
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold text-blue-700">40+</h3>
              <p className="mt-2 text-slate-600">
                Skilled Workers
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-4xl font-bold text-blue-700">20+</h3>
              <p className="mt-2 text-slate-600">
                Countries Served
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Factory Information */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Factory Information
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li>
                📍 Location: Sialkot, Pakistan
              </li>

              <li>
                🏭 Factory Size: 10,000+ sq ft
              </li>

              <li>
                👥 Workforce: 40+ Skilled Professionals
              </li>

              <li>
                📦 Monthly Capacity: 25,000+ Pieces
              </li>

              <li>
                🌍 Export Markets: USA, UK, Europe,
                Australia & Middle East
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Quality Standards
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li>✓ Fabric Inspection</li>
              <li>✓ In-Line Quality Control</li>
              <li>✓ AQL Sampling Inspection</li>
              <li>✓ Final Product Verification</li>
              <li>✓ Secure Packaging Standards</li>
              <li>✓ International Shipping Compliance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-slate-50">
        <div className="container py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Meet Our Team
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Our experienced team ensures smooth production,
              strict quality control, and professional customer
              support for every project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-72">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-slate-900">
                    {member.name}
                  </h3>

                  <p className="text-blue-700 mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
     <FinalCTA/>
    </section>
  );
}
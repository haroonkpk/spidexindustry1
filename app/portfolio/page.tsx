import PortfolioPreview from "../../components/sections/PortfolioPreview";

export const metadata = { title: "Portfolio - Manufacturing Work" };

const videoReviews = [
  {
    name: "Sportswear Brand UK",
    video: "/videos/review1.mp4",
  },
  {
    name: "Local Client Karachi",
    video: "/videos/review2.mp4",
  },
  {
    name: "Fitness Apparel Startup",
    video: "/videos/review3.mp4",
  },
];

export default function Portfolio() {
  return (
    <section className="container py-16 space-y-16">

      {/* Hero Section */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-slate-900">
          Our Manufacturing Portfolio
        </h1>
        <p className="muted max-w-3xl mx-auto">
          Premium sportswear, hoodies, jerseys, and custom apparel
          manufactured for local and international clients.
        </p>
      </div>

      {/* Portfolio Section */}
      <div>
        <PortfolioPreview full />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="muted">Completed Orders</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-2xl font-bold">100+</h3>
          <p className="muted">Happy Clients</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-2xl font-bold">5+ Years</h3>
          <p className="muted">Manufacturing Experience</p>
        </div>
      </div>

      {/* VIDEO TESTIMONIALS SECTION */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Client Video Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoReviews.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              {/* Video */}
              <video
                className="w-full h-64 object-cover"
                controls
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support video.
              </video>

              {/* Name */}
              <div className="p-4 text-center">
                <p className="font-semibold text-slate-900">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-slate-900 text-white p-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">
          Want Similar Manufacturing for Your Brand?
        </h2>
        <p className="opacity-80 mb-4">
          Contact us today and turn your ideas into premium apparel.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold"
        >
          Get a Quote
        </a>
      </div>

    </section>
  );
}
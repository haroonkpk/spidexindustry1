import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-white py-16">
      <div className="container text-center">
       {/* CTA */}
      <div className="bg-blue-900 text-white">
        <div className="container py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready To Start Your Project?
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-blue-100">
            Contact our team today and receive a custom quotation
            tailored to your product specifications and production
            requirements.
          </p>

          <button className="mt-8 px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-100 transition">
            Request a Quote
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

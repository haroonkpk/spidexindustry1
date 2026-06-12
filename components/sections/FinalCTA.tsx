import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-white py-16">
      <div className="container text-center">
       {/* CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            Ready To Start Your Clothing Brand?
          </h3>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Partner with a trusted manufacturing company and bring
            your designs to life with premium quality production.
          </p>

          <a
            href="/get-quote"
            className="inline-flex mt-6 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-slate-100 transition"
          >
            Request Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

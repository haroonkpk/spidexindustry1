
export const metadata = { title: "Contact - Manufacturing" };

export default function Contact() {
  return (
    <section className="bg-white">

      <div className="container py-16">

        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold text-slate-900">
            Contact Us
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Reach out for quotations, production details, or collaboration.
            We usually respond within 24 hours.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10">

          {/* LEFT - INFO CARD */}
          <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8">

            <h3 className="text-lg font-semibold text-slate-900">
              Company Information
            </h3>

            <div className="mt-6 space-y-5 text-slate-700">

              {/* WhatsApp */}
              <div className="flex justify-between items-start">
                <span className="text-slate-500">WhatsApp</span>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  className="text-green-600 font-semibold hover:underline"
                >
                  +92 300 1234567
                </a>
              </div>

              {/* Email */}
              <div className="flex justify-between items-start">
                <span className="text-slate-500">Email</span>
                <a
                  href="mailto:sales@yourbrand.com"
                  className="text-sky-600 font-semibold hover:underline"
                >
                  sales@yourbrand.com
                </a>
              </div>

              {/* Address */}
              <div className="flex justify-between items-start">
                <span className="text-slate-500">Address</span>
                <span className="text-right">
                  Industrial Area, Karachi, Pakistan
                </span>
              </div>

              {/* Business */}
              <div className="flex justify-between items-start">
                <span className="text-slate-500">Business</span>
                <span className="text-right">
                  Clothing Manufacturing & Production
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                className="flex-1 text-center bg-green-500 text-white py-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition"
              >
                WhatsApp
              </a>

              <a
                href="mailto:sales@yourbrand.com"
                className="flex-1 text-center bg-sky-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-sky-700 transition"
              >
                Email
              </a>

            </div>
          </div>

          {/* RIGHT - MAP CARD */}
          <div className="rounded-3xl border border-sky-100 overflow-hidden bg-white shadow-sm">

            {/* Map Header */}
            <div className="bg-sky-600 px-6 py-4">
              <h3 className="text-white font-semibold">
                Our Location
              </h3>
              <p className="text-sky-100 text-sm">
                Visit our manufacturing facility
              </p>
            </div>

            {/* Map */}
            <iframe
              className="w-full h-[420px]"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115816.0!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
            ></iframe>

            {/* Footer note */}
            <div className="p-5 bg-slate-50 text-sm text-slate-500">
              Fully equipped garment manufacturing unit based in Karachi.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
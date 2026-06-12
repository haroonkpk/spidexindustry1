import SectionHeader from "../ui/SectionHeader";

export default function ProcessTimeline() {
  const steps = [
    "Consultation",
    "Design Review",
    "Sampling",
    "Production",
    "Quality Inspection",
    "Packaging",
    "Worldwide Delivery",
  ];

  return (
    <section className="mt-16">
     <SectionHeader
  label="Process"
  title1="Manufacturing"
  title2="Journey"
  description="From concept to delivery, every step is carefully managed to ensure premium quality and customer satisfaction."
/>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-primary/20"></div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={step}
              className="relative flex items-center gap-6 group"
            >
              {/* Number Circle */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold shadow-lg">
                {idx + 1}
              </div>

              {/* Content Card */}
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:translate-x-2">
                <h3 className="text-lg font-semibold text-white">
                  {step}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {step === "Consultation" &&
                    "Discuss requirements, goals, and project expectations."}

                  {step === "Design Review" &&
                    "Review artwork, specifications, and branding details."}

                  {step === "Sampling" &&
                    "Create samples to ensure quality and approval."}

                  {step === "Production" &&
                    "Manufacture products using premium materials and processes."}

                  {step === "Quality Inspection" &&
                    "Perform strict quality checks before packaging."}

                  {step === "Packaging" &&
                    "Securely pack products for safe transportation."}

                  {step === "Worldwide Delivery" &&
                    "Ship products globally with reliable logistics partners."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  ShieldCheckIcon,
  GlobeAltIcon,
  ClockIcon,
  BuildingOffice2Icon,
  CubeTransparentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Low MOQ",
      description:
        "Start your clothing brand with flexible minimum order quantities tailored for startups and growing businesses.",
      icon: CubeTransparentIcon,
    },
    {
      title: "Private Label",
      description:
        "Custom neck labels, hang tags, packaging, and branding solutions to build your own identity.",
      icon: BuildingOffice2Icon,
    },
    {
      title: "Quality Inspection",
      description:
        "Every order passes through strict quality control checkpoints before shipment.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Global Shipping",
      description:
        "Reliable worldwide delivery with complete export documentation and tracking support.",
      icon: GlobeAltIcon,
    },
    {
      title: "Fast Turnaround",
      description:
        "Efficient production processes ensure timely manufacturing and delivery schedules.",
      icon: ClockIcon,
    },
    {
      title: "Dedicated Production Team",
      description:
        "A dedicated account manager and production team guide your project from start to finish.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
        

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Trusted Manufacturing Partner
            <span className="block text-blue-600">
              For Growing Clothing Brands
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            We help startups, established brands, and wholesalers manufacture
            premium-quality apparel with reliable production, quality control,
            and worldwide logistics support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 text-blue-600 font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-slate-600 mt-2">Projects Completed</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
            <p className="text-slate-600 mt-2">Countries Served</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-slate-600 mt-2">Quality Satisfaction</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm border">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-slate-600 mt-2">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
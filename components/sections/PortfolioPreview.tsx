
import Image from "next/image";
import { portfolio } from "../../data/site";
import SectionHeader from "../ui/SectionHeader";
type Props = {
  full?: boolean;
};

export default function PortfolioPreview({ full = false }: Props) {
  const items = full ? portfolio : portfolio.slice(0, 6);

  return (
    <section className="mt-20">

      {/* Header */}
      <SectionHeader
        label="Our Work"
        title1="Portfolio"
        title2="Showcase"
        description="A collection of premium apparel projects crafted for global brands with precision, creativity, and high-end manufacturing standards."
      />

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((p) => (
          <div
            key={p.id}
            className="group border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {p.title}
              </h4>

              <p className="text-gray-400 mt-2 text-sm">
                {p.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
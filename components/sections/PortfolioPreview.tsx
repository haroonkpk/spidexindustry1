import Image from "next/image";
import { portfolio } from "../../data/site";

export default function PortfolioPreview({ full = false }: { full?: boolean }) {
  const items = full ? portfolio : portfolio.slice(0, 6);
  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((p) => (
          <div key={p.id} className="border rounded overflow-hidden">
            <Image
              src={p.image}
              alt={p.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-primary">{p.title}</h4>
              <p className="muted mt-2">{p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

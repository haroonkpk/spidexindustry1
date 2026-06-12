import Link from "next/link";
import { productCategories } from "../../data/site";
import * as CategoryIcons from "../../components/ui/CategoryIcons";

export const metadata = { title: "Product Categories" };

export default function ProductCategoriesPage() {
  return (
    <section className="container py-16">
      <h1 className="section-heading">Product Categories</h1>
      <p className="muted max-w-3xl">Explore our product ranges and subcategories.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productCategories.map((cat) => {
          const Icon = (CategoryIcons as any)[cat.icon];
          return (
            <Link key={cat.id} href={cat.href} className="group block rounded-lg border p-4 hover:shadow-lg">
              <div className="flex items-center gap-3">
                {Icon ? <Icon className="h-8 w-8 text-primary" /> : null}
                <div>
                  <h3 className="font-semibold">{cat.label}</h3>
                  <p className="text-sm text-slate-500 mt-1">{cat.sub?.length ?? 0} subcategories</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

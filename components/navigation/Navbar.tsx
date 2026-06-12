
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { productCategories } from "../../data/site";
import * as CategoryIcons from "../ui/CategoryIcons";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
   { href: "/factory-production", label: "Poduction" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/product-categories", label: "Product Categories" },
  { href: "/pricing-calculator", label: "Calculator", accent: true },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [hoveredCat, setHoveredCat] = useState<string | null>(
    productCategories[0]?.id ?? null
  );
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);

  useEffect(() => {
    const active = productCategories.find((c) => c.id === hoveredCat);
    setHoveredSub(active?.sub?.[0]?.href ?? null);
  }, [hoveredCat]);

  const linkClass = (href: string, accent?: boolean) => {
    const isActive = pathname === href;

    return `
      flex items-center gap-1
      whitespace-nowrap
      rounded-md px-3 py-2 text-sm transition-colors
      ${isActive ? "font-semibold text-primary" : "text-slate-700 hover:text-primary"}
      ${
        accent
          ? "border border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100"
          : ""
      }
    `;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.svg" alt="logo" width={160} height={40} />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-2 flex-nowrap">
          {navLinks.map((link) =>
            link.href === "/product-categories" ? (
              <div key="product-categories" className="relative group">
                
                {/* Dropdown Button */}
                <Link
                  href="/product-categories"
                  className={`${linkClass(link.href, link.accent)} group`}
                >
                  {link.label}
                  <ChevronDownIcon className="w-4 h-4 text-slate-500 transition-transform group-hover:rotate-180" />
                </Link>

                {/* DROPDOWN */}
                <div className="invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto absolute left-0 mt-2 w-[720px] rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition-all duration-200">
                  
                  <div className="flex">
                    
                    {/* LEFT CATEGORIES */}
                    <div className="w-56 border-r p-4">
                      {productCategories.map((cat) => {
                        const Icon = (CategoryIcons as any)[cat.icon];
                        const isActive = hoveredCat === cat.id;

                        return (
                          <button
                            key={cat.id}
                            onMouseEnter={() => {
                              setHoveredCat(cat.id);
                              setHoveredSub(cat.sub?.[0]?.href ?? null);
                            }}
                            className={`flex w-full items-center gap-3 rounded px-2 py-2 text-left text-sm ${
                              isActive ? "bg-slate-50" : "hover:bg-slate-50"
                            }`}
                          >
                            {Icon && (
                              <Icon
                                className={`h-5 w-5 ${
                                  isActive
                                    ? "text-primary"
                                    : "text-slate-500"
                                }`}
                              />
                            )}
                            <span className="font-medium text-slate-900">
                              {cat.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* MIDDLE SUBCATEGORIES */}
                    <div className="flex-1 p-4">
                      {productCategories.map((cat) => {
                        if (cat.id !== hoveredCat) return null;

                        return (
                          <div key={cat.id} className="flex gap-6">
                            <div className="w-1/2">
                              <h4 className="text-sm font-semibold mb-2">
                                {cat.label}
                              </h4>

                              <div className="flex flex-col gap-1">
                                {cat.sub.map((s) => (
                                  <button
                                    key={s.href}
                                    onMouseEnter={() => setHoveredSub(s.href)}
                                    className={`text-left text-sm px-2 py-2 rounded ${
                                      hoveredSub === s.href
                                        ? "bg-slate-50 font-semibold text-primary"
                                        : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                    }`}
                                  >
                                    {s.label}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* DETAILS */}
                            <div className="w-1/2">
                              <h5 className="text-sm font-medium mb-2">
                                Details
                              </h5>

                              <div className="flex flex-col gap-2">
                                {cat.sub
                                  .find((ss) => ss.href === hoveredSub)
                                  ?.sub?.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="text-sm text-slate-600 hover:text-primary"
                                    >
                                      {item.label}
                                    </Link>
                                  )) ?? (
                                  <p className="text-sm text-slate-500">
                                    Select a subcategory
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(link.href, link.accent)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border rounded"
          >
            ☰
          </button>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link className="px-3 py-2 text-sm border rounded" href="/login">
            Login
          </Link>
          <Link className="px-3 py-2 text-sm border rounded" href="/signup">
            Sign Up
          </Link>
          <Link className="px-3 py-2 text-sm bg-primary text-white rounded" href="/get-quote">
            Request Quote
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
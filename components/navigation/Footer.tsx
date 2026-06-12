import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h4 className="font-semibold text-primary">SPEEDX INDUSTRY</h4>
          <p className="muted">
            Trusted manufacturing partner for global apparel brands.
          </p>
        </div>
        <div className="flex gap-6">
          <div>
            <h5 className="font-semibold">Products</h5>
            <ul className="muted mt-2">
              <li>T-Shirts</li>
              <li>Hoodies</li>
              <li>Sportswear</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Company</h5>
            <ul className="muted mt-2">
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white border-t py-4">
        <div className="container text-sm muted">
          © {new Date().getFullYear()} Speedx Industry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

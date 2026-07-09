import Link from "next/link";

const shopLinks = [
  { name: "Kurtas & Tunics", href: "#" },
  { name: "Dresses & Gowns", href: "#" },
  { name: "Ethnic Sets", href: "#" },
  { name: "Bottoms & Leggings", href: "#" },
  { name: "Bags & Accessories", href: "#" },
  { name: "Best Sellers", href: "#" },
];

const helpLinks = [
  { name: "Shipping Information", href: "#" },
  { name: "Size Guide", href: "#" },
  { name: "Easy Returns & Exchanges", href: "#" },
  { name: "Track Your Order", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#6b1d2b] text-[#faf6f1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-serif font-bold tracking-wide bg-gradient-to-r from-[#faf6f1] to-[#c9a86c] bg-clip-text text-transparent">
              ZOROVA
            </span>
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs font-sans">
              Curated ethnic & contemporary womenswear by ZOROVA. Designed for the modern
              Indian woman who values grace, quality, and timeless style.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#c9a86c] mb-4 font-sans">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#c9a86c] mb-4 font-sans">
              Help & Policies
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-[#c9a86c] mb-4 font-sans">
              Contact Us
            </h4>
            <p className="text-sm text-white/60 mb-1 leading-relaxed font-sans">
              Phone:
            </p>
            <a
              href="tel:+919113564990"
              className="text-sm text-white hover:text-[#c9a86c] transition-colors font-sans"
            >
              9113564990
            </a>
            <p className="text-sm text-white/60 mt-4 mb-1 leading-relaxed font-sans">
              Email:
            </p>
            <a
              href="mailto:Bindulakshmish6@gmail.com"
              className="text-sm text-white hover:text-[#c9a86c] transition-colors font-sans"
            >
              Bindulakshmish6@gmail.com
            </a>
            <p className="text-sm text-white/60 mt-4 mb-1 leading-relaxed font-sans">
              Address:
            </p>
            <p className="text-sm text-white/80 leading-relaxed font-sans">
              Sapthagiri, Maruthi Circle, near Nataraja Oil Mill Road, Agrahara, Tumkur 572101
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-sans">
            &copy; {new Date().getFullYear()} ZOROVA. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-sans"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-sans"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
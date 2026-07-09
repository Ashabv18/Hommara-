import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[80vh] min-h-[550px] max-h-[900px] bg-[#6b1d2b] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1920&q=90&fit=crop&ar=16:9)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b1d2b]/80 via-[#6b1d2b]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <p className="text-[#c9a86c] text-sm tracking-[0.15em] uppercase mb-4 font-sans">
            Élysée Summer Collection 2026
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Timeless
            <br />
            <span className="text-[#c9a86c]">Elegance</span>
          </h1>
          <p className="mt-4 text-base text-white/70 max-w-md leading-relaxed font-sans">
            Discover handcrafted ethnic & contemporary womenswear. 
            Each piece celebrates the grace of the modern Indian woman.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#c9a86c] text-white hover:bg-[#c9a86c]/90 shadow-lg text-xs tracking-[0.12em] uppercase font-semibold h-12 px-10"
            >
              <Link href="/category/new-arrivals">Shop New Arrivals</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 shadow-none text-xs tracking-[0.12em] uppercase font-semibold h-12 px-10"
            >
              <Link href="/category/best-sellers">Best Sellers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
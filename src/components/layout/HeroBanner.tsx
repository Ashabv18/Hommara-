import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[80vh] min-h-[500px] sm:min-h-[550px] max-h-[900px] bg-[#6b1d2b] overflow-hidden">
      {/* Mobile: object-contain shows the FULL image without cropping */}
      <Image
        src="/pv.png"
        alt=""
        fill
        priority
        className="sm:hidden object-contain object-top bg-[#6b1d2b]"
        sizes="100vw"
      />

      {/* Desktop/Tablet: object-cover fills the space like a traditional hero */}
      <Image
        src="/pv.png"
        alt=""
        fill
        priority
        className="hidden sm:block object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay - stronger at bottom on mobile for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#6b1d2b]/90 via-[#6b1d2b]/60 sm:bg-gradient-to-r sm:from-[#6b1d2b]/80 sm:via-[#6b1d2b]/50 sm:to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative h-full mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex items-end sm:items-center pb-12 sm:pb-0">
        <div className="max-w-xl w-full sm:w-auto">
          <p className="text-[#c9a86c] text-xs sm:text-sm tracking-[0.15em] uppercase mb-3 sm:mb-4 font-sans">
            Zorova Summer Collection 2026
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Timeless
            <br />
            <span className="text-[#c9a86c]">Elegance</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 sm:text-white/70 max-w-md leading-relaxed font-sans">
            Discover handcrafted ethnic & contemporary womenswear. 
            Each piece celebrates the grace of the modern Indian woman.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#c9a86c] text-white hover:bg-[#c9a86c]/90 shadow-lg text-xs tracking-[0.12em] uppercase font-semibold h-12 px-8 sm:px-10 w-full sm:w-auto"
            >
              <Link href="/category/new-arrivals">Shop New Arrivals</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-red:bg-white/10 shadow-none text-xs tracking-[0.12em] uppercase font-semibold h-12 px-8 sm:px-10 w-full sm:w-auto"
            >
              <Link href="/category/best-sellers">Best Sellers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
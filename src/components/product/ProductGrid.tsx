"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="py-16 sm:py-20 bg-[#faf6f1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
            Summer Edit
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#6b1d2b]">
            Our Best Sellers
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a86c] mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
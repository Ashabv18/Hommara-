"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ArrowLeft } from "lucide-react";

// Map subcategory slugs to the product.category field value
const subcategoryNameMap: Record<string, string> = {
  "kurtas": "Kurtas & Tunics",
  "tunics": "Kurtas & Tunics",
  "dresses": "Dresses & Gowns",
  "gowns": "Dresses & Gowns",
  "ethnic-sets": "Ethnic Sets",
  "bottoms": "Bottoms",
  "accessories": "Accessories",
  "summer-florals": "Summer Florals",
  "festive-edit": "Festive Edit",
  "daily-grace": "Daily Grace",
  "evening-luxe": "Evening Luxe",
};

// Map subcategory slugs to display names
const displayNameMap: Record<string, string> = {
  "kurtas": "Kurtas & Tunics",
  "tunics": "Kurtas & Tunics",
  "dresses": "Dresses & Gowns",
  "gowns": "Dresses & Gowns",
  "ethnic-sets": "Ethnic Sets",
  "bottoms": "Bottoms",
  "accessories": "Accessories",
  "summer-florals": "Summer Florals",
  "festive-edit": "Festive Edit",
  "daily-grace": "Daily Grace",
  "evening-luxe": "Evening Luxe",
  "new-arrivals": "New Arrivals",
  "best-sellers": "Best Sellers",
  "women": "Women",
  "collections": "Collections",
};

function getCategoryName(slug: string): string {
  return displayNameMap[slug] ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function filterProductsBySlug(productsList: typeof products, slug: string) {
  const categoryFilter = subcategoryNameMap[slug];
  if (categoryFilter) {
    return productsList.filter((p) => p.category === categoryFilter);
  }
  if (slug === "new-arrivals") return productsList.filter((p) => p.badge === "New");
  if (slug === "best-sellers") return productsList.filter((p) => p.badge === "Sale" || p.badge === "New");
  if (slug === "summer-florals")
    return productsList.filter(
      (p) =>
        p.category === "Summer Florals" ||
        p.name.toLowerCase().includes("floral") ||
        p.name.toLowerCase().includes("summer")
    );
  if (slug === "festive-edit")
    return productsList.filter(
      (p) =>
        p.category === "Festive Edit" ||
        p.name.toLowerCase().includes("festive") ||
        p.name.toLowerCase().includes("bandhani") ||
        p.name.toLowerCase().includes("lehenga")
    );
  if (slug === "daily-grace")
    return productsList.filter(
      (p) =>
        p.category === "Daily Grace" ||
        p.name.toLowerCase().includes("cotton") ||
        p.name.toLowerCase().includes("straight") ||
        p.name.toLowerCase().includes("simple")
    );
  if (slug === "evening-luxe")
    return productsList.filter(
      (p) =>
        p.category === "Evening Luxe" ||
        p.name.toLowerCase().includes("evening") ||
        p.name.toLowerCase().includes("gown") ||
        p.name.toLowerCase().includes("luxe")
    );
  // Fallback: try matching against product category or name
  return productsList.filter((p) =>
    p.category.toLowerCase().includes(slug.replace(/-/g, " "))
  );
}

export default function CategoryPage() {
  const params = useParams();
  const slugs = params?.slug as string[] | undefined;

  // Default to showing all products if no slug
  if (!slugs || slugs.length === 0) {
    return (
      <section className="py-16 sm:py-20 bg-[#faf6f1] min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors mb-8 font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#6b1d2b]">
              All Products
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a86c] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // For nested paths like /category/women/kurtas, use the last segment
  const activeSlug = slugs[slugs.length - 1];
  const categoryName = getCategoryName(activeSlug);
  const categoryProducts = filterProductsBySlug(products, activeSlug);

  return (
    <section className="py-16 sm:py-20 bg-[#faf6f1] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
            HOMMARA
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#6b1d2b]">
            {categoryName}
          </h1>
          <div className="w-16 h-0.5 bg-[#c9a86c] mx-auto mt-4" />
          <p className="mt-4 text-sm text-neutral-500 font-sans">
            {categoryProducts.length} {categoryProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Product Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-400 font-sans text-lg">No products found in this category.</p>
            <Link
              href="/"
              className="inline-block mt-6 text-sm uppercase tracking-[0.12em] text-[#c9a86c] hover:text-[#b8955a] transition-colors font-sans font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
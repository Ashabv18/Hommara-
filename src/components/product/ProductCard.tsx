"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export default function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "M", selectedColor);
    setCartOpen(true);
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block text-center"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#ebeced] overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge
              variant={
                product.badge === "Sale"
                  ? "sale"
                  : product.badge === "Sold Out"
                  ? "sold"
                  : "new"
              }
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Quick Add Button */}
        {!product.isSoldOut && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm py-3 text-center text-[11px] font-semibold tracking-[0.1em] uppercase text-[#6b1d2b] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full shadow-lg"
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="px-1">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#6b1d2b]/50 mb-1 font-sans">
          {product.category}
        </p>
        <h3 className="font-serif text-lg font-semibold text-[#6b1d2b]">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="text-sm font-medium text-[#6b1d2b]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#6b1d2b]/40 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {product.colors.map((color) => (
              <button
                key={color.hex}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                className={`h-3.5 w-3.5 rounded-full border-2 transition-all ${
                  selectedColor.hex === color.hex
                    ? "border-[#6b1d2b] scale-110"
                    : "border-transparent hover:border-[#6b1d2b]/40"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={`Select ${color.name} color`}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
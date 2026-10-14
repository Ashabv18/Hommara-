"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useCart } from "@/lib/cart-context";

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addItem, setCartOpen } = useCart();

  // When a color with an imageUrl is selected, show that color's image
  const colorVariantIndex = selectedColor.imageUrl
    ? product.images.findIndex((img) => img === selectedColor.imageUrl)
    : -1;
  const effectiveImageIndex = colorVariantIndex >= 0 ? colorVariantIndex : selectedImageIndex;

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-[#6b1d2b]/50 hover:text-[#6b1d2b] transition-colors font-sans"
        >
          <ChevronLeft className="h-3 w-3" />
          Back to Shop
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnail Strip */}
            <div className="hidden sm:flex flex-col gap-2 w-20">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`aspect-[3/4] w-full bg-[#ebeced] overflow-hidden border-2 transition-all rounded-none ${
                    selectedImageIndex === idx
                      ? "border-[#6b1d2b]"
                      : "border-transparent hover:border-[#6b1d2b]/30"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] bg-[#ebeced] overflow-hidden">
              <img
                src={product.images[effectiveImageIndex]}
                alt={`${product.name} - ${selectedColor.name}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Product Details (sticky) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Category & Badge */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#6b1d2b]/50 font-sans">
                {product.category}
              </span>
              {product.badge && (
                <Badge
                  variant={
                    product.badge === "Sale"
                      ? "sale"
                      : product.badge === "New"
                      ? "new"
                      : "default"
                  }
                >
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#6b1d2b] leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl font-semibold text-[#6b1d2b]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#6b1d2b]/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-[#6b1d2b]/70 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="mt-8">
              <span className="text-xs font-medium text-[#6b1d2b] uppercase tracking-[0.1em] font-sans">
                Color: <span className="text-[#6b1d2b]">{selectedColor.name}</span>
              </span>
              <div className="flex items-center gap-2 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => {
                      setSelectedColor(color);
                      // If color has a specific imageUrl, show that image; otherwise reset to first
                      if (color.imageUrl) {
                        const idx = product.images.findIndex((img) => img === color.imageUrl);
                        if (idx >= 0) setSelectedImageIndex(idx);
                      }
                    }}
                    className={`h-7 w-7 rounded-full border-2 transition-all ${
                      selectedColor.hex === color.hex
                        ? "border-[#6b1d2b] scale-110 ring-1 ring-[#6b1d2b]/20"
                        : "border-[#6b1d2b]/20 hover:border-[#6b1d2b]/50"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <span className="text-xs font-medium text-[#6b1d2b] uppercase tracking-[0.1em] font-sans">
                Size
              </span>
              <div className="flex items-center gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 w-12 text-sm font-medium border transition-all rounded-full ${
                      selectedSize === size
                        ? "bg-[#6b1d2b] text-white border-[#6b1d2b]"
                        : "bg-white text-[#6b1d2b]/70 border-[#6b1d2b]/20 hover:border-[#6b1d2b]/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {product.modelInfo && (
                <p className="mt-2 text-xs text-[#6b1d2b]/50 italic font-sans">
                  {product.modelInfo}
                </p>
              )}
            </div>

            {/* Add to Cart */}
            <div className="mt-8">
              <Button
                onClick={handleAddToCart}
                className="w-full h-14 text-xs tracking-[0.12em] uppercase font-semibold shadow-lg"
                size="xl"
              >
                Add to Cart - {formatPrice(product.price)}
              </Button>
            </div>

            {/* Accordion Details */}
            <div className="mt-8 border-t border-[#6b1d2b]/10">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="fabric-care">
                  <AccordionTrigger className="text-xs tracking-[0.1em] uppercase font-medium text-[#6b1d2b]/70 hover:text-[#6b1d2b] font-sans">
                    Fabric & Care Instructions
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#6b1d2b]/70 leading-relaxed font-sans">
                    {product.fabricCare}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="size-guide">
                  <AccordionTrigger className="text-xs tracking-[0.1em] uppercase font-medium text-[#6b1d2b]/70 hover:text-[#6b1d2b] font-sans">
                    Size Guide Matrix
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#6b1d2b]/70 leading-relaxed whitespace-pre-line font-sans">
                    {product.sizeGuide}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
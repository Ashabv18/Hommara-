"use client";

import { Minus, Plus, Trash2, Gift, Truck } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { FREE_SHIPPING_THRESHOLD } from "@/data/products";
import { useState } from "react";

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setCartOpen,
    subtotal,
    shippingProgress,
    qualifiesForFreeGift,
    removeItem,
    updateQuantity,
  } = useCart();

  const [showFreeGift, setShowFreeGift] = useState(false);

  const shippingRemaining = FREE_SHIPPING_THRESHOLD - subtotal;
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex flex-col p-0 w-full sm:max-w-md">
        {/* Header */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-[#6b1d2b]/10">
          <SheetTitle className="text-sm tracking-[0.12em] uppercase font-semibold text-[#6b1d2b]">
            Shopping Bag ({items.length})
          </SheetTitle>
        </SheetHeader>

        {/* Free Shipping Progress */}
        <div className="px-6 py-4 border-b border-[#6b1d2b]/10">
          <div className="flex items-center gap-2 mb-2">
            <Truck className="h-3.5 w-3.5 text-[#6b1d2b]/60" />
            <span className="text-xs text-[#6b1d2b]/70 font-sans">
              {hasFreeShipping
                ? "You've earned free shipping!"
                : `Add ${formatPrice(shippingRemaining)} more for free shipping`}
            </span>
          </div>
          <div className="h-1.5 w-full bg-[#6b1d2b]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#c9a86c] rounded-full transition-all duration-500"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-sm text-[#6b1d2b]/60 mb-2 font-sans">Your bag is empty</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCartOpen(false)}
                className="text-xs tracking-[0.1em] uppercase rounded-full"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.hex}`}
                  className="flex gap-4"
                >
                  <div className="h-24 w-20 flex-shrink-0 bg-[#ebeced] overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-serif text-base font-semibold text-[#6b1d2b] leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() =>
                            removeItem(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.hex
                            )
                          }
                          className="text-[#6b1d2b]/40 hover:text-[#6b1d2b] transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-[#6b1d2b]/50 mt-0.5 font-sans">
                        {item.selectedSize} / {item.selectedColor.name}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#6b1d2b]/20 rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.hex,
                              -1
                            )
                          }
                          className="px-3 py-1 text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 py-1 text-xs font-medium text-[#6b1d2b] min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.hex,
                              1
                            )
                          }
                          className="px-3 py-1 text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-[#6b1d2b]">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Free Gift Section */}
        {qualifiesForFreeGift && (
          <div className="px-6 py-3 border-t border-[#6b1d2b]/10">
            <button
              onClick={() => setShowFreeGift(!showFreeGift)}
              className="flex items-center gap-2 w-full text-left"
            >
              <Gift className="h-4 w-4 text-[#c9a86c]" />
              <span className="text-xs font-medium text-[#6b1d2b] tracking-[0.05em] font-sans">
                Pick a Free Gift
              </span>
            </button>
            {showFreeGift && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                {["Mini Tote Bag", "Scented Linen Sachet"].map((gift) => (
                  <button
                    key={gift}
                    className="border border-[#6b1d2b]/20 rounded-full px-4 py-2 text-xs text-[#6b1d2b]/70 hover:border-[#6b1d2b] hover:text-[#6b1d2b] transition-colors text-left font-sans"
                  >
                    {gift}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Checkout Footer */}
        <div className="border-t border-[#6b1d2b]/10 bg-white px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-[0.12em] text-[#6b1d2b]/60 font-sans">
              Subtotal
            </span>
            <span className="text-lg font-semibold text-[#6b1d2b]">
              {formatPrice(subtotal)}
            </span>
          </div>

          <Button
            className="w-full h-12 text-xs tracking-[0.12em] uppercase font-semibold"
            size="lg"
            onClick={() => {
              setCartOpen(false);
              window.location.href = "/checkout";
            }}
          >
            Proceed to Checkout
          </Button>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-[10px] text-[#6b1d2b]/40 uppercase tracking-[0.1em] font-sans">
              We Accept
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-[#6b1d2b]/40 uppercase tracking-[0.05em]">
                UPI
              </span>
              <span className="text-[10px] font-semibold text-[#6b1d2b]/40 uppercase tracking-[0.05em]">
                GPay
              </span>
              <span className="text-[10px] font-semibold text-[#6b1d2b]/40 uppercase">
                PhonePe
              </span>
              <span className="text-[10px] font-semibold text-[#6b1d2b]/40 uppercase">
                Visa
              </span>
              <span className="text-[10px] font-semibold text-[#6b1d2b]/40 uppercase">
                MC
              </span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

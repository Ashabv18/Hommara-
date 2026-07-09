"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { CartItem, Product, ProductColor } from "@/types/product";
import { FREE_SHIPPING_THRESHOLD, FREE_GIFT_THRESHOLD } from "@/data/products";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string, color: ProductColor) => void;
  removeItem: (productId: string, size: string, colorHex: string) => void;
  updateQuantity: (productId: string, size: string, colorHex: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingProgress: number;
  qualifiesForFreeGift: boolean;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addItem = useCallback(
    (product: Product, size: string, color: ProductColor) => {
      setItems((prev) => {
        const existing = prev.find(
          (item) =>
            item.product.id === product.id &&
            item.selectedSize === size &&
            item.selectedColor.hex === color.hex
        );
        if (existing) {
          return prev.map((item) =>
            item === existing
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [
          ...prev,
          { product, quantity: 1, selectedSize: size, selectedColor: color },
        ];
      });
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, size: string, colorHex: string) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(item.product.id === productId && item.selectedSize === size && item.selectedColor.hex === colorHex)
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, size: string, colorHex: string, delta: number) => {
      setItems((prev) =>
        prev
          .map((item) => {
            if (
              item.product.id === productId &&
              item.selectedSize === size &&
              item.selectedColor.hex === colorHex
            ) {
              const newQty = item.quantity + delta;
              if (newQty <= 0) return null;
              return { ...item, quantity: newQty };
            }
            return item;
          })
          .filter(Boolean) as CartItem[]
      );
    },
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [items]
  );

  const shippingProgress = useMemo(
    () => Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100),
    [subtotal]
  );

  const qualifiesForFreeGift = useMemo(
    () => subtotal >= FREE_GIFT_THRESHOLD,
    [subtotal]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      shippingProgress,
      qualifiesForFreeGift,
      isCartOpen,
      setCartOpen,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      shippingProgress,
      qualifiesForFreeGift,
      isCartOpen,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
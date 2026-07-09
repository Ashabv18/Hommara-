"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  const orderId = typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("pendingOrder") || "{}").orderId 
    : null;

  return (
    <div className="min-h-screen bg-[#faf6f1] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-12 border border-[#c9a86c]/20 max-w-2xl mx-auto">
          <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#6b1d2b] mb-4">
            Order Confirmed!
          </h1>
          <p className="text-neutral-600 mb-2">
            Thank you for your purchase. Your order has been received.
          </p>
          {orderId && (
            <p className="text-sm text-neutral-500 mb-8">
              Order ID: <span className="font-semibold text-[#6b1d2b]">{orderId}</span>
            </p>
          )}
          <p className="text-sm text-neutral-500 mb-8">
            We've sent a confirmation email with your order details. Please keep your order ID for tracking.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#6b1d2b] text-white px-8 py-4 text-xs tracking-[0.12em] uppercase font-semibold hover:bg-[#6b1d2b]/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
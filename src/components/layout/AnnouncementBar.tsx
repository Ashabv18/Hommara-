"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#6b1d2b] text-white text-xs tracking-wide">
      <div className="mx-auto flex h-10 items-center justify-center px-4">
        <p className="text-center font-serif text-sm">
          <span className="font-bold uppercase tracking-wider mr-1">✨ New Collection</span>
          Free shipping on orders above ₹1,999
          <span className="font-semibold ml-1">| Ship across India</span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, LogIn, UserPlus, LogOut } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";

export default function Navbar() {
  const { totalItems, setCartOpen } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navCategories = categories.filter((c) => c.id !== "best-sellers");

  const handleSearchClick = () => {
    setSearchOpen((prev) => !prev);
    setQuery("");
  };

  const handleAccountClick = () => {
    alert("Account feature coming soon!");
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <header className="sticky top-0 z-40 bg-[#faf6f1]/95 backdrop-blur-sm border-b border-[#c9a86c]/20">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/zorova-logo.png"
            alt="ZOROVA"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navCategories.map((cat) => (
                <NavigationMenuItem key={cat.id}>
                  {cat.items ? (
                    <>
                      <NavigationMenuTrigger className="text-xs tracking-[0.08em] uppercase font-medium text-[#6b1d2b]/70 hover:text-[#6b1d2b]">
                        {cat.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-56 gap-1 p-4">
                          {cat.items.map((item) => (
                            <li key={item.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block rounded-none px-3 py-2 text-sm text-[#6b1d2b]/70 hover:text-[#6b1d2b] hover:bg-[#6b1d2b]/5 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={cat.href}
                      className="inline-flex h-9 w-max items-center justify-center rounded-none bg-transparent px-3 py-2 text-xs tracking-[0.08em] uppercase font-medium text-[#6b1d2b]/70 transition-colors hover:text-[#6b1d2b]"
                    >
                      {cat.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link
                  href="/category/best-sellers"
                  className="inline-flex h-9 w-max items-center justify-center rounded-none bg-transparent px-3 py-2 text-xs tracking-[0.08em] uppercase font-medium text-[#6b1d2b]/70 transition-colors hover:text-[#6b1d2b]"
                >
                  Best Sellers
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSearchClick}
            className="p-2 text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6b1d2b]/70 font-medium hidden sm:block">
                Hi, {user?.name}
              </span>
              <button
                onClick={logout}
                className="p-2 text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors"
                aria-label="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Link
                href="/login"
                className="flex items-center gap-1 px-3 py-2 text-xs tracking-[0.08em] uppercase font-medium text-[#6b1d2b]/70 transition-colors hover:text-[#6b1d2b]"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-1 px-3 py-2 text-xs tracking-[0.08em] uppercase font-medium bg-[#6b1d2b] text-white transition-colors hover:bg-[#6b1d2b]/90"
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Up</span>
              </Link>
            </div>
          )}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-[#6b1d2b]/60 hover:text-[#6b1d2b] transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#6b1d2b] text-[9px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Account Dropdown removed - using simple buttons instead */}

        {/* Search Dropdown */}
        {searchOpen && (
          <div className="absolute left-0 right-0 top-16 bg-white border-b border-[#c9a86c]/20 shadow-lg z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-[#6b1d2b]/20 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#6b1d2b] font-sans"
              />
              {query.trim().length > 0 && (
                <div className="mt-4 max-h-80 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="text-sm text-neutral-500 font-sans">No matching products found.</p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {results.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
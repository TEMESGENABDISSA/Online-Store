"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Navigation() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="bg-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-amber-200 transition-colors">
            Ethiopian Coffee Store
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="hover:text-amber-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-amber-200 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="hover:text-amber-200 transition-colors relative"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Navigation() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-900 text-white shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-amber-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded">
            Ethiopian Coffee Store
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="hover:text-amber-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-amber-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="hover:text-amber-200 transition-colors relative focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2 py-1"
              aria-label={`Cart with ${cartCount} items`}
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" aria-hidden="true">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={() => setIsMenuOpen(false)}
              aria-label={`Cart with ${cartCount} items`}
            >
              Cart
              {cartCount > 0 && (
                <span className="ml-2 bg-amber-600 text-white text-xs px-2 py-0.5 rounded-full" aria-hidden="true">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

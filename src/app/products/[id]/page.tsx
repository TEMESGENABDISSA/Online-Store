"use client";

import Navigation from "@/components/Navigation";
import { getProductById } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Product Not Found
            </h1>
            <p className="text-xl text-amber-800 mb-8">
              The product you are looking for does not exist.
            </p>
            <Link
              href="/products"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/products"
          className="inline-block text-amber-600 hover:text-amber-800 mb-6 font-medium"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative h-96 bg-gray-100 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm text-amber-600 font-medium mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-amber-900 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-amber-900 mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mb-6">
                {product.available ? (
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    In Stock
                  </span>
                ) : (
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.available}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                  product.available
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {product.available ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

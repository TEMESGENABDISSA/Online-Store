"use client";

import Navigation from "@/components/Navigation";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-amber-800 mb-8">
              Add some products to get started!
            </p>
            <Link
              href="/products"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-4"
              >
                <div className="relative h-32 w-32 bg-gray-100 rounded-lg flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="128px"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-amber-600 text-sm mb-2">
                    {item.product.category}
                  </p>
                  <p className="text-xl font-bold text-amber-900">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors font-semibold"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold text-amber-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors font-semibold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-700">
                      {item.product.name} x {item.quantity}
                    </span>
                    <span className="font-semibold text-amber-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-amber-900">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/products"
                className="block w-full mt-3 text-center text-amber-600 hover:text-amber-800 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

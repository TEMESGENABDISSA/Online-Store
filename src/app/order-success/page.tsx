"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";

interface OrderData {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  items: Array<{
    product: {
      id: string;
      name: string;
      price: number;
    };
    quantity: number;
  }>;
  total: number;
  date: string;
}

export default function OrderSuccessPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const storedOrder = sessionStorage.getItem("lastOrder");
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              No Order Found
            </h1>
            <p className="text-xl text-amber-800 mb-8">
              Please place an order first.
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
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 rounded-full p-4 mb-4">
              <svg
                className="w-16 h-16 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-amber-900 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-lg text-amber-800">
              Thank you for your purchase
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-semibold text-amber-900">{orderData.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-semibold text-amber-900">
                  {new Date(orderData.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Customer</p>
              <p className="font-semibold text-amber-900">{orderData.customer.name}</p>
              <p className="text-sm text-gray-700">{orderData.customer.email}</p>
              <p className="text-sm text-gray-700">{orderData.customer.phone}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Delivery Address</p>
              <p className="text-gray-700">
                {orderData.customer.address}
                <br />
                {orderData.customer.city}, {orderData.customer.postalCode}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Order Items</h2>
            <div className="space-y-3">
              {orderData.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-amber-900">
                      {item.product.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity} × ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="font-bold text-amber-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <div className="flex justify-between text-2xl font-bold text-amber-900">
              <span>Total</span>
              <span>${orderData.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to {orderData.customer.email}
            </p>
            <Link
              href="/products"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

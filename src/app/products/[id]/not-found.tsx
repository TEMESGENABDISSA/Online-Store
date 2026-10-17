import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function NotFound() {
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

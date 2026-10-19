import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import ProductFilters from "./ProductFilters";

export default function ProductsPage() {
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">All Products</h1>

        <ProductFilters categories={categories} products={products} />
      </main>
    </div>
  );
}

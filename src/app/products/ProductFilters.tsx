"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";

interface ProductFiltersProps {
  categories: string[];
  products: Product[];
}

export default function ProductFilters({ categories, products }: ProductFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label htmlFor="category" className="block text-sm font-medium text-amber-900 mb-2">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-amber-300 bg-white text-amber-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="sort" className="block text-sm font-medium text-amber-900 mb-2">
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-amber-300 bg-white text-amber-900 focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:outline-none"
          >
            <option value="name">Name (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <p className="text-center text-amber-800 text-lg mt-8">
          No products found in this category.
        </p>
      )}
    </>
  );
}

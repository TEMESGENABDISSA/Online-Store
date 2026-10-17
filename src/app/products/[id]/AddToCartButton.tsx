"use client";

import { useCart } from "@/lib/cart-context";
import { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
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
  );
}

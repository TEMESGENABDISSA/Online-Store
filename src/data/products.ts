export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Yirgacheffe Coffee Beans",
    price: 25.99,
    category: "Coffee Beans",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    description: "Premium Yirgacheffe coffee beans with bright, fruity notes and floral aroma. Grown in the highlands of Ethiopia at over 6,000 feet elevation.",
    available: true,
  },
  {
    id: "2",
    name: "Sidamo Coffee Beans",
    price: 22.99,
    category: "Coffee Beans",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
    description: "Rich, full-bodied Sidamo coffee with wine-like acidity and complex berry flavors. Perfect for espresso or drip brewing.",
    available: true,
  },
  {
    id: "3",
    name: "Harrar Coffee Beans",
    price: 24.99,
    category: "Coffee Beans",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop",
    description: "Wild and exotic Harrar coffee with intense blueberry notes and heavy body. Dry-processed for maximum flavor retention.",
    available: true,
  },
  {
    id: "4",
    name: "Ethiopian Blend",
    price: 19.99,
    category: "Coffee Beans",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=400&h=300&fit=crop",
    description: "A balanced blend of Yirgacheffe and Sidamo beans, offering the best of both worlds with bright acidity and smooth finish.",
    available: true,
  },
  {
    id: "5",
    name: "Coffee Ceremonial Set",
    price: 89.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
    description: "Traditional Ethiopian coffee ceremony set including jebena (clay pot), cups, and incense burner. Perfect for authentic coffee experience.",
    available: true,
  },
  {
    id: "6",
    name: "Manual Coffee Grinder",
    price: 45.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&h=300&fit=crop",
    description: "High-quality manual ceramic burr grinder for consistent grind size. Adjustable settings for different brewing methods.",
    available: true,
  },
  {
    id: "7",
    name: "Ethiopian Coffee Mug",
    price: 14.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop",
    description: "Handcrafted ceramic mug with traditional Ethiopian patterns. 12oz capacity, dishwasher safe.",
    available: true,
  },
  {
    id: "8",
    name: "Pour Over Kit",
    price: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    description: "Complete pour-over brewing kit with ceramic dripper, glass server, and paper filters. Ideal for single-cup brewing.",
    available: true,
  },
  {
    id: "9",
    name: "Limmu Coffee Beans",
    price: 23.99,
    category: "Coffee Beans",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&h=300&fit=crop",
    description: "Smooth and balanced Limmu coffee with mild acidity and sweet, spicy notes. Great for everyday drinking.",
    available: true,
  },
  {
    id: "10",
    name: "Ghimbi Coffee Beans",
    price: 21.99,
    category: "Coffee Beans",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    description: "Distinctive Ghimbi coffee with wine-like acidity and pleasant bitterness. Medium roast for optimal flavor development.",
    available: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getAvailableProducts(): Product[] {
  return products.filter((product) => product.available);
}

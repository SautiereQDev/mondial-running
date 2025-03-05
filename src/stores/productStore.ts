import { create } from "zustand";
import { detailledArticles } from "@/data/detailedArticles";
import {
  Color,
  ColorInventory,
  RunningShoe,
  SizeInventory,
} from "@/types/products.types";

// Sample reviews data (in a real app, this would come from an API)
const sampleReviews = [
  {
    author: "Marie L.",
    rating: 5,
    date: "12/03/2023",
    comment:
      "Excellentes chaussures pour mes courses quotidiennes. Très confortables et légères.",
    verified: true,
  },
  {
    author: "Thomas D.",
    rating: 4,
    date: "28/02/2023",
    comment:
      "Bon amorti, idéal pour les longues distances. Seul bémol: un peu étroites au niveau des orteils.",
    verified: true,
  },
  {
    author: "Sophie M.",
    rating: 5,
    date: "15/02/2023",
    comment:
      "Parfaites pour mes entraînements de marathon. Excellente adhérence même sur sol mouillé.",
    verified: false,
  },
  {
    author: "Lucas R.",
    rating: 3,
    date: "05/02/2023",
    comment: "Confortables mais l'usure est visible après seulement 200km.",
    verified: true,
  },
];

interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

interface ProductState {
  product: RunningShoe | null;
  reviews: Review[];
  reviewStats: {
    averageRating: number;
    reviewCount: number;
    ratingCounts: Record<number, number>;
  };
  selectedColor: Color | null;
  selectedSize: string | number | null;
  quantity: number;
  isLiked: boolean;

  // Actions
  setProduct: (productId: string) => void;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: string | number) => void;
  setQuantity: (quantity: number) => void;
  toggleLike: () => void;

  // Computed values
  currentColorInventory: () => ColorInventory | undefined; // Updated return type
  isSizeInStock: (size: string | number) => boolean;
  finalPrice: () => number;
}

export const useProductStore = create<ProductState>((set, get) => ({
  product: null,
  reviews: [],
  reviewStats: {
    averageRating: 0,
    reviewCount: 0,
    ratingCounts: {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    },
  },
  selectedColor: null,
  selectedSize: null,
  quantity: 1,
  isLiked: false,

  setProduct: (productId) => {
    // For now, just use the first product from the array
    const product = detailledArticles[0];

    // In a real app, you would fetch reviews separately
    // For now, we'll use sample data
    const reviews = sampleReviews;

    // Calculate review stats
    const reviewCount = reviews.length;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviewCount > 0 ? totalRating / reviewCount : 0;

    // Count ratings by star level
    const ratingCounts = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };

    reviews.forEach((review) => {
      if (review.rating >= 1 && review.rating <= 5) {
        ratingCounts[review.rating as keyof typeof ratingCounts]++;
      }
    });

    set({
      product,
      reviews,
      reviewStats: {
        averageRating,
        reviewCount,
        ratingCounts,
      },
      selectedColor: product.inventory[0]?.color,
      selectedSize: product.inventory[0]?.sizes[0]?.size,
    });
  },

  setSelectedColor: (color: Color | string) => {
    if (typeof color === "string") {
      const { product } = get();
      const colorObj = product?.inventory.find(
        (inv) => inv.color.name === color
      )?.color;
      if (colorObj) {
        set({ selectedColor: colorObj });
      }
    } else {
      set({ selectedColor: color });
    }
  },
  setSelectedSize: (size) => set({ selectedSize: size }),
  setQuantity: (quantity) => set({ quantity }),
  toggleLike: () => set((state) => ({ isLiked: !state.isLiked })),

  currentColorInventory: () => {
    const { product, selectedColor } = get();
    return product?.inventory.find(
      (inv) => inv.color.name === selectedColor?.name
    );
  },

  isSizeInStock: (size) => {
    const currentInventory = get().currentColorInventory();
    const sizeInventory = currentInventory?.sizes.find(
      (s: SizeInventory) => s.size === size
    );
    return !!sizeInventory && sizeInventory.stock > 0;
  },

  finalPrice: () => {
    const { product } = get();
    if (!product) return 0;

    const { price, discount } = product;
    return discount
      ? discount.type === "percentage"
        ? price * (1 - discount.value / 100)
        : price - discount.value
      : price;
  },
}));

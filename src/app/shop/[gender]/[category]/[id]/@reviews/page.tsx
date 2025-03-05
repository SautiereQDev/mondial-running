"use client";
import { useProductStore } from "@/stores/productStore";
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  const { product, reviews } = useProductStore();

  if (!product) return null;

  const { averageRating, reviewCount } = product;

  const ratingCounts = {
    5: 45,
    4: 30,
    3: 15,
    2: 7,
    1: 3,
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4">Note moyenne</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold">{averageRating}</span>
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-500">
                  ({reviewCount} avis)
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {Object.entries(ratingCounts)
                .reverse()
                .map(([rating, count]) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="w-12 text-sm">{rating} étoiles</span>
                    <Progress
                      value={(count / (reviewCount ?? 1)) * 100}
                      className="flex-1"
                    />
                    <span className="w-12 text-sm text-right">{count}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            {reviews?.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold">{review.author}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                      Achat vérifié
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

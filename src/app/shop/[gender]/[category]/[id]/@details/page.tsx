"use client";
import { Check } from "lucide-react";
import { useProductStore } from "@/stores/productStore";

export default function Page() {
  const { product } = useProductStore();

  if (!product) return null;

  const { features, recommendedFor, description } = product;

  return (
    <div className="py-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-6">Description détaillée</h2>
        <p className="text-gray-600 mb-8">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Features */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">
            Caractéristiques techniques
          </h3>
          <ul className="space-y-3">
            {features.weight && (
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>
                  Poids: <span className="font-medium">{features.weight}g</span>
                </span>
              </li>
            )}
            {features.drop && (
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>
                  Drop: <span className="font-medium">{features.drop}mm</span>
                </span>
              </li>
            )}
            {features.cushioning && (
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>
                  Amorti:{" "}
                  <span className="font-medium">{features.cushioning}</span>
                </span>
              </li>
            )}
            {features.support && (
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>
                  Support:{" "}
                  <span className="font-medium">{features.support}</span>
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Recommandé pour</h3>
          {recommendedFor && (
            <div className="space-y-4">
              {recommendedFor.terrainTypes && (
                <div>
                  <h4 className="font-medium mb-2">Types de terrain:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendedFor.terrainTypes.map((terrain) => (
                      <span
                        key={terrain}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {terrain}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {recommendedFor.runnerLevels && (
                <div>
                  <h4 className="font-medium mb-2">Types de coureurs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendedFor.runnerLevels.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, Package, Share2, ShoppingCart, Truck } from "lucide-react";
import ArticleGallery from "@/components/ArticleGallery";
import { Button } from "@/components/ui/button";
import NumericalInput from "@/components/ui/NumericalInput";
import { Separator } from "@/components/ui/separator";
import Stars from "@/utils/Stars";
import { useProductStore } from "@/stores/productStore";
import { SizeInventory } from "@/types/products.types";

export default function ProductPage() {
  // Get data and actions from the store
  const {
    product,
    selectedColor,
    selectedSize,
    quantity,
    isLiked,
    setProduct,
    setSelectedColor,
    setSelectedSize,
    setQuantity,
    toggleLike,
    currentColorInventory,
    isSizeInStock,
    finalPrice,
  } = useProductStore();

  // Load product data on component mount
  useEffect(() => {
    setProduct("shoe-123"); // In a real app, this would be the ID from the URL
  }, [setProduct]);

  // If product is not loaded yet, show loading state
  if (!product) {
    return <div>Loading...</div>;
  }

  const {
    name,
    description,
    compareAtPrice,
    discount,
    averageRating,
    reviewCount,
    images,
    brand,
    inventory,
  } = product;

  return (
    <div>
      {/* Breadcrumb et badges de statut */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 hover:bg-blue-100"
          >
            Nouveau
          </Badge>
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 hover:bg-green-100"
          >
            En stock
          </Badge>
        </div>
        <div className="flex gap-3">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleLike}
          >
            <Heart
              className={`h-5 w-5 ${
                isLiked ? "text-red-500 fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-6">
        <div className="md:w-1/2">
          <ArticleGallery imagesSrc={images} />
        </div>

        <div className="md:w-1/2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-gray-100 text-gray-700">
                {brand}
              </Badge>
              {product.new && <Badge className="bg-blue-500">Nouveau</Badge>}
              {product.bestseller && (
                <Badge className="bg-amber-500">Bestseller</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">{name}</h1>
            <div className="flex items-center gap-3 mb-4">
              {averageRating && (
                <div className="flex items-center gap-1">
                  <Stars rating={averageRating} size={18} />
                  <span className="text-sm text-gray-600">
                    {averageRating} ({reviewCount} avis)
                  </span>
                </div>
              )}
            </div>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl font-bold">
              {finalPrice().toFixed(2)}€
            </span>
            {compareAtPrice && (
              <span className="text-xl text-gray-500 line-through">
                {compareAtPrice.toFixed(2)}€
              </span>
            )}
            {discount && discount.type === "percentage" && (
              <Badge className="bg-red-500">-{discount.value}%</Badge>
            )}
          </div>

          <Separator className="my-6" />

          {/* Sélection de couleur */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Couleur: {selectedColor?.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {inventory.map((inv) => (
                <button
                  key={inv.color.name}
                  onClick={() => setSelectedColor(inv.color.name)}
                  className={`
                  w-10 h-10 rounded-full border-2 transition-all
                  ${
                    selectedColor?.name === inv.color.name
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-gray-300"
                  }
                `}
                  style={{ backgroundColor: inv.color.hex }}
                  title={inv.color.name}
                />
              ))}
            </div>
          </div>

          {/* Sélection de taille */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">Taille</h3>
              <button className="text-sm text-primary hover:underline">
                Guide des tailles
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentColorInventory()?.sizes.map((size: SizeInventory) => (
                <button
                  key={size.size}
                  onClick={() => setSelectedSize(size.size)}
                  disabled={size.stock === 0}
                  className={`
                  px-3 py-2 border rounded-md text-sm transition-all
                  ${
                    selectedSize === size.size
                      ? "border-primary bg-primary/10 text-primary"
                      : size.stock > 0
                      ? "border-gray-300 hover:border-gray-400"
                      : "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                  }
                `}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantité et boutons d'action */}
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <NumericalInput
                value={quantity}
                onChange={setQuantity}
                min={1}
                max={10}
                className="w-32"
              />
              <Button
                className="flex-1 py-6 bg-primary hover:bg-primary/90 text-white gap-2"
                disabled={!selectedSize || !isSizeInStock(selectedSize)}
              >
                <ShoppingCart className="h-5 w-5" />
                Ajouter au panier
              </Button>
            </div>

            <Button
              variant="outline"
              className="py-6 border-gray-300 hover:bg-gray-50 gap-2"
              onClick={toggleLike}
            >
              <Heart
                className={`h-5 w-5 transition-colors ${
                  isLiked ? "text-red-500 fill-red-500" : ""
                }`}
              />
              Ajouter aux favoris
            </Button>
          </div>

          {/* Informations de livraison */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3 mt-6">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-gray-700" />
              <div>
                <p className="font-medium">Livraison gratuite</p>
                <p className="text-sm text-gray-600">
                  Pour les commandes supérieures à 50€
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-gray-700" />
              <div>
                <p className="font-medium">Retours gratuits</p>
                <p className="text-sm text-gray-600">Pendant 30 jours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

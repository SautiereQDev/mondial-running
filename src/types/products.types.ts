/**
 * Types pour les produits et articles
 */

// Catégories principales de produits
export type ProductCategory =
    | "running-shoes"
    | "trail-shoes"
    | "clothing"
    | "accessories"
    | "nutrition"
    | "electronics";

// Sous-catégories pour une meilleure organisation
export type ProductSubcategory =
    // Chaussures
    | "road-running" | "trail-running" | "track" | "racing" | "walking"
    // Vêtements
    | "t-shirts" | "shorts" | "tights" | "jackets" | "socks" | "underwear"
    // Accessoires
    | "bags" | "bottles" | "watches" | "sunglasses" | "hats" | "gloves"
    // Nutrition
    | "gels" | "bars" | "drinks" | "supplements"
    // Électronique
    | "gps-watches" | "headphones" | "heart-rate-monitors" | "fitness-trackers";

// Genre du produit
export type ProductGender = "men" | "women" | "unisex" | "kids";

// Saison du produit
export type ProductSeason = "spring" | "summer" | "fall" | "winter" | "all-season";

// Niveau d'expérience recommandé
export type RunnerLevel = "beginner" | "intermediate" | "advanced" | "professional";

// Type de terrain
export type TerrainType = "road" | "trail" | "track" | "mixed";

// Caractéristiques techniques pour les chaussures
export type ShoeFeatures = {
    weight?: number; // en grammes
    drop?: number; // en mm
    cushioning?: "minimal" | "moderate" | "maximum";
    support?: "neutral" | "stability" | "motion-control";
    arch?: "low" | "medium" | "high";
    upperMaterial?: string[];
    soleMaterial?: string[];
    waterproof?: boolean;
    breathability?: "low" | "medium" | "high";
};

// Caractéristiques techniques pour les vêtements
export type ClothingFeatures = {
    material: Material[];
    fit: "compression" | "fitted" | "semi-fitted" | "relaxed";
    reflective: boolean;
    pockets: number;
    waterproof?: boolean;
    windproof?: boolean;
    uvProtection?: boolean;
    thermalInsulation?: boolean;
};

// Matériaux avec pourcentage
export type Material = {
    name: string;
    percentage: number;
};

// Réduction sur un produit
export type Discount = {
    type: "percentage" | "amount";
    value: number;
    startDate?: Date;
    endDate?: Date;
    code?: string; // Pour les codes promo spécifiques
    minimumPurchase?: number; // Montant minimum d'achat
    applicableProducts?: string[]; // IDs des produits concernés ou "all"
};

// Couleur disponible
export type Color = {
    name: string;
    hex: string;
    image?: string; // URL de l'image montrant le produit dans cette couleur
};

// Taille disponible avec stock
export type SizeInventory = {
    size: string | number;
    stock: number;
    sku: string; // Stock Keeping Unit - identifiant unique pour cette taille/couleur
};

// Inventaire par couleur
export type ColorInventory = {
    color: Color;
    sizes: SizeInventory[];
};

// Produit de base
export interface BaseProduct {
    id: string;
    name: string;
    slug: string; // URL-friendly name
    brand: string;
    description: string;
    shortDescription?: string;
    price: number;
    compareAtPrice?: number; // Prix barré (avant réduction)
    discount?: Discount;
    tax?: number; // Taux de TVA applicable
    images: string[]; // URLs des images
    thumbnail?: string; // URL de la miniature
    featured?: boolean; // Produit mis en avant
    new?: boolean; // Nouveau produit
    bestseller?: boolean; // Produit best-seller
    category: ProductCategory;
    subcategory?: ProductSubcategory;
    gender: ProductGender;
    tags: string[]; // Tags pour le filtrage et la recherche
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date; // Date de mise en ligne
    inventory: ColorInventory[];
    averageRating?: number; // Note moyenne
    reviewCount?: number; // Nombre d'avis
    seo?: {
        title?: string;
        description?: string;
        keywords?: string[];
    };
}

// Produit spécifique: Chaussure de running
export interface RunningShoe extends BaseProduct {
    category: "running-shoes";
    features: ShoeFeatures;
    recommendedFor?: {
        terrainTypes: TerrainType[];
        runnerLevels: RunnerLevel[];
        distances?: ("short" | "medium" | "long" | "ultra")[];
        pronation?: "neutral" | "overpronation" | "underpronation";
    };
    season?: ProductSeason;
    relatedProducts?: string[]; // IDs des produits similaires
}

// Produit spécifique: Vêtement de running
export interface RunningClothing extends BaseProduct {
    category: "clothing";
    features: ClothingFeatures;
    season: ProductSeason;
    careInstructions?: string;
    recommendedFor?: {
        weather?: ("hot" | "mild" | "cold" | "rainy" | "windy")[];
        activities?: ("running" | "trail" | "gym" | "recovery" | "everyday")[];
    };
}

// Produit spécifique: Accessoire
export interface RunningAccessory extends BaseProduct {
    category: "accessories";
    features?: {
        material?: string[];
        dimensions?: string;
        weight?: number;
        waterproof?: boolean;
    };
}

// Type union pour tous les produits
export type Product = RunningShoe | RunningClothing | RunningAccessory;
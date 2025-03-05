/**
 * Types pour les avis et commentaires
 */

// Avis sur un produit
export interface ProductReview {
    id: string;
    productId: string;
    userId: string;
    orderId?: string; // Pour vérifier que l'utilisateur a bien acheté le produit
    rating: number; // Note sur 5
    title?: string;
    content: string;
    pros?: string[]; // Points positifs
    cons?: string[]; // Points négatifs
    images?: string[]; // URLs des images jointes
    verified: boolean; // Achat vérifié
    helpfulCount: number; // Nombre de personnes qui ont trouvé cet avis utile
    reportCount: number; // Nombre de signalements
    status: "pending" | "approved" | "rejected";
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    userInfo?: {
        displayName: string;
        avatar?: string;
    };
    usage?: {
        duration: string; // Durée d'utilisation
        frequency: "daily" | "weekly" | "occasionally";
        purpose: string[]; // Utilisation prévue
    };
    metrics?: {
        fit?: "small" | "true_to_size" | "large";
        comfort?: number; // 1-5
        quality?: number; // 1-5
        durability?: number; // 1-5
        value?: number; // 1-5
    };
    response?: {
        content: string;
        by: string;
        createdAt: Date;
    };
}

// Réponse à un avis
export interface ReviewComment {
    id: string;
    reviewId: string;
    userId: string;
    content: string;
    isStaff: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// Question sur un produit
export interface ProductQuestion {
    id: string;
    productId: string;
    userId: string;
    question: string;
    status: "pending" | "published" | "answered" | "rejected";
    createdAt: Date;
    updatedAt: Date;
    answers: ProductAnswer[];
}

// Réponse à une question
export interface ProductAnswer {
    id: string;
    questionId: string;
    userId: string;
    content: string;
    isStaff: boolean;
    isVerifiedPurchaser: boolean;
    helpfulCount: number;
    createdAt: Date;
    updatedAt: Date;
}

// Rapport d'avis inapproprié
export interface ReviewReport {
    id: string;
    reviewId: string;
    userId: string;
    reason: "inappropriate" | "spam" | "offensive" | "incorrect" | "other";
    details?: string;
    status: "pending" | "reviewed" | "dismissed";
    createdAt: Date;
    resolvedAt?: Date;
}
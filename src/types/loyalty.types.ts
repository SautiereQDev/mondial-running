/**
 * Types pour le programme de fidélité
 */

// Type de programme de fidélité
export type LoyaltyProgramType = "points" | "tier" | "cashback" | "hybrid";

// Action récompensée
export type LoyaltyAction =
    | "purchase"
    | "review"
    | "referral"
    | "signup"
    | "birthday"
    | "social_share"
    | "newsletter_signup"
    | "event_participation";

// Niveau de fidélité
export interface LoyaltyTier {
    id: string;
    name: string;
    level: number;
    pointsThreshold: number;
    benefits: string[];
    icon?: string;
    color?: string;
    multiplier?: number; // Multiplicateur de points
}

// Programme de fidélité
export interface LoyaltyProgram {
    id: string;
    name: string;
    type: LoyaltyProgramType;
    description: string;
    active: boolean;
    pointsName: string; // Ex: "Points", "Miles", "Stars"
    pointsToValueRatio: number; // Ex: 100 points = 1€
    minimumRedemption: number; // Nombre minimum de points pour échanger
    expiryPeriod?: number; // En jours, null si pas d'expiration
    tiers?: LoyaltyTier[];
    actions: {
        type: LoyaltyAction;
        points: number;
        description: string;
        limit?: {
            period: "day" | "week" | "month" | "year";
            count: number;
        };
    }[];
    createdAt: Date;
    updatedAt: Date;
}

// Compte de fidélité utilisateur
export interface UserLoyalty {
    id: string;
    userId: string;
    programId: string;
    points: number;
    lifetimePoints: number;
    tierId?: string;
    nextTierId?: string;
    pointsToNextTier?: number;
    joinedAt: Date;
    expiringPoints: {
        amount: number;
        expiryDate: Date;
    }[];
    lastActivity?: Date;
}

// Transaction de points
export interface LoyaltyTransaction {
    id: string;
    userId: string;
    programId: string;
    type: "earn" | "redeem" | "expire" | "adjust";
    points: number;
    action?: LoyaltyAction;
    orderId?: string;
    referenceId?: string;
    description: string;
    balance: number; // Solde après transaction
    createdAt: Date;
    expiryDate?: Date;
}

// Récompense
export interface LoyaltyReward {
    id: string;
    programId: string;
    name: string;
    description: string;
    image?: string;
    pointsCost: number;
    type: "discount" | "free_product" | "free_shipping" | "gift" | "experience";
    value?: number; // Pour les remises
    productId?: string; // Pour les produits gratuits
    code?: string; // Code de réduction
    active: boolean;
    stock?: number;
    limitPerUser?: number;
    startDate?: Date;
    endDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

// Récompense réclamée par l'utilisateur
export interface UserReward {
    id: string;
    userId: string;
    rewardId: string;
    transactionId: string;
    status: "issued" | "used" | "expired" | "cancelled";
    code?: string;
    issuedAt: Date;
    usedAt?: Date;
    expiresAt?: Date;
    orderId?: string; // Si utilisé dans une commande
}
/**
 * Types pour les commandes et transactions
 */

import { Address } from "./user.types";

// Statut de commande
export type OrderStatus =
    | "pending"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "refunded"
    | "on_hold"
    | "completed";

// Statut de paiement
export type PaymentStatus =
    | "pending"
    | "processing"
    | "completed"
    | "failed"
    | "refunded"
    | "partially_refunded";

// Méthode de livraison
export type ShippingMethod = {
    id: string;
    name: string;
    carrier: string;
    price: number;
    estimatedDelivery: {
        min: number; // jours
        max: number; // jours
    };
    trackingRequired: boolean;
};

// Élément de commande
export type OrderItem = {
    id: string;
    productId: string;
    productName: string;
    productSlug: string;
    sku: string;
    quantity: number;
    price: number; // Prix unitaire au moment de l'achat
    discount?: number; // Réduction appliquée
    tax?: number; // Montant de TVA
    color: string;
    size: string | number;
    image: string;
    weight?: number;
    bundleItems?: OrderItem[]; // Pour les packs/bundles
    customizations?: Record<string, string>; // Personnalisations
};

// Historique de statut
export type StatusHistory = {
    status: OrderStatus;
    timestamp: Date;
    note?: string;
    by?: string; // ID utilisateur ou système
};

// Informations de suivi
export type TrackingInfo = {
    carrier: string;
    trackingNumber: string;
    trackingUrl?: string;
    shippedDate?: Date;
    estimatedDeliveryDate?: Date;
};

// Remboursement
export type Refund = {
    id: string;
    amount: number;
    reason: string;
    items?: {
        orderItemId: string;
        quantity: number;
    }[];
    status: "pending" | "processed" | "failed";
    createdAt: Date;
    processedAt?: Date;
    transactionId?: string;
};

// Commande complète
export interface Order {
    id: string;
    userId: string;
    orderNumber: string; // Numéro de commande lisible
    items: OrderItem[];
    status: OrderStatus;
    statusHistory: StatusHistory[];

    // Montants
    subtotal: number;
    discountTotal: number;
    taxTotal: number;
    shippingCost: number;
    total: number;

    // Paiement
    paymentStatus: PaymentStatus;
    paymentMethod: string;
    paymentId?: string; // ID de transaction externe

    // Adresses
    shippingAddress: Address;
    billingAddress: Address;

    // Livraison
    shippingMethod: ShippingMethod;
    trackingInfo?: TrackingInfo[];

    // Dates
    createdAt: Date;
    updatedAt: Date;
    paidAt?: Date;
    shippedAt?: Date;
    deliveredAt?: Date;

    // Autres
    notes?: string;
    giftMessage?: string;
    refunds?: Refund[];
    couponCode?: string;

    // Métadonnées
    source?: "website" | "mobile_app" | "phone" | "in_store";
    ipAddress?: string;
    userAgent?: string;
}

// Panier d'achat
export interface Cart {
    id: string;
    userId?: string; // Peut être null pour les utilisateurs non connectés
    sessionId?: string; // Pour les utilisateurs non connectés
    items: {
        productId: string;
        sku: string;
        quantity: number;
        color: string;
        size: string | number;
        addedAt: Date;
    }[];
    couponCode?: string;
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date; // Pour les paniers temporaires
}

// Coupon de réduction
export interface Coupon {
    id: string;
    code: string;
    type: "percentage" | "amount" | "free_shipping";
    value: number;
    minimumPurchase?: number;
    maximumDiscount?: number;
    applicableProducts?: string[]; // "all" ou liste d'IDs
    applicableCategories?: string[]; // "all" ou liste de catégories
    usageLimit?: number; // Nombre max d'utilisations
    usageCount: number;
    perUserLimit?: number;
    startDate: Date;
    endDate?: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Types pour les analytics et statistiques
 */

// Période d'analyse
export type AnalyticsPeriod = "day" | "week" | "month" | "quarter" | "year" | "custom";

// Données de vente
export interface SalesData {
    period: AnalyticsPeriod;
    startDate: Date;
    endDate: Date;
    totalSales: number;
    orderCount: number;
    averageOrderValue: number;
    revenueByCategory: Record<string, number>;
    revenueByProduct: Record<string, number>;
    topProducts: {
        productId: string;
        productName: string;
        quantity: number;
        revenue: number;
    }[];
    conversionRate: number;
    comparisonToPreviousPeriod: {
        totalSales: number;
        orderCount: number;
        averageOrderValue: number;
        percentageChange: {
            totalSales: number;
            orderCount: number;
            averageOrderValue: number;
        };
    };
}

// Données utilisateur
export interface UserAnalytics {
    period: AnalyticsPeriod;
    startDate: Date;
    endDate: Date;
    newUsers: number;
    activeUsers: number;
    totalUsers: number;
    usersByGender?: Record<string, number>;
    usersByAge?: Record<string, number>;
    usersByLocation?: Record<string, number>;
    userRetentionRate?: number;
    averageSessionDuration?: number;
    comparisonToPreviousPeriod: {
        newUsers: number;
        activeUsers: number;
        percentageChange: {
            newUsers: number;
            activeUsers: number;
        };
    };
}

// Données de produit
export interface ProductAnalytics {
    productId: string;
    productName: string;
    views: number;
    addToCartCount: number;
    purchaseCount: number;
    conversionRate: number;
    averageRating: number;
    reviewCount: number;
    stockStatus: "in_stock" | "low_stock" | "out_of_stock";
    restockNeeded: boolean;
    period: AnalyticsPeriod;
    startDate: Date;
    endDate: Date;
}

// Données de marketing
export interface MarketingAnalytics {
    period: AnalyticsPeriod;
    startDate: Date;
    endDate: Date;
    trafficSources: Record<string, number>;
    campaignPerformance: {
        campaignId: string;
        campaignName: string;
        impressions: number;
        clicks: number;
        ctr: number;
        conversions: number;
        conversionRate: number;
        cost?: number;
        revenue?: number;
        roi?: number;
    }[];
    emailStats?: {
        sent: number;
        opened: number;
        openRate: number;
        clicked: number;
        clickRate: number;
        unsubscribed: number;
    };
}
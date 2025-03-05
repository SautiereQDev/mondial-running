/**
 * Types pour les notifications
 */

// Type de notification
export type NotificationType =
    | "order_status"
    | "product_restock"
    | "price_drop"
    | "review_response"
    | "blog_comment"
    | "event_reminder"
    | "promotion"
    | "account";

// Notification
export interface Notification {
    id: string;
    userId: string;
    type: NotificationType;
    title: string;
    message: string;
    image?: string;
    read: boolean;
    actionUrl?: string;
    actionText?: string;
    metadata?: Record<string, any>;
    createdAt: Date;
    expiresAt?: Date;
}

// Préférences de notification
export interface NotificationPreferences {
    userId: string;
    channels: {
        email: boolean;
        push: boolean;
        sms: boolean;
        inApp: boolean;
    };
    types: {
        [key in NotificationType]: {
            enabled: boolean;
            channels?: ("email" | "push" | "sms" | "inApp")[];
        };
    };
}
/**
 * Types pour la gestion des stocks et de l'inventaire
 */

// Statut de stock
export type StockStatus = "in_stock" | "low_stock" | "out_of_stock" | "backorder" | "discontinued";

// Mouvement de stock
export type StockMovementType = "purchase" | "sale" | "return" | "adjustment" | "transfer";

// Fournisseur
export interface Supplier {
    id: string;
    name: string;
    contactPerson?: string;
    email?: string;
    phone?: string;
    address?: string;
    website?: string;
    notes?: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// Entrepôt
export interface Warehouse {
    id: string;
    name: string;
    code: string;
    address: string;
    city: string;
    state?: string;
    country: string;
    postalCode: string;
    phone?: string;
    email?: string;
    isDefault: boolean;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// Mouvement de stock
export interface StockMovement {
    id: string;
    productId: string;
    sku: string;
    type: StockMovementType;
    quantity: number;
    warehouseId: string;
    orderId?: string;
    purchaseOrderId?: string;
    notes?: string;
    createdBy: string;
    createdAt: Date;
    reference?: string;
}

// Commande fournisseur
export interface PurchaseOrder {
    id: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: "draft" | "ordered" | "partial" | "received" | "cancelled";
    orderDate: Date;
    expectedDeliveryDate?: Date;
    receivedDate?: Date;
    items: {
        productId: string;
        sku: string;
        quantity: number;
        costPrice: number;
        receivedQuantity: number;
        notes?: string;
    }[];
    totalCost: number;
    notes?: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}

// Alerte de stock
export interface StockAlert {
    id: string;
    productId: string;
    sku: string;
    type: "low_stock" | "out_of_stock" | "expiring" | "overstock";
    threshold: number;
    currentStock: number;
    warehouseId?: string;
    status: "active" | "resolved" | "ignored";
    createdAt: Date;
    resolvedAt?: Date;
    notificationSent: boolean;
}

// Inventaire physique
export interface InventoryCount {
    id: string;
    warehouseId: string;
    status: "draft" | "in_progress" | "completed" | "cancelled";
    startDate: Date;
    endDate?: Date;
    items: {
        productId: string;
        sku: string;
        expectedQuantity: number;
        actualQuantity: number;
        discrepancy: number;
        notes?: string;
    }[];
    notes?: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}
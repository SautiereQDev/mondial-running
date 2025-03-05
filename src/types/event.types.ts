/**
 * Types pour les événements et courses
 */

// Type d'événement
export type EventType = "race" | "training" | "workshop" | "webinar" | "meetup" | "sale";

// Difficulté d'un événement
export type EventDifficulty = "beginner" | "intermediate" | "advanced" | "all-levels";

// Localisation d'un événement
export interface EventLocation {
    name?: string;
    address?: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
    coordinates?: {
        latitude: number;
        longitude: number;
    };
    virtual: boolean;
}

// Distance de course
export interface RaceDistance {
    value: number;
    unit: "km" | "mi";
    name?: string; // ex: "Marathon", "Semi-marathon", "10K"
}

// Événement
export interface Event {
    id: string;
    title: string;
    slug: string;
    description: string;
    shortDescription?: string;
    type: EventType;
    image?: string;
    gallery?: string[];
    startDate: Date;
    endDate: Date;
    registrationStartDate?: Date;
    registrationEndDate?: Date;
    location: EventLocation;
    organizer: {
        name: string;
        website?: string;
        email?: string;
        phone?: string;
        logo?: string;
    };
    capacity?: number;
    registeredCount?: number;
    price?: number;
    free: boolean;
    featured: boolean;
    status: "upcoming" | "ongoing" | "completed" | "cancelled";
    distances?: RaceDistance[]; // Pour les courses
    difficulty?: EventDifficulty;
    tags?: string[];
    website?: string;
    relatedProducts?: string[]; // IDs des produits recommandés
    createdAt: Date;
    updatedAt: Date;
}

// Inscription à un événement
export interface EventRegistration {
    id: string;
    eventId: string;
    userId: string;
    registrationDate: Date;
    status: "pending" | "confirmed" | "cancelled" | "attended";
    ticketType?: string;
    ticketPrice?: number;
    distance?: RaceDistance; // Distance choisie pour une course
    bibNumber?: string;
    paymentId?: string;
    additionalInfo?: Record<string, string>; // Informations supplémentaires
}

// Résultat de course
export interface RaceResult {
    id: string;
    eventId: string;
    userId?: string;
    participantName?: string;
    bibNumber?: string;
    distance: RaceDistance;
    finishTime: string; // Format HH:MM:SS
    pace?: string; // min/km ou min/mi
    overallPlace?: number;
    categoryPlace?: number;
    category?: string; // ex: "M30-34"
    splits?: {
        distance: number;
        time: string;
    }[];
    verified: boolean;
}
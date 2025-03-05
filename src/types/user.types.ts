/**
 * Types pour les utilisateurs et l'authentification
 */

import { RunnerLevel, TerrainType } from "./products.types";

// Rôles utilisateur
export type UserRole = "customer" | "admin" | "editor" | "support";

// Préférences utilisateur
export type UserPreferences = {
	newsletter: boolean;
	marketingEmails: boolean;
	language: string;
	currency: string;
	darkMode?: boolean;
};

// Adresse
export type Address = {
	id?: string;
	firstName: string;
	lastName: string;
	company?: string;
	address1: string;
	address2?: string;
	city: string;
	state?: string;
	postalCode: string;
	country: string;
	phone?: string;
	isDefault?: boolean;
	type?: "shipping" | "billing" | "both";
};

// Méthode de paiement
export type PaymentMethod = {
	id: string;
	type: "credit_card" | "paypal" | "apple_pay" | "google_pay" | "bank_transfer";
	isDefault: boolean;
	// Pour les cartes de crédit
	cardBrand?: "visa" | "mastercard" | "amex" | "discover";
	last4?: string;
	expiryMonth?: number;
	expiryYear?: number;
	// Pour PayPal
	email?: string;
};

// Profil de running
export type RunningProfile = {
	level?: RunnerLevel;
	weeklyDistance?: number;
	preferredTerrains?: TerrainType[];
	goals?: string[];
	personalBests?: {
		distance: string;
		time: string;
		date?: Date;
		event?: string;
	}[];
	shoeSize?: string | number;
	clothingSize?: string;
	favoriteRaces?: string[];
};

// Utilisateur
export interface User {
	id: string;
	email: string;
	username?: string;
	firstName?: string;
	lastName?: string;
	displayName?: string;
	avatar?: string;
	phone?: string;
	dateOfBirth?: Date;
	gender?: "male" | "female" | "other" | "prefer_not_to_say";
	roles: UserRole[];
	isVerified: boolean;
	isActive: boolean;
	preferences: UserPreferences;
	addresses: Address[];
	paymentMethods?: PaymentMethod[];
	runningProfile?: RunningProfile;
	createdAt: Date;
	updatedAt: Date;
	lastLoginAt?: Date;
	wishlist?: string[]; // IDs des produits en wishlist
	recentlyViewed?: string[]; // IDs des produits récemment consultés
	stripeCustomerId?: string; // ID client Stripe
}

// Informations d'authentification
export interface AuthInfo {
	userId: string;
	email: string;
	passwordHash?: string; // Stocké uniquement côté serveur
	passwordResetToken?: string;
	passwordResetExpires?: Date;
	emailVerificationToken?: string;
	emailVerificationExpires?: Date;
	twoFactorEnabled: boolean;
	twoFactorSecret?: string;
	loginAttempts?: number;
	lockUntil?: Date;
	providers?: {
		google?: string;
		facebook?: string;
		apple?: string;
	};
}

// Session utilisateur
export interface UserSession {
	id: string;
	userId: string;
	token: string;
	ipAddress?: string;
	userAgent?: string;
	expiresAt: Date;
	createdAt: Date;
	lastActiveAt: Date;
}

// Données de connexion
export interface LoginCredentials {
	email: string;
	password: string;
	rememberMe?: boolean;
}

// Données d'inscription
export interface RegisterData {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	acceptTerms: boolean;
	newsletter?: boolean;
}
import {User} from "@/types/user.types";

// Pour les données brutes (stockage/API)
export type TestimonialBase = {
	id?: number;
	rating: number;
	userId: number; // ID de l'utilisateur
	verified: boolean;
	content: string;
	createdAt: number; // Timestamp
	updatedAt?: number;
}

// Pour l'affichage (après avoir récupéré les données de l'utilisateur)
export type TestimonialWithAuthor = Omit<TestimonialBase, 'userId'> & {
	author: Omit<User, 'billPreference'>; // On n'a pas besoin des infos de facturation ici
}

// Type utilitaire pour faciliter les conversions
export type Testimonial = TestimonialBase | TestimonialWithAuthor;

// Helper pour vérifier le type
export const isTestimonialWithAuthor = (
	testimonial: Testimonial
): testimonial is TestimonialWithAuthor => {
	return 'author' in testimonial;
};

export type SortType = "latest" | "oldest" | "highest-rated" | "lowest-rated";
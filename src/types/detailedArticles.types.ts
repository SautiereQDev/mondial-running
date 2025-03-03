import {Testimonial} from "@/types/testimonials.types";
import {User} from "@/types/user.types";

type Material = {
	name: string;
	percentage: number;
}

export type ProductDetails = {
	composition: Material[];
	origine: string;
	entretien: string;
	maximumWashTemp: number;
}

export type Reduction = {
	type: "percentage" | "amount";
	value: number;
	startDate?: number;
	endDate?: number;
}

export type Color = {
	name: string;
	hex: string;
}

export type ArticleCategory = "t-shirt" | "sweat" | "pantalon" | "short" | "veste" | "chaussure" | "accessoire";

export type ArticleReview = Testimonial & { postedAt: number };

export type DetailedArticle = {
	id?: number,
	name: string,
	description: string,
	productDetails?: Partial<ProductDetails>,
	brand?: string,
	stock: number,
	price: number,
	imagesSrc: string[],
	colors: Color[],
	sizes: string[] | number[],
	avgRating?: number,
	reviews?: ArticleReview[],
	reduction?: Reduction,
	sex?: "M" | "F" | "U",
	category?: ArticleCategory,
}
import {Testimonial} from "@/types/testimonials.types";

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

export interface Article {
	id?: number;
	imagesSrc: string[];
	name: string;
	price: number;
	avgRating?: number;
	reduction?: Reduction;
}

export type DetailedArticle = Article & {
	description: string,
	productDetails?: Partial<ProductDetails>,
	brand?: string,
	stock: number,
	colors: Color[],
	sizes: string[] | number[],
	reviews?: ArticleReview[],
	sex?: "M" | "F" | "U",
	category?: ArticleCategory,
}


import {Reduction} from "@/types/detailedArticles.types";

export interface Article {
	id?: number;
	imgSrc: string;
	title: string;
	price: number;
	rating?: number;
	reduction?: Reduction;
}

export interface ArticleSectionProps {
	title: string;
	articles: Article[];
}
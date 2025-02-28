export interface ArticleProps {
	id?: number;
	imgSrc: string;
	title: string;
	price: number;
	rating?: number;
	reduction?: number;
	oldPrice?: number;
}

export interface ArticleSectionProps {
	title: string;
	articles: ArticleProps[];
}
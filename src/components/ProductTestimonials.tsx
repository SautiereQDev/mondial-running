import React from "react";
import {ArticleReview} from "@/types/articles.types";
import ProductTestimonialCard from "@/components/cards/ProductTestimonialCard";

interface ProductTestimonialsProps extends React.HTMLAttributes<HTMLDivElement> {
	reviews: ArticleReview[];
}

export default function ProductTestimonials({reviews, ...args}: Readonly<ProductTestimonialsProps>) {

	return (
		<div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 w-full ${args?.className}`} {...args}>
			{reviews.map((review: ArticleReview, index) => (
				<ProductTestimonialCard review={review} index={index} key={review.id ?? index}/>
			))}
		</div>
	);
}
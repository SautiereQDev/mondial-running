import React from 'react'
import {ArticleSectionProps} from "@/types/articleSection.types";
import ArticleCard from "@/components/cards/ArticleCard";

export default function ArticlesSection({title, articles}: Readonly<ArticleSectionProps>) {
	return (
		<div className="max-w-[85vw] mx-auto">
			<h2 className="text-5xl font-bold font-[montserrat] text-center py-16">{title}</h2>
			<section className="flex justify-evenly">
				{articles.map((article, index) => (
					<ArticleCard key={index} {...article}/>
				))}
			</section>

		</div>
	)
}

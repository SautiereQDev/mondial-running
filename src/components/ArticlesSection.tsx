import React from 'react'
import ArticleCard from "@/components/cards/ArticleCard";
import ViewMoreButton from "@/components/ui/ViewMoreButton";
import {Article} from "@/types/articles.types";

export default function ArticlesSection({title, articles}: Readonly<{
	title: string;
	articles: Article[];
}>) {
	return (
		<section className="max-w-[85vw] mx-auto mb-16">
			<h2 className="text-5xl font-black font-[montserrat] text-center my-16">{title.toUpperCase()}</h2>
			<div className="flex justify-evenly mb-14">
				{articles.map((article, index) => (
					<ArticleCard key={index} article={article}/>
				))}
			</div>
			<div className="mx-auto w-[fit-content]">
				<ViewMoreButton className="hover:cursor-pointer">Voir plus</ViewMoreButton>
			</div>
		</section>
	)
}

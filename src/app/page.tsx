"use client";
import Hero from "@/components/Hero";
import BrandBanner from "@/components/BrandBanner";
import ArticlesSection from "@/components/ArticlesSection";
import articles from "@/data/articles.json";

export default function HomePage() {

	return (
		<div>
			<Hero/>
			<BrandBanner/>
			<ArticlesSection title="Les nouveautés" articles={articles}/>
		</div>
	)
}
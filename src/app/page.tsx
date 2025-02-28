"use client";
import Hero from "@/components/Hero";
import BrandBanner from "@/components/BrandBanner";
import ArticlesSection from "@/components/ArticlesSection";
import articles from "@/data/articles.json";
import BrowseByPractice from "@/components/BrowseByPractice";
import React from "react";

export default function HomePage() {

	return (
		<div>
			<Hero/>
			<BrandBanner/>
			<ArticlesSection title="Les nouveautés" articles={articles}/>
			<hr className="my-18"/>
			<ArticlesSection title="Les meilleures ventes" articles={articles}/>
			<BrowseByPractice/>
		</div>
	)
}
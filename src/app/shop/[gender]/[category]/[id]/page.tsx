"use client"; // Nécessaire pour utiliser useParams()

import detailedArticles from "@/data/detailedArticles.json";
import {DetailedArticle} from "@/types/detailedArticles.types";
import {useParams} from "next/navigation";
import React from "react";
import DetailedArticlePage from "@/components/DetailedArticlePage";

export default function Page() {
	const {id} = useParams();
	const articleId = typeof id === "string" ? parseInt(id) : 0;

	const typedArticles = detailedArticles.map(article => ({
		...article,
		sex: article.sex as "M" | "F" | "U", // Conversion explicite de sex
		category: article.category // On suppose que ArticleCategory est compatible avec string[]
	})) as unknown as DetailedArticle[];

	// Recherche de l'article par ID dans le fichier de test
	// TODO: remplacer par une requête API
	const data = typedArticles.find(a => a.id === articleId) ?? typedArticles[0];

	return (
		<DetailedArticlePage data={data}/>
	);
}
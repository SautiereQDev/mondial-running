"use client";
import ArticleGallery from "@/components/ArticleGallery";
import {Color, DetailedArticle} from "@/types/detailedArticles.types";
import Stars from "@/utils/Stars";
import PriceReductionLabel from "@/components/ui/PriceReductionLabel";
import React, {useState} from "react";
import getNewPrice from "@/utils/price";
import {Check} from "lucide-react";
import NumericalInput from "@/components/ui/NumericalInput";

interface DetailedArticlePageProps {
	data: DetailedArticle;
}

export default function DetailedArticlePage({data}: Readonly<DetailedArticlePageProps>) {

	const {name, description, price, reduction, avgRating, imagesSrc, colors, sizes, stock} = data;

	const [userChoice, setUserChoice] = useState<{ color: Color, size: number | string, quantity: number }>({
		color: colors[0],
		size: sizes[0],
		quantity: 1
	})

	return (
		<div className="max-w-[85vw] mx-auto flex justify-evenly">
			<div className="flex-1">
				<ArticleGallery imagesSrc={imagesSrc}/>
			</div>
			<aside className="w-1/2 mx-auto">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold">{name.toUpperCase()}</h1>
					{avgRating && (
						<div className="flex items-center">
							<Stars rating={avgRating} size={24}/>
							<p className="text-sm">{avgRating}/<span className="text-gray-500">5</span></p>
						</div>
					)}
					<div className="flex items-center gap-3 mt-1">
						<p className="font-bold text-2xl">{price}€</p>
						{reduction && (
							<>
								<p className="line-through text-gray-500 text-2xl">{getNewPrice(price, reduction)}€</p>
								{reduction.type && <PriceReductionLabel discount={reduction.value}/>}
							</>
						)}
					</div>
				</div>

				<p className="mt-5">{description}</p>
				<hr className="my-5"/>
				<div className="flex flex-col gap-4">
					<p>Couleur</p>
					<div className="flex gap-2">
						{colors.map((color: Color, index) => (
							<button key={color.name} style={{backgroundColor: color.hex}}
											className="rounded-full h-9 w-9 border cursor-pointer"
											onClick={() => setUserChoice({
												...userChoice,
												color: color
											})}>{userChoice.color === colors[index] &&
				  <Check size={16} className="m-auto color text-white"/>}</button>))}
					</div>
				</div>
				<hr className="my-5"/>
				<div className="flex flex-col gap-3">
					<p>Taille</p>
					<div className="flex gap-2">
						{typeof sizes[0] === "number" && sizes.map(size => (
							<button key={size}
											className={`rounded-lg  p-3 border cursor-pointer ${size === userChoice.size && "border-gray-500 border-1.5 bg-gray-100"} hover:scale-105 transition-transform hover:bg-gray-100 hover:shadow-xs hover:border-gray-20`}
											onClick={() => setUserChoice({...userChoice, size: size})}>{size}</button>
						))}
						{typeof sizes[0] === "string" && sizes.map(size => (
							<button key={size}
											className={`rounded-xl  py-1.5 px-4 border cursor-pointer  ${size === userChoice.size && "border-gray-500 border-1.5 bg-gray-100"} hover:scale-105 transition-transform hover:bg-gray-100 hover:shadow-xs hover:border-gray-200`}
											onClick={() => setUserChoice({...userChoice, size: size})}>{size}</button>
						))}
					</div>
				</div>
				<hr className="my-5"/>
				<div className="flex flex-col gap-3">
					<p className="font-medium">Quantité</p>
					<NumericalInput
						stock={stock}
						value={userChoice.quantity}
						setValueFn={(value: number) => setUserChoice({...userChoice, quantity: value})}
					/>
					{stock < 10 && <p className="text-sm text-orange-600">Plus que {stock} en stock</p>}
				</div>

				{/* Bouton Ajouter au panier */}
				<button
					className="mt-6 w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
					onClick={() => {
						// Logique pour ajouter au panier
						console.log("Article ajouté au panier", userChoice);
					}}
				>
					Ajouter au panier
				</button>
			</aside>
		</div>
	)
		;
}
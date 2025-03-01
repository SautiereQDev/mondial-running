"use client";
import ArticleGallery from "@/components/ArticleGallery";
import {Color, DetailedArticle} from "@/types/detailedArticles.types";
import Stars from "@/utils/Stars";
import PriceReductionLabel from "@/components/ui/PriceReductionLabel";
import React, {useState} from "react";
import getNewPrice from "@/utils/price";
import {Check} from "lucide-react";
import NumericalInput from "@/components/ui/NumericalInput";

export default function DetailedArticlePage({
																							imagesSrc,
																							avgRating,
																							price,
																							reduction,
																							name,
																							colors,
																							stock,
																							sizes,
																							description
																						}: Readonly<DetailedArticle>) {

	const [userChoice, setUserChoice] = useState<{ color: Color, size: number | string, quantity: number }>({
		color: colors[0],
		size: sizes[0],
		quantity: 1
	})

	return (
		<div className="max-w-[85vw] mx-auto flex justify-evenly ">
			<div className="flex-1 min-w-[500px]">
				<ArticleGallery imagesSrc={imagesSrc}/>
			</div>
			<aside className="w-1/2 mx-auto">
				<h1 className="text-3xl font-bold">{name.toUpperCase()}</h1>
				{avgRating && (
					<div className="flex items-center">
						<Stars rating={avgRating} size={24}/>
						<p className="text-sm">{avgRating}/<span className="text-gray-500">5</span></p>
					</div>
				)}
				<div className="flex items-center gap-2.5">
					<p className="font-bold text-2xl">{price}€</p>
					{reduction && (
						<>
							<p className="line-through text-gray-500 text-2xl">{getNewPrice(price, reduction)}€</p>
							{reduction.type && <PriceReductionLabel discount={reduction.value}/>}
						</>
					)}
				</div>
				<p>{description}</p>
				<hr/>
				<div>
					<p>Selection de la couleur</p>
					<div>
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
				<hr/>
				<div>
					<p>Choix de la taille</p>
					<div>
						{typeof sizes[0] === "number" && sizes.map(size => (
							<button key={size}
											className={`rounded-lg  p-3 border cursor-pointer ${size === userChoice.size}`}>{size}</button>
						))}
						{typeof sizes[0] === "string" && sizes.map(size => (
							<button key={size}
											className={`rounded-xl  py-1.5 px-4 border cursor-pointer ${size === userChoice.size}`}>{size}</button>
						))}
					</div>
				</div>
				<hr/>
				<div className="flex flex-col gap-2 mt-4">
					<p className="font-medium">Quantité</p>
					<NumericalInput stock={stock} value={userChoice.quantity} setValueFn={(value: number) => setUserChoice({...userChoice, quantity: value + 1})}/>
					{stock < 10 && <p className="text-sm text-orange-600">Plus que {stock} en stock</p>}
				</div>
			</aside>
		</div>
	)
		;
}
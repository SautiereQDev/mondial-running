"use client";
import ArticleGallery from "@/components/ArticleGallery";
import { Color, DetailedArticle } from "@/types/articles.types";
import Stars from "@/utils/Stars";
import PriceReductionLabel from "@/components/ui/PriceReductionLabel";
import React, { useState } from "react";
import getNewPrice from "@/utils/price";
import { Check, Heart, Package, ShoppingCart, Truck } from "lucide-react";
import NumericalInput from "@/components/ui/NumericalInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DetailedArticlePageProps {
	data: DetailedArticle;
	isLiked?: boolean;
}

export default function DetailedArticlePage({ data, isLiked = true }: Readonly<DetailedArticlePageProps>) {
	const { name, description, price, reduction, avgRating, imagesSrc, colors, sizes, stock } = data;

	const [userChoice, setUserChoice] = useState<{ color: Color; size: number | string; quantity: number }>({
		color: colors[0],
		size: sizes[0],
		quantity: 1,
	});


	return (
		<div className="max-w-[85vw] mx-auto flex justify-between gap-12">
			<div className="flex-1">
				<ArticleGallery imagesSrc={imagesSrc} />
			</div>
			<aside className="w-[450px] flex flex-col gap-6">
				<div className="space-y-4">
					<div className="flex items-start justify-between">
						<h1 className="text-3xl font-bold tracking-tight">{name.toUpperCase()}</h1>
						<Button
							variant="outline"
							size="icon"
							className={`
								rounded-full 
								transition-all 
								duration-200 
								hover:scale-110 
								${isLiked ? "border-red-500 hover:border-red-600" : "hover:border-red-300"}
							`}
						>
							<Heart
								className={`h-5 w-5 transition-colors duration-200 ${isLiked ? "text-red-500" : ""}`}
								fill={isLiked ? "#ef4444" : "transparent"}
							/>
						</Button>
					</div>
					{avgRating && (
						<div className="flex items-center gap-2">
							<Stars rating={avgRating} size={20} />
							<span className="text-sm font-medium">{avgRating}/5</span>
						</div>
					)}
					<div className="flex items-baseline gap-3">
						<p className="text-3xl font-bold">{price}€</p>
						{reduction && (
							<>
								<p className="line-through text-xl text-gray-500">{getNewPrice(price, reduction)}€</p>
								<PriceReductionLabel reduction={reduction} />
							</>
						)}
					</div>
				</div>

				<ScrollArea className="h-26">
					<p className="text-gray-600 leading-relaxed">{description}</p>
				</ScrollArea>

				<Separator />

				<div className="space-y-6">
					<div className="space-y-3 flex flex-col">
						<label className="font-medium">Couleur</label>
						<div className="flex gap-3">
							{colors.map((color: Color, index) => (
								<button
									key={color.name}
									style={{ backgroundColor: color.hex }}
									className={`rounded-full h-10 w-10 border-2 transition-all duration-200 hover:scale-110 ${userChoice.color === colors[index] ? "ring-2 ring-offset-2 ring-black" : ""
										}`}
									onClick={() => setUserChoice({ ...userChoice, color: color })}
								>
									{userChoice.color === colors[index] && <Check size={16} className="m-auto text-white" />}
								</button>
							))}
						</div>
					</div>

					<div className="space-y-3 flex flex-col">
						<label className="font-medium">Taille</label>
						<div className="flex flex-wrap gap-2">
							{sizes.map((size) => (
								<Button
									key={size}
									variant={size === userChoice.size ? "default" : "outline"}
									className="min-w-[60px]"
									onClick={() => setUserChoice({ ...userChoice, size: size })}
								>
									{size}
								</Button>
							))}
						</div>
					</div>

					<div className="space-y-3 flex flex-col">
						<label className="font-medium">Quantité</label>
						<NumericalInput
							stock={stock}
							value={userChoice.quantity}
							setValueFn={(value: number) => setUserChoice({ ...userChoice, quantity: value })}
						/>
						{stock < 10 && (
							<Badge variant="destructive" className="gap-2">
								<Package className="h-4 w-4" />
								Plus que {stock} en stock
							</Badge>
						)}
					</div>
				</div>

				<div className="space-y-3 mt-4">
					<Button
						className="w-full h-12 text-base gap-3"
						onClick={() => {
							console.log("Article ajouté au panier", userChoice);
						}}
					>
						<ShoppingCart className="h-5 w-5" />
						Ajouter au panier
					</Button>

					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Truck className="h-4 w-4" />
						<span>Livraison gratuite à partir de 50€</span>
					</div>
				</div>
			</aside>
		</div>
	);
}
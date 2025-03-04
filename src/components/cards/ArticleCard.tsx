import React from 'react'
import {Article} from "@/types/articles.types";
import Image from "next/image";
import Stars from "@/utils/Stars";
import PriceReductionLabel from "@/components/ui/PriceReductionLabel";
import Link from "next/link";
import getNewPrice from "@/utils/price";

export default function ArticleCard({article} : Readonly<{article: Article}>) {

	const {id, imagesSrc, name, avgRating, price, reduction} = article;

	return (
		<div className="cursor-pointer hover:border-gray-300 hover:shadow-md border border-gray-200 p-4 rounded-xl">
			<Link href={`/article/${id}`}>
				<Image src={imagesSrc[0]} alt={`Illustration de ${name}`} width={295} height={295}
							 className="rounded-xl max-h-[295]"/>
				<h3 className='font-bold text-xl pt-3 pb-2 font-[montserrat]'>{name}</h3>
				<div className="flex gap-1 flex-col">
					<div className="flex items-center gap-1">
						{avgRating && <Stars rating={avgRating} size={18}/>}
						{avgRating &&
				<p className="text-sm">{avgRating}/<span className="text-gray-500">5</span></p>
						}
					</div>
					<div className="flex items-center gap-2.5">
						{reduction ? (
						<>
							<p className="font-bold text-2xl">{getNewPrice(price, reduction)}€</p>
							<p className="line-through text-gray-500 text-2xl">{price}€</p>
							<PriceReductionLabel reduction={reduction}/>
						</>) : <p className="font-bold text-2xl">{price}€</p>}
					</div>
				</div>
			</Link>
		</div>
	)
}

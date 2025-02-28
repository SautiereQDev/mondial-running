import React from 'react'
import {ArticleProps} from "@/types/articleSection.types";
import Image from "next/image";
import Stars from "@/utils/Stars";
import PriceReductionLabel from "@/components/ui/PriceReductionLabel";

export default function ArticleCard({imgSrc, price, oldPrice, title, reduction, rating}: Readonly<ArticleProps>) {

	if (oldPrice && !reduction) {
		throw new Error("An old price must have a reduction");
	}

	if (reduction && !oldPrice) {
		throw new Error("A reduction must have an old price");
	}

	return (
		<div>
			<Image src={imgSrc} alt={`Illustration de ${title}`} width={295} height={295} className="rounded-xl max-h-[295]"/>
			<h3 className='font-bold text-xl pt-3 pb-2 font-[montserrat]'>{title}</h3>
			<div className="flex gap-1 flex-col">
				<div className="flex items-center">
					{rating && <Stars rating={rating}/>}
					{rating &&
			  <p className="text-sm">{rating}/<span className="text-gray-500">5</span></p>
					}
				</div>
				<div className="flex items-center gap-2.5">
					<p className="font-bold text-2xl">{price}€</p>
					{(oldPrice && reduction) && (
						<>
							<p className="line-through text-gray-500 text-2xl">{oldPrice}€</p>
							<PriceReductionLabel discount={reduction}/>
						</>
					)}
				</div>
			</div>

		</div>
	)
}

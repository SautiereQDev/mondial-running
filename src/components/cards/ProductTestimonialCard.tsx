import Image from "next/image";
import {isTestimonialWithAuthor} from "@/types/testimonials.types";
import Stars from "@/utils/Stars";
import React, {useEffect, useRef, useState} from "react";
import {ArticleReview} from "@/types/articles.types";
import {ChevronDown, ChevronUp} from "lucide-react";

export default function ProductTestimonialCard({
																								 review,
																								 index
																							 }: Readonly<{ review: ArticleReview, index?: number }>) {
	const [expanded, setExpanded] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const contentRef = useRef<HTMLParagraphElement>(null);

	// Vérifier si le contenu dépasse la hauteur maximale
	useEffect(() => {
		if (contentRef.current) {
			// Ajusté pour h-52 qui est plus grande que h-48
			const maxContentHeight = 100;
			setIsOverflowing(contentRef.current.scrollHeight > maxContentHeight);
		}
	}, [review.content]);

	return (
		<div
			key={review.id ?? index}
			className={`border p-4 rounded-lg shadow-xs hover:shadow transition-shadow ${
				expanded ? 'max-h-none' : 'max-h-52 overflow-hidden'
			} relative`}
		>
			<div className="flex items-center gap-3">
				<Image
					src={isTestimonialWithAuthor(review) ? review.author.avatarSrc ?? '/default_pp.svg' : '/default_pp.svg'}
					alt="Photo de profil"
					className="h-10 w-10 rounded-full object-cover"
					width={40}
					height={40}
				/>
				<div>
					<div className="flex items-center gap-2">
						<p className="font-semibold">
							{isTestimonialWithAuthor(review) ? `${review.author.firstName ?? ''} ${review.author.lastName ?? ''}`.trim() ?? review.author.username : 'Utilisateur'}
						</p>
						{review.verified && (
							<span className="text-xs text-green-600 flex items-center">
                ✓ Achat vérifié
              </span>
						)}
					</div>
					<p className="text-sm text-gray-500">
						{new Date(review.createdAt).toLocaleDateString('fr-FR')}
					</p>
				</div>
			</div>
			<div className="mt-2">
				<Stars rating={review.rating} size={16}/>
			</div>
			<p ref={contentRef} className="mt-2 text-gray-700">{review.content}</p>

			{isOverflowing && !expanded && (
				<div
					className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white pt-4 flex items-end justify-center">
					<button
						onClick={() => setExpanded(true)}
						className="text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1 hover:cursor-pointer"
					>
						<ChevronDown size={16} stroke={"##1447e6"}/>
					</button>
				</div>
			)}

			{expanded && (
				<button
					onClick={() => setExpanded(false)}
					className="mt-3 text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1 mx-auto hover:cursor-pointer"
				>
					<p className="text-sm text-blue-700">Réduire le commentaire</p>
					<ChevronUp size={16} stroke={"#1447e6"}/>
				</button>
			)}
		</div>
	);
}
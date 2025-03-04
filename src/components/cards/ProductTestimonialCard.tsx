import Image from "next/image";
import { isTestimonialWithAuthor } from "@/types/testimonials.types";
import Stars from "@/utils/Stars";
import React, { useEffect, useRef, useState } from "react";
import { ArticleReview } from "@/types/articles.types";
import { ChevronDown, ChevronUp, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductTestimonialCard({
	review,
	index
}: Readonly<{ review: ArticleReview, index?: number }>) {
	const [expanded, setExpanded] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const contentRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			const maxContentHeight = 100;
			setIsOverflowing(contentRef.current.scrollHeight > maxContentHeight);
		}
	}, [review.content]);

	return (
		<Card className="transition-all duration-200 hover:shadow-md">
			<CardHeader className="pb-2">
				<div className="flex items-center gap-3">
					<Image
						src={isTestimonialWithAuthor(review) ? review.author.avatarSrc ?? '/default_pp.svg' : '/default_pp.svg'}
						alt="Photo de profil"
						className="h-10 w-10 rounded-full object-cover"
						width={40}
						height={40}
					/>
					<div className="flex-1">
						<div className="flex items-center gap-2">
							<p className="font-semibold">
								{isTestimonialWithAuthor(review)
									? `${review.author.firstName ?? ''} ${review.author.lastName ?? ''}`.trim() ?? review.author.username
									: 'Utilisateur'}
							</p>
							{review.verified && (
								<span className="text-xs text-green-600 flex items-center gap-1">
									<BadgeCheck className="h-4 w-4" />
									Achat vérifié
								</span>
							)}
						</div>
						<div className="flex items-center gap-2">
							<Stars rating={review.rating} size={16} />
							<p className="text-sm text-gray-500">
								{new Date(review.createdAt).toLocaleDateString('fr-FR')}
							</p>
						</div>
					</div>
				</div>
			</CardHeader>

			<CardContent className="relative">
				<div className={`${!expanded && 'max-h-[100px]'} overflow-hidden relative`}>
					<p ref={contentRef} className="text-gray-700">
						{review.content}
					</p>
					{isOverflowing && !expanded && (
						<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
					)}
				</div>

				{isOverflowing && (
					<Button
						variant="ghost"
						size="sm"
						className="w-full mt-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
						onClick={() => setExpanded(!expanded)}
					>
						{expanded ? (
							<span className="flex items-center gap-2">
								Réduire <ChevronUp className="h-4 w-4" />
							</span>
						) : (
							<span className="flex items-center gap-2">
								Voir plus <ChevronDown className="h-4 w-4" />
							</span>
						)}
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
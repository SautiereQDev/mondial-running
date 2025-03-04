"use client";
import ProductTestimonials from '@/components/ProductTestimonials'
import { ArticleReview } from "@/types/articles.types";
import { MessageSquare, PenSquare, Star } from "lucide-react";
import { SortDropdown } from "@/components/buttons/SortDropdown";
import { useState } from "react";
import { SortType } from '@/types/testimonials.types';
import TestimonialsSettingsButton from "@/components/buttons/TestimonialsSettingsButton";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Stars from '@/utils/Stars';

const reviews: ArticleReview[] = [
	{
		id: 0,
		rating: 4,
		userId: 1,
		verified: true,
		content: "Très bon produit, je recommande !Très bon produit, je recommande !Très bon produit, je recommande !Très bon produit, je recommande !Très bon produit, je recommande !Très bon produit, je recommande !Très bon produit, je recommande !Très bon produit, je recommande !",
		createdAt: Date.now() - 86400000, // 1 jour avant
		updatedAt: undefined,
		postedAt: Date.now() - 86400000
	}, {
		id: 1,
		rating: 4,
		userId: 1,
		verified: true,
		content: "Très bon produit, je recommande !",
		createdAt: Date.now() - 86400000, // 1 jour avant
		updatedAt: undefined,
		postedAt: Date.now() - 86400000
	}, {
		id: 2,
		rating: 4,
		userId: 1,
		verified: true,
		content: "Très bon produit, je recommande !",
		createdAt: Date.now() - 86400000, // 1 jour avant
		updatedAt: undefined,
		postedAt: Date.now() - 86400000
	}, {
		id: 3,
		rating: 4,
		userId: 1,
		verified: true,
		content: "Très bon produit, je recommande !",
		createdAt: Date.now() - 86400000, // 1 jour avant
		updatedAt: undefined,
		postedAt: Date.now() - 86400000
	}
];

// Calculer la note moyenne
const calculateAverageRating = (reviews: ArticleReview[]): number => {
	if (reviews.length === 0) return 0;
	const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
	return parseFloat((sum / reviews.length).toFixed(1));
};

export default function Page() {
	const [sortType, setSortType] = useState<SortType>("latest");
	const pathname = usePathname();
	const averageRating = calculateAverageRating(reviews);

	return (
		<div className="flex flex-col w-full gap-8">
			{/* En-tête avec statistiques */}
			<div className="bg-gray-50 rounded-xl p-6 mt-10 shadow-sm">
				<div className="flex items-start justify-between">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Avis clients</h4>
						<div className="flex items-center gap-2">
							<div className="flex items-center">
								<Stars rating={averageRating} size={20} />
								<span className="ml-2 font-medium text-lg">{averageRating}</span>
							</div>
							<span className="text-gray-500">•</span>
							<span className="text-gray-600 flex items-center gap-1">
								<MessageSquare className="h-4 w-4" />
								{reviews.length} avis
							</span>
						</div>
					</div>
					<Link href={`${pathname}/new-testimonial`}>
						<Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-200 flex items-center gap-2">
							<PenSquare className="h-4 w-4" />
							Écrire un avis
						</Button>
					</Link>
				</div>

				{/* Distribution des notes */}
				<div className="mt-6 grid grid-cols-5 gap-4">
					{[5, 4, 3, 2, 1].map((rating) => {
						const count = reviews.filter(r => r.rating === rating).length;
						const percentage = reviews.length > 0 ? Math.round((count / reviews.length) * 100) : 0;

						return (
							<div key={rating} className="flex items-center gap-2">
								<div className="flex items-center gap-1 w-12">
									<span className="text-sm font-medium">{rating}</span>
									<Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
								</div>
								<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
									<div
										className="h-full bg-yellow-400 rounded-full"
										style={{ width: `${percentage}%` }}
									/>
								</div>
								<span className="text-xs text-gray-500 w-8">{percentage}%</span>
							</div>
						);
					})}
				</div>
			</div>

			<Separator className="my-2" />

			{/* Filtres et tri */}
			<div className="flex items-center gap-4 justify-end">
				<TestimonialsSettingsButton />
				<SortDropdown sortType={sortType} setSortType={setSortType} />
			</div>

			{/* Liste des avis */}
			<ProductTestimonials reviews={reviews} />

			{/* Bouton "Afficher plus" */}
			<Button
				variant="outline"
				className="mx-auto mt-6 px-8 rounded-full border-gray-300 hover:bg-gray-50"
			>
				Afficher plus d'avis
			</Button>
		</div>
	)
}
"use client";
import ProductTestimonials from '@/components/ProductTestimonials'
import {ArticleReview} from "@/types/articles.types";
import {PenSquare} from "lucide-react";
import {SortDropdown} from "@/components/buttons/SortDropdown";
import {useState} from "react";
import {SortType} from '@/types/testimonials.types';
import TestimonialsSettingsButton from "@/components/buttons/TestimonialsSettingsButton";
import Link from "next/link";
import {usePathname} from 'next/navigation';

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

export default function Page() {

	const [sortType, setSortType] = useState<SortType>("latest");
	const pathname = usePathname();

	return (
		<div className="flex flex-col w-full gap-8 mb-16">
			<div className="flex items-center gap-3 pt-10 justify-between">
				<div className="flex items-center gap-3">
					<h4 className="text-2xl font-bold">Tous les commentaires <span
						className="text-lg font-normal text-gray-500">({reviews.length})</span></h4>
				</div>
				<Link
					href={`${pathname}/new-testimonial`}
					className="text-md bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 shadow-md transition-all duration-200 flex items-center gap-3 rounded-lg cursor-pointer">
					<PenSquare className="h-4 w-4"/>
					Écrire un commentaire
				</Link>
			</div>
			<div className="flex items-center gap-4 justify-end mb-4">
				<TestimonialsSettingsButton/>
				<SortDropdown sortType={sortType} setSortType={setSortType}/>
			</div>
			<ProductTestimonials reviews={reviews}/>
			<button className="px-7 py-2.5 border m-auto rounded-2xl shadow cursor-pointer mt-4">Afficher plus</button>
		</div>
	)
}
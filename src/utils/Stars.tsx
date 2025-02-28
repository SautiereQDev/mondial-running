import React from 'react'
import {Star, StarHalf} from "lucide-react";

export default function Stars({rating}: Readonly<{ rating: number }>) {
	// Arrondir au multiple de 0.5 le plus proche
	const roundedRating = Math.round(rating * 2) / 2;
	const fullStars = Math.floor(roundedRating);
	const hasHalfStar = roundedRating % 1 !== 0;

	return (
		<div className="flex">
			{Array(fullStars).fill(0).map((_, index) => (
				<Star key={index} fill="#FFC633" stroke="none"/>
			))}
			{hasHalfStar && <StarHalf fill="#FFC633" stroke="none"/>}
		</div>
	)
}
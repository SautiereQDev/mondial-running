import {Star, StarHalf} from "lucide-react";

interface StarsProps {
	rating: number;
	maxRating?: number;
	showEmpty?: boolean;
	displayHalf?: boolean;
	size?: number;
}

export default function Stars({rating, maxRating = 5, showEmpty = false, displayHalf = true, size = 24}: Readonly<StarsProps>) {
	// S'assurer que le rating est un nombre valide
	const safeRating = !isNaN(rating) ? Math.max(0, Math.min(rating, maxRating)) : 0;

	// Calculer les étoiles pleines, demi-étoiles et étoiles vides
	const fullStars = Math.floor(safeRating);
	const hasHalfStar = safeRating % 1 >= 0.5;
	const emptyStars = Math.max(0, maxRating - fullStars - (hasHalfStar ? 1 : 0));

	return (
		<div className="flex">
			{/* Étoiles pleines */}
			{Array(fullStars).fill(0).map((_, index) => (
				<Star key={`full-${index}`} fill="#FFC633" stroke="none" size={size}/>
			))}

			{/* Demi-étoile si nécessaire */}
			{hasHalfStar && displayHalf && <StarHalf fill="#FFC633" stroke="none" size={size}/>}

			{/* Étoiles vides - seulement si showEmpty est true */}
			{showEmpty && Array(emptyStars).fill(0).map((_, index) => (
				<Star key={`empty-${index}`} fill="none" stroke="#FFC633" size={size}/>
			))}
		</div>
	);
}
import React from 'react'
import {Star, StarHalf} from "lucide-react";

export default function Stars({rating}: Readonly<{ rating: number }>) {
	return (
		<div className="flex">{Array(Math.floor(rating)).fill(String(0)).map((_, index) => (
			<Star key={index} fill="#FFC633" stroke="none"/>
		))
		}
			{rating % 1 !== 0 && <StarHalf fill="#FFC633" stroke="none"/>}
		</div>
	)
}

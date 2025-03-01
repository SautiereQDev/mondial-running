import React from 'react';
import Stars from "@/utils/Stars";
import {BadgeCheck} from "lucide-react";
import {Testimonial} from "@/types/testimonials.types";

export default function TestimonialCard({rating, username, verified, content}: Readonly<Testimonial>) {
	return (
		<div className="flex flex-col border rounded-lg py-7 px-8 gap-4">
			<Stars rating={rating}/>
			<div className="flex items-center gap-2">
				<h5 className="font-bold">{username}</h5>
				{verified && <BadgeCheck stroke="white" fill="#00c950" size={24}/>}
			</div>
			<p className="text-gray-700">{content}</p>
		</div>
	);
}
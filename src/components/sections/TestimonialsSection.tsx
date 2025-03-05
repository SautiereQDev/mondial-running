import React, {useState} from 'react';
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials.json";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";

export default function TestimonialsSection() {
	const [startIndex, setStartIndex] = useState(0);
	const displayCount = 3;
	const totalTestimonials = testimonials.length;

	const previousTestimonial = () => {
		setStartIndex((prevIndex) => {
			const newIndex = prevIndex - 1;
			return newIndex < 0 ? totalTestimonials - displayCount : newIndex;
		});
	};

	const nextTestimonial = () => {
		setStartIndex((prevIndex) => {
			const newIndex = prevIndex + 1;
			return newIndex > totalTestimonials - displayCount ? 0 : newIndex;
		});
	};

	return (
		<section className="pt-12 mb-44 px-4 max-w-[85vw] mx-auto">
			<div className="flex justify-between items-center mb-12">
				<h2 className="text-5xl font-black font-[montserrat]">NOS CLIENTS SATISFAITS</h2>
				<div className="flex gap-8">
					<CircleChevronLeft size={28} onClick={previousTestimonial}/>
					<CircleChevronRight size={28} onClick={nextTestimonial}/>
				</div>
			</div>
			<div className="flex mx-auto gap-8">
				{testimonials.slice(startIndex, startIndex + displayCount).map((testimonial, index) => (
					<TestimonialCard
						key={`${testimonial.username}-${index}`}
						username={testimonial.username}
						verified={testimonial.verified}
						content={testimonial.content}
						rating={testimonial.rating}/>
				))}
			</div>
		</section>
	);
}
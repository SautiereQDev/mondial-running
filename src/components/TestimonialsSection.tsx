import React from 'react';
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
	return (
		<section className="py-12 px-4 max-w-[85vw] mx-auto">
			<h2 className="text-5xl font-black font-[montserrat] text-le mb-12">NOS CLIENTS SATISFAITS</h2>

			<div className="flex  mx-auto gap-8">
				{testimonials.slice(0, 3).map((testimonial, index) => (
					<TestimonialCard
						key={`${testimonial.username}-${index}`}
						rating={testimonial.rating}
						username={testimonial.username}
						verified={testimonial.verified}
						content={testimonial.content}
					/>
				))}
			</div>
		</section>
	);
}
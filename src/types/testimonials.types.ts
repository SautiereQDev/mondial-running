export type Testimonial = {
	rating: number;
	username: string;
	verified: boolean;
	content: string;
}

export interface TestimonialCardProps = Testimonial
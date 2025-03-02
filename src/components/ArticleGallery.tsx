"use client";
import Image from "next/image";
import {useState} from "react";
import {AspectRatio} from "@/components/ui/aspect-ratio";

interface ItemsGalleryProps {
	imagesSrc: string[]
}

export default function ArticleGallery({imagesSrc}: Readonly<ItemsGalleryProps>) {
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

	return (
		<div className="flex gap-6 min-w-0">
			{/* Conteneur des miniatures */}
			<div className="flex flex-col gap-4 w-24">
				{imagesSrc.map((src, index) => (
					<div key={`${index}-${src}`} className="cursor-pointer">
						<AspectRatio ratio={1} className="overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105">
							<Image
								src={src}
								alt={`Image ${index}`}
								onClick={() => setActiveImageIndex(index)}
								className={`object-cover w-full h-full rounded-lg ${
									activeImageIndex === index ? 'border-2 border-gray-400 ring-1 ring-primary' : 'opacity-80 hover:opacity-100'
								}`}
								width={100}
								height={120}
							/>
						</AspectRatio>
					</div>
				))}
			</div>

			{/* Image principale */}
			<div className="flex-1">
				<AspectRatio ratio={8/10}>
					<Image
						src={imagesSrc[activeImageIndex]}
						alt="Active image"
						className="object-cover shadow-lg rounded-lg border"
						width={500}
						height={600}
					/>
				</AspectRatio>
			</div>
		</div>
	)
}
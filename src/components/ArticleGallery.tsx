"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

interface ItemsGalleryProps {
	imagesSrc: string[]
}

export default function ArticleGallery({ imagesSrc }: Readonly<ItemsGalleryProps>) {
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
	const [isZoomed, setIsZoomed] = useState<boolean>(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
	const imageContainerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isZoomed || !imageContainerRef.current) return;

		const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
		const x = ((e.clientX - left) / width) * 100;
		const y = ((e.clientY - top) / height) * 100;

		setZoomPosition({ x, y });
	};

	const nextImage = () => {
		setActiveImageIndex((prev) => (prev + 1) % imagesSrc.length);
		setIsZoomed(false);
	};

	const prevImage = () => {
		setActiveImageIndex((prev) => (prev - 1 + imagesSrc.length) % imagesSrc.length);
		setIsZoomed(false);
	};

	return (
		<div className="flex flex-col md:flex-row gap-6 min-w-0">
			{/* Conteneur des miniatures - vertical sur desktop, horizontal sur mobile */}
			<div className="md:w-24 order-2 md:order-1">
				<div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible py-2 md:py-0">
					{imagesSrc.map((src, index) => (
						<div key={`${index}-${src}`} className="cursor-pointer flex-shrink-0">
							<AspectRatio ratio={1} className="overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 w-16 md:w-auto">
								<Image
									src={src}
									alt={`Image ${index}`}
									onClick={() => {
										setActiveImageIndex(index);
										setIsZoomed(false);
									}}
									className={`object-cover w-full h-full rounded-lg ${activeImageIndex === index ? 'border-2 border-gray-400 ring-1 ring-primary' : 'opacity-80 hover:opacity-100'
										}`}
									width={100}
									height={120}
								/>
							</AspectRatio>
						</div>
					))}
				</div>
			</div>

			{/* Image principale */}
			<div className="flex-1 relative order-1 md:order-2">
				<div
					ref={imageContainerRef}
					className="relative"
					onMouseMove={handleMouseMove}
					onClick={() => setIsZoomed(!isZoomed)}
				>
					<AspectRatio ratio={8 / 10}>
						<div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg border">
							<Image
								src={imagesSrc[activeImageIndex]}
								alt="Active image"
								className={`
									object-cover w-full h-full transition-transform duration-300
									${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}
								`}
								style={isZoomed ? {
									transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
								} : {}}
								width={800}
								height={1000}
								priority
							/>
						</div>
					</AspectRatio>

					{/* Zoom indicator */}
					<button
						className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
						onClick={(e) => {
							e.stopPropagation();
							setIsZoomed(!isZoomed);
						}}
					>
						{isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
					</button>

					{/* Navigation arrows */}
					<div className="absolute inset-y-0 left-0 flex items-center">
						<button
							className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors -ml-4"
							onClick={(e) => {
								e.stopPropagation();
								prevImage();
							}}
						>
							<ChevronLeft size={20} />
						</button>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center">
						<button
							className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors -mr-4"
							onClick={(e) => {
								e.stopPropagation();
								nextImage();
							}}
						>
							<ChevronRight size={20} />
						</button>
					</div>
				</div>

				{/* Mobile image counter */}
				<div className="md:hidden flex justify-center mt-2">
					<span className="text-sm text-gray-500">
						{activeImageIndex + 1} / {imagesSrc.length}
					</span>
				</div>
			</div>
		</div>
	)
}
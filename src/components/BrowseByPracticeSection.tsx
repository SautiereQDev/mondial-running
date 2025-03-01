import React from "react";
import Image from "next/image";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import Link from "next/link";
import {Photo} from "react-photo-album";

const photos: Photo[] & { link: string } = [
	{
		title: "Cross-Country",
		key: "Cross-Country",
		src: "/cross.jpg",
		width: 100,
		height: 100,
		link: "#"
	}, {
		title: "Track",
		key: "Track",
		src: "/track.avif",
		width: 100,
		height: 100,
		link: "#"
	}, {
		title: "Road",
		key: "Road",
		src: "/road.jpg",
		width: 100,
		height: 100,
		link: "#"
	}, {
		title: "Trail",
		key: "Trail",
		src: "/trail.avif",
		width: 100,
		height: 100,
		link: "#"
	},
];

export default function BrowseByPracticeSection() {
	return (
		<section className="bg-[#F2F0F1] max-w-[85vw] mx-auto rounded-4xl py-2 mb-20 pb-10">
			<h3 className="text-5xl font-bold font-[montserrat] text-center my-12">RECHERCHE PAR PRATIQUE</h3>
			<BentoGrid className="gap-6">
				{photos.map((photo) => (
					<BentoGridItem
						key={photo.key}
						className="overflow-hidden relative group"
						header={
							<Link href={photo.link} className="relative w-full h-full">
								<Image
									src={photo.src}
									alt={photo.title}
									fill
									style={{objectFit: "cover"}}
								/>
								<h4
									className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-3 font-medium transition-all duration-300 group-hover:text-2xl">
									{photo.title}
								</h4>
							</Link>
						}
					/>
				))}
			</BentoGrid>
		</section>
	);
}
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Photo as PhotoBase } from "react-photo-album";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CustomPhoto extends PhotoBase {
	link: string;
	description?: string;
	badge?: string;
}

const photos: CustomPhoto[] = [
	{
		title: "Cross-Country",
		key: "Cross-Country",
		src: "/cross.jpg",
		width: 100,
		height: 100,
		link: "#",
		description: "Courses en pleine nature sur terrains variés",
		badge: "Populaire"
	}, {
		title: "Track",
		key: "Track",
		src: "/track.avif",
		width: 100,
		height: 100,
		link: "#",
		description: "Performances sur piste pour la vitesse et l'endurance"
	}, {
		title: "Road",
		key: "Road",
		src: "/road.jpg",
		width: 100,
		height: 100,
		link: "#",
		description: "Courses urbaines et sur routes pavées",
		badge: "Tendance"
	}, {
		title: "Trail",
		key: "Trail",
		src: "/trail.avif",
		width: 100,
		height: 100,
		link: "#",
		description: "Aventures en montagne et sentiers techniques"
	},
];

export default function BrowseByPracticeSection() {
	return (
		<section id="collections" className="py-16 mb-20 bg-gray-50">
			<div className="max-w-[85vw] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="mb-12 text-center"
				>
					<h2 className="text-5xl font-bold font-[montserrat] mb-4 relative inline-block">
						RECHERCHE PAR PRATIQUE
						<motion.div
							className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primary"
							initial={{ width: "0%" }}
							whileInView={{ width: "80%" }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						/>
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Découvrez notre sélection d'équipements adaptés à votre discipline de prédilection
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{photos.map((photo, index) => (
						<motion.div
							key={photo.key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5 }}
							className="h-full"
						>
							<Card className="overflow-hidden h-full border-none shadow-lg">
								<div className="relative h-48 overflow-hidden">
									{photo.badge && (
										<Badge className="absolute top-3 right-3 z-10 bg-primary hover:bg-primary/90">
											{photo.badge}
										</Badge>
									)}
									<motion.div
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.4 }}
										className="h-full"
									>
										<Image
											src={photo.src}
											alt={photo.title ?? ""}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
											priority
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
									</motion.div>
								</div>

								<CardHeader className="pb-2">
									<CardTitle className="text-xl font-bold">{photo.title}</CardTitle>
									{photo.description && (
										<CardDescription>{photo.description}</CardDescription>
									)}
								</CardHeader>

								<CardContent className="pb-2">
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline" className="bg-primary/5">Chaussures</Badge>
										<Badge variant="outline" className="bg-primary/5">Vêtements</Badge>
										<Badge variant="outline" className="bg-primary/5">Accessoires</Badge>
									</div>
								</CardContent>

								<CardFooter>
									<Link href={photo.link} className="w-full">
										<Button variant="default" className="w-full group">
											<span>Explorer</span>
											<motion.div
												initial={{ x: 0 }}
												whileHover={{ x: 4 }}
												transition={{ duration: 0.2 }}
											>
												<ArrowRight className="ml-2 h-4 w-4" />
											</motion.div>
										</Button>
									</Link>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<Link href="/shop">
						<Button variant="outline" size="lg" className="rounded-full border-2 border-primary/20 hover:border-primary text-primary font-medium px-8">
							Voir toutes les catégories
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
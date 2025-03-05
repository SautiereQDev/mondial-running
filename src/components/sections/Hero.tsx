"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ParallaxBackground } from "@/components/animations/ParallaxBackground";

export default function HeroSection() {
	const [isInView, setIsInView] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	const scrollToCollections = () => {
		const collectionsSection = document.getElementById('collections');
		if (collectionsSection) {
			collectionsSection.scrollIntoView({ behavior: 'smooth' });
		} else {
			window.scrollTo({
				top: window.innerHeight,
				behavior: 'smooth'
			});
		}
	};

	return (
		<section className="relative overflow-hidden">
			{/* Fond avec effet parallaxe */}
			<ParallaxBackground />

			<div className="max-w-[85vw] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 min-h-[600px] lg:min-h-[663px] relative">
				{/* Colonne de contenu */}
				<motion.div
					className="flex gap-8 lg:gap-[52px] flex-col justify-center z-10 lg:w-1/2"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					onViewportEnter={() => setIsInView(true)}
				>
					<div className="flex gap-6 lg:gap-[36px] flex-col">
						<motion.h1
							className="font-[montserrat] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
						>
							Trouvez des vêtements qui vous <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">donnent envie</span> d'aller courir
						</motion.h1>

						<motion.p
							className="font-lexend text-base md:text-lg text-gray-700"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
						>
							Parcourez notre large éventail de marques et d'équipements pour trouver l'habit qui correspond à votre
							style et à votre pratique.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<Link href="/shop" className="w-full sm:w-auto">
								<Button className="w-full sm:w-auto md:w-60 h-12 md:h-14 rounded-full text-md font-[montserrat] shadow-lg hover:shadow-xl transition-all group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700">
									Achetez maintenant
									<ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
								</Button>
							</Link>
							<Button
								variant="outline"
								className="w-full sm:w-auto md:w-60 h-12 md:h-14 rounded-full text-md font-[montserrat] border-2 hover:bg-gray-100/50 transition-all group"
								onClick={scrollToCollections}
							>
								Voir les collections
								<ChevronDown className="ml-1 group-hover:translate-y-1 transition-transform" size={18} />
							</Button>
						</motion.div>
					</div>

					<motion.div
						className="flex flex-wrap md:flex-nowrap items-start gap-6 md:gap-10 lg:gap-16 mt-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
					>
						<div className="flex flex-col gap-2">
							<span className="text-3xl font-bold text-primary">50+</span>
							<span className="text-sm text-gray-600">Marques</span>
						</div>
						<div className="h-12 w-px bg-gray-300 hidden md:block" />
						<div className="flex flex-col gap-2">
							<span className="text-3xl font-bold text-primary">600+</span>
							<span className="text-sm text-gray-600">Produits</span>
						</div>
						<div className="h-12 w-px bg-gray-300 hidden md:block" />
						<div className="flex flex-col gap-2">
							<span className="text-3xl font-bold text-primary">20k+</span>
							<span className="text-sm text-gray-600">Clients satisfaits</span>
						</div>
					</motion.div>
				</motion.div>

				{/* Colonne d'image */}
				<motion.div
					className="lg:w-1/2 relative z-10"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<div className="relative h-[400px] md:h-[500px] lg:h-full">
						<motion.div
							className="absolute inset-0 rounded-2xl overflow-hidden"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<Image
								src="/trail.avif"
								alt="Runner in action"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
						</motion.div>

						<motion.div
							className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-[200px] md:max-w-[250px]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1 }}
							whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
						>
							<div className="text-sm font-medium text-gray-500 mb-1">Nouveauté</div>
							<div className="text-lg font-bold mb-2">Collection Trail 2024</div>
							<Link href="/shop/trail" className="text-primary text-sm font-medium hover:underline">
								Découvrir →
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

const brands = [
	{ name: 'Nike', logo: '/logos/nike.svg', blackFilter: true },
	{ name: 'Adidas', logo: '/logos/adidas.svg', blackFilter: false },
	{ name: 'Asics', logo: '/logos/asics.svg', blackFilter: true },
	{ name: 'Under Armour', logo: '/logos/under_armour.svg', blackFilter: true },
	{ name: 'Brooks', logo: '/logos/brooks.svg', blackFilter: true },
	{ name: 'Mizuno', logo: '/logos/mizuno.svg', blackFilter: true },
];

export default function BrandSection() {
	return (
		<AnimatedSection className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
			<div className="max-w-[85vw] mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h3 className="text-sm uppercase tracking-wider text-primary mb-2 font-medium">Nos partenaires</h3>
					<h2 className="text-2xl md:text-3xl font-bold font-[montserrat]">Les marques qui nous font confiance</h2>
				</motion.div>

				<div className="relative rounded-xl overflow-hidden bg-white shadow-sm p-6">
					{/* Effet de dégradé sur les côtés pour suggérer un défilement */}
					<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
					<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

					{/* Conteneur des logos avec animation de défilement */}
					<motion.div
						className="flex items-center justify-between py-8 overflow-hidden"
						initial={{ x: 0 }}
						animate={{
							x: [-20, 0, -20],
						}}
						transition={{
							repeat: Infinity,
							duration: 10,
							ease: "linear"
						}}
					>
						{/* Première série de logos */}
						{brands.map((brand, index) => (
							<motion.div
								key={`${brand.name}-${index}`}
								className={`mx-12 transition-all duration-300 flex-shrink-0 hover:opacity-100 ${brand.blackFilter ? "opacity-80" : "grayscale opacity-70 hover:grayscale-0"}`}
								whileHover={{ scale: 1.15, y: -5 }}
							>
								<Image
									src={brand.logo}
									alt={brand.name}
									width={120}
									height={60}
									className={`h-14 w-auto object-contain ${brand.blackFilter ? "brightness-0" : ""}`}
								/>
							</motion.div>
						))}

						{/* Répétition des logos pour créer un effet de défilement infini */}
						{brands.slice(0, 4).map((brand, index) => (
							<motion.div
								key={`${brand.name}-repeat-${index}`}
								className={`mx-12 transition-all duration-300 flex-shrink-0 hover:opacity-100 ${brand.blackFilter ? "opacity-80" : "grayscale opacity-70 hover:grayscale-0"}`}
								whileHover={{ scale: 1.15, y: -5 }}
							>
								<Image
									src={brand.logo}
									alt={brand.name}
									width={120}
									height={60}
									className={`h-14 w-auto object-contain ${brand.blackFilter ? "brightness-0" : ""}`}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-center mt-10"
				>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Nous collaborons avec les meilleures marques de running pour vous offrir des produits de qualité qui répondent à vos besoins sportifs.
					</p>
				</motion.div>
			</div>
		</AnimatedSection>
	);
}
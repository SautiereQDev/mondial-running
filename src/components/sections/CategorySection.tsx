"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { AnimatedSectionTitle } from '@/components/animations/AnimatedSectionTitle';

const categories = [
    { name: "Homme", image: "/road.jpg", link: "/shop/men" },
    { name: "Femme", image: "/trail.avif", link: "/shop/woman" },
    { name: "Accessoires", image: "/cross.jpg", link: "/shop/accessoires" }
];

export default function CategorySection() {
    return (
        <AnimatedSection className="py-16">
            <div className="max-w-[85vw] mx-auto">
                <AnimatedSectionTitle
                    title="Catégories populaires"
                    subtitle="Explorer"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="relative h-[300px] rounded-xl overflow-hidden group"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <h3 className="text-white text-2xl font-bold mb-3">{category.name}</h3>
                                <Link href={category.link}>
                                    <Button variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white">
                                        Découvrir
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
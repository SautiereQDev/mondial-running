"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { AnimatedSectionTitle } from '@/components/animations/AnimatedSectionTitle';
import { Shield, Truck, RotateCcw, Clock } from 'lucide-react';

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <motion.div
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
        >
            <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default function FeatureHighlights() {
    const features = [
        {
            icon: <Truck size={28} />,
            title: "Livraison rapide",
            description: "Livraison gratuite à partir de 50€ d'achat et en 24h/48h partout en France"
        },
        {
            icon: <RotateCcw size={28} />,
            title: "Retours faciles",
            description: "Retours gratuits sous 30 jours pour tous vos achats"
        },
        {
            icon: <Shield size={28} />,
            title: "Paiement sécurisé",
            description: "Vos données sont protégées par un cryptage SSL de dernière génération"
        },
        {
            icon: <Clock size={28} />,
            title: "Service client 7j/7",
            description: "Notre équipe est disponible pour répondre à toutes vos questions"
        }
    ];

    return (
        <AnimatedSection className="py-16 bg-gray-50">
            <div className="max-w-[85vw] mx-auto">
                <AnimatedSectionTitle
                    title="Pourquoi nous choisir"
                    subtitle="Nos avantages"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Feature
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
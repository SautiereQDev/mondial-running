"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
    const { scrollY } = useScroll();

    // Transformations pour l'effet parallaxe
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const y3 = useTransform(scrollY, [0, 500], [0, 80]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F2F0F1] via-[#EAEAEA] to-[#E8E6E7]"
                style={{ opacity }}
            />

            <motion.div
                className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-primary/30 blur-xl"
                style={{ y: y1, opacity }}
            />

            <motion.div
                className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-blue-400/20 blur-xl"
                style={{ y: y2, opacity }}
            />

            <motion.div
                className="absolute top-[40%] right-[10%] w-24 h-24 rounded-full bg-yellow-400/20 blur-xl"
                style={{ y: y3, opacity }}
            />
        </div>
    );
};
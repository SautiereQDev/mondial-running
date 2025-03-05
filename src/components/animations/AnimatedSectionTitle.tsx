"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AnimatedSectionTitleProps {
    title: string;
    subtitle: string;
}

export const AnimatedSectionTitle: React.FC<AnimatedSectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-3"
            >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">{subtitle}</span>
            </motion.div>

            <motion.h2
                className="text-4xl md:text-5xl font-bold font-[montserrat] mb-4 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {title}
                <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-primary"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                />
            </motion.h2>
        </div>
    );
};
"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

// Sections
import HeroSection from "@/components/sections/Hero";
import BrandSection from "@/components/sections/BrandSection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import CategorySection from "@/components/sections/CategorySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PromoBanner from "@/components/sections/PromoBanner";
import FeatureHighlights from "@/components/sections/FeatureHighlights";

// Hooks
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY, scrollToTop } = useScrollToTop();
  const { scrollYProgress } = useScroll();

  // Animation pour la barre de progression
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Simuler un temps de chargement pour l'animation d'entrée
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Animation de chargement */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.5, 1],
              }}
            >
              <div className="text-4xl font-bold text-primary mb-4">
                Mondial-Running
              </div>
              <div className="relative w-16 h-16">
                <motion.div
                  className="absolute inset-0 border-t-4 border-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barre de progression */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Contenu principal */}
      <div className="relative">
        {/* Sections de la page */}
        <HeroSection />
        <BrandSection />
        <CategorySection />
        <FeaturedProductsSection title="Les nouveautés" type="new" />
        <PromoBanner />
        <FeaturedProductsSection
          title="Les meilleures ventes"
          type="bestseller"
        />
        <FeatureHighlights />
        <TestimonialsSection />

        {/* Bouton de retour en haut */}
        <AnimatePresence>
          {scrollY > 500 && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg z-40"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { articles } from "@/data/articles";
import { AnimatedSection } from '@/components/animations/AnimatedSection';
import { AnimatedSectionTitle } from '@/components/animations/AnimatedSectionTitle';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProductsSectionProps {
    title: string;
    type: "new" | "bestseller";
}

export default function FeaturedProductsSection({ title, type }: FeaturedProductsSectionProps) {
    const [activeTab, setActiveTab] = useState("all");

    // Filtrer les articles selon le type (nouveautés ou meilleures ventes)
    // const filteredArticles = articles.filter(article => {
    //     if (type === "new") return article.isNew;
    //     if (type === "bestseller") return article.isBestseller;
    //     return true;
    // });

    const filteredArticles = articles;

    return (
        <AnimatedSection className="py-16" id="collections">
            <div className="max-w-[85vw] mx-auto">
                <AnimatedSectionTitle
                    title={title}
                    subtitle={type === "new" ? "Nouveautés" : "Populaires"}
                />

                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-8">
                        <TabsList className="bg-gray-100/80 p-1 rounded-full">
                            <TabsTrigger value="all" className="rounded-full px-6 data-[state=active]:bg-white">
                                Tous
                            </TabsTrigger>
                            <TabsTrigger value="men" className="rounded-full px-6 data-[state=active]:bg-white">
                                Hommes
                            </TabsTrigger>
                            <TabsTrigger value="women" className="rounded-full px-6 data-[state=active]:bg-white">
                                Femmes
                            </TabsTrigger>
                            <TabsTrigger value="accessories" className="rounded-full px-6 data-[state=active]:bg-white">
                                Accessoires
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="all" className="mt-0">
                        <ProductGrid articles={filteredArticles} />
                    </TabsContent>

                    <TabsContent value="men" className="mt-0">
                        <ProductGrid articles={filteredArticles.filter(a => a.gender === 'men')} />
                    </TabsContent>

                    <TabsContent value="women" className="mt-0">
                        <ProductGrid articles={filteredArticles.filter(a => a.gender === 'women')} />
                    </TabsContent>

                    <TabsContent value="accessories" className="mt-0">
                        <ProductGrid articles={filteredArticles.filter(a => a.category === 'accessories')} />
                    </TabsContent>
                </Tabs>

                <div className="flex justify-center mt-10">
                    <Link href={`/shop?sort=${type === "new" ? "new" : "bestseller"}`}>
                        <Button variant="outline" size="lg" className="rounded-full border-2 hover:bg-gray-100/50">
                            Voir tous les produits
                        </Button>
                    </Link>
                </div>
            </div>
        </AnimatedSection>
    );
}

const ProductGrid = ({ articles }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {articles.slice(0, 8).map((article, index) => (
                <ProductCard key={article.id} article={article} index={index} />
            ))}
        </div>
    );
};

const ProductCard = ({ article, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 p-0">
                <CardContent className="p-0 relative">
                    <div className="relative h-[250px] overflow-hidden">
                        <motion.div
                            animate={{ scale: isHovered ? 1.05 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={article.image}
                                alt={article.name}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {article.isNew && (
                            <Badge className="absolute top-3 left-3 bg-primary hover:bg-primary">
                                Nouveau
                            </Badge>
                        )}

                        {article.discount > 0 && (
                            <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                                -{article.discount}%
                            </Badge>
                        )}

                        <motion.div
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-end"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div>
                                <p className="text-white font-medium">{article.name}</p>
                                <p className="text-white/80 text-sm">{article.brand}</p>
                            </div>
                            <Button size="icon" variant="secondary" className="rounded-full bg-white/20 hover:bg-white/40">
                                <Heart className="h-4 w-4 text-white" />
                            </Button>
                        </motion.div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                    <div>
                        <p className="text-gray-500 text-sm">
                            {article.price} €
                        </p>
                        {article.discount > 0 && (
                            <p className="text-red-500 text-sm line-through">
                                {article.price * (1 + article.discount / 100)} €
                            </p>
                        )}
                    </div>
                    <Button size="icon" variant="secondary" className="rounded-full bg-gray-100/50 hover:bg-gray-100/70">
                        <ShoppingCart className="h-4 w-4 text-gray-500" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};
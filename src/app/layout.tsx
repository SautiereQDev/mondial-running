import type { Metadata } from "next";
import { Lexend, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/sections/PromoBanner";
import React, { ReactNode } from "react";
import CustomBreadCrumb from "@/components/CustomBreadCrumb";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ['latin'],
	variable: '--font-montserrat',
});
const lexend = Lexend({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ['latin'],
	variable: '--font-lexend',
});

export const metadata: Metadata = {
	title: "Mondial Running - Équipement de course",
	description: "Trouvez des vêtements et équipements qui vous donnent envie d'aller courir",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="fr" className={`${montserrat.variable} ${lexend.variable} antialiased`}>
			<body className="flex flex-col min-h-screen">
				<Banner />
				<div className="font-lexend flex flex-col flex-grow">
					<Navbar />
					<CustomBreadCrumb />
					<main className="flex-grow">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
import type {Metadata} from "next";
import {Lexend, Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import React, {ReactNode} from "react";
import CustomBreadCrumb from "@/components/CustomBreadCrumb";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700", "800"], // Assurez-vous de spécifier les poids de police nécessaires
	subsets: ['latin'],     // Assurez-vous de spécifier "latin" (ou autre si nécessaire)
	variable: '--font-montserrat',
});
const lexend = Lexend({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ['latin'],     // Assurez-vous de spécifier "latin" (ou autre si nécessaire)
	variable: '--font-lexend',
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
	const firstVisit = true;

	return (
		<html lang="fr" className={`${montserrat.variable} ${lexend.variable} antialiased`}>
		<body>
		{firstVisit && <Banner/>}
		<div className="font-lexend">
			<Navbar/>
			<CustomBreadCrumb/>
			{children}
			<Footer/>
		</div>
		</body>
		</html>
	);
}

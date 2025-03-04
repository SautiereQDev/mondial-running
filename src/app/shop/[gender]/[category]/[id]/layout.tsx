"use client";
import {ReactNode, useState} from "react";
import YouMightAlsoLikeSection from "@/components/sections/YouMightAlsoLikeSection";

export default function Layout({children, details, faq, reviews}: Readonly<{
	children: ReactNode,
	details: ReactNode,
	faq: ReactNode,
	reviews: ReactNode
}>) {

	const [activeSection, setActiveSection] = useState<'details' | 'faq' | "reviews">("reviews");

	return <div className="max-w-[85vw] mx-auto mb-20">
		{children}
		<div className="flex justify-evenly mt-20">
			<button onClick={() => setActiveSection("details")}
							className={`text-lg font-bold border-b-3 w-1/3 pb-2 ${activeSection === "details" && "text-primary border-black "}`}>Details du produits
			</button>
			<button onClick={() => setActiveSection("reviews")}
							className={`text-lg font-bold border-b-3 w-1/3 pb-2 ${activeSection === "reviews" && "text-primary border-black"}`}>Avis et commentaires
			</button>
			<button onClick={() => setActiveSection("faq")}
							className={`text-lg font-bold border-b-3 w-1/3 pb-2 ${activeSection === "faq" && "text-primary border-black"}`}>FAQ
			</button>
		</div>
		<div className="flex justify-evenly">
			{activeSection === "details" && details}
			{activeSection === "reviews" && reviews}
			{activeSection === "faq" && faq}
		</div>
		<YouMightAlsoLikeSection/>
	</div>
}
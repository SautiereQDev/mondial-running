"use client";
import {ReactNode, useState} from "react";

export default function Layout({children, details, faq, reviews}: Readonly<{
	children: ReactNode,
	details: ReactNode,
	faq: ReactNode,
	reviews: ReactNode
}>) {

	const [activeSection, setActiveSection] = useState<'details' | 'faq' | "reviews">("reviews");

	return <>
		{children}
		<div className="flex justify-evenly mt-20">
			<button onClick={() => setActiveSection("details")}
							className={`text-lg font-bold ${activeSection === "details" ? "text-primary" : "text-gray-600"}`}>Details
			</button>
			<button onClick={() => setActiveSection("faq")}
							className={`text-lg font-bold ${activeSection === "faq" ? "text-primary" : "text-gray-600"}`}>FAQ
			</button>
			<button onClick={() => setActiveSection("reviews")}
							className={`text-lg font-bold ${activeSection === "reviews" ? "text-primary" : "text-gray-600"}`}>Reviews
			</button>
		</div>
		<div className="max-w-[85vw] mx-auto flex justify-evenly mb-80">
			{activeSection === "details" && details}
			{activeSection === "faq" && faq}
			{activeSection === "reviews" && reviews}
		</div>
	</>
}
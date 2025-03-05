"use client";

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { usePathname } from "next/navigation";

export default function Banner() {
	const pathName: string = usePathname()
	const [display, setDisplay] = useState(true)
	const [isFirstVisit, setIsFirstVisit] = useState(true)

	useEffect(() => {
		// Check if user has dismissed the banner before
		const bannerDismissed = localStorage.getItem('bannerDismissed')
		if (bannerDismissed) {
			setIsFirstVisit(false)
		}
	}, [])

	const handleDismiss = () => {
		setDisplay(false)
		// Save the banner state in localStorage
		localStorage.setItem('bannerDismissed', 'true')
	}

	return ((pathName === '/' && isFirstVisit && display) ? (
		<div className="bg-black text-white text-center flex items-center justify-between py-2 text-sm pr-6">
			<div className="flex gap-1 items-center justify-center m-auto">
				<p>Inscrivez-vous et profitez de 20% de réduction sur votre première commande.</p>
				<a href="#" className="underline">S'inscrire</a>
			</div>
			<X fill="white" className="cursor-pointer" onClick={handleDismiss} />
		</div>) : null
	)
}
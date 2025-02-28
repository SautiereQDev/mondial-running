"use client";

import React from 'react'
import {X} from 'lucide-react'

export default function Banner() {

	const handleClose = () => {
		throw Error('Not implemented')
	}

	return (
		<div className="bg-black text-white text-center flex items-center justify-between py-2 text-sm pr-6">
			<div className="flex gap-1 items-center justify-center m-auto">
				<p>Inscrivez-vous et profitez de 20% de réduction sur votre première commande.</p>
				<a href="#" className="underline">S&#39;inscrire</a>
			</div>
			<X fill="white" onClick={handleClose}/>
		</div>
	)
}

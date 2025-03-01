import React from 'react'
import SearchBar from "@/components/ui/SearchBar";
import {CircleUserRound, ShoppingCart} from "lucide-react";

export default function Navbar() {
	return (
		<div className="h-[8.5vh] flex items-center justify-between px-4 sticky right-0 top-0 bg-white z-10">
			<p className="text-xl font-bold font-[montserrat]">Mondial-running</p>
			<ul className="flex gap-7">
				<li>Hommes</li>
				<li>Femmes</li>
				<li>Nouveaux arrivages</li>
				<li>Marques</li>
			</ul>
			<SearchBar placeholder={"Rechercher un article..."} className="grow max-w-3/8 rounded-2xl"/>
			<ul className="flex gap-5">
				<li><ShoppingCart/></li>
				<li><CircleUserRound/></li>
			</ul>
		</div>
	)
}
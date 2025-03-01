import React from 'react'
import SearchBar from "@/components/ui/SearchBar";
import {CircleUserRound, ShoppingCart} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="h-[8.5vh] border-b flex items-center justify-between px-4 sticky right-0 top-0 bg-white z-10">
			<Link href="/" className="text-xl font-bold font-[montserrat]">Mondial-running</Link>
			<ul className="flex gap-7">
				<li><Link href="/shop/men">Hommes</Link></li>
				<li><Link href="/shop/woman">Femmes</Link></li>
				<li><Link href="/shop?sort=new">Nouveaux arrivages</Link></li>
				<li><Link href="/shop?sort=brand">Marques</Link></li>
			</ul>
			<SearchBar placeholder={"Rechercher un article..."} className="grow max-w-3/8 rounded-2xl"/>
			<ul className="flex gap-5">
				<li><Link href="/cart"><ShoppingCart/></Link></li>
				<li><Link href="/profile"><CircleUserRound/></Link></li>
			</ul>
		</div>
	)
}
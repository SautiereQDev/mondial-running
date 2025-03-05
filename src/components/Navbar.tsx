"use client";
import React, { useState } from 'react'
import SearchBar from "@/components/ui/SearchBar";
import { CircleUserRound, Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="border-b sticky right-0 top-0 bg-white z-10">
			<div className="max-w-[85vw] mx-auto flex items-center justify-between py-4 px-4">
				<Link href="/" className="text-xl font-bold font-[montserrat]">Mondial-running</Link>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex gap-7">
					<li><Link href="/shop/men" className="hover:text-primary transition-colors">Hommes</Link></li>
					<li><Link href="/shop/woman" className="hover:text-primary transition-colors">Femmes</Link></li>
					<li><Link href="/shop?sort=new" className="hover:text-primary transition-colors">Nouveaux arrivages</Link></li>
					<li><Link href="/shop?sort=brand" className="hover:text-primary transition-colors">Marques</Link></li>
				</ul>

				<div className="hidden md:block flex-1 max-w-md mx-4">
					<SearchBar placeholder={"Rechercher un article..."} className="w-full rounded-2xl" />
				</div>

				<div className="hidden md:flex gap-5 items-center">
					<Link href="/cart" className="hover:text-primary transition-colors">
						<ShoppingCart className="h-6 w-6" />
					</Link>
					<Link href="/profile" className="hover:text-primary transition-colors">
						<CircleUserRound className="h-6 w-6" />
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</Button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white p-4 border-t">
					<SearchBar placeholder={"Rechercher un article..."} className="w-full rounded-2xl mb-4" />
					<ul className="flex flex-col gap-4 mb-4">
						<li><Link href="/shop/men" className="block py-2 hover:text-primary">Hommes</Link></li>
						<li><Link href="/shop/woman" className="block py-2 hover:text-primary">Femmes</Link></li>
						<li><Link href="/shop?sort=new" className="block py-2 hover:text-primary">Nouveaux arrivages</Link></li>
						<li><Link href="/shop?sort=brand" className="block py-2 hover:text-primary">Marques</Link></li>
					</ul>
					<div className="flex gap-6 justify-center">
						<Link href="/cart" className="flex items-center gap-2 hover:text-primary">
							<ShoppingCart className="h-5 w-5" />
							Panier
						</Link>
						<Link href="/profile" className="flex items-center gap-2 hover:text-primary">
							<CircleUserRound className="h-5 w-5" />
							Profil
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
import React from 'react'
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="flex gap-26 max-h-[663px] pt-26">
			<div className="flex gap-[52px] flex-col justify-center">
				<div className="flex gap-[36px] flex-col">
					<p className="font-[montserrat] text-6xl font-bold">Trouvez des vêtements qui vous donnent envie d&#39;aller
						courir</p>
					<p>Parcourez notre large éventail de marque et d&#39;équipements pour trouvez l&#39;habit qui correspond a votre
						style et à votre pratique.</p>
					<Button className="w-60 h-14 rounded-4xl text-md font-[montserrat]">Achetez maintenant</Button>
				</div>
				<div className="flex align-start gap-16">
					<div>
						<p className="font-bold text-4xl font-[montserrat]">+ 10</p>
						<p>Marques internationales</p>
					</div>
					<div>
						<p className="font-bold text-4xl font-[montserrat]">+ 2 000</p>
						<p>Références proposés</p>
					</div>
					<div>
						<p className="font-bold text-4xl font-[montserrat]">+ 20 000</p>
						<p>Clients satisfaits</p>
					</div>
				</div>
			</div>
			<Image src="/shoes.webp" alt="Shoes illustration" height={800} width={1200} className="object-contain"/>
		</div>
	)
}

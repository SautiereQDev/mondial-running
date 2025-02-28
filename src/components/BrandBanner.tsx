import Image from "next/image";

export default function BrandBanner() {
	return (
		<div className="bg-black flex justify-around items-center py-5 text-white">
			<Image src="/logos/adidas.svg" alt="Adidas logo" width={80} height={40} className="h-10"/>
			<Image src="/logos/nike.svg" alt="Nike logo" width={80} height={40} className="h-6"/>
			<Image src="/logos/mizuno.svg" alt="Mizuno logo" width={80} height={40} className="h-8"/>
			<Image src="/logos/asics.svg" alt="Asics logo" width={80} height={40} className="h-8"/>
			<Image src="/logos/under_armour.svg" alt="Under armour logo" width={80} height={40} className="h-8"/>
			<Image src="/logos/brooks.svg" alt="Brooks logo" width={80} height={40} className="h-10"/>
		</div>
	);
}
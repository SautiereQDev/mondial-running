import {Mail} from "lucide-react";
import {HTMLAttributes} from "react";

interface NewsLetterCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export default function NewsLetterCard({className, ...args}: Readonly<NewsLetterCardProps>) {
	return (
		<div className={`bg-black flex flex-row justify-between py-9 px-16 text-white rounded-xl items-center ${className ?? ''}`} {...args}>
			<p
				className="font-black font-[montserrat] text-4xl max-w-1/2">{("tenez vous à jour sur nos dernières offres").toUpperCase()}</p>
			<div className="flex flex-col gap-4 mr-4">
				<label className="bg-white rounded-2xl p-2.5 flex gap-2.5">
					<Mail stroke="gray"/>
					<input type="text" placeholder="Entrez votre email" className="bg-white text-black focus:outline-none"/>
				</label>
				<button className="bg-white text-black rounded-xl p-2.5 hover:cursor-pointer">S&#39;inscrire à la new lester</button>
			</div>
		</div>
	)
}

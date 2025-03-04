import {Mail} from "lucide-react";
import {HTMLAttributes} from "react";

interface NewsLetterCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export default function NewsLetterCard({className, ...args}: Readonly<NewsLetterCardProps>) {

	// Recuperer les infos depuis l'API
	const isSubscribed = false;

	return (
		<>
			{!isSubscribed && (
				<div
					className={`bg-black flex flex-row justify-between py-9 px-16 text-white rounded-xl items-center ${className ?? ''}`} {...args}>
					<p
						className="font-black font-[montserrat] text-4xl max-w-1/2">{("tenez vous à jour sur nos dernières offres").toUpperCase()}</p>
					<div className="flex flex-col gap-4 mr-4 w-1/3">
						<label className="bg-white rounded-2xl px-3.5 py-3 flex gap-2.5">
							<Mail stroke="gray"/>
							<input type="text" placeholder="Entrez votre email"
										 className="bg-white text-black focus:outline-none w-full"/>
						</label>
						<button className="bg-white text-black rounded-2xl p-3 hover:cursor-pointer">S&#39;inscrire à la new
							lester
						</button>
					</div>
				</div>
			)}
		</>
	)
}

import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
	{
		question: "Comment choisir la bonne taille ?",
		answer: "Pour choisir la bonne taille, consultez notre guide des tailles dans la section détails du produit. Nous vous recommandons de prendre vos mesures et de les comparer à notre tableau. Si vous êtes entre deux tailles, optez pour la taille supérieure pour plus de confort."
	},
	{
		question: "Quels sont les délais de livraison ?",
		answer: "Les délais de livraison varient selon votre localisation. En général, les commandes sont expédiées sous 24-48h et livrées en 3-5 jours ouvrables en France métropolitaine. Pour les livraisons internationales, comptez 5-10 jours ouvrables."
	},
	{
		question: "Comment entretenir ce produit ?",
		answer: "Pour préserver la qualité de ce produit, suivez les instructions d'entretien indiquées sur l'étiquette. En général, nous recommandons un lavage à basse température, pas de sèche-linge, et un repassage à température modérée si nécessaire."
	},
	{
		question: "Puis-je retourner ou échanger ce produit ?",
		answer: "Oui, vous disposez de 30 jours à compter de la réception pour retourner ou échanger votre produit. Le produit doit être dans son état d'origine, non porté et avec toutes les étiquettes. Les frais de retour sont à votre charge sauf en cas de produit défectueux."
	},
	{
		question: "Ce produit est-il adapté pour la course sur route ?",
		answer: "Ce produit est spécialement conçu pour la course sur route avec un amorti optimal et une excellente adhérence sur surfaces dures. Il offre un bon équilibre entre confort et performance pour les coureurs réguliers."
	},
	{
		question: "Quels sont les avantages de ce matériau ?",
		answer: "Les matériaux utilisés dans ce produit offrent une excellente respirabilité, une grande durabilité et un confort optimal. Ils sont également choisis pour leur légèreté et leur capacité à évacuer l'humidité, ce qui est idéal pour les activités sportives."
	}
];

export default function Page() {
	return (
		<div className="w-full py-8">
			<h2 className="text-2xl font-bold mb-6">Questions fréquemment posées</h2>

			<Accordion type="single" collapsible className="space-y-4">
				{faqItems.map((item, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className="border border-gray-200 rounded-lg px-1 overflow-hidden hover:shadow-xs"
					>
						<AccordionTrigger className="py-4 px-3 hover:no-underline cursor-pointer">
							<h3 className="text-lg font-medium text-left">{item.question}</h3>
						</AccordionTrigger>
						<AccordionContent className="px-3 pb-4 pt-1 text-gray-700">
							{item.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-100">
				<h3 className="text-lg font-medium text-blue-800 mb-2">Vous avez d'autres questions ?</h3>
				<p className="text-gray-700">
					Notre équipe de support client est disponible pour vous aider.
					<a href="/contact" className="text-blue-600 font-medium ml-1 hover:underline">
						Contactez-nous
					</a>
				</p>
			</div>
		</div>
	);
}

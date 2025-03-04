import detailedArticles from '@/data/detailedArticles.json'
import { DetailedArticle, ProductDetails } from '@/types/articles.types';
import { WashingMachine, MapPin, CheckCircle } from 'lucide-react';

export default function Page() {
	const article: ProductDetails = detailedArticles[0].productDetails;

	return (
		<div className="w-full mt-10">
			{/* Composition Section */}
			<div className="mb-8">
				<h3 className="text-xl font-bold mb-4">Composition</h3>
				<div className="bg-gray-50 p-5 rounded-lg">
					<div className="flex flex-wrap gap-3">
						{article.composition.map((item, index) => (
							<div key={index} className="flex items-center gap-2">
								<span className="font-medium">{item.name}:</span>
								<span className="text-gray-600">{item.percentage}%</span>
								{index < article.composition.length - 1 && <span className="text-gray-300">|</span>}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Origin & Care Section */}
			<div className="grid grid-cols-2 gap-8 mb-8">
				<div className="bg-gray-50 p-6 rounded-lg">
					<h3 className="text-lg font-bold mb-3 flex items-center gap-2">
						<MapPin className="h-5 w-5" />
						Origine: <span className="font-normal text-gray-700 ml-2">{article.origine}</span>
					</h3>
				</div>
				<div className="bg-gray-50 p-6 rounded-lg">
					<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
						<WashingMachine className="h-5 w-5" />
						Instructions d'entretien
					</h3>
					<p className="text-gray-700 mb-2">{article.entretien}</p>
					<p className="text-sm text-gray-500">Température maximale de lavage: {article.maximumWashTemp}°C</p>
				</div>
			</div>

			<div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
				<h3 className="text-xl font-bold mb-4 text-blue-800">Points clés</h3>
				<div className="space-y-3">
					{article.keyPoints.map((point, index) => (
						<div key={index} className="flex items-start gap-3">
							<CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
							<p className="text-gray-700">{point}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

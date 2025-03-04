import {articles} from '@/data/articles';
import ArticleCard from "@/components/cards/ArticleCard";
import {Article} from "@/types/articleSection.types";

export default function YouMightAlsoLikeSection() {
	// TODO : A remplacer par un appel API

	return (
		<div className="flex gap-12 flex-col mb-50">
			<h2 className="text-5xl font-black text-center font-[montserrat]">YOU MIGHT ALSO LIKE</h2>
			<div className="flex flex-wrap gap-6 justify-evenly mt-10  items-center">
				{articles.slice(0, 4).map((article: Article , index) => (
					<ArticleCard article={article} key={index}/>))}
			</div>
		</div>
	)
}

import {Reduction} from "@/types/articles.types";

export default function getNewPrice(initialPrice: number, reduction: Reduction): number {
	if (reduction?.type === "percentage") {
		return initialPrice - (initialPrice * reduction.value / 100);
	} else if (reduction?.type === "amount") {
		return initialPrice - reduction.value
	} else return initialPrice;
}

export function getOldPrice(initialPrice: number, reduction: Reduction): number {
	if (reduction?.type === "percentage") {
		return initialPrice;
	} else if (reduction?.type === "amount") {
		return initialPrice + reduction.value
	} else return initialPrice;
}
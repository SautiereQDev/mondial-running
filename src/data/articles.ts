import {Article} from "@/types/articleSection.types";

export const articles: Article[] = [
  {
    id: 0,
    imgSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/0.png",
    title: "T-shirt avec un design unique",
    price: 120,
    rating: 4.5
  },
  {
    imgSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/1.png",
    id: 1,
    title: "Jean Skinny",
    price: 260,
    rating: 3.4,
    reduction: {
      value: 20,
      type: "percentage"
    }
  },
  {
    imgSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/2.png",
    id: 2,
    title: "Sleeve stripped t-shirt",
    price: 130,
    rating: 4.7
  },
  {
    imgSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/3.png",
    id: 3,
    title: "Used Jeans with a unique design",
    price: 200,
    rating: 2.78,
    reduction: {
      value: 100,
      type: "amount"
    }
  }
]
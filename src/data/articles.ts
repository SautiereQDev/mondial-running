import {Article} from "@/types/articles.types";

export const articles: Article[] = [
  {
    id: 0,
    imagesSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/0.png",
    name: "T-shirt avec un design unique",
    price: 120,
    avgRating: 4.5
  },
  {
    imagesSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/1.png",
    id: 1,
    name: "Jean Skinny",
    price: 260,
    avgRating: 3.4,
    reduction: {
      value: 20,
      type: "percentage"
    }
  },
  {
    imagesSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/2.png",
    id: 2,
    name: "Sleeve stripped t-shirt",
    price: 130,
    avgRating: 4.7
  },
  {
    imagesSrc: "https://cdn.quentinsautiere.com/mondial-running/tests/3.png",
    id: 3,
    name: "Used Jeans with a unique design",
    price: 200,
    avgRating: 2.78,
    reduction: {
      value: 100,
      type: "amount"
    }
  }
]
export type Category = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Food = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};

export type FoodsWithCategory = {
  _id: Category;
  categoryName: string;
  foods: Food[];
  count: number;
};

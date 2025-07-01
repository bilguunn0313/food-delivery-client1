"use client";

import { useEffect, useState } from "react";
import { FoodsWithCategories } from "./FoodsWithCategories";

const categories = [
  {
    categoryName: "categoryName1",
    _id: 1,
  },
  {
    categoryName: "categoryName2",
    _id: 2,
  },
  {
    categoryName: "categoryName3",
    _id: 3,
  },

  {
    categoryName: "categoryName4",
    _id: 4,
  },
];

export const FoodCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:3001/category");
      const data = await response.json();

      setCategories(data.category);

      console.log(data);
    };

    getCategories();
  }, []);

  if (!categories.length)
    return <p className="text-white">No categories found</p>;

  return (
    <div>
      <div className="flex flex-col my-8 gap-9">
        <div className="text-3xl font-semibold text-white">Categories</div>
        <div className="flex gap-2 flex-nowrap">
          {categories?.map((category) => (
            <div
              key={category._id}
              className="flex items-center px-5 py-1 rounded-full bg-background"
            >
              <div>{category?.categoryName}</div>
            </div>
          ))}
        </div>
      </div>
      <FoodsWithCategories />
    </div>
  );
};

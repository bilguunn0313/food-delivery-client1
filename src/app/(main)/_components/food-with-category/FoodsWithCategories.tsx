"use client";

import { FoodCard } from "@/components/food";
import { useEffect, useState } from "react";

export const foodWithCategories = [
  {
    _id: "1",
    categoryName: "categoryName1",
    count: 1,
    foods: [
      {
        _id: "1",
        foodName: "foodName1",
        price: 1200,
        image: "",
        ingredients: "ingredients ingredients ingredients",
        createdAt: "string",
        updatedAt: "",
      },
    ],
  },
  {
    _id: "2",
    categoryName: "categoryName2",
    count: 2,
    foods: [
      {
        _id: "2",
        foodName: "foodName2",
        price: 12001,
        image: "",
        ingredients: "ingredients ingredients ingredients",
        createdAt: "string",
        updatedAt: "",
      },
    ],
  },
];

export const FoodsWithCategories = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      const response = await fetch("http://localhost:3001/food/");
      const data = response.json();
      console.log(data);

      setFoods(data);
    };

    getFoods();
  }, []);
  //iiiii
  if (!foodWithCategories?.length) return null;

  const nonEmptyCategories = foodWithCategories.filter(
    (category) => category?.foods?.length > 0
  );

  return (
    <div className="flex flex-col gap-6">
      {nonEmptyCategories?.map((category, index) => (
        <div key={index} className="flex flex-col gap-[54px] rounded-xl">
          <p className="text-3xl font-semibold text-white">
            {category?.categoryName}
          </p>
          <div className="grid grid-cols-1 mb-5 gap-9 sm:grid-cols-2 lg:grid-cols-3">
            {category?.foods.map((food) => {
              return (
                <div key={food?._id}>
                  <FoodCard
                    foodName={food?.foodName}
                    price={food?.price}
                    image={food?.image}
                    ingredients={food?.ingredients}
                    _id={food?._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

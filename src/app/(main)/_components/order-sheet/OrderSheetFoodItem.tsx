import { SidebarDashLine } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Food } from "@/lib/utils/types";
import { FoodWithQuantity, useFoodCart } from "@/provider/FoodCart";

import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

export const OrderSheetFoodItem: FC<FoodWithQuantity> = ({
  food,
  quantity,
  totalPrice,
}) => {
  const { incrementFoodQuantity, decrementFoodQuantity, removeFromCart } =
    useFoodCart();

  return (
    <>
      <div className="flex gap-3">
        <div className="w-[124px] h-[120px] relative rounded-lg overflow-hidden">
          <Image
            className="fill"
            src={food?.image}
            objectFit="cover"
            layout="fill"
            alt={food?.foodName}
          />
        </div>

        <div className="w-[300px] flex flex-col justify-between">
          <div className="flex">
            <div className="w-full">
              <h3 className="font-bold text-red-500">{food?.foodName}</h3>
              <div className="flex flex-wrap">
                <p className="text-xs font-light">{food.ingredients}</p>
              </div>
            </div>
            <CircleX
              strokeWidth={0.5}
              size={50}
              color="red"
              className="cursor-pointer"
              onClick={() => removeFromCart(food._id)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => decrementFoodQuantity(food._id)}
              >
                <Minus />
              </Button>

              <div className="text-lg font-semibold">{quantity}</div>

              <Button
                variant="ghost"
                onClick={() => incrementFoodQuantity(food._id)}
              >
                <Plus />
              </Button>
            </div>

            <h4 className="font-bold">{quantity * food.price}</h4>
          </div>
        </div>
      </div>
      <SidebarDashLine />
    </>
  );
};

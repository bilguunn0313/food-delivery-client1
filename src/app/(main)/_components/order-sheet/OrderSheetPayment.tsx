import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SidebarDashLine } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { OrderSheetFoodItem } from "./OrderSheetFoodItem";
import { FoodCartContext, FoodWithQuantity } from "@/provider/FoodCart";
import { useContext } from "react";

export const OrderSheetPayment = ({ openModal }: { openModal: () => void }) => {
  const { foodCart, addToCart } = useContext(FoodCartContext);
  const totalSum = foodCart.reduce(
    (acc, price) => acc + price.totalPrice + 5000,
    0
  );
  const foods = foodCart.map((items) => items.food);
  console.log("1312", foodCart);

  return (
    <Card className="mt-6">
      <CardHeader className="p-4 ">
        <CardTitle>Payment info</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex justify-between">
          <p className="text-[#71717A] font-light">Items</p>
          <p className="font-bold">{}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[#71717A] font-light">Shipping</p>
          <p className="font-bold">5000₮</p>
        </div>

        <SidebarDashLine />

        <div className="flex justify-between">
          <p className="text-[#71717A] font-light">Total</p>
          <p className="font-bold">{totalSum}</p>
        </div>
      </CardContent>

      <CardFooter className="p-4">
        <Button
          size="lg"
          className="w-full bg-red-500 rounded-full"
          onClick={() => openModal()}
        >
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};

import { Badge } from "@/components/ui/badge";
import { FoodCartContext } from "@/provider/FoodCart";
import { Map, Soup, Timer } from "lucide-react";
import { useContext } from "react";

export const OrderSheetOrderItem = () => {
  const { foodCart, addToCart } = useContext(FoodCartContext);
  const totalSum = foodCart.reduce(
    (acc, price) => acc + price.totalPrice + 5000,
    0
  );

  return (
    <div className="space-y-3">
      <div className="flex item-center justify-between">
        <h4 className="font-bold">{totalSum}₮ (#20156)</h4>

        <Badge variant="outline" className="border-red-500 rounded-full">
          Delivered
        </Badge>
      </div>

      <div className="flex item-center justify-between">
        <div className="flex item-center gap-2">
          <Soup strokeWidth={1} size={16} />
          <p className="text-muted-foreground text-xs">Sunshine Stackers</p>
        </div>
        <p className="text-muted-foreground text-xs">x 1</p>
      </div>

      <div className="flex item-center gap-2">
        <Timer strokeWidth={1} size={16} />
        <p className="text-muted-foreground text-xs">2024/12/24</p>
      </div>

      <div className="flex item-center gap-2">
        <Map strokeWidth={1} size={16} />
        <p className="text-muted-foreground text-xs truncate w-11/12">
          СБД, 12-р хороо, СБД нэгдсэн эмнэлэг 100 айлын гүүрэн гарцны хойд талд
          4д ногоон
        </p>
      </div>
    </div>
  );
};

import { OrderCartItem } from "../redux/orderCart/types";

export const calcTotalPrice = (items: OrderCartItem[]): number => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

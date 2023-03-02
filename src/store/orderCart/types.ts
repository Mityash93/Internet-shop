export type OrderCartItem = {
  id: string;
  imageUrl: string;
  price: number;
  types: string;
  sizes: number;
  name: string;
  count: number;
};

export interface OrderCartState {
  totalPrice: number;
  items: OrderCartItem[];
}

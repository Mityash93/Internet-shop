import { RootState } from './../store';

export const selectOrderCart = (state: RootState) => state.orderCart;
export const selectOrderCartById = (id: string) => (state: RootState) =>
  state.orderCart.items.find((obj) => obj.id === id);
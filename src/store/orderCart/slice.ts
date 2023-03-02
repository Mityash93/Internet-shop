import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { OrderCartItem, OrderCartState } from "./types";

const initialState: OrderCartState = {
  totalPrice: 0,
  items: [],
};

export const orderCartSlice = createSlice({
  name: "orderCart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<OrderCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      findItem
        ? findItem.count++
        : state.items.push({ ...action.payload, count: 1 });

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItemSign(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem && findItem.count--;
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    totalRemoveItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, totalRemoveItems, minusItemSign } =
  orderCartSlice.actions;

export default orderCartSlice.reducer;

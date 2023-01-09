import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const orderCartSlice = createSlice({
  name: "orderCart",
  initialState,
  reducers: {
    addItems(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      findItem
        ? findItem.count++
        : state.items.push({ ...action.payload, count: 1 });

      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      );
    },
    minusItemSign(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem && findItem.count--;
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    totalRemoveItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectOrderCart = (state) => state.orderCart;
export const selectOrderCartById = (id) => (state) =>
state.orderCart.items.find((obj) => obj.id === id);

export const { addItems, removeItems, totalRemoveItems, minusItemSign } =
  orderCartSlice.actions;

export default orderCartSlice.reducer;

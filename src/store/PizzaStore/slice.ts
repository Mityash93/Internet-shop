import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzasById } from "./asyncAction";
import { PizzaState, Status } from "./types";

const initialState: PizzaState = {
  items: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzasById.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzasById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzasById.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export default pizzasSlice.reducer;

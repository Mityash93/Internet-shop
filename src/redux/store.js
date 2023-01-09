import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/Filter";
import orderCart from "./slices/OderCart";
import pizzasStore from "./slices/PizzasStore";

export const store = configureStore({
  reducer: { filter, orderCart, pizzasStore },
});

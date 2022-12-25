import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/Filter";

export const store = configureStore({
  reducer: { filterSlice },
});

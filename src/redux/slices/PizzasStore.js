import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzasById = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async ({ currentPage, category, sortBy, itemPopupAscDesc, search }) => {
    const { data } = await axios.get(
      `https://639da3c71ec9c6657baed210.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${itemPopupAscDesc}${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzasById.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzasById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzasById.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export default pizzasSlice.reducer;

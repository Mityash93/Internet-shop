import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPizzaParams, Pizza } from "./types";

export const fetchPizzasById = createAsyncThunk<Pizza[], FetchPizzaParams>(
    "pizzas/fetchPizzasStatus",
    async ({ currentPage, category, sortBy, itemPopupAscDesc, search }) => {
      const {data}  = await axios.get<Pizza[]>(
        `https://639da3c71ec9c6657baed210.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${itemPopupAscDesc}${search}`
      );
      console.log(data);
      
      return data;
    }
  );
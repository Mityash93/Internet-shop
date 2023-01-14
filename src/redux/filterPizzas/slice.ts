import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveItem, FilterState } from "./types";

const initialState: FilterState = {
  searchValue: "",
  activeCategoryId: 0,
  activeItemPopup: {
    title: "популярности",
    sortProperty: "rating",
  },
  itemPopupAscDesc: "asc",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setActiveCategoryId(state, action: PayloadAction<number>) {
      state.activeCategoryId = action.payload;
    },
    setActiveItemsPopup(state, action: PayloadAction<ActiveItem>) {
      state.activeItemPopup = action.payload;
    },
    sortItemPopupAscDesc(state, action: PayloadAction<string>) {
      state.itemPopupAscDesc = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setActiveCategoryId,
  setActiveItemsPopup,
  sortItemPopupAscDesc,
  setCurrentPage,
} = filterSlice.actions;

export default filterSlice.reducer;

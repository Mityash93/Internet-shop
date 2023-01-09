import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setActiveCategoryId(state, action) {
      state.activeCategoryId = action.payload;
    },
    setActiveItemsPopup(state, action) {
      state.activeItemPopup = action.payload;
    },
    sortItemPopupAscDesc(state, action) {
      state.itemPopupAscDesc = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filter

export const {
  setSearchValue,
  setActiveCategoryId,
  setActiveItemsPopup,
  sortItemPopupAscDesc,
  setCurrentPage,
} = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategoryId: 0,
  activeItemPopup: {
    title: "популярности",
    sortProperty: "rating",
  },
  itemPopupAscDesc: "asc",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategoryId(state, action) {
      state.activeCategoryId = action.payload;
    },
    setActiveItemsPopup(state, action) {
      state.activeItemPopup = action.payload;
    },
    sortItemPopupAscDesc(state, action) {
      state.itemPopupAscDesc = action.payload;
    }
  },
});

export const { setActiveCategoryId, setActiveItemsPopup, sortItemPopupAscDesc } = filterSlice.actions;

export default filterSlice.reducer;

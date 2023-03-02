export type ActiveItem = {
  title: string;
  sortProperty: "rating" | "price" | "name";
};

export interface FilterState {
  searchValue: string;
  activeCategoryId: number;
  activeItemPopup: ActiveItem;
  itemPopupAscDesc: string;
  currentPage: number;
}

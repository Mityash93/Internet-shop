export type Pizza = {
  id: string;
  imageUrl: string;
  price: number;
  types: number[];
  sizes: number[];
  name: string;
  count: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzaState {
  items: Pizza[];
  status: Status;
}

export type FetchPizzaParams = {
  currentPage: number;
  category: string;
  sortBy: string;
  itemPopupAscDesc: string;
  search: string;
};

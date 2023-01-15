import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Categories,
  Pagination,
  PizzaBlock,
  Sceleton,
  Sort,
} from "../components";

import { selectFilter } from "../redux/filterPizzas/selectors";
import { fetchPizzasById } from "../redux/PizzaStore/asyncAction";
import { RootState, useAppDispatch } from "../redux/store";

import s from "../styles/page/_home.module.scss";

const Home: FC = () => {
  const {
    activeCategoryId,
    activeItemPopup,
    itemPopupAscDesc,
    currentPage,
    searchValue,
  } = useSelector(selectFilter);
  const { items, status } = useSelector(
    (state: RootState) => state.pizzasStore
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const sortBy = activeItemPopup.sortProperty;

    dispatch(
      fetchPizzasById({
        currentPage,
        category,
        sortBy,
        itemPopupAscDesc,
        search,
      })
    );

    window.scrollTo(0, 0);
  }, [
    activeCategoryId,
    activeItemPopup,
    itemPopupAscDesc,
    searchValue,
    currentPage,
    dispatch,
  ]);

  const skeleton = [...new Array(4)].map((_, i) => <Sceleton key={i} />);
  const pizzas = items.map((obj: any) => <PizzaBlock {...obj} key={obj.id} />);

  return (
    <div className={s.container}>
      <div className={s.content__top}>
        <Categories activeCategoryId={activeCategoryId} />
        <Sort activeItemPopup={activeItemPopup} />
      </div>
      <h2 className={s.content__title}>Все пиццы</h2>
      {status === "error" ? (
        <div className={s.content__error}>
          <h2>Произошла ошибка сервера 😕</h2>
          <p>
            К сожалению, не удалось получить данные. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <div className={s.content__items}>
          {" "}
          {status === "loading" ? skeleton : pizzas}
        </div>
      )}

      {activeCategoryId === 0 && <Pagination />}
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton.jsx";
import Sort from "../components/Sort";
import { selectFilter } from "../redux/slices/Filter";
import { fetchPizzasById } from "../redux/slices/PizzasStore";

import s from "../styles/page/_home.module.scss";

const Home = () => {
  const { activeCategoryId, activeItemPopup, itemPopupAscDesc, currentPage } =
    useSelector(selectFilter);
  const { items, status } = useSelector((state) => state.pizzasStore);
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectFilter);

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
  ]);

  const skeleton = [...new Array(6)].map((_, i) => <Sceleton key={i} />);
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className={s.container}>
      <div className={s.content__top}>
        <Categories />
        <Sort />
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

import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { MyContext } from "../App";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton.jsx";
import Pagination from "../components/Pagination";

import s from "../styles/page/_home.module.scss";

const Home = () => {
  const { activeCategoryId, activeItemPopup, itemPopupAscDesc } = useSelector(
    (state) => state.filterSlice
  );

  const { searchValue } = useContext(MyContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const sortBy = activeItemPopup.sortProperty;
    fetch(
      `https://639da3c71ec9c6657baed210.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${itemPopupAscDesc}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
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
      <div className={s.content__items}>{isLoading ? skeleton : pizzas}</div>
      {activeCategoryId === 0 && (
        <Pagination onPageChange={(number) => setCurrentPage(number)} />
      )}
    </div>
  );
};

export default Home;

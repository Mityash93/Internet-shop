import { React, useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton.jsx";

import s from "../styles/page/_home.module.scss";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [activeItemPopup, setActiveItemsPopup] = useState({
    title: "популярности",
    sortProperty: "rating",
  });
  const [changeItemPopup, setChangeItemPopup] = useState("asc");

  useEffect(() => {
    setIsLoading(true);
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : "";
    const sortBy = activeItemPopup.sortProperty;
    fetch(
      `https://639da3c71ec9c6657baed210.mockapi.io/items?${category}&sortBy=${sortBy}&order=${changeItemPopup}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategoryId, activeItemPopup, changeItemPopup]);
  
  return (
    <div className={s.container}>
      <div className={s.content__top}>
        <Categories
          activeCategory={activeCategoryId}
          onChangeCategory={(i) => setActiveCategoryId(i)}
        />
        <Sort
          activeItemsPopup={activeItemPopup}
          onChangeSort={(i) => setActiveItemsPopup(i)}
          changeItemPopup={(type) => setChangeItemPopup(type)}
        />
      </div>
      <h2 className={s.content__title}>Все пиццы</h2>
      <div className={s.content__items}>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Sceleton key={i} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;

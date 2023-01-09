import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setActiveCategoryId } from "../redux/slices/Filter";

import s from "../styles/components/_categories.module.scss";

const Categories = () => {
  const { activeCategoryId } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль"];

  return (
    <div className={s.categories}>
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => dispatch(setActiveCategoryId(i))}
            className={classNames({
              [s.active]: activeCategoryId === i,
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

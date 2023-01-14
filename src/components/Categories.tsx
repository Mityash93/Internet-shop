import classNames from "classnames";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setActiveCategoryId } from "../redux/filterPizzas/slice";

import s from "../styles/components/_categories.module.scss";

type CategoriesProps = {
  activeCategoryId: number;
};

const Categories: FC<CategoriesProps> = React.memo(({ activeCategoryId }) => {
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
});

export default Categories;

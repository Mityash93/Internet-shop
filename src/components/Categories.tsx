import classNames from "classnames";
import React, { FC } from "react";

import { setActiveCategoryId } from "../store/filterPizzas/slice";
import { useAppDispatch } from "../store/store";

import s from "../styles/components/_categories.module.scss";

type CategoriesProps = {
  activeCategoryId: number;
};

export const Categories: FC<CategoriesProps> = React.memo(
  ({ activeCategoryId }) => {
    const dispatch = useAppDispatch();

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
  }
);

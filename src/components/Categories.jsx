import classNames from "classnames";
import React from "react";

import s from "../styles/components/_categories.module.scss";

const Categories = ({ activeCategory, onChangeCategory }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль"];

  return (
    <div className={s.categories}>
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={classNames({
              [s.active]: activeCategory === i,
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

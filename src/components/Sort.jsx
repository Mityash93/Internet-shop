import React, { useState } from "react";
import classNames from "classnames";

import s from "../styles/components/_sort.module.scss";

const Sort = ({ activeItemsPopup, onChangeSort, changeItemPopup }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const itemsPopup = [
    { title: "популярности", sortProperty: "rating" },
    { title: "цене", sortProperty: "price" },
    { title: "алфавиту", sortProperty: "name" },
  ];

  const onClickActiveItemsPopup = (i) => {
    onChangeSort(i);
    setVisiblePopup(false);
  };

  return (
    <div className={s.sort}>
      <div className={s.sort__label}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setVisiblePopup(!visiblePopup)}>
          {activeItemsPopup.title}
        </span>
      </div>

      {visiblePopup && (
        <div className={s.sort__popup}>
          <ul>
            {itemsPopup.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickActiveItemsPopup(obj)}
                className={classNames({
                  [s.active]:
                    activeItemsPopup.sortProperty === obj.sortProperty,
                })}
              >
                {obj.title}
                <div className={s.sort__type}>
                  <button onClick={() => changeItemPopup("asc")}> ↑ </button>
                  <button onClick={() => changeItemPopup("desc")}> ↓ </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

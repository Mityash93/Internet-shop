import classNames from "classnames";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectOrderCartById } from "../../store/orderCart/selectors";
import { addItems } from "../../store/orderCart/slice";
import { useAppDispatch } from "../../store/store";
import s from "../../styles/components/_pizza-block.module.scss";

type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
};

export const PizzaBlock: FC<PizzaBlockProps> = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
}) => {
  const dicpatch = useAppDispatch();

  const addedItem = useSelector(selectOrderCartById(id));

  const typesName = ["тонкое", "традиционное"];

  const addedCount = addedItem ? addedItem.count : 0;

  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const onClickAddItem = () => {
    const item = {
      id,
      name,
      imageUrl,
      price,
      types: typesName[activeType],
      sizes: sizes[activeSize],
      count: 0,
    };

    dicpatch(addItems(item));
  };

  return (
    <div className={s.block_wrapper}>
      <div className={s.block}>
        <Link to={`/pizza/${id}`}>
          <img className={s.block__image} src={imageUrl} alt="Pizza" />
          <h4 className={s.block__title}>{name}</h4>
        </Link>
        <div className={s.block__selector}>
          <ul>
            {types.map((type, i) => (
              <li
                key={i}
                onClick={() => setActiveType(i)}
                className={classNames({
                  [s.active]: activeType === i,
                })}
              >
                {typesName[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                onClick={() => setActiveSize(i)}
                key={i}
                className={classNames({
                  [s.active]: activeSize === i,
                })}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className={s.block__bottom}>
          <div className={s.block__price}>от {price} ₽</div>
          <button
            onClick={onClickAddItem}
            className={`${s.button} ${s.button_outline} ${s.button_add} `}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

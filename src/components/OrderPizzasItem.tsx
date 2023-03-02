import { FC } from "react";

import { addItems, minusItemSign, removeItems } from "../store/orderCart/slice";
import { OrderCartItem } from "../store/orderCart/types";
import { useAppDispatch } from "../store/store";

import s from "../styles/components/_orderPizzasItem.module.scss";

type OrderPizzasItemProps = {
  id: string;
  imageUrl: string;
  price: number;
  types: string;
  sizes: number;
  name: string;
  count: number;
};

export const OrderPizzasItem: FC<OrderPizzasItemProps> = ({
  id,
  imageUrl,
  price,
  types,
  sizes,
  name,
  count,
}) => {
  const dispatch = useAppDispatch();

  const onRemoveItem = () => {
    if (window.confirm("Ты действительно хочешь удалить товар?")) {
      dispatch(removeItems(id));
    }
  };

  const onPlusItem = () => {
    dispatch(addItems({ id } as OrderCartItem));
  };

  const onMinusItem = () => {
    dispatch(minusItemSign(id));
  };

  return (
    <div className={s.cart__item}>
      <div className={s.cart__item_img}>
        <img src={imageUrl} alt="Pizza" />
      </div>
      <div className={s.cart__item_info}>
        <h3>{name}</h3>
        <p>
          {types}, {sizes} см.
        </p>
      </div>
      <div className={s.cart__item_count}>
        <button
          disabled={count === 1}
          type="button"
          onClick={onMinusItem}
          className={`${s.button} ${s.button_outline} ${s.button_circle} ${s.button_minus}`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            ></path>
          </svg>
        </button>
        <b>{count}</b>
        <button
          type="button"
          onClick={onPlusItem}
          className={`${s.button} ${s.button_outline} ${s.button_circle} ${s.button_plus}`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            ></path>
          </svg>
        </button>
      </div>
      <div className={s.cart__item_price}>
        <b>{price * count} ₽</b>
      </div>
      <div onClick={onRemoveItem} className={s.cart__item_remove}>
        <div className={`${s.button} ${s.button_outline} ${s.button_circle}`}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

import emptyImg from "../assets/image/empty-cart.png";

import s from "../styles/components/_orderPizzasEmpty.module.scss";

const EmptyOrder = () => {
  return (
    <div className={s.cart__empty}>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyImg} alt="Empty cart" />
      <Link to="/" className={`${s.button} ${s.button_black}`}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default EmptyOrder;

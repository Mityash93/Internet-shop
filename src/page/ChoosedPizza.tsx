import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import s from "../styles/page/_choosedPizza.module.scss";

const ChoosedPizza: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://639da3c71ec9c6657baed210.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Произошла ошибка сервера");
        navigate("/")
      }
    }
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <div className={s.container} >Пицца грузится...йоу</div>;
  }

  return (
    <div className={s.container}>
    <img src={pizza.imageUrl} alt="Pizza" />
    <h2>{pizza.name}</h2>
    <h4>{pizza.price} ₽</h4>
    <Link to="/">
      <button className={s.button}>
        <span>Назад</span>
      </button>
    </Link>
  </div>
  )
  
};

export default ChoosedPizza;

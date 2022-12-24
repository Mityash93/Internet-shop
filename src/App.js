import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./page/Home";
import OrderPizzas from "./page/OrderPizzas";

import s from "./styles/app.module.scss";

export const MyContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={s.wrapper}>
      <MyContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className={s.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderPizzas />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;

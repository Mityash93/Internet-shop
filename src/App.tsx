import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import ChoosedPizza from "./page/ChoosedPizza";
import Home from "./page/Home";
import OrderPizzas from "./page/OrderPizzas";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPizzas />} />
        <Route path="/pizza/:id" element={<ChoosedPizza />} />
      </Route>
    </Routes>
  );
}

export default App;

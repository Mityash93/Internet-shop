import Loadable from "react-loadable";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import ChoosedPizza from "./page/ChoosedPizza";
import Home from "./page/Home";

import s from "./styles/app.module.scss";

const OrderPizzas = Loadable({
  loader: () =>
    import(/* webpackChunkName: "OrderPizzas" */ "./page/OrderPizzas"),
  loading: () => <div className={s.container}>Пиццы грузятся...</div>,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPizzas />} />
        <Route path="/pizza/:id" element={<ChoosedPizza />} />
      </Route>
    </Routes>
  );
}

export default App;

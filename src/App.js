import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./page/Home";
import OrderPizzas from "./page/OrderPizzas";

import s from "./styles/app.module.scss";

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPizzas/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

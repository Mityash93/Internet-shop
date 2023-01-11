import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

import s from "../styles/app.module.scss";

const MainLayout: FC = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

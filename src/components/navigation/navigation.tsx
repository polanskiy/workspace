import React from "react";
import { Link, Outlet } from "react-router-dom";

import css from "./navigation.module.css";

export const Navigation = () => {
  return (
    <>
      <nav className={css.root}>
        <Link to="/">Home</Link>
        <Link to="/removed-todoitems">Removed items</Link>
      </nav>
      <Outlet />
    </>
  );
};

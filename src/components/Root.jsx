import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AllProduct from "./AllProduct";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;

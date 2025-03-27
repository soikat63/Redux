import React from "react";
import Cart from "../src/components/page/Cart"

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/page/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index element={<Home/>}/> 
      <Route path="/cart" element={<Cart/>}/> 
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

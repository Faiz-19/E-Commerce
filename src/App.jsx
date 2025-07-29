import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignUp from "./Pages/LoginSignUp";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Shop/>} />
        <Route path="mens" element={<ShopCategory/>} />
        <Route path="womens" element={<ShopCategory/>} />
        <Route path="kids" element={<ShopCategory/>} />
        <Route path="login" element={<LoginSignUp/>} />
        <Route path="product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="cart" element={<Cart/>} />
      </Route>
    )
  )

  return <>
      <RouterProvider router={router}/>
    </>;
}

export default App;

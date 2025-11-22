import React from "react";
import Navbar from "./Components/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignUp from "./Pages/LoginSignUp";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import mens_banner from "./assets/banner_mens.png";
import womens_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";
import Checkout from "./Components/Checkout";
import Verify from "./Pages/Verify";
import Admin from "./Pages/Admin";
import MyOrders from "./Pages/MyOrders";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Shop />} />
          <Route
            path="mens"
            element={<ShopCategory banner={mens_banner} category="men" />}
          />
          <Route
            path="womens"
            element={<ShopCategory banner={womens_banner} category="women" />}
          />
          <Route
            path="kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />
          <Route path="login" element={<LoginSignUp />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="success" element={<Verify />}></Route>
          <Route path="myorders" element={<MyOrders />}></Route>
        </Route>
        <Route path="admin" element={<Admin />}></Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

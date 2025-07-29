import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);
  const [menu, setMenu] = useState("Shop");

  function handleMenu(e) {
    const current = e.currentTarget.innerText.trim();
    setMenu(current);
  }

  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between shadow-lg">
      <div className="flex items-center justify-end gap-2.5 pl-36">
        <img src={logo} alt="Shopper-Logo" />
        <p className="text-2xl font-semibold">SHOPPER</p>
      </div>
      <div>
        <ul className="flex gap-10 text-lg items-center">
          <Link to="/">
            <li onClick={handleMenu} className="cursor-pointer">
              Shop
              {menu === "Shop" && (
                <hr className="bg-red-400 rounded-full pt-[3px] ml-0.5 border-0 w-[80%] mt-0.5" />
              )}
            </li>
          </Link>
          <Link to="/mens">
            <li onClick={handleMenu} className="cursor-pointer">
              Men
              {menu === "Men" && (
                <hr className="bg-red-400 rounded-full pt-[3px] ml-0.5 border-0 w-[80%] mt-0.5" />
              )}
            </li>
          </Link>
          <Link to="/womens">
            <li onClick={handleMenu} className="cursor-pointer">
              Women
              {menu === "Women" && (
                <hr className="bg-red-400 rounded-full pt-[3px] ml-0.5 border-0 w-[80%] mt-0.5" />
              )}
            </li>
          </Link>
          <Link to="/kids">
            <li onClick={handleMenu} className="cursor-pointer">
              Kids
              {menu === "Kids" && (
                <hr className="bg-red-400 rounded-full pt-[3px] ml-0.5 border-0 w-[80%] mt-0.5" />
              )}
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-10 pr-36 relative">
        <button
          onClick={() => navigate("/login")}
          className="border rounded-4xl w-fit p-1.5 pb-2 px-6 text-zinc-700 active:bg-zinc-100 cursor-pointer"
        >
          Login
        </button>
        <Link to="/cart">
          <img
            className="w-8 cursor-pointer"
            src="src/assets/cart_icon.png"
            alt="Cart-Icon"
          />
        </Link>
        <span className="bg-red-500 rounded-full h-5 w-5 flex cursor-pointer items-center pl-[5px] pb-[1px] text-white absolute left-37 top-0">
          0
        </span>
      </div>
    </nav>
  );
}

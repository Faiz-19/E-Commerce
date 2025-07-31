import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { ShopContext } from "../Context/ShopContex";

export default function Navbar() {
  const navigate = useNavigate();

  const { cartItem } = useContext(ShopContext);

  let totalCartItems = 0;
  for (const item in cartItem) {
    totalCartItems += cartItem[item];
  }

  return (
    <nav className="flex items-center justify-between shadow-lg">
      <div className="flex items-center justify-end gap-2.5 pl-36">
        <img src={logo} alt="Shopper-Logo" />
        <p className="text-2xl font-semibold">SHOPPER</p>
      </div>

      <div>
        <ul className="flex gap-10 text-lg items-center">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `cursor-pointer transition-colors ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-zinc-600 hover:text-zinc-900"
                }`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mens"
              className={({ isActive }) =>
                `cursor-pointer transition-colors ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-zinc-600 hover:text-zinc-900"
                }`
              }
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/womens"
              className={({ isActive }) =>
                `cursor-pointer transition-colors ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-zinc-600 hover:text-zinc-900"
                }`
              }
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                `cursor-pointer transition-colors ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-zinc-600 hover:text-zinc-900"
                }`
              }
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-10 pr-36 relative">
        <button
          onClick={() => navigate("/login")}
          className="border rounded-4xl w-fit p-1.5 pb-2 px-6 text-zinc-700 active:bg-zinc-100 cursor-pointer"
        >
          Login
        </button>
        <NavLink to="/cart">
          <img className="w-8 cursor-pointer" src={cart_icon} alt="Cart-Icon" />
        </NavLink>
        <span className="bg-red-500 rounded-full cursor-pointer text-white absolute left-37 top-0 h-[22px] w-[22px] flex items-center justify-center">
          <span className="text-sm">{totalCartItems}</span>
        </span>
      </div>
    </nav>
  );
}

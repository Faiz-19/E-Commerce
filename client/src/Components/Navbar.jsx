import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { ShopContext } from "../Context/ShopContext.jsx";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, cartItem } = useContext(ShopContext);
  const [search, setSearch] = useState("");

  let totalCartItems = 0;
  for (const item in cartItem) {
    totalCartItems += cartItem[item];
  }

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      // You can implement a search page later, for now this placeholder is fine
      console.log("Searching for:", search);
    }
  };

  return (
    <nav className="flex items-center justify-between shadow-lg px-6 md:px-12 lg:px-24 py-4 relative bg-white">
      <div
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Shopper-Logo" />
        <p className="text-xl md:text-2xl font-semibold">SHOPPER</p>
      </div>

      <div className="hidden md:flex">
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

      <div className="flex items-center gap-5 md:gap-8">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center border border-zinc-300 rounded-full px-3 py-1.5">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-sm w-32 text-zinc-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-zinc-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {user ? (
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => navigate("/myorders")}
              className="border rounded-full p-1.5 pb-2 px-4 text-zinc-700 hover:bg-zinc-50 active:bg-zinc-100 cursor-pointer text-sm"
            >
              Orders
            </button>
            <button
              onClick={logout}
              className="border rounded-full p-1.5 pb-2 px-6 text-zinc-700 hover:bg-zinc-50 active:bg-zinc-100 cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="border rounded-full w-fit p-1.5 pb-2 px-6 text-zinc-700 active:bg-zinc-100 cursor-pointer hidden sm:block"
          >
            Login
          </button>
        )}

        <NavLink to="/cart" className="relative">
          <img className="w-8 cursor-pointer" src={cart_icon} alt="Cart-Icon" />
          <span className="bg-red-500 rounded-full text-white absolute -top-2 -right-2 h-[22px] w-[22px] flex items-center justify-center text-sm">
            {totalCartItems}
          </span>
        </NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-10">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/mens" onClick={() => setIsMenuOpen(false)}>
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/womens" onClick={() => setIsMenuOpen(false)}>
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/kids" onClick={() => setIsMenuOpen(false)}>
                Kids
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/myorders" onClick={() => setIsMenuOpen(false)}>
                  My Orders
                </NavLink>
              </li>
            )}
            <li>
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="border rounded-full p-2 px-8"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="border rounded-full p-2 px-8"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

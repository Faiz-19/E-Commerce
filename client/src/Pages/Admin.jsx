import React, { useContext, useEffect, useState } from "react";
import AddProduct from "../Components/AddProduct";
import ListProduct from "../Components/ListProduct";
import logo from "../assets/logo.png";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [view, setView] = useState("add");
const { user, loading, logout } = useContext(ShopContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== "admin") {
        navigate("/");
      }
    }
  }, [loading, user, navigate]);

  if (loading || !user || user.role !== "admin") {
    return null;
  }
  const handleLogout = async () => {
      await logout();
      navigate("/login"); // Send them back to login after logout
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-pink-50 font-poppins">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-200">
          <img src={logo} alt="" className="w-10" />
          <span className="font-bold text-xl tracking-wider">ADMIN</span>
        </div>

        <div className="flex flex-col p-4 gap-4">
          <button
            onClick={() => setView("add")}
            className={`p-3 text-left rounded-md transition-all flex items-center gap-3 ${
              view === "add"
                ? "bg-pink-100 text-red-500 font-semibold"
                : "hover:bg-zinc-50 text-zinc-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add Product
          </button>

          <button
            onClick={() => setView("list")}
            className={`p-3 text-left rounded-md transition-all flex items-center gap-3 ${
              view === "list"
                ? "bg-pink-100 text-red-500 font-semibold"
                : "hover:bg-zinc-50 text-zinc-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            Product List
          </button>
          <button 
             onClick={handleLogout}
             className="p-3 text-left rounded-md hover:bg-zinc-50 text-zinc-600 transition-all flex items-center gap-3 mt-auto border-t border-zinc-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 w-full max-w-4xl mx-auto">
          {view === "add" ? <AddProduct /> : <ListProduct />}
        </div>
      </div>
    </div>
  );
};

export default Admin;

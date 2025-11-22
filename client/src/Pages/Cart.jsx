import React, { useContext } from "react";
import CartItems from "../Components/CartItems";
import { Navigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { toast } from 'react-toastify';

export default function Cart() {
  const { user, loading } = useContext(ShopContext);

  if (loading) return <div>Loading...</div>;
  if (!user) {
    toast.error("Please login first!");
    return <Navigate to="/login" replace />;
  }
  return (
    <main>
      <CartItems />
    </main>
  );
}

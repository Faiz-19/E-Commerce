import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cartItem, setCartItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/me", {
          withCredentials: true,
        });
        const userData = res.data.data;
        setUser(userData);
        setCartItem(userData.cartData || {});
      } catch (error) {
        console.log("No user logged in", error);
        setCartItem({});
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getCurrentUser();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const userData = res.data.data.user;
      setUser(userData);
      setCartItem(userData.cartData || {});
      return { success: true, role: userData.role };
    } catch (error) {
      console.error("Login Failed", error);
      return { success: false, message: error.response.data.message };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );

      return await login(email, password);
    } catch (error) {
      console.error("SignUp Failed", error);
      return { success: false, message: error.response.data.message };
    }
  };
  const logout = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/logout",
        {}, // empty body
        { withCredentials: true } //must include this
      );
      setUser(null); // Clear the user
      setCartItem({});

      return { success: true, message: data.message };
    } catch (error) {
      console.log(
        "Logout failed",
        error.response?.data?.message || error.message
      );
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  };

  const addToCart = async (itemId) => {
    if (!user) {
      console.error("User is not Logged In");
      return;
    }
    const newCart = { ...cartItem };

    newCart[itemId] = (newCart[itemId] || 0) + 1;
    setCartItem(newCart);
    // setCartItem((p) => ({ ...p, [itemId]: (p[itemId] || 0) + 1 }));

    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/updatecart",
        { cartItem: newCart },
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Failed to Add", error);
    }
  };

  const removeFromCart = async (itemId) => {
    if (!user) {
      console.error("User is not Logged In");
      return;
    }
    const newCart = { ...cartItem };

    if (newCart[itemId] > 0) {
      newCart[itemId] -= 1;
    }
    setCartItem(newCart);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/updatecart",
        { cartItem: newCart },
        { withCredentials: true }
      );
      console.log("item removed");
    } catch (error) {
      console.error("Failed to remove", error);
    }
  };

  const contextValue = {
    login,
    logout,
    register,
    user,
    cartItem,
    setCartItem,
    loading,
    addToCart,
    removeFromCart,
  };
  if (loading) {
    return <div>Loading app...</div>; // Or a spinner component
  }
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

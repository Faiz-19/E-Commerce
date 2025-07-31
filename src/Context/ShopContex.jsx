import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
    let cart = {}
    all_product.map((e) => {
      return cart[e.id] = 0 ;
    });
    
    const [cartItem,setCartItem] = useState(cart)
  return (
    <ShopContext.Provider value={{ all_product,cartItem,setCartItem }}>
      {children}
    </ShopContext.Provider>
  );
}

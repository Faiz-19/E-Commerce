import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../../../server/src/lib/all_product.js";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
    let cart = {}
    all_product.map((e) => {
      return cart[e.id] = 0 ;
    });
    
    const [cartItem,setCartItem] = useState(cart)
  return (
    <ShopContext.Provider value={{cartItem,setCartItem }}>
      {children}
    </ShopContext.Provider>
  );
}

import React, { useContext, useEffect, useState } from "react";
import cross_icon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";

export default function CartItems() {
  const { cartItem, setCartItem } = useContext(ShopContext);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCartProducts = async () => {
      const productIds = Object.keys(cartItem).filter((id) => cartItem[id] < 0);

      if (productIds.length > 0) {
        try {
          const res = await axios.post(
            "http://localhost:3000/api/product/cart",
            {
              ids: productIds,
            }
          );
          setCartProducts(res.data.data);
        } catch (error) {
          console.error("Error fetching cart products", error);
        }
      } else {
        setCartProducts([]);
      }
    };
    getCartProducts();
  }, [cartItem]);

  function removeFromCart(id) {
    setCartItem((p) => ({ ...p, [id]: p[id] - 1 }));
  }

  let totalPrice = 0;
  cartProducts.forEach((product) => {
    if (cartItem[product.id] > 0) {
      totalPrice += product.new_price * cartItem[product.id];
    }
  });

  if (cartProducts.length === 0) {
    return (
      <div className="text-center my-20 px-4">
        <h1 className="text-2xl font-semibold">Your cart is empty.</h1>
        <p className="text-zinc-500 mt-2">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center gap-10 my-10 px-4">
      <div className="w-full max-w-6xl hidden md:block">
        <table className="w-full text-center table-auto">
          <thead className="h-12 border-b">
            <tr>
              <th className="text-left pl-2">Products</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((e) => {
              if (cartItem[e.id] > 0) {
                return (
                  <tr key={e.id} className="border-b h-24">
                    <td className="flex justify-start items-center h-24 pl-2">
                      <img
                        className="h-20 w-20 object-cover rounded"
                        src={e.image}
                        alt={e.name}
                      />
                    </td>
                    <td className="w-1/3 text-left px-4">{e.name}</td>
                    <td>${e.new_price.toFixed(2)}</td>
                    <td>
                      <span className="border border-zinc-200 py-2 px-4 rounded">
                        {cartItem[e.id]}
                      </span>
                    </td>
                    <td>${(e.new_price * cartItem[e.id]).toFixed(2)}</td>
                    <td>
                      <img
                        onClick={() => removeFromCart(e.id)}
                        className="cursor-pointer h-3 mx-auto"
                        src={cross_icon}
                        alt="Remove"
                      />
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-6xl md:hidden space-y-4">
        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div key={e.id} className="border rounded-lg p-4 flex gap-4">
                <img
                  className="w-24 h-24 object-cover rounded"
                  src={e.image}
                  alt={e.name}
                />
                <div className="flex-grow flex flex-col justify-between">
                  <p className="font-semibold text-sm">{e.name}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-red-500 font-bold">
                      ${e.new_price.toFixed(2)}
                    </p>
                    <p className="text-sm">Qty: {cartItem[e.id]}</p>
                    <img
                      onClick={() => removeFromCart(e.id)}
                      className="cursor-pointer h-3"
                      src={cross_icon}
                      alt="Remove"
                    />
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl gap-10">
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <h1 className="font-semibold text-2xl">Cart Totals</h1>
          <div className="flex flex-col border rounded-lg p-4">
            <div className="flex justify-between py-2 border-b">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between pt-2 font-bold text-lg">
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <button className="bg-red-500 w-full py-3 px-6 text-white font-semibold rounded-md hover:bg-red-600">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="w-full lg:w-[45%]">
          <p className="text-zinc-500 mb-2">
            If you have a promo code, enter it here
          </p>
          <div className="flex justify-between border rounded-md overflow-hidden">
            <input
              className="p-3 bg-transparent w-full"
              type="text"
              placeholder="promo code"
            />
            <button className="bg-black text-white px-8 hover:bg-zinc-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

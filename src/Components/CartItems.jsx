import React, { useContext } from "react";
import cross_icon from "../assets/cart_cross_icon.png";
import p2_img from "../assets/product_2.png";
import { ShopContext } from "../Context/ShopContex";

export default function CartItems() {
  const { all_product, cartItem, setCartItem } = useContext(ShopContext);

  function removeFromCart(id) {
    setCartItem((p) => ({ ...p, [id]: p[id] - 1 }));
  }
  let totalPrice = 0;

  all_product.forEach((e) => {
    if (cartItem[e.id] > 0) {
      totalPrice += e.new_price * cartItem[e.id];
    }
  });

  return (
    <section className="flex flex-col items-center gap-5">
      <div className="w-[85vw] min-h-[20vh] py-10">
        <table className="w-[100%] text-center table-auto">
          <thead className="h-10">
            <tr>
              <th>Products</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_product.map((e) => {
              if (cartItem[e.id] > 0) {
                return (
                  <tr className="border-y border-zinc-300 h-16">
                    <td className="flex justify-center">
                      <img className="h-16 p-1" src={e.image} alt="" />
                    </td>
                    <td>{e.name}</td>
                    <td>${e.new_price}</td>
                    <td>
                      <span className="border border-zinc-200 p-2 px-6 ">
                        {cartItem[e.id]}
                      </span>
                    </td>
                    <td>${e.new_price * cartItem[e.id]}</td>
                    <td>
                      <span className="flex items-center justify-center">
                        <img
                          onClick={() => removeFromCart(e.id)}
                          className="cursor-pointer h-2"
                          src={cross_icon}
                          alt=""
                        />
                      </span>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between w-[85vw] mb-14">
        <div className="flex flex-col gap-5 w-[50%]">
          <h1 className="font-semibold text-2xl">Cart Totals</h1>
          <div className="flex flex-col justify-center">
            <div className="flex justify-between p-2 text-zinc-500 border-b">
              <p>Subtotak</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between p-2 text-zinc-500 border-b">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between p-2 font-bold">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
          </div>
          <div>
            <button className="bg-red-500 p-2 text-white text-sm font-semibold">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
        <div className="w-[40%]">
          <p className="text-zinc-500 mb-2">
            If you have a promo code,Enter it here
          </p>
          <div className="flex justify-between w-[80%] bg-pink-50">
            <input className="p-3" type="text" placeholder="promo code" />
            <button className="bg-black text-center text-white px-5">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

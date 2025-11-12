import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContex";

const ProductDisplay = ({ product }) => {
  const { setCartItem } = useContext(ShopContext);

  function addToCart(id) {
    setCartItem((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
  }

  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row gap-4 w-full lg:w-1/2">
        <div className="flex md:flex-col gap-2 justify-center">
          <img className="h-20 w-20 object-cover cursor-pointer border-2 border-transparent hover:border-red-500 rounded" src={product.image} alt="" />
          <img className="h-20 w-20 object-cover cursor-pointer border-2 border-transparent hover:border-red-500 rounded" src={product.image} alt="" />
          <img className="h-20 w-20 object-cover cursor-pointer border-2 border-transparent hover:border-red-500 rounded" src={product.image} alt="" />
          <img className="h-20 w-20 object-cover cursor-pointer border-2 border-transparent hover:border-red-500 rounded" src={product.image} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full h-auto object-cover rounded-lg" src={product.image} alt={product.name} />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-5 w-full lg:w-1/2">
        <h1 className="font-semibold text-2xl md:text-4xl">{product.name}</h1>
        <div className="flex gap-1 items-center">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <span className="ml-2 text-sm">(122)</span>
        </div>
        <div className="flex gap-5 items-center">
          <p className="font-semibold text-zinc-500 line-through text-xl">${product.old_price}</p>
          <p className="font-semibold text-red-500 text-2xl">${product.new_price}</p>
        </div>
        <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
        <h2 className="font-semibold text-zinc-500 text-xl">Select Size</h2>
        <div className="flex gap-3 flex-wrap">
          <button className="border border-zinc-200 bg-zinc-50 py-2 px-4 hover:bg-zinc-100 rounded">S</button>
          <button className="border border-zinc-200 bg-zinc-50 py-2 px-4 hover:bg-zinc-100 rounded">M</button>
          <button className="border border-zinc-200 bg-zinc-50 py-2 px-4 hover:bg-zinc-100 rounded">L</button>
          <button className="border border-zinc-200 bg-zinc-50 py-2 px-4 hover:bg-zinc-100 rounded">XL</button>
          <button className="border border-zinc-200 bg-zinc-50 py-2 px-4 hover:bg-zinc-100 rounded">XXL</button>
        </div>
        <div>
          <button onClick={() => addToCart(product.id)} className="bg-red-500 w-full md:w-auto py-3 px-8 font-semibold cursor-pointer text-white rounded-md hover:bg-red-600 transition-colors">ADD TO CART</button>
        </div>
        <p><span className="font-semibold mr-1">Category:</span>{product.category}, T-Shirt, Crop Top</p>
        <p><span className="font-semibold mr-1">Tags:</span>Modern, Latest</p>
      </div>
    </section>
  );
};

export default ProductDisplay;
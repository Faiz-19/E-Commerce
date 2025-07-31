import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContex";

const ProductDisplay = ({ product }) => {
  const {cartItem,setCartItem} = useContext(ShopContext)

  function addToCart(id){
    setCartItem(p => ({...p,[id]: p[id]+1}))
  }

  return (
    <section className="flex gap-15 w-[80vw]">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <img className="h-[18vh] w-[13vw]" src={product.image} alt="" />
          <img className="h-[18vh] w-[13vw]" src={product.image} alt="" />
          <img className="h-[18vh] w-[13vw]" src={product.image} alt="" />
          <img className="h-[18vh] w-[13vw]" src={product.image} alt="" />
        </div>
        <div>
          <img className="h-[75.5vh] w-[50vw]" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-4xl">{product.name}</h1>
        <div className="flex gap-0.5 items-center ">
          <img className="" src={star_icon} alt="" />
          <img className="" src={star_icon} alt="" />
          <img className="" src={star_icon} alt="" />
          <img className="" src={star_icon} alt="" />
          <img className="" src={star_dull_icon} alt="" />
          <span className="ml-0.5 text-sm">(122)</span>
        </div>
        <div className="flex gap-7">
          <p className="font-semibold text-zinc-500 line-through">
            ${product.old_price}
          </p>
          <p className="font-semibold text-red-500">${product.new_price}</p>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          recusandae atque tempora ea a blanditiis aliquid minima nesciunt,
          eaque labor
        </p>
        <h2 className="font-semibold text-zinc-500">Select Size</h2>
        <div className="flex gap-5">
          <button className="border border-zinc-200 bg-zinc-50 p-1 w-[8%]">
            S
          </button>
          <button className="border border-zinc-200 bg-zinc-50 p-1 w-[8%]">
            M
          </button>
          <button className="border border-zinc-200 bg-zinc-50 p-1 w-[8%]">
            L
          </button>
          <button className="border border-zinc-200 bg-zinc-50 p-1 w-[8%]">
            XL
          </button>
          <button className="border border-zinc-200 bg-zinc-50 p-1 w-[8%]">
            XXl
          </button>
        </div>
        <div>
          <button onClick={()=>addToCart(product.id)} className="bg-red-500 w-[25%] p-2 font-semibold cursor-pointer text-white rounded-sm ">ADD TO CART</button>
        </div>
        <p><span className="font-semibold mr-1">Category:</span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}s,T-Shirt,Crop Top</p>
        <p><span className="font-semibold mr-1">Tags:</span>Mordern,Latest</p>
      </div>
    </section>
  );
};

export default ProductDisplay;

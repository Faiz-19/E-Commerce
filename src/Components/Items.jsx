import React from "react";
import { Link } from "react-router-dom";


export default function Items({discription,image,newPrice,oldPrice,id}) {
  const scroll = window.scrollTo({
    top:0,
    behavior:"smooth"
  })

  return (
      <div className="flex flex-col gap-2 w-[20%] transition-transform duration-300 hover:scale-105">
        <Link to={`/product/${id}`} onClick={scroll}><img src={image} alt="" /></Link>
        <p className="text-sm text-wrap w-[80%] ">
          {discription}
        </p>
        <span className="flex gap-5">
          <p className="font-medium">${newPrice}</p>
          <p className="line-through font-light text-gray-500">${oldPrice}</p>
        </span>
      </div>
  );
}

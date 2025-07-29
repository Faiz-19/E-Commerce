import React from "react";


export default function Items({discription,image,newPrice,oldPrice}) {
  return (
      <div className="flex flex-col gap-2 w-[20%] transition-transform duration-300 hover:scale-105">
        <img src={image} alt="" />
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

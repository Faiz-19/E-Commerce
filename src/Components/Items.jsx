import React from "react";
import { Link } from "react-router-dom";

export default function Items({ discription, image, newPrice, oldPrice, id }) {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-2 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${id}`} onClick={scroll}>
        <img src={image} alt={discription} className="w-full object-cover" />
      </Link>
      <p className="text-sm text-wrap ">{discription}</p>
      <span className="flex gap-5 items-center">
        <p className="font-semibold text-lg">${newPrice}</p>
        <p className="line-through font-light text-gray-500">${oldPrice}</p>
      </span>
    </div>
  );
}
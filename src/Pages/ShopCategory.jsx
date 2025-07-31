import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContex";
import dropdown_icon from "../assets/dropdown_icon.png";
import Items from "../Components/Items";

export default function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);

  return (
    <section className="flex flex-col items-center gap-5">
      <img
        className="w-[75vw] py-10"
        src={props.banner}
        alt={`${props.category} discount banner`}
      />
      <div className="flex justify-between items-center w-[75vw] px-2">
        <p>
          <span className="font-bold">Showing 1-12</span> out of 54 Products
        </p>
        <button className="rounded-full flex items-center border p-1.5 px-4 text-sm gap-1">
          Sort by <img className="w-2" src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="flex items-center px-20 py-10 justify-center gap-5 flex-wrap">
        {all_product.map((e) => {
          if (e.category === props.category) {
            return (
              <Items
                key={e.id}
                id={e.id}
                discription={e.name}
                image={e.image}
                newPrice={e.new_price}
                oldPrice={e.old_price}
              />
            );
          }
        })}
      </div>
      <button className="bg-[#ff7235] rounded-full h-10 w-[8%] text-white mb-10">
        Explore More
      </button>
    </section>
  );
}

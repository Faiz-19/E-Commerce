import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Items from "../Components/Items";
import axios from "axios";

export default function ShopCategory(props) {
  // const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoryProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/product/category/${props.category}`
        );
        setProducts(res.data.data);        
      } catch (error) {
        console.error(`Error fetching ${props.category} products`, error);
      }
    };
    categoryProducts();
  }, [props.category]);
  
  return (
    <section className="flex flex-col items-center gap-5 px-4 md:px-8">
      <img
        className="w-full max-w-7xl my-5 rounded-lg"
        src={props.banner}
        alt={`${props.category} discount banner`}
      />
      <div className="flex justify-between items-center w-full max-w-7xl px-2">
        <p className="text-sm md:text-base">
          <span className="font-bold">Showing 1-12</span> out of 36 Products
        </p>
        <button className="rounded-full flex items-center border p-2 px-4 text-sm gap-2">
          Sort by <img className="w-3" src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-5 w-full max-w-7xl my-10">
        {products.map((e) => {
          return <Items
            key={e.id}
            id={e.id}
            discription={e.name}
            image={e.image}
            newPrice={e.new_price}
            oldPrice={e.old_price}
          />;
        })}
      </div>
      <button className="bg-red-500 rounded-full py-3 px-8 text-white mb-10 hover:bg-red-600">
        Explore More
      </button>
    </section>
  );
}

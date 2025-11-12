import React, { useEffect, useState } from "react";
import Items from "./Items";
import axios from "axios";

export default function Popular() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/product/popular"
        );
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error Fetching Popular Products", error);
      }
    };
    fetchPopularProducts()
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-3 my-10 px-4">
      <h1 className="text-3xl md:text-4xl font-medium text-center">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-40 border-2 rounded-full" />
      <div className="flex flex-wrap items-start justify-center gap-5 w-full max-w-7xl my-10">
        {products.map((e, i) => (
          <Items
            key={e.id}
            id={e.id}
            discription={e.name}
            image={e.image}
            newPrice={e.new_price}
            oldPrice={e.old_price}
          />
        ))}
      </div>
    </section>
  );
}

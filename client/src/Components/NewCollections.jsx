import React, { useEffect, useState } from "react";
import Items from "./Items";
import axios from "axios";

export default function NewCollections() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/product/new"
        );
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error Fetching Popular Products", error);
      }
    };
    fetchNewProducts()
  }, []);
  return (
    <section className="flex flex-col justify-center items-center gap-3 my-10 px-4">
      <h1 className="text-3xl md:text-4xl font-medium text-center">
        NEW COLLECTIONS
      </h1>
      <hr className="w-40 border-2 rounded-full" />
      <div className="flex items-start justify-center gap-5 flex-wrap w-full max-w-7xl my-10">
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

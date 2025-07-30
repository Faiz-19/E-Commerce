import React from "react";
import data_product from "../assets/data"
import Items from "./Items";


export default function RelatedProducts() {
  return (
    <section className="flex flex-col justify-center items-center gap-3 h-[100vh]">
      <h1 className="text-4xl font-medium">RELATED PRODUCTS</h1>
      <hr className="w-40 border-3 rounded-full" />
      <div className="flex items-center px-20 py-10 justify-center gap-5 ">
        {data_product.map((e, i) => (
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

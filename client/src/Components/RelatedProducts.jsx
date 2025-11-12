import React from "react";
// import data_product from "../assets/data"
import Items from "./Items";

export default function RelatedProducts() {
  return (
    <section className="flex flex-col justify-center items-center gap-3 my-10 px-4 w-full">
      <h1 className="text-3xl md:text-4xl font-medium">RELATED PRODUCTS</h1>
      <hr className="w-40 border-2 rounded-full" />
      <div className="flex flex-wrap items-start justify-center gap-5 w-full max-w-7xl my-10">
        {/* {data_product.map((e, i) => (
          <Items
            key={e.id}
            id={e.id}
            discription={e.name}
            image={e.image}
            newPrice={e.new_price}
            oldPrice={e.old_price}
          />
        ))} */}
      </div>
    </section>
  );
}
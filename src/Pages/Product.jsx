import React, { useContext } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import ProductDisplay from "../Components/ProductDisplay";
import { ShopContext } from "../Context/ShopContex";
import { useParams } from "react-router-dom";
import DiscriptionBox from "../Components/DiscriptionBox";
import RelatedProducts from "../Components/RelatedProducts";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <main className="flex flex-col items-center gap-5 my-10 px-4">
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </main>
  );
}

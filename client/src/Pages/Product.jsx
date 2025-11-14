import React, { use, useContext, useEffect, useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import ProductDisplay from "../Components/ProductDisplay";
// import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import DiscriptionBox from "../Components/DiscriptionBox";
import RelatedProducts from "../Components/RelatedProducts";
import axios from "axios";

export default function Product() {
  // const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  // const product = all_product.find((e) => e.id === Number(productId));
  const [product, setProduct] = useState();

  useEffect(() => {
    const idProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/product/${Number(productId)}`
        );
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching the product");
      }
    };
    idProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; // Or return null
  }
  return (
    <main className="flex flex-col items-center gap-5 my-10 px-4">
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RelatedProducts />
    </main>
  );
}

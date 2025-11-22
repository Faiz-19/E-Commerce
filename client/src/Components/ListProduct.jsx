import React, { useEffect, useState } from "react";
import axios from "axios";
import cross_icon from "../assets/cart_cross_icon.png"; // Using your existing icon

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/product/all",{withCredentials:true});
      setAllProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await axios.delete(`http://localhost:3000/api/product/${id}`, {
      withCredentials: true,
    });
    await fetchInfo();
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-zinc-700 mb-6">
        All Products List
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="border-b border-zinc-300 bg-zinc-50 text-zinc-600 font-medium">
            <tr>
              <th className="p-3">Products</th>
              <th className="p-3">Title</th>
              <th className="p-3">Old Price</th>
              <th className="p-3">New Price</th>
              <th className="p-3">Category</th>
              <th className="p-3">Remove</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {allproducts.map((product, index) => (
              <tr key={index} className="hover:bg-pink-50 transition-colors">
                <td className="p-3">
                  <img
                    src={product.image}
                    alt=""
                    className="h-16 w-16 object-cover rounded-md border"
                  />
                </td>
                <td className="p-3 font-medium text-zinc-800">
                  {product.name}
                </td>
                <td className="p-3 text-zinc-500 line-through">
                  ${product.old_price}
                </td>
                <td className="p-3 text-zinc-800 font-semibold">
                  ${product.new_price}
                </td>
                <td className="p-3 text-zinc-600 capitalize">
                  {product.category}
                </td>
                <td className="p-3">
                  <img
                    onClick={() => remove_product(product.id)}
                    className="cursor-pointer h-4 opacity-60 hover:opacity-100 hover:scale-110 transition-all"
                    src={cross_icon}
                    alt="Remove"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;

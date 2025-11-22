import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
    description: "",
    isPopular: false,
    isNew: false,
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    setProductDetails({ ...productDetails, image: e.target.files[0] });
  };

  const changeHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setProductDetails({ ...productDetails, [e.target.name]: value });
  };

  const Add_Product = async () => {
    const formData = new FormData();
    formData.append("name", productDetails.name);
    formData.append("old_price", productDetails.old_price);
    formData.append("new_price", productDetails.new_price);
    formData.append("category", productDetails.category);
    formData.append("description", productDetails.description);
    formData.append("productImage", image);
    formData.append("isPopular", productDetails.isPopular);
    formData.append("isNew", productDetails.isNew);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/product/add",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Product Added Successfully!");
        setProductDetails({
          name: "",
          image: "",
          category: "women",
          new_price: "",
          old_price: "",
          description: "",
          isPopular: false,
          isNew: false,
        });
        setImage(false);
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "Error: " + (error.response?.data?.message || "Something went wrong")
      );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-zinc-700 mb-6 pb-2 border-b">
        Add New Product
      </h2>

      <div className="space-y-6">
        <div className="w-full">
          <p className="mb-2 text-zinc-500 font-medium">Product Title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type here"
            className="w-full border border-zinc-300 rounded-md p-3 focus:outline-none focus:border-red-400 transition-colors"
          />
        </div>

        <div className="flex gap-5 flex-col sm:flex-row">
          <div className="w-full">
            <p className="mb-2 text-zinc-500 font-medium">Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="number"
              name="old_price"
              min="0"
              placeholder="Type here"
              className="w-full border border-zinc-300 rounded-md p-3 focus:outline-none focus:border-red-400"
            />
          </div>
          <div className="w-full">
            <p className="mb-2 text-zinc-500 font-medium">Offer Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="number"
              min="0"
              name="new_price"
              placeholder="Type here"
              className="w-full border border-zinc-300 rounded-md p-3 focus:outline-none focus:border-red-400"
            />
          </div>
        </div>

        <div className="w-full">
          <p className="mb-2 text-zinc-500 font-medium">Product Category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="w-full border border-zinc-300 rounded-md p-3 text-zinc-600 focus:outline-none focus:border-red-400 bg-white"
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-2 text-zinc-500 font-medium">Description</p>
          <textarea
            value={productDetails.description}
            onChange={changeHandler}
            name="description"
            rows="4"
            placeholder="Product description..."
            className="w-full border border-zinc-300 rounded-md p-3 focus:outline-none focus:border-red-400"
          ></textarea>
        </div>

        <div className="w-full">
          <label
            htmlFor="file-input"
            className="cursor-pointer flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-300 border-dashed rounded-lg hover:bg-zinc-50 transition-colors"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="h-28 object-contain"
              />
            ) : (
              <div className="text-center text-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <p>Click to upload image</p>
              </div>
            )}
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>

        <div className="flex gap-8 mt-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isPopular"
              id="isPopular"
              checked={productDetails.isPopular}
              onChange={changeHandler}
              className="w-5 h-5 accent-red-500 cursor-pointer"
            />
            <label htmlFor="isPopular" className="text-zinc-600 cursor-pointer">
              Popular Product
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isNew"
              id="isNew"
              checked={productDetails.isNew}
              onChange={changeHandler}
              className="w-5 h-5 accent-red-500 cursor-pointer"
            />
            <label htmlFor="isNew" className="text-zinc-600 cursor-pointer">
              New Collection
            </label>
          </div>
        </div>
        <button
          onClick={Add_Product}
          className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 active:bg-red-700 transition-all mt-4"
        >
          ADD PRODUCT
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
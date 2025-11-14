import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getPopularProducts = asyncHandler(async (req, res) => {
  const popularProducts = await Product.find({ isPopular: true });
  // console.log(popularProducts);
  
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        popularProducts,
        "Popular products fetched successfully"
      )
    );
});

export const getNewProducts = asyncHandler(async (req, res) => {
  const newProducts = await Product.find({ isNew: true });
  //  console.log(newProducts);
  return res
    .status(200)
    .json(
      new ApiResponse(200, newProducts, "New products fetched successfully")
    );
});

export const getCategoryProducts = asyncHandler(async (req, res) => {
  const categoryProducts = await Product.find({
    category: req.params.category,
  });
  //  console.log(categoryProducts);
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        categoryProducts,
        `${req.params.category} products fetched successfully`
      )
    );
});

export const getIdProduct = asyncHandler(async (req, res) => {
  const idProduct = await Product.findOne({ id: req.params.id });
  if (!idProduct) {
    throw new ApiError(400, "Product not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, idProduct, "Product fetched successfully"));
});

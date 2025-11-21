import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

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

export const getCartItems = asyncHandler(async (req, res) => {
  const productIds = req.body.ids;

  if (!productIds || productIds.length === 0) {
    return res.status(200).json(new ApiResponse(200, [], ""));
  }

  const products = await Product.find({ id: { $in: productIds } });

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Cart products fetched"));
});

export const addProduct = asyncHandler(async (req, res) => {
  const {
    name,
    category,
    new_price,
    old_price,
    isPopular,
    isNew,
    description,
  } = req.body;

  if (!name || !category || !new_price || !old_price) {
    throw new ApiError(400, "Required Fields are empty!");
  }

  const productLocalPath = req.file?.path;

  if (!productLocalPath) {
    throw new ApiError(400, "Product Image is missing!");
  }

  const productImage = await uploadOnCloudinary(productLocalPath);

  if (!productImage) {
    throw new ApiError(400, "Error While Uploading On Cloudinary!");
  }

  const lastProduct = await Product.findOne().sort({ id: -1 });

  let id = 1;
  if (lastProduct) {
    id = lastProduct.id + 1;
  }

  const product = await Product.create({
    id,
    name,
    category,
    new_price,
    old_price,
    isNew,
    isPopular,
    description,
    image: productImage?.url,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, product, "New Product Added Successfully!"));
});

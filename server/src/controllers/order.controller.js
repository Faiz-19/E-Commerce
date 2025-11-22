import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const cartItems = user.cartData;

  let totalamount = 0;
  const productIds = Object.keys(cartItems);

  const products = await Product.find({ id: { $in: productIds } });

  products.forEach((product) => {
    const quantity = cartItems[product.id];
    if (quantity > 0) {
      totalamount += product.new_price * quantity;
    }
  });

  if (totalamount === 0) {
    throw new ApiError(400, "Cart is empty");
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalamount * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { clientSecret: paymentIntent.client_secret },
        "Payment Intent Created"
      )
    );
});

export const verifyOrder = asyncHandler(async (req, res) => {
  const { success } = req.body;
  if (success === "true") {
    const user = await User.findById(req.user._id);
    const cartItems = user.cartData;

    const order = await Order.create({
      userId: req.user._id,
      items: cartItems,
      amount: 0,
      address: {},
      payment: true,
    });

    await User.findByIdAndUpdate(req.user._id, {
      $set: {
        cartData: {},
      },
    });
    res.status(200).json(new ApiResponse(200, {}, "Paid and cart cleared!"));
  } else {
    res.status(200).json(new ApiResponse(200, {}, "Payment Failed"));
  }
});

export const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).sort({ date: -1 });
  res
    .status(200)
    .json(new ApiResponse(200, orders, "User orders fetched successfully"));
});
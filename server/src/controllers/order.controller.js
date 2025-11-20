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

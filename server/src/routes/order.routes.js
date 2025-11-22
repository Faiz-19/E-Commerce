import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createPaymentIntent,
  verifyOrder,
  getUserOrders,
} from "../controllers/order.controller.js";

const router = Router();

router.route("/payment").post(verifyJWT, createPaymentIntent);
router.route("/verify").post(verifyJWT, verifyOrder);
router.route("/myorders").get(verifyJWT, getUserOrders);
export default router;
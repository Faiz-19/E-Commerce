import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createPaymentIntent,
  verifyOrder,
} from "../controllers/order.controller.js";

const router = Router();

router.route("/payment").post(verifyJWT, createPaymentIntent);
router.route("/verify").post(verifyJWT, verifyOrder);

export default router;

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createPaymentIntent } from "../controllers/order.controller.js";

const router = Router();

router.route("/payment").post(verifyJWT,createPaymentIntent);

export default router;

import { Router } from "express";
import { getCartItems, getCategoryProducts, getIdProduct, getNewProducts, getPopularProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/popular").get(getPopularProducts);
router.route("/new").get(getNewProducts);
router.route("/category/:category").get(getCategoryProducts)
router.route("/:id").get(getIdProduct)
router.route("/cart").post(getCartItems)

export default router;

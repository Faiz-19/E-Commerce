import { Router } from "express";
import { getCategoryProducts, getIdProduct, getNewProducts, getPopularProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/popular").get(getPopularProducts);
router.route("/new").get(getNewProducts);
router.route("/category/:category").get(getCategoryProducts)
router.route("/:id").get(getIdProduct)

export default router;

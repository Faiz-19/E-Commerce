import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getCartItems,
  getCategoryProducts,
  getIdProduct,
  getNewProducts,
  getPopularProducts,
  removeProduct,
} from "../controllers/product.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

const router = Router();

router.route("/popular").get(getPopularProducts);
router.route("/new").get(getNewProducts);
router.route("/all").get(verifyJWT, verifyAdmin, getAllProducts);
router
  .route("/add")
  .post(verifyJWT, verifyAdmin, upload.single("productImage"), addProduct);
router.route("/cart").post(getCartItems);
router.route("/category/:category").get(getCategoryProducts);
router
  .route("/:id")
  .get(getIdProduct)
  .delete(verifyJWT, verifyAdmin, removeProduct);

export default router;

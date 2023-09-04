import express from "express";
import { getAllProducts, getSingleProduct } from "../Controllers/ProductController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productId", getSingleProduct);

export default router;
import express from "express";
import { addToCart, getAllCartItems, RemoveFromCart } from "../Controllers/CartController.js";

const router = express.Router();
router.get("/:userId", getAllCartItems);
router.put("/:userId/add", addToCart);
router.put("/:userId/remove", RemoveFromCart);

export default router;
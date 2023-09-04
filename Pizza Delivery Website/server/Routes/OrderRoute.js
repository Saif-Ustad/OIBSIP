import express from "express";
import { getAllOrders, makeOrder } from "../Controllers/OrderController.js";

const router = express.Router();

router.post("/:userId", makeOrder);
router.get("/:userId/all", getAllOrders);

export default router;
import express from "express";
import { addProduct, getAllAdminOrders, removeProduct, updateOrder } from "../Controllers/AdminController.js";

const router = express.Router();

router.get("/", getAllAdminOrders);
router.post("/addproduct", addProduct);
router.delete("/removeproduct", removeProduct);
router.put("/updateorder", updateOrder);

export default router;
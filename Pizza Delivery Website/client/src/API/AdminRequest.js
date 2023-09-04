import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

export const getAllAdminOrders = () => API.get("/admin");
export const updateOrderStatus = (orderId, userId, status) => API.put("/admin/updateorder", {orderId ,userId, status});
// export const addProduct = (FormData) => API.post("/auth/login", FormData);
// export const removeProduct = (FormData) => API.post("/auth/register", FormData);
// export const updateOrder = (FormData) => API.post("/auth/register", FormData);

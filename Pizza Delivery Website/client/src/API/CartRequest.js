import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

export const addToCart = (product, userId) => API.put(`/cart/${userId}/add`, product);
export const removeFromCart = (productId, userId) => API.put(`/cart/${userId}/remove`, productId);
export const getAllCartItems = (userId) => API.get(`/cart/${userId}`);




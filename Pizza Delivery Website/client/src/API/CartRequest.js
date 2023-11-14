import axios from "axios";

const API = axios.create({baseURL: "https://pizza-delivery-website-0lyf.onrender.com"});

export const addToCart = (product, userId) => API.put(`/cart/${userId}/add`, product);
export const removeFromCart = (productId, userId) => API.put(`/cart/${userId}/remove`, productId);
export const getAllCartItems = (userId) => API.get(`/cart/${userId}`);




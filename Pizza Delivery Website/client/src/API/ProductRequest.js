import axios from "axios";

const API = axios.create({baseURL: "https://pizza-delivery-website-0lyf.onrender.com"});

export const getAllProducts = () => API.get("/products");
export const getSingleProduct = (ProductId) => API.get(`/products/${ProductId}`);

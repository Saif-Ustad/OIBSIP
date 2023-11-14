import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

export const getAllProducts = () => API.get("/products");
export const getSingleProduct = (ProductId) => API.get(`/products/${ProductId}`);

import axios from "axios";

const API = axios.create({baseURL: "https://pizza-delivery-website-0lyf.onrender.com"});

export const makeOrder = (orderDetails, userId) => API.post(`/order/${userId}`, orderDetails);
export const getAllOrders = (userId) => API.get(`/order/${userId}/all`);




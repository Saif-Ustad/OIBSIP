import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

export const makeOrder = (orderDetails, userId) => API.post(`/order/${userId}`, orderDetails);
export const getAllOrders = (userId) => API.get(`/order/${userId}/all`);




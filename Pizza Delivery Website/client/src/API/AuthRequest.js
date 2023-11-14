import axios from "axios";

const API = axios.create({baseURL: "https://pizza-delivery-website-0lyf.onrender.com"});

export const login = (FormData) => API.post("/auth/login", FormData);
export const register = (FormData) => API.post("/auth/register", FormData);

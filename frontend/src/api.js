import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "https://student-app-menu.onrender.com/api";

const API = axios.create({ baseURL });

// Attach token automatically
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = token;
    }
    return req;
});

export default API;
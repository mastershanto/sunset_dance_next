import axios from "axios";
import { localStorageUtil } from "./localStorage";

export const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

// Request Interceptor: Attach Auth Bearer Token
axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorageUtil.get<string>("auth_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 Unauthorized / Token Expiration
axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorageUtil.remove("auth_token");
      localStorageUtil.remove("auth_user");
      if (typeof window !== "undefined" && !window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

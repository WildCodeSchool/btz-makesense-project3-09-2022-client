import axios from "axios";

const token =
  (typeof window !== "undefined" && localStorage.getItem("token")) || "token";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000/api/v1",
  withCredentials: true,
  headers: {
    Authorization: token,
  },
});

export default axiosInstance;

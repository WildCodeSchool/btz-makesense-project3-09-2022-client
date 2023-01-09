import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000/api/v1",
  withCredentials: true,
});

export default axiosInstance;

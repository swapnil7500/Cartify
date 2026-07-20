import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cartify-backend-skk6.onrender.com/api",
});

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("cartifyUser"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default axiosInstance;
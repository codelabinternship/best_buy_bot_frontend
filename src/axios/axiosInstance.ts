import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-backend.com", // replace with your backend
});

axiosInstance.interceptors.request.use((config) => {
  const telegramId = localStorage.getItem("telegram_id");
  if (telegramId && config.headers) {
    config.headers["X-Telegram-ID"] = telegramId;
  }
  return config;
});

export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

axiosInstance.interceptors.request.use((config) => {
  const telegramId = localStorage.getItem("telegram_id");
  if (telegramId && config.headers) {
    config.headers["X-Telegram-ID"] = telegramId;
  }
  return config;
});

export default axiosInstance;

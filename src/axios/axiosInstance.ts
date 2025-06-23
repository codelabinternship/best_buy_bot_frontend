import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-backend-domain.com", // Change to your API base
});

axiosInstance.interceptors.request.use((config) => {
  const telegram_id = localStorage.getItem("telegram_id");
  if (telegram_id) {
    config.headers["X-Telegram-ID"] = telegram_id;
  }
  return config;
});

export default axiosInstance;

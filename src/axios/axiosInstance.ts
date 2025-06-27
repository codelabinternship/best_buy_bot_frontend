import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.137.127:8000",
});

// axiosInstance.interceptors.request.use((config) => {
//   const telegramId = localStorage.getItem("telegram_id");
//   if (telegramId && config.headers) {
//     config.headers["X-Telegram-ID"] = telegramId;
//   }
//   return config;
// });

export default axiosInstance;

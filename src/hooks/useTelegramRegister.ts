import { useEffect, useState } from "react";
import { getTelegramUser } from "../lib/telegram";
import axiosInstance from "@/axios/axiosInstance";

type TelegramUser = {
  telegram_id: number;
  username: string;
  first_name: string;
  last_name: string;
};

export const useTelegramRegister = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const tgUser = getTelegramUser();
    if (!tgUser) return;

    axiosInstance
      .post("/api/users/telegram-auth/", tgUser)
      .then(() => {
        localStorage.setItem("telegram_id", tgUser.telegram_id.toString());
        setUser(tgUser);
      })
      .catch((err) => {
        console.error("Telegram login failed:", err);
      });
  }, []);

  return user;
};

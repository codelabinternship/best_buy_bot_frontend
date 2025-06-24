import { useEffect, useState } from "react";
import axios from "../axios/axiosInstance";
import { getTelegramUser, TelegramUser } from "../lib/telegram";

interface UseTelegramRegisterResult {
  user: TelegramUser | null;
  fallback: boolean;
}

export const useTelegramRegister = (): UseTelegramRegisterResult => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [fallback, setFallback] = useState<boolean>(false);

  useEffect(() => {
    const tgUser = getTelegramUser();
    if (!tgUser) {
      setFallback(true);
      return;
    }

    axios
      .post("/api/users/telegram-auth/", tgUser)
      .then(() => {
        localStorage.setItem("telegram_id", tgUser.telegram_id.toString());
        setUser(tgUser);
      })
      .catch((error) => {
        console.error("Telegram login failed", error);
      });
  }, []);

  return { user, fallback };
};

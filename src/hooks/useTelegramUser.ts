import { useEffect, useState } from "react";
import { getTelegramUser, TelegramUser } from "../lib/telegram";

export const useTelegramUser = (): {
  user: TelegramUser | null;
  fallback: boolean;
} => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [fallback, setFallback] = useState<boolean>(false);

  useEffect(() => {
    const tgUser = getTelegramUser();
    console.log(tgUser);

    if (!tgUser) {
      setFallback(true);
    } else {
      setUser(tgUser);
    }
  }, []);

  return { user, fallback };
};

import { useEffect, useState } from "react";
import { getTelegramUser, TelegramUser } from "../lib/telegram";
import axiosInstance from "../axios/axiosInstance";

interface ProfileData {
  balance: number;
  joined_at: string;
  // boshqa kerakli maydonlar
}

export const useTelegramProfile = (): {
  user: TelegramUser | null;
  profile: ProfileData | null;
  fallback: boolean;
  loading: boolean;
  error: string | null;
} => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [fallback, setFallback] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tgUser = getTelegramUser();

    if (!tgUser) {
      setFallback(true);
      return;
    }
    setUser(tgUser);
    localStorage.setItem("telegram_id", tgUser.telegram_id.toString());
    setLoading(true);
    axiosInstance
      .post(`/api/users/telegram-auth/`, user)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.error("Profile fetch error:", err);
        setError("Profilni yuklab bo‘lmadi");
      })
      .finally(() => setLoading(false));
  }, []);

  return { user, profile, fallback, loading, error };
};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initDataUnsafe?: {
          user?: {
            id: number;
            username?: string;
            first_name?: string;
            last_name?: string;
          };
        };
      };
    };
  }
}

export interface TelegramUser {
  telegram_id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
}

export function getTelegramUser(): TelegramUser | null {
  const user = window?.Telegram?.WebApp?.initDataUnsafe?.user || {
    id: 123456,
    username: "testuser",
    first_name: "Test",
    last_name: "User",
  };

  if (!user) {
    console.warn("Not running inside Telegram WebApp or no user found.");
    return null;
  }

  return {
    telegram_id: user.id,
    username: user.username || "",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
  };
}

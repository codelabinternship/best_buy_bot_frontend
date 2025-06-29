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
            photo_url?: string;
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
  photo_url?: string;
}

export function getTelegramUser(): TelegramUser | null {
  const user = window?.Telegram?.WebApp?.initDataUnsafe?.user || {
    id: 123456,
    username: "testuser",
    first_name: "Test",
    last_name: "User",
    photo_url:
      "https://repository-images.githubusercontent.com/390539692/114987c4-c7de-43ae-bc4e-40b244b87736",
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
    photo_url: user.photo_url || "",
  };
}

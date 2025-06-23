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

export function getTelegramUser() {
  const user = window?.Telegram?.WebApp?.initDataUnsafe?.user;
  if (!user) return null;

  return {
    telegram_id: user.id,
    username: user.username || "",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
  };
}

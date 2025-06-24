export interface TelegramUser {
  telegram_id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
}

export function getTelegramUser(): TelegramUser | null {
  const user = (window as any)?.Telegram?.WebApp?.initDataUnsafe?.user;

  if (!user) {
    console.warn(
      "Telegram user not found. Make sure this is opened via Telegram WebApp."
    );
    return null;
  }

  return {
    telegram_id: user.id,
    username: user.username || "",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
  };
}

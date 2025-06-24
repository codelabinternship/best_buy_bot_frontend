"use client";
import { useTelegramUser } from "../hooks/useTelegramUser";

const MarketPage: React.FC = () => {
  const { user, fallback } = useTelegramUser();

  if (fallback) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">⚠️ Please open from Telegram</h2>
        <p>This app must be opened from a Telegram bot to work.</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-semibold">🛒 Market</h1>
      {user ? (
        <p>
          Hello {user.first_name} {user.last_name} (@{user.username})
        </p>
      ) : (
        <p>Detecting Telegram user...</p>
      )}
    </div>
  );
};

export default MarketPage;

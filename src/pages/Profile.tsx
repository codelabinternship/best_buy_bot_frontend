"use client";
import { useEffect, useState } from "react";

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const telegram = (window as any)?.Telegram;
    const initDataUnsafe = telegram?.WebApp?.initDataUnsafe;

    alert(`Telegram object: ${telegram}`);
    console.log("Telegram WebApp:", telegram?.WebApp);
    console.log("initDataUnsafe:", initDataUnsafe);
    alert(user ? `Hello ${user.first_name}` : "❌ Not running in Telegram");

    if (!initDataUnsafe || !initDataUnsafe.user) {
      setFallback(true);
      console.warn("❌ User not found — WebApp not opened via Telegram");
    } else {
      setUser(initDataUnsafe.user);
      console.log("✅ Telegram user found:", initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">🛒 Telegram Market</h1>
      {fallback ? (
        <div className="text-red-500 mt-4">
          <p>❌ Telegram foydalanuvchisi topilmadi.</p>
          <p>Iltimos, Telegram ilovasi orqali oching.</p>
        </div>
      ) : user ? (
        <div className="text-green-600 mt-4">
          <p>
            ✅ Xush kelibsiz, {user.first_name} @{user.username}
          </p>
          <p>Telegram ID: {user.id}</p>
        </div>
      ) : (
        <p>Foydalanuvchini aniqlamoqda...</p>
      )}
    </div>
  );
};

export default Profile;

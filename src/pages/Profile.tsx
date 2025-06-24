import { useTelegramRegister } from "../hooks/useTelegramRegister";

const Profile = () => {
  // const { user, fallback } = useTelegramRegister();
  const user = (window as any)?.Telegram?.WebApp?.initDataUnsafe?.user;
  // if (fallback) {
  //   return (
  //     <div className="text-center mt-10">
  //       <h2 className="text-xl font-bold">⚠️ Please open from Telegram</h2>
  //       <p>This app must be opened from your Telegram WebApp.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-semibold">🛍️ Market</h1>
      {user ? (
        <p>
          Logged in as {user.first_name} {user.last_name} (@{user.username})
        </p>
      ) : (
        <p>Logging in with Telegram...</p>
      )}
    </div>
  );
};

export default Profile;

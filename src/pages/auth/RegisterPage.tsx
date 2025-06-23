import { useState } from "react";
import { useRegister } from "../../hooks/auth/useAuth";

export const RegisterPage = () => {
  const { mutate, isLoading, error } = useRegister();
  const [form, setForm] = useState({
    user_name: "",
    phone_number: "111111",
    email: "",
    password: "",
    market_name: "ssssss",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={form.user_name}
        onChange={(e) => setForm({ ...form, user_name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit" disabled={isLoading}>
        Register
      </button>
      {error && <p style={{ color: "red" }}>Xatolik: {error.message}</p>}
    </form>
  );
};

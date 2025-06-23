import { useState } from "react";
import { useLogin } from "../../hooks/auth/useAuth";

export const LoginPage = () => {
  const { mutate, isLoading, error } = useLogin();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Login
      </button>
      {error && <p style={{ color: "red" }}>Xatolik: {error.message}</p>}
    </form>
  );
};

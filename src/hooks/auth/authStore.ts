import { create } from "zustand";
import Cookies from "js-cookie";
import { User } from "./types";

interface AuthState {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get("token") || null,
  user: null,
  setToken: (token) => {
    Cookies.set("token", token, { expires: 7 });
    set({ token });
  },
  setUser: (user) => set({ user }),
  logout: () => {
    Cookies.remove("token");
    set({ token: null, user: null });
  },
}));

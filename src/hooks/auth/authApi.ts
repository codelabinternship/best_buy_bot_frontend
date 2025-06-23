import axios from "../../lib/axios";
import { AuthResponse, LoginData, RegisterData, User } from "./types";

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const res = await axios.post<AuthResponse>("/api/auth/login/", data);
  return res.data;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const res = await axios.post<AuthResponse>("/api/auth/register/", data);
  return res.data;
};

export const getProfile = async (token: string): Promise<User> => {
  const res = await axios.get<User>("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

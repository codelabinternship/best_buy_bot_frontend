import { useMutation, useQuery, useQueryClient } from "react-query";
import { login, register, getProfile } from "./authApi";
import { useAuthStore } from "./authStore";
import { LoginData, RegisterData, User, AuthResponse } from "./types";

export const useLogin = () => {
  const { setToken, setUser } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, LoginData>(login, {
    onSuccess: (data) => {
      setToken(data.token);
      setUser(data.user);
      queryClient.invalidateQueries("me");
    },
  });
};

export const useRegister = () => {
  const { setToken, setUser } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, RegisterData>(register, {
    onSuccess: (data) => {
      setToken(data.token);
      setUser(data.user);
      queryClient.invalidateQueries("me");
    },
  });
};

export const useMe = () => {
  const { token } = useAuthStore();

  return useQuery<User, Error>(
    ["me", token],
    () => getProfile(token as string),
    {
      enabled: Boolean(token),
    }
  );
};

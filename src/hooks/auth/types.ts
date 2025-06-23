export interface User {
  id: string;
  name: string;
  email: string;
  // boshqa maydonlar bo‘lsa shu yerga qo‘shing
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  user_name: string;
  phone_number: string;
  email: string;
  password: string;
  market_name: string;
}

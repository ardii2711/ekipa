import { User } from "./user";

export interface UserLoginData {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  role: "user" | "admin" | "pimpinan";
  status: "pending" | "active" | "inactive";
}

export interface AuthResponse {
  token: string;
  user: UserLoginData;
  message?: string;
}

export interface RegisterResponse {
  message: string;
  user: User;
}

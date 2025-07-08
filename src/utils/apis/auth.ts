import { AuthResponse, RegisterResponse } from "../types/auth";
import axiosInstance from "./axios-instance";

interface LoginPayload {
  identifier: string;
  password: string;
}

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  fullName: string;
  nip: string;
}

export const loginUser = async (payload: LoginPayload): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/auth/login", payload);
  return response.data;
};

export const registerUser = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  const response = await axiosInstance.post<RegisterResponse>("/auth/register", payload);
  return response.data;
};

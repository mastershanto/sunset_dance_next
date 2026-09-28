import { axiosPublic } from "@/lib/axiosPublic";
import { axiosSecure } from "@/lib/axiosSecure";
import { User } from "@/provider/AuthProvider";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  message?: string;
}

export const authApi = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const res = await axiosPublic.post<AuthResponse>("/auth/login", payload);
    return res.data;
  },

  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const res = await axiosPublic.post<AuthResponse>("/auth/register", payload);
    return res.data;
  },

  getProfile: async (): Promise<User> => {
    const res = await axiosSecure.get<User>("/auth/profile");
    return res.data;
  },

  logout: async (): Promise<void> => {
    await axiosSecure.post("/auth/logout");
  },
};

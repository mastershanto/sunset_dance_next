"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { localStorageUtil } from "@/lib/localStorage";

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorageUtil.get<string>("auth_token");
    const savedUser = localStorageUtil.get<User>("auth_user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }
    setIsLoading(false);
  }, []);

  const login = (newToken: string, newUser: User) => {
    localStorageUtil.set("auth_token", newToken);
    localStorageUtil.set("auth_user", newUser);
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorageUtil.remove("auth_token");
    localStorageUtil.remove("auth_user");
    setToken(null);
    setUser(null);
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}

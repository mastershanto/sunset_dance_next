"use client";

import { useAuthContext } from "@/provider/AuthProvider";

export function useAuth() {
  return useAuthContext();
}

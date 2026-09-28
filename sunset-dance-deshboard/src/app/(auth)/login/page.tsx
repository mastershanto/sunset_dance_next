"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/lib/toast";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate/perform login auth flow
      await new Promise((r) => setTimeout(r, 600));

      const mockToken = "sample_jwt_token_" + Date.now();
      const mockUser = {
        id: "1",
        name: "Admin User",
        email: email || "admin@sunsetdance.com",
        role: "admin",
      };

      login(mockToken, mockUser);
      toast.success("Welcome back! Redirecting to dashboard...");
      router.push("/dashboard");
    } catch {
      toast.error("Failed to sign in. Please verify your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-600 text-white shadow-lg shadow-orange-500/30">
          <Sparkles className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Welcome to Sunset Dance
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Sign in to manage classes, students, and studio operations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          required
          placeholder="admin@sunsetdance.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="w-4 h-4" />}
        />

        <Input
          label="Password"
          type="password"
          required
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock className="w-4 h-4" />}
        />

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-zinc-600 dark:text-zinc-400">
            <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
            Remember me
          </label>
          <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
            Forgot password?
          </a>
        </div>

        <Button type="submit" isLoading={isLoading} className="w-full">
          Sign In to Dashboard
        </Button>
      </form>

      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 text-center text-xs text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-orange-600 hover:underline">
          Register now
        </Link>
      </div>
    </div>
  );
}

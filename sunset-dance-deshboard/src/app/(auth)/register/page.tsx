"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/lib/toast";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 600));

      const mockToken = "sample_jwt_token_" + Date.now();
      const mockUser = {
        id: "2",
        name: name || "New Admin",
        email: email,
        role: "admin",
      };

      login(mockToken, mockUser);
      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch {
      toast.error("Registration failed. Please try again.");
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
          Create Account
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Get started with your Sunset Dance admin workspace
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          required
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<User className="w-4 h-4" />}
        />

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

        <Button type="submit" isLoading={isLoading} className="w-full">
          Create Workspace Account
        </Button>
      </form>

      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 text-center text-xs text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-orange-600 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}

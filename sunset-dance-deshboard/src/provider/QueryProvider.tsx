"use client";

import React, { createContext, useContext, useState } from "react";

interface QueryCacheContextType {
  cache: Map<string, unknown>;
  setQueryData: (key: string, data: unknown) => void;
  getQueryData: <T>(key: string) => T | undefined;
}

const QueryCacheContext = createContext<QueryCacheContextType | undefined>(undefined);

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [cache] = useState<Map<string, unknown>>(() => new Map());

  const setQueryData = (key: string, data: unknown) => {
    cache.set(key, data);
  };

  const getQueryData = <T,>(key: string): T | undefined => {
    return cache.get(key) as T | undefined;
  };

  return (
    <QueryCacheContext.Provider value={{ cache, setQueryData, getQueryData }}>
      {children}
    </QueryCacheContext.Provider>
  );
}

export function useQueryCache() {
  const context = useContext(QueryCacheContext);
  if (!context) {
    throw new Error("useQueryCache must be used within a QueryProvider");
  }
  return context;
}

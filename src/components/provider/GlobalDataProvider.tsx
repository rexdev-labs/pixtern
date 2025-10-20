"use client";

import { createContext, type ReactNode, use } from "react";

import type { Global } from "@/types/api/global";

const GlobalDataContext = createContext<Global | null>(null);

export function GlobalDataProvider({
  value,
  children,
}: Readonly<{
  value: Global;
  children: ReactNode;
}>) {
  return (
    <GlobalDataContext value={value}>{children}</GlobalDataContext>
  );
}

export function useGlobalData() {
  return use(GlobalDataContext);
}

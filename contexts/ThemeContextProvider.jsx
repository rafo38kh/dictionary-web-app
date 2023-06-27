"use client";

import { ThemeProvider } from "next-themes";

export function ThemeContextProvider({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

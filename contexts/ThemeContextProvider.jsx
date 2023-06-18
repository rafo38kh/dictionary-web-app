"use client";
// import { createContext, useState, useContext, useMemo } from "react";

// const initialTheme = () => {
//   const dark = window.matchMedia("(prefers-color-scheme: dark)");
//   const light = window.matchMedia("(prefers-color-scheme: light)");

//   if (dark.matches) return "dark";
//   if (light.matches) return "light";
// };

// const ThemeContext = createContext(null);

// export function ThemeContextProvider({ children }) {
//   const [theme, setTheme] = useState(() => initialTheme());

//   const value = useMemo(() => ({ theme, setTheme }), [theme]);

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// }

// export const useThemeContext = () => useContext(FontContext);

import { ThemeProvider } from "next-themes";

export function ThemeContextProvider({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

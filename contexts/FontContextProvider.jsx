"use client";
import { createContext, useState, useMemo, useContext } from "react";

const FontContext = createContext({
  currentFont: "Sans Serif",
  setCurrentFont: () => null,
});

export function FontContextProvider({ children }) {
  const fonts = ["Sans Serif", "Serif", "Mono"];

  const [currentFont, setCurrentFont] = useState(fonts[0]);

  const currentFontClassName =
    currentFont === "Sans Serif"
      ? "font-sans"
      : currentFont === "Serif"
      ? "font-serif"
      : "font-mono";

  const value = useMemo(
    () => ({ fonts, setCurrentFont, currentFont, currentFontClassName }),
    [currentFont]
  );

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
}

export const useFontContext = () => useContext(FontContext);

"use client";
import Image from "next/image";
import { useState } from "react";

import { useFontContext } from "@/contexts/FontContextProvider";

import iconArrow from "../public/icon-arrow-down.svg";

export default function Fonts() {
  const { fonts, currentFont, setCurrentFont } = useFontContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-3 text-sm"
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        {currentFont}{" "}
        <Image src={iconArrow} width={20} height={20} alt="arrow-down" />
      </button>

      {isMenuOpen && (
        <ul className="absolute bg-light dark:bg-darkTwo z-50 p-4 w-28 -left-10 top-8 dark:shadow-dark-shadow shadow-light-shadow shadow rounded-lg text-sm">
          {fonts.map((el) => (
            <li
              key={el}
              className={
                el === "Sans Serif"
                  ? "font-sans"
                  : el === "Serif"
                  ? "font-serif"
                  : "font-mono"
              }
              onClick={() => setCurrentFont(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

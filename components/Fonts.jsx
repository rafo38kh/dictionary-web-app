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
        className="flex items-center gap-3 text-sm md:text-lg"
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        {currentFont}{" "}
        <Image src={iconArrow} width={20} height={20} alt="arrow-down" />
      </button>

      {isMenuOpen && (
        <ul className="absolute bg-light dark:bg-darkTwo z-50 md:p-6 p-4 w-28 -left-10 top-8 dark:shadow-dark-shadow shadow-light-shadow shadow rounded-lg text-sm md:text-lg md:w-44 ">
          {fonts.map((el) => (
            <li
              key={el}
              className={`md:mb-4 mb-1 last:m-0 hover:text-purple cursor-pointer ${
                el === "Sans Serif"
                  ? "font-sans"
                  : el === "Serif"
                  ? "font-serif"
                  : "font-mono"
              }`}
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

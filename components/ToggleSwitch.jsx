"use client";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

export default function ToggleSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    const isDark = systemTheme === "dark" ? true : false;

    if (isDark) {
      setTheme("light");
      setIsChecked(false);
    } else {
      setTheme("dark");
      setIsChecked(true);
    }
  }, []);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isChecked}
        onChange={() => {
          isChecked ? setTheme("light") : setTheme("dark");
          setIsChecked((prevState) => !prevState);
        }}
      />
      <div className="w-11 h-6 bg-lightFour peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-light after:border-light after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            className={theme === "dark" ? "stroke-purple" : "stroke-lightFour"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </span>
    </label>
  );
}

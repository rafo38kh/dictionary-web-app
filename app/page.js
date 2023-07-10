"use client";

import Navigation from "@/components/Navigation";
import SearchInput from "@/components/SearchInput";
import WordDetails from "@/components/WordDetails";
import { useFontContext } from "@/contexts/FontContextProvider";

export default function Home() {
  const { currentFontClassName } = useFontContext();
  return (
    <div
      className={`${currentFontClassName} text-darkThree selection:bg-purple selection:text-lightTwo dark:text-light w-[90%] max-w-3xl pt-6 px-2 mx-auto `}
    >
      <Navigation />
      <SearchInput />
      <WordDetails />
    </div>
  );
}

import { useState } from "react";
import Image from "next/image";

import { useWordContext } from "@/contexts/WordContextProvider";

import SearchIcon from "../public/icon-search.svg";

export default function SearchInput() {
  const { handleSubmit } = useWordContext();
  const [input, setInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInput = (e) => {
    !e.target.value || e.target.value.trim() === ""
      ? setIsEmpty(true)
      : setIsEmpty(false);

    setInput(e.target.value);
  };

  return (
    <>
      <form
        action="#"
        onSubmit={(e) => handleSubmit(e, input)}
        className="relative my-4 "
      >
        <input
          type="search"
          value={input}
          className="w-full py-2 px-4 rounded-2xl bg-lightTwo dark:bg-darkTwo "
          onChange={(e) => handleInput(e)}
        />
        <Image
          src={SearchIcon}
          width={20}
          height={20}
          className="absolute top-1/4 left-[90%]"
        />
      </form>
      {isEmpty && <span>Whoops, can’t be empty…</span>}
    </>
  );
}

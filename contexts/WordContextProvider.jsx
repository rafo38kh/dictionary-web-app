"use client";
import { createContext, useState, useMemo, useContext } from "react";
import useSWR from "swr";
import axios from "axios";

const WordContext = createContext({
  word: "Hello",
  setWord: () => null,
});

const fetcher = (url) => axios.get(url).then((res) => res.data[0]);

export function WordContextProvider({ children }) {
  const [word, setWord] = useState("hello");

  const handleSubmit = (e, word) => {
    e.preventDefault();

    !word || word === "" ? setWord("hello") : setWord(word);
  };

  const {
    data,
    error,
    isLoading: loading,
  } = useSWR(
    () => "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
    fetcher
  );

  const value = useMemo(() => ({ handleSubmit, data, error, loading }), [data]);

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
}

export const useWordContext = () => useContext(WordContext);

"use client";
import { createContext, useState, useMemo, useContext } from "react";
import useSWR from "swr";
import axios from "axios";

const WordContext = createContext({
  word: "Hello",
  setWord: () => null,
});

const fetcher = async (url) => {
  const res = await axios.get(url);

  if (res.status === 404) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.data[0];
};

export default fetcher;

export function WordContextProvider({ children }) {
  const [word, setWord] = useState("hello");

  const handleSubmit = (e, word) => {
    e.preventDefault();

    !word || word === "" ? setWord("hello") : setWord(word);
  };

  const {
    data,
    isLoading,
    error: isError,
  } = useSWR(
    () => "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
    fetcher
  );

  const value = useMemo(
    () => ({ handleSubmit, data, isError, isLoading, setWord }),
    [data, isError]
  );

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
}

export const useWordContext = () => useContext(WordContext);

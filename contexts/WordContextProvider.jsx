"use client";
import { createContext, useState, useMemo, useContext, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

const WordContext = createContext({
  word: "Hello",
  setWord: () => null,
});

const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data[0];
  });

export function WordContextProvider({ children }) {
  const [word, setWord] = useState("hello");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e, word) => {
    e.preventDefault();

    !word || word === "" ? setWord("hello") : setWord(word);
  };

  const { data, isLoading } = useSWR(
    () => "https://api.dictionaryapi.dev/api/v2/entries/en/" + word,
    fetcher
  );

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsError(true);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timer);
  //     setIsError(false);
  //   };
  // }, []);

  useEffect(() => {
    let timer;

    const handleLoadingTimeout = () => {
      setIsError(true);
    };

    const handleStartLoadingTimer = () => {
      timer = setTimeout(handleLoadingTimeout, 5000);
    };

    const handleClearLoadingTimer = () => {
      clearTimeout(timer);
      setIsError(false);
    };

    if (isLoading) {
      handleStartLoadingTimer();
    } else {
      handleClearLoadingTimer();
    }

    return handleClearLoadingTimer;
  }, [word, isLoading]);

  const value = useMemo(
    () => ({ handleSubmit, data, isError, isLoading }),
    [data, isError]
  );

  return <WordContext.Provider value={value}>{children}</WordContext.Provider>;
}

export const useWordContext = () => useContext(WordContext);

import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data[0]);

export default function useWord(word) {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWR(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    fetcher
  );

  return { data, error, loading };
}

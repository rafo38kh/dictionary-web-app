import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function useWord(word = "hello") {
  const {
    data,
    error,
    isLoading: loading,
  } = useSWR(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`, fetcher);

  return { data, error, loading };
}

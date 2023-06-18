// "use client";
// import useWord from "../hooks/useWord";

import useSWR from "swr";
import axios from "axios";

// const fetcher = (url) => axios.get(url).then((res) => res.data);
export default async function WordDetails() {
  // const { data, loading, error } = useWord("hello");

  // const {
  //   data,
  //   error,
  //   isLoading: loading,
  // } = useSWR(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`, fetcher);

  // console.log(data);

  // if (loading) return <div>Loading</div>;
  // if (error) return <div>Error</div>;

  return (
    <div>
      <div>
        <span>{data.word}</span>
        <span></span>
      </div>
    </div>
  );
}

import { useState } from "react";
import { whatPartOfSpeech } from "../utils/index";
import { useWordContext } from "@/contexts/WordContextProvider";
import AudioBtn from "./AudioBtn";
import List from "./List";
import WordError from "./WordError";

export default function WordDetails() {
  const { data, isLoading, isError, setWord } = useWordContext();
  const [isReadMore, setIsReadMore] = useState(3);

  const noun = whatPartOfSpeech(data, "noun");
  const verb = whatPartOfSpeech(data, "verb");
  const synonyms = data?.meanings?.map((word) => word?.synonyms)?.flat();

  const handleReadMoreClick = () =>
    isReadMore === synonyms?.length
      ? setIsReadMore(3)
      : setIsReadMore(synonyms?.length);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <WordError />;

  return (
    <div>
      <div className="flex justify-between mt-7">
        <div className="flex flex-col gap-2">
          <span className="text-3xl md:text-6xl font-bold">{data?.word}</span>
          <span className="text-lg md:text-2xl text-purple">
            {data?.phonetics[0].text}
          </span>
        </div>
        <AudioBtn />
      </div>
      <div className="flex justify-between items-center gap-4 my-9">
        <span className="font-bold text-lg md:text-2xl">noun</span>
        <span className="h-px w-full inline-block bg-lightThree" />
      </div>
      <div>
        <List>
          {noun?.definitions?.map((def) => (
            <li
              key={def.definition}
              className="pl-6 ml-4 list-disc marker:text-purple mb-3 text-sm md:text-xl"
            >
              {def.definition}
            </li>
          ))}
        </List>

        <div className="flex flwx-col gap-2 mt-4">
          <span className="text-lightFour text-base md:text-xl">synonyms</span>
          <ul className="text-purple w-full">
            {
              <li className="flex flex-wrap gap-x-2 text-base md:text-xl">
                {synonyms?.slice(0, isReadMore).map((el, i) => (
                  <button
                    className="hover:text-textHover"
                    onClick={() => setWord(el)}
                  >
                    <span key={el}>
                      {el}
                      {i === synonyms.length - 1 ? "." : ","}
                    </span>
                  </button>
                ))}
                <button
                  type="button"
                  className="text-red"
                  onClick={handleReadMoreClick}
                >
                  {isReadMore > 3 ? "Collapse" : "Read more"}
                </button>
              </li>
            }
          </ul>
        </div>
        <div className="flex justify-between items-center gap-4 my-9">
          <span className="font-bold text-lg md:text-2xl">verb</span>
          <span className="h-px w-full inline-block bg-lightThree" />
        </div>
        <div>
          <List>
            {verb?.definitions?.map((def) => (
              <li
                key={def.definition}
                className="pl-6 ml-4 list-disc marker:text-purple mb-3 text-sm md:text-xl"
              >
                {def.definition}
              </li>
            ))}
          </List>
        </div>
        <span className="h-px w-full inline-block bg-lightThree mb-6" />
        <div className="flex flex-col mb-8">
          <span className="text-lightFour text-base md:text-xl mb-2 underline">
            Source
          </span>
          <a
            className="underline"
            href={`https://en.wiktionary.org/wiki/${data?.word}`}
          >
            https://en.wiktionary.org/wiki/{data?.word}
          </a>
        </div>
      </div>
    </div>
  );
}

import { whatPartOfSpeech } from "../utils/index";
import { useWordContext } from "@/contexts/WordContextProvider";
import AudioBtn from "./AudioBtn";

export default function WordDetails() {
  const { data, loading, error } = useWordContext();

  const noun = whatPartOfSpeech(data, "noun");
  const verb = whatPartOfSpeech(data, "verb");

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  console.log(data);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold">{data?.word}</span>
          <span className="text-base text-purple">
            {data?.phonetics[0].text}
          </span>
        </div>
        <AudioBtn />
      </div>
      <div className="flex justify-between items-center gap-4 my-6">
        <span className="font-bold">noun</span>
        <span className="h-px w-full inline-block bg-lightThree" />
      </div>
      <div>
        <span className="text-lightFour">Meaning</span>
        <ul className="pl-4">
          {noun?.definitions?.map((def) => (
            <li className="list-disc " key={def.definition}>
              {def.definition}
            </li>
          ))}
        </ul>
        <div className="flex flwx-col gap-2">
          <span className="text-lightFour">synonyms</span>
          <ul className="text-purple">
            {noun?.synonyms?.map((synonym) => (
              <li key={synonym}>{synonym}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center gap-4 my-6">
          <span className="font-bold">verb</span>
          <span className="h-px w-full inline-block bg-lightThree" />
        </div>
        <div>
          <span className="text-lightFour">Meaning</span>
          <ul>
            {verb?.definitions?.map((def) => (
              <li key={def.definition}>{def.definition}</li>
            ))}
          </ul>
        </div>
        <span className="h-px w-full inline-block bg-lightThree" />
      </div>
    </div>
  );
}

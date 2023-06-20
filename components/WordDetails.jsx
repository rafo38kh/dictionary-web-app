import { list } from "postcss";
import useWord from "../hooks/useWord";
import { whatPartOfSpeech } from "../utils/index";
export default function WordDetails() {
  const { data, loading, error } = useWord("table");

  const noun = whatPartOfSpeech(data, "noun");
  const verb = whatPartOfSpeech(data, "verb");

  console.log(noun, verb);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <div>
        <span>{data.word}</span>
        <span>{data.phonetics[0].text}</span>
      </div>
      <div>
        <span>noun</span>
        <span className="h-px w-full inline-block bg-lightThree" />
      </div>
      <div>
        <span>Meaning</span>
        <ul>
          {noun?.definitions?.map((def) => (
            <li>{def.definition}</li>
          ))}
        </ul>
        <div>
          <span>synonyms</span>
          <ul>
            {noun?.synonyms?.map((synonym) => (
              <li>{synonym}</li>
            ))}
          </ul>
        </div>
        <div>
          <span>verb</span>
          <span className="h-px w-full inline-block bg-lightThree" />
        </div>
        <div>
          <span>Meaning</span>
          <ul>
            {verb?.definitions?.map((def) => (
              <li>{def.definition}</li>
            ))}
          </ul>
        </div>
        <span className="h-px w-full inline-block bg-lightThree" />
      </div>
    </div>
  );
}

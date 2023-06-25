import Image from "next/image";
import useSound from "use-sound";
import { useWordContext } from "@/contexts/WordContextProvider";
import audioBtn from "../public/icon-play.svg";

export default function AudioBtn() {
  const { data } = useWordContext();
  const audio = data.phonetics.filter((el) => el.audio)?.at(0).audio;
  console.log(audio);

  const [play] = useSound(audio);

  return (
    <button onClick={play}>
      <Image src={audioBtn} height="50" width="50" alt="audio" />
    </button>
  );
}

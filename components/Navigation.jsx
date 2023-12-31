import Image from "next/image";

import ToggleSwitch from "../components/ToggleSwitch";
import Fonts from "@/components/Fonts";

import bookIcon from "../public/logo.svg";

export default function Navigation() {
  return (
    <div className="flex justify-between mb-6">
      <Image src={bookIcon} width={30} height={30} alt="book" />
      <div className="flex items-center  gap-4">
        <Fonts />
        <span className="w-[1px] h-[70%] bg-lightThree" />
        <ToggleSwitch />
      </div>
    </div>
  );
}

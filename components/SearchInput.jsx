import Image from "next/image";

import SearchIcon from "../public/icon-search.svg";

export default function SearchInput() {
  return (
    <form action="#" className="relative">
      <input type="search" className="w-full" />
      <Image
        src={SearchIcon}
        width={10}
        height={10}
        className="absolute top-0 right-0"
      />
    </form>
  );
}

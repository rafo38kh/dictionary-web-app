export default function List({ children }) {
  return (
    <>
      <span className="text-lightFour text-base md:text-xl">Meaning</span>
      <ul className=" mt-4 mb-6">{children}</ul>
    </>
  );
}

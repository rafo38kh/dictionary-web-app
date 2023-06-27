export default function List({ children }) {
  return (
    <>
      <span className="text-lightFour">Meaning</span>
      <ul className=" mt-4 mb-6">{children}</ul>
    </>
  );
}

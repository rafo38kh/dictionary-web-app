export default function WordError() {
  return (
    <div className="flex flex-col items-center mt-32">
      <span className="scale-[4] inline-block pb-5" role="img">
        😕
      </span>
      <span className=" text-darkThree dark:text-light text-xl font-bold mb-6">
        No Definitions Found
      </span>
      <p className="text-lightFour text-center">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

import Link from "next/link";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  let pagenum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let { movie, pageid } = props;
  if (isNaN(pageid) == true || pageid == 0) {
    pageid = 1;
  }
  return (
    <div className="popular-movies md:mx-24">
      <div className="flex flex-wrap overflow-hidden sm:-mx-2 pl-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
        {movie.map((MovieCards) => {
          return <MovieCard key={MovieCards.id} MovieCard={MovieCards} />;
        })}
      </div>
      <div className="flex justify-center flex-wrap">
        <li className="flex-row list-none my-8 pr-2">
          <Link
            href="/movie/popular/[pageid]"
            as={`/movie/popular/${Number(pageid) - 1}`}
            className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70"
          >
            {`<`}
          </Link>
        </li>
        {pagenum.map((element, index) => {
          return (
            <li key={index} className="flex-row list-none my-8 pr-2">
              <Link
                key={index}
                href="/movie/popular/[pageid]"
                as={`/movie/popular/${element}`}
                className={
                  index == pageid - 1
                    ? "rounded-md px-4 py-2 text-zinc-800 bg-gray-300 hover:opacity-70"
                    : "rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70"
                }
              >
                {element}
              </Link>
            </li>
          );
        })}
        <li className="flex-row list-none my-8 pr-2">
          <Link
            href="/movie/popular/[pageid]"
            as={`/movie/popular/${Number(pageid) + 1}`}
            className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70"
          >
            {`>`}
          </Link>
        </li>
      </div>
    </div>
  );
};

export default MovieList;

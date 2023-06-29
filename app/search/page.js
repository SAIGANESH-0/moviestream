"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDebounce } from "use-debounce";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [value] = useDebounce(query, 1000);

  const apiKey = "9e43f45f94705cc8e1d5a0400d19a7b7";

  useEffect(() => {
    const fetchData = async () => {
      if (query !== "") {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&query=${value}`
        );
        let apiData = await res.json();
        apiData = apiData.results.filter((x) => x.media_type === "movie");
        setData(apiData);
      }
    };

    fetchData();
  }, [query, value]);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="flex justify-center flex-grow text-white">
        <input
          className="rounded-sm py-2 px-12 bg-zinc-800 text-white text-center border truncate"
          type="text"
          name="search"
          id="search"
          placeholder="🔍 Search any movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className=" md:mx-24">
        <h1 className="text-center my-3 text-lime-600 text-xl">
          Search Results
        </h1>
        <div className="flex flex-wrap py-2 pb-4 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
          {data &&
            data.map((MovieCard) => {
              const posterPath = `https://image.tmdb.org/t/p/w342${MovieCard.poster_path}`;
              const firstAirDate = MovieCard.first_air_date
                ? `(${MovieCard.first_air_date.substr(0, 4)})`
                : "";
              const releaseDate = MovieCard.release_date
                ? `(${MovieCard.release_date.substr(0, 4)})`
                : "";
              const movieType = MovieCard.media_type === "movie" ? "🎬" : "📺";

              return (
                <div
                  key={MovieCard.id + 5}
                  className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5"
                >
                  <div
                    key={MovieCard.id + 7}
                    className="rounded-md overflow-hidden"
                  >
                    <Link
                      key={MovieCard.id}
                      href={
                        MovieCard.media_type === "movie"
                          ? "/movie/[id]"
                          : "/tv/[id]"
                      }
                      as={
                        MovieCard.media_type === "movie"
                          ? `/movie/${MovieCard.id}`
                          : `/tv/${MovieCard.id}`
                      }
                      title={MovieCard.title || MovieCard.name}
                    >
                      <img
                        className="w-72 rounded-sm hover:opacity-70"
                        key={MovieCard.id + 3}
                        title={MovieCard.title || MovieCard.name}
                        src={posterPath}
                        alt={MovieCard.title || MovieCard.name}
                      />
                      <p
                        key={MovieCard.id + 11}
                        className="bg-zinc-800 max-w-[18rem] rounded-sm break-words text-gray-300 text-sm leading-0 font-semibold py-2 text-center"
                      >
                        {movieType} {MovieCard.title || MovieCard.name}{" "}
                        <b>
                          {MovieCard.media_type === "movie"
                            ? releaseDate
                            : firstAirDate}
                        </b>
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Search;

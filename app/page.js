"use client";
import MovieList from "../app/components/MovieList";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [popularMovies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data from the API
    const fetchData = async () => {
      try {
        const apiKey = "312af6ca07e7e14a45841dcaa68aa16e";
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="popular-movies bg-zinc-900">
      <MovieList movie={popularMovies} />
    </div>
  );
}

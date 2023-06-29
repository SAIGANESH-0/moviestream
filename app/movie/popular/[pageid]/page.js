"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import MovieList from "@/app/components/MovieList";

export default function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);
  const router = useParams();
  const { pageid } = router;

  useEffect(() => {
    // Fetch movie data from the API
    const fetchData = async () => {
      try {
        const apiKey = "312af6ca07e7e14a45841dcaa68aa16e";
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageid}`
        );
        const data = await res.data.results;
        setPopularMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (pageid) {
      fetchData();
    }
  }, [pageid]);

  return (
    <div className="bg-slate-900">
      {popularMovies.length > 0 ? (
        <MovieList movie={popularMovies} pageid={pageid} />
      ) : (
        <h1 className="text-gray-500 h-full text-center">Loading...</h1>
      )}
    </div>
  );
}

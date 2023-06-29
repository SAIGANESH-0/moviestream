"use client";
import Head from "next/head";
import MovieInfo from "@/app/components/MovieInfo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function MovieDetail() {
  const [genreArr, setarr] = useState([]);
  const [id, setid] = useState("");
  const [MovieDetail, setmov] = useState([]);
  const router = useParams();

  useEffect(() => {
    // Fetch movie data from the API
    const fetchData = async () => {
      try {
        const apiKey = "312af6ca07e7e14a45841dcaa68aa16e";
        setid(router.id);
        let genreArr = [];
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${router.id}?api_key=${apiKey}&language=en-US`
        );
        const data = await res.data;
        console.log(data);
        data.genres.map((element) => {
          genreArr.push(element.name);
        });
        setarr(genreArr);
        setmov(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="popular-movies bg-zinc-900">
      {/* <Head>
        <title>
          {MovieDetail.title} ({MovieDetail.release_date.substr(0, 4)}) - stream
        </title>
      </Head> */}
      <MovieInfo MovieDetail={MovieDetail} genreArr={genreArr} id={id} />
    </div>
  );
}
